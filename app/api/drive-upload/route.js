import { NextResponse } from "next/server";
import { getOrCreateSubFolder, uploadFileToDrive } from "@/lib/googleDrive";

// POST /api/drive-upload
// FormData fields: "file" (Blob), "folderName" (biasanya Nomor PA)
// Dipanggil otomatis saat user upload Berita Acara / foto di Step 1 & Step 2,
// menggantikan mekanisme Google Apps Script (SCRIPT_URL) pada versi sebelumnya.
export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const folderName = (formData.get("folderName") || "Tanpa Nomor PA").toString();

    if (!file) {
      return NextResponse.json({ ok: false, error: "File tidak ditemukan di request." }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const folderId = await getOrCreateSubFolder(folderName);

    const uploaded = await uploadFileToDrive({
      folderId,
      fileName: file.name || `upload-${Date.now()}`,
      mimeType: file.type || "application/octet-stream",
      buffer,
    });

    return NextResponse.json({
      ok: true,
      fileId: uploaded.id,
      webViewLink: uploaded.webViewLink,
      folderId,
    });
  } catch (err) {
    console.error("POST /api/drive-upload error:", err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
