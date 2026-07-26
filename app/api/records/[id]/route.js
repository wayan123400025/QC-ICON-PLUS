import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/records/:id -> ambil satu record lengkap
export async function GET(_request, { params }) {
  try {
    const record = await prisma.qcRecord.findUnique({ where: { id: params.id } });
    if (!record) {
      return NextResponse.json({ ok: false, error: "Record tidak ditemukan" }, { status: 404 });
    }
    return NextResponse.json({
      ok: true,
      record: { id: record.id, status: record.status, ...JSON.parse(record.data) },
    });
  } catch (err) {
    console.error("GET /api/records/[id] error:", err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}

// PUT /api/records/:id -> update record (dipakai Step 2: FS Audit menyimpan hasil audit)
export async function PUT(request, { params }) {
  try {
    const body = await request.json();

    const record = await prisma.qcRecord.update({
      where: { id: params.id },
      data: {
        nomorPA: body.nomorPA || null,
        namaPekerjaan: body.namaPekerjaan || null,
        namaMitra: body.namaMitra || null,
        namaPelanggan: body.namaPelanggan || null,
        status: body.status || "verified-fs",
        data: JSON.stringify(body),
      },
    });

    return NextResponse.json({ ok: true, id: record.id });
  } catch (err) {
    console.error("PUT /api/records/[id] error:", err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}

// DELETE /api/records/:id -> hapus draft/riwayat
export async function DELETE(_request, { params }) {
  try {
    await prisma.qcRecord.delete({ where: { id: params.id } });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("DELETE /api/records/[id] error:", err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
