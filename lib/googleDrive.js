import { google } from "googleapis";

/**
 * Helper untuk upload otomatis ke Google Drive memakai Service Account
 * (bukan login akun Google manual). Lihat README.md bagian
 * "Setup Google Cloud Console (Service Account)" untuk cara membuat
 * kredensialnya.
 *
 * Environment variables yang dibutuhkan (diisi di Vercel > Settings > Environment Variables):
 * - GOOGLE_SERVICE_ACCOUNT_EMAIL   -> email service account (....iam.gserviceaccount.com)
 * - GOOGLE_SERVICE_ACCOUNT_KEY     -> private key (isi apa adanya, termasuk -----BEGIN PRIVATE KEY-----)
 * - GOOGLE_DRIVE_PARENT_FOLDER_ID  -> ID folder Google Drive utama yang sudah di-share ke email service account
 */
function getAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  let key = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;

  if (!email || !key) {
    throw new Error(
      "GOOGLE_SERVICE_ACCOUNT_EMAIL / GOOGLE_SERVICE_ACCOUNT_KEY belum di-set di Environment Variables."
    );
  }

  // Di Vercel, newline pada private key sering ter-escape jadi karakter "\n"
  // literal. Baris ini mengembalikannya menjadi newline asli.
  key = key.replace(/\\n/g, "\n");

  return new google.auth.JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/drive"],
  });
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
