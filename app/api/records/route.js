import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/records            -> daftar semua record (dipakai halaman "Riwayat & Draft")
// GET /api/records?q=keyword  -> filter berdasarkan Nomor PA / Pelanggan / Mitra
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = (searchParams.get("q") || "").trim();

    const records = await prisma.qcRecord.findMany({
      where: q
        ? {
            OR: [
              { nomorPA: { contains: q } },
              { namaPelanggan: { contains: q } },
              { namaMitra: { contains: q } },
            ],
          }
        : undefined,
      orderBy: { updatedAt: "desc" },
    });

    // Parse ulang kolom "data" (JSON string) supaya frontend menerima objek biasa
    const parsed = records.map((r) => ({
      id: r.id,
      status: r.status,
      createdAt: r.createdAt,
      updatedAt: r.updatedAt,
      ...JSON.parse(r.data),
    }));

    return NextResponse.json({ ok: true, records: parsed });
  } catch (err) {
    console.error("GET /api/records error:", err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}

// POST /api/records -> simpan draft baru (Step 1: Admin/Partner Request)
export async function POST(request) {
  try {
    const body = await request.json();

    const record = await prisma.qcRecord.create({
      data: {
        nomorPA: body.nomorPA || null,
        namaPekerjaan: body.namaPekerjaan || null,
        namaMitra: body.namaMitra || null,
        namaPelanggan: body.namaPelanggan || null,
        status: body.status || "draft-mitra",
        data: JSON.stringify(body),
      },
    });

    return NextResponse.json({ ok: true, id: record.id });
  } catch (err) {
    console.error("POST /api/records error:", err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
