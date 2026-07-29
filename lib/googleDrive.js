import { google } from "googleapis";

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

export async function getOrCreateSubFolder(folderName) {
  const drive = getDriveClient();
  const parentId = process.env.GOOGLE_DRIVE_PARENT_FOLDER_ID;

  if (!parentId) {
    throw new Error("GOOGLE_DRIVE_PARENT_FOLDER_ID belum di-set di Environment Variables.");
  }

  const safeName = folderName.replace(/['"\\]/g, "").trim() || "Tanpa Nomor PA";
  const queryString = "'" + parentId + "' in parents and name = '" + safeName + "' and mimeType = 'application/vnd.google-apps.folder' and trashed = false";

  const existing = await drive.files.list({
    q: queryString,
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
