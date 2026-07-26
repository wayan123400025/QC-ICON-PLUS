# Sistem Quality Control & Audit Material – PLN Icon Plus (Next.js + TiDB + Google Drive)

Versi ini adalah kelanjutan dari konversi Next.js sebelumnya, dengan tambahan:

- ✅ Label stepper 1–3 sudah diterjemahkan ke Bahasa Inggris:
  **"1. Admin/Partner Request (Initial Volume)"**, **"2. FS Audit (Final Volume & Evaluation)"**, **"3. Preview 7 Pages of the Letter"**
- ✅ **Database sungguhan** (bukan cuma `localStorage`) pakai **TiDB Serverless** (MySQL-compatible, gratis, mirip PlanetScale) lewat Prisma
- ✅ **Auto-upload ke Google Drive** pakai **Service Account** dari Google Cloud Console (tidak perlu login manual tiap kali)
- ✅ Siap **auto-deploy ke Vercel** setiap kali kamu `git push` ke GitHub

> ℹ️ Catatan penting: **PlanetScale sudah tidak punya paket gratis** sejak April 2024 (minimal $5/bulan). Karena itu proyek ini pakai **TiDB Serverless**, yang MySQL-compatible (jadi Prisma schema-nya nyaris sama) dan **masih gratis**.

Tutorial ini ditulis dari **nol** — anggap kamu belum pernah pakai GitHub, Vercel, TiDB, atau Google Cloud Console sama sekali.

---

## Daftar Isi

