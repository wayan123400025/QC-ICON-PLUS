import { google } from "googleapis";

/**
 * Helper untuk upload otomatis ke Google Drive memakai OAuth2 (akun Google
 * pribadi kamu sendiri), BUKAN Service Account.
 *
 * Kenapa bukan Service Account? Karena Service Account tidak punya kuota
 * penyimpanan sendiri di akun Google pribadi (non-Workspace), jadi akan
 * selalu gagal dengan error "storageQuotaExceeded" / "invalid_grant" waktu
 * coba membuat file baru. Dengan OAuth2, upload dilakukan atas nama akun
 * Google kamu sendiri, jadi masuk ke kuota 15GB gratis kamu seperti biasa.
 *
 * Environment variables yang dibutuhkan (diisi di Vercel > Settings > Environment Variables):
 * - GOOGLE_OAUTH_CLIENT_ID       -> Client ID dari OAuth 2.0 Client (Google Cloud Console)
 * - GOOGLE_OAUTH_CLIENT_SECRET   -> Client Secret dari OAuth 2.0 Client
 * - GOOGLE_OAUTH_REFRESH_TOKEN   -> Refresh token hasil authorize sekali lewat OAuth Playground
 * - GOOGLE_DRIVE_PARENT_FOLDER_ID -> ID folder Google Drive utama (folder ini harus
 *   dimiliki oleh akun Google yang sama dengan yang dipakai authorize OAuth di atas)
 *
 * Lihat README.md bagian "Setup Google OAuth (ganti Service Account)" untuk
 * cara mendapatkan ketiga value OAuth di atas.
 */
function getAuth() {
  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_OAUTH_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error(
      "GOOGLE_OAUTH_CLIENT_ID / GOOGLE_OAUTH_CLIENT_SECRET / GOOGLE_OAUTH_REFRESH_TOKEN belum di-set di Environment Variables."
    );
  }

  const oAuth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    "https://developers.google.com/oauthplayground"
  );
  oAuth2Client.setCredentials({ refresh_token: refreshToken });

  return oAuth2Client;
}

function getDriveClient() {
  return google.drive({ version: "v3", auth: getAuth() });
}

/**
 * Cari sub-folder dengan nama tertentu di dalam parent folder.
 * Kalau belum ada, buat baru. Mengembalikan folder id.
 */
export async function getOrCreateSubFolder(folderName) {
  const drive = getDriveClient();
  const parentId = process.env.GOOGLE_DRIVE_PARENT_FOLDER_ID;

  if (!parentId) {
    throw new Error("GOOGLE_DRIVE_PARENT_FOLDER_ID belum di-set di Environment Variables.");
  }

  const safeName = folderName.replace(/['"\\]/g, "").trim() || "Tanpa Nomor PA";

  const existing = await drive.files.list({
    q: `'${parentId}' in parents and name = '${safeName}' and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
    fields: "files(id, name)",
    supportsAllDrives: true,
    includeItemsFromAllDrives: true,
  });

  if (existing.data.files && existing.data.files.length > 0) {
    return existing.data.files[0].id;
  }

  const created = await drive.files.create({
    requestBody: {
      name: safeName,
      mimeType: "application/vnd.google-apps.folder",
      parents: [parentId],
    },
    fields: "id",
    supportsAllDrives: true,
  });

  return created.data.id;
}

/**
 * Upload satu file (buffer) ke sebuah folder Drive, dan jadikan bisa
 * dibuka lewat link (anyone with the link -> reader).
 */
export async function uploadFileToDrive({ folderId, fileName, mimeType, buffer }) {
  const drive = getDriveClient();

  const uploaded = await drive.files.create({
    requestBody: {
      name: fileName,
      parents: [folderId],
    },
    media: {
      mimeType,
      body: bufferToStream(buffer),
    },
    fields: "id, webViewLink, webContentLink",
    supportsAllDrives: true,
  });

  await drive.permissions.create({
    fileId: uploaded.data.id,
    requestBody: { role: "reader", type: "anyone" },
    supportsAllDrives: true,
  });

  return uploaded.data;
}

function bufferToStream(buffer) {
  const { Readable } = require("stream");
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);
  return stream;
}
