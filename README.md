# Sistem Quality Control & Audit Material – PLN Icon Plus (Next.js)

Aplikasi form Quality Control & Audit Material 7 halaman (PLN Icon Plus), dikonversi dari file HTML statis (`QC_Paling_Fix.html`) menjadi proyek **Next.js 14 (App Router)** yang siap di-push ke GitHub dan di-deploy ke **Vercel**.

Seluruh tampilan, logika (stepper, tabel 104 item material/jasa, tanda tangan digital via `<canvas>`, riwayat draft di `localStorage`, preview & cetak PDF 7 halaman) dipertahankan **persis sama** seperti versi HTML aslinya — hanya dibungkus ke struktur proyek Next.js supaya bisa di-deploy sebagai aplikasi web modern.

## Struktur Proyek

```
qc-icon-plus/
├── app/
│   ├── layout.js          # Root layout (font Montserrat + Font Awesome)
│   ├── page.js            # Server component, membaca markup & merender QcApp
│   ├── QcApp.jsx           # Client component: mount markup + boot script asli
│   ├── body-content.html  # Markup asli (stepper, form, tabel, modal preview)
│   └── globals.css        # Semua CSS asli (variabel warna, layout, print style)
├── public/
│   └── qc-app.js           # Seluruh logic JS asli (data 104 item, fungsi form, dsb)
├── package.json
├── next.config.mjs
└── .gitignore
```

## Menjalankan di Lokal

Pastikan Node.js 18+ terpasang, lalu:

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Build Produksi

```bash
npm run build
npm run start
```

## Upload ke GitHub

```bash
git init
git add .
git commit -m "Convert QC Icon Plus form to Next.js"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

Ganti `USERNAME/NAMA-REPO` dengan repository GitHub kamu.

## Deploy ke Vercel

1. Buka [vercel.com](https://vercel.com) dan login (bisa pakai akun GitHub).
2. Klik **Add New → Project**, lalu pilih repository yang baru saja di-push.
3. Vercel otomatis mendeteksi framework **Next.js** — biarkan setting default (Build Command: `next build`, Output: default).
4. Klik **Deploy**. Setelah selesai, aplikasi akan online di URL `*.vercel.app`.

Tidak ada environment variable wajib untuk menjalankan aplikasi ini.

## Catatan Penting

- **Integrasi Google Apps Script**: pada `public/qc-app.js` ada konstanta `SCRIPT_URL` (placeholder `"PASANG_URL_WEB_APP_APPS_SCRIPT_KAMU_DI_SINI"`). Jika kamu punya Web App Google Apps Script untuk auto-upload ke Google Drive, ganti nilai ini dengan URL Web App-mu.
- **Penyimpanan draft**: riwayat pengisian form disimpan di `localStorage` browser (key `pln_qc_db_v3`), sama seperti versi HTML asli — artinya data tersimpan per-browser/perangkat, bukan di server/database.
- Semua tanda tangan/sidik jari, foto, dan preview 7 halaman surat bekerja sama seperti sebelumnya karena logic JavaScript-nya tidak diubah, hanya dipindahkan ke `public/qc-app.js` dan dijalankan setelah komponen React ter-mount.