1. [Persiapan Awal](#1-persiapan-awal)
2. [Jalankan di Lokal (Opsional, untuk Tes Dulu)](#2-jalankan-di-lokal-opsional-untuk-tes-dulu)
3. [Upload Kode ke GitHub](#3-upload-kode-ke-github)
4. [Setup Database — TiDB Serverless (Gratis)](#4-setup-database--tidb-serverless-gratis)
5. [Setup Google Cloud Console — Service Account untuk Google Drive](#5-setup-google-cloud-console--service-account-untuk-google-drive)
6. [Deploy ke Vercel](#6-deploy-ke-vercel)
7. [Uji Coba Aplikasi yang Sudah Online](#7-uji-coba-aplikasi-yang-sudah-online)
8. [Auto-Deploy Setiap Update](#8-auto-deploy-setiap-update)
9. [Troubleshooting](#9-troubleshooting)

---

## 1. Persiapan Awal

Buat 4 akun berikut dulu (semua gratis untuk kebutuhan proyek ini):

| Layanan | Fungsi | Link Daftar |
|---|---|---|
| **GitHub** | Simpan kode | https://github.com/signup |
| **Vercel** | Hosting aplikasi | https://vercel.com/signup (bisa langsung pakai akun GitHub) |
| **TiDB Cloud** | Database (pengganti PlanetScale, gratis) | https://tidbcloud.com/free-trial |
| **Google Cloud Console** | Service Account untuk Drive | https://console.cloud.google.com/ (pakai akun Google biasa) |

Install juga di komputer kamu (kalau mau tes lokal dulu — opsional, boleh dilewati langsung ke Vercel):

- **Node.js versi 18 ke atas** — https://nodejs.org (pilih versi LTS)
- **Git** — https://git-scm.com/downloads

Cek sudah terpasang dengan benar:

```bash
node -v
npm -v
git --version
```

---

## 2. Jalankan di Lokal (Opsional, untuk Tes Dulu)

1. Ekstrak file zip proyek ini, lalu buka folder-nya di terminal.
2. Install semua dependency:
   ```bash
   npm install
   ```
3. Salin file environment:
   ```bash
   cp .env.example .env
   ```
   (Di Windows pakai File Explorer: copy-paste `.env.example` lalu rename jadi `.env`)
4. Jalankan tanpa database/Drive dulu (aplikasi tetap bisa dibuka, hanya fallback ke localStorage):
   ```bash
   npm run dev
   ```
5. Buka `http://localhost:3000` — form akan tampil normal seperti versi HTML aslinya.

Nanti setelah kamu isi `.env` dengan kredensial TiDB & Google (langkah 4 & 5 di bawah), jalankan ulang `npm run dev` dan data akan otomatis tersimpan ke database + Google Drive.

---

## 3. Upload Kode ke GitHub

1. Login ke https://github.com, klik tombol hijau **"New"** untuk membuat repository baru.
2. Isi:
   - **Repository name**: misal `qc-icon-plus`
   - Pilih **Private** (disarankan, karena ada logic internal PLN Icon Plus) atau **Public**
   - **Jangan** centang "Add a README file" (kita sudah punya)
3. Klik **Create repository**.
4. Di terminal, masuk ke folder proyek ini, lalu jalankan:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - QC Icon Plus Next.js"
   git branch -M main
   git remote add origin https://github.com/USERNAME/qc-icon-plus.git
   git push -u origin main
   ```
   Ganti `USERNAME` dengan username GitHub kamu. Saat diminta login, gunakan **Personal Access Token** (bukan password akun) — GitHub akan memandu membuatnya kalau belum punya (Settings → Developer settings → Personal access tokens).
5. Refresh halaman repository di GitHub — kode kamu sudah online. File `.env` **tidak akan ikut ter-upload** (sudah di-ignore lewat `.gitignore`), jadi kredensial rahasia kamu aman.

---

## 4. Setup Database — TiDB Serverless (Gratis)

### 4.1 Buat Cluster

1. Login ke https://tidbcloud.com (daftar pakai email/Google).
2. Klik **Create Cluster**.
3. Pilih tipe **Serverless** (ini yang gratis).
4. Isi nama cluster, misal `qc-icon-plus`, pilih region terdekat (misal Singapore/`ap-southeast-1`).
5. Klik **Create** — tunggu 1-2 menit sampai cluster siap (status "Available").

### 4.2 Ambil Connection String

1. Di dashboard cluster, klik tombol **Connect**.
2. Pada dropdown **Connect With**, pilih **Prisma**.
3. Klik **Generate Password** (simpan password ini baik-baik, hanya muncul sekali).
4. TiDB akan menampilkan connection string mirip:
   ```
   mysql://xxxxxxxx.root:PASSWORD@gateway01.ap-southeast-1.prod.aws.tidbcloud.com:4000/test?sslaccept=strict
   ```
5. Ganti `test` di akhir URL dengan nama database, misal `qc_icon_plus`.
6. Simpan URL final ini — akan dipakai sebagai `DATABASE_URL`.

### 4.3 Buat Tabel (Sekali Saja)

Di komputer lokal (folder proyek ini, sudah `npm install`):

```bash
# Isi .env dengan DATABASE_URL dari langkah 4.2
npm run db:push
```

Perintah ini membaca `prisma/schema.prisma` dan otomatis membuat tabel `QcRecord` di TiDB kamu. Kalau berhasil akan muncul pesan `Your database is now in sync with your Prisma schema`.

Untuk melihat isi tabel secara visual, kamu bisa jalankan:
```bash
npm run db:studio
```
lalu buka `http://localhost:5555` di browser.

> Kalau kamu belum sempat setup Node.js di komputer, langkah `db:push` ini bisa juga dijalankan lewat **Vercel CLI** setelah deploy (lihat bagian Troubleshooting), atau lewat tab **SQL Editor** di dashboard TiDB Cloud dengan menjalankan CREATE TABLE manual (lebih ribet, disarankan pakai `db:push` saja).

---

## 5. Setup Google Cloud Console — Service Account untuk Google Drive

Service Account = "akun robot" yang bisa upload file ke Drive tanpa perlu login manual setiap saat. Ini **beda** dari akun Google Drive pribadi kamu.

### 5.1 Buat Project

1. Buka https://console.cloud.google.com/
2. Klik dropdown project di pojok kiri atas → **New Project**.
3. Nama project, misal `qc-icon-plus`, klik **Create**.
4. Tunggu sampai project aktif, lalu pastikan project ini yang terpilih di dropdown atas.

### 5.2 Aktifkan Google Drive API

1. Di search bar atas, ketik **"Google Drive API"**.
2. Klik hasilnya, lalu klik tombol **Enable**.

### 5.3 Buat Service Account

1. Di search bar, ketik **"Service Accounts"** → buka menu tersebut.
2. Klik **+ Create Service Account**.
3. Isi nama, misal `qc-drive-uploader`, klik **Create and Continue**.
4. Bagian "Grant this service account access to project" — **boleh dilewati** (klik Continue), tidak wajib untuk kebutuhan Drive upload.
5. Klik **Done**.

### 5.4 Buat Key (Kredensial)

1. Di daftar Service Account, klik nama service account yang baru dibuat.
2. Buka tab **Keys** → **Add Key** → **Create new key**.
3. Pilih format **JSON** → **Create**. File JSON otomatis ter-download ke komputer kamu.
4. Buka file JSON tersebut dengan text editor. Kamu akan butuh 2 nilai dari sana:
   - `client_email` → ini nilai untuk `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `private_key` → ini nilai untuk `GOOGLE_SERVICE_ACCOUNT_KEY` (salin **apa adanya**, termasuk `-----BEGIN PRIVATE KEY-----` dan `\n` di dalamnya)

> ⚠️ **Jangan pernah commit file JSON ini ke GitHub.** Simpan baik-baik, ini kredensial rahasia.

### 5.5 Share Folder Google Drive ke Service Account

1. Buka Google Drive kamu (drive.google.com), buat folder utama untuk menyimpan semua dokumentasi QC, misal `QC Icon Plus - Dokumentasi`.
2. Klik kanan folder → **Share**.
3. Tempel email `client_email` dari file JSON tadi (formatnya `...@....iam.gserviceaccount.com`) ke kolom share, beri akses **Editor**, klik **Send/Share**.
4. Buka folder tersebut, lihat URL di address bar, contoh:
   ```
   https://drive.google.com/drive/folders/1AbCdEfGhIjKlMnOpQrStUvWxYz
   ```
   Bagian setelah `/folders/` (`1AbCdEfGhIjKlMnOpQrStUvWxYz`) adalah nilai untuk `GOOGLE_DRIVE_PARENT_FOLDER_ID`.

Sekarang kamu punya 3 nilai siap pakai:
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_SERVICE_ACCOUNT_KEY`
- `GOOGLE_DRIVE_PARENT_FOLDER_ID`

---

## 6. Deploy ke Vercel

1. Login ke https://vercel.com pakai akun GitHub kamu.
2. Klik **Add New...** → **Project**.
3. Pilih repository `qc-icon-plus` yang tadi di-push ke GitHub → klik **Import**.
4. Vercel otomatis mendeteksi **Next.js** — biarkan Build Command & Output default.
5. **Sebelum klik Deploy**, buka bagian **Environment Variables**, tambahkan satu per satu:

   | Name | Value |
   |---|---|
   | `DATABASE_URL` | connection string dari langkah 4.2 |
   | `GOOGLE_SERVICE_ACCOUNT_EMAIL` | dari langkah 5.4 |
   | `GOOGLE_SERVICE_ACCOUNT_KEY` | dari langkah 5.4 (tempel apa adanya, termasuk `\n`) |
   | `GOOGLE_DRIVE_PARENT_FOLDER_ID` | dari langkah 5.5 |

6. Klik **Deploy**. Tunggu 1-3 menit sampai muncul "Congratulations!" dengan tampilan preview aplikasi kamu.
7. Klik **Continue to Dashboard**, lalu klik **Visit** untuk membuka aplikasi di URL `https://qc-icon-plus-xxxx.vercel.app`.

---

## 7. Uji Coba Aplikasi yang Sudah Online

1. Buka URL Vercel kamu.
2. Klik **"Buat Pengisian Form Baru (Admin/Mitra)"**.
3. Isi beberapa field, upload foto perwakilan mitra, klik **"Simpan Permintaan Admin/Mitra"**.
   - Kalau muncul alert **"berhasil disimpan ke database (TiDB) & lokal"** → database sudah terhubung dengan benar.
   - Cek di dashboard TiDB Cloud → **SQL Editor** → `SELECT * FROM QcRecord;` → data kamu harus muncul di sana.
4. Lanjut ke Step 2 (**FS Audit**), isi audit, upload file BA/dokumentasi, klik **"Simpan Audit & Buat Folder Drive Otomatis"**.
   - Kalau berhasil, akan muncul notifikasi jumlah berkas terunggah ke Drive, dan link folder muncul di Step 3.
   - Cek folder Google Drive kamu — subfolder baru dengan nama Nomor PA harus otomatis muncul berisi file yang diupload.
5. Kembali ke **"0. Riwayat & Draft"** — draft yang barusan dibuat akan muncul di daftar, diambil langsung dari database (bukan cuma localStorage), jadi bisa dibuka dari browser/perangkat lain juga.

---

## 8. Auto-Deploy Setiap Update

Setelah terhubung ke Vercel, setiap kali kamu melakukan perubahan kode dan menjalankan:

```bash
git add .
git commit -m "update fitur X"
git push
```

Vercel **otomatis** akan build ulang & deploy versi terbaru — tidak perlu upload manual lagi.

---

## 9. Troubleshooting

**"Draft tersimpan di perangkat ini (lokal). Database belum terhubung"**
→ Cek `DATABASE_URL` di Vercel (Settings → Environment Variables) sudah benar & cluster TiDB berstatus "Available". Setelah mengubah environment variable, klik **Redeploy** di tab Deployments Vercel.

**Upload ke Drive tidak jalan / alert error kredensial**
→ Pastikan folder Drive sudah di-share ke email service account (langkah 5.5) dan `GOOGLE_SERVICE_ACCOUNT_KEY` disalin utuh (harus ada `-----BEGIN PRIVATE KEY-----` di awal dan `-----END PRIVATE KEY-----` di akhir).

**Build gagal di Vercel dengan pesan terkait Prisma**
→ Pastikan `DATABASE_URL` sudah diisi di Environment Variables **sebelum** deploy pertama kali.

**Ingin lihat/edit data langsung tanpa buka aplikasi**
→ Jalankan `npm run db:studio` di lokal (setelah `.env` diisi `DATABASE_URL`), buka `http://localhost:5555`.

**Ingin jalankan `prisma db push` tanpa install Node.js di komputer**
→ Install [Vercel CLI](https://vercel.com/docs/cli) (`npm i -g vercel`), jalankan `vercel env pull` di folder proyek untuk menarik environment variables dari Vercel ke `.env` lokal, baru jalankan `npm run db:push`.

---

## Struktur Proyek

```
qc-icon-plus/
├── app/
│   ├── layout.js              # Root layout (font, metadata)
│   ├── page.js                # Server component, baca markup & render QcApp
│   ├── QcApp.jsx               # Client component: mount markup + boot script
│   ├── body-content.html      # Markup form asli (stepper 3 label sudah English)
│   ├── globals.css            # Semua CSS asli
│   └── api/
│       ├── records/route.js           # GET (list/search) & POST (create) draft
│       ├── records/[id]/route.js      # GET/PUT/DELETE satu draft
│       └── drive-upload/route.js      # Upload file ke Google Drive (Service Account)
├── lib/
│   ├── prisma.js               # Prisma Client singleton
│   └── googleDrive.js          # Helper Google Drive API (Service Account)
├── prisma/
│   └── schema.prisma           # Skema tabel QcRecord (TiDB Serverless / MySQL)
├── public/
│   └── qc-app.js               # Logic JS asli + integrasi API (DB & Drive)
├── .env.example                 # Daftar environment variable yang dibutuhkan
└── package.json
```

## Catatan

- Kalau `DATABASE_URL` / kredensial Google **belum** di-set, aplikasi tetap berjalan normal dan otomatis fallback ke `localStorage` (persis seperti versi sebelumnya) — jadi kamu bisa deploy dulu, lalu setup database & Drive belakangan tanpa aplikasi rusak.
- Setelah database aktif, riwayat/draft yang lama (yang sempat tersimpan di `localStorage`) **tidak otomatis pindah** ke database — hanya draft baru yang dibuat setelah database terhubung yang akan tersimpan di TiDB.
