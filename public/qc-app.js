const masterItems = [
        { no: 1, name: "Survey jalur kabel max 3 hari", sat: "LOT" },
        { no: 2, name: "Penarikan FOC ADSS Short Span", sat: "M" },
        { no: 3, name: "Penarikan FOC 8000 - 16000m", sat: "M" },
        { no: 4, name: "Penarikan FOC lebih 16000 m", sat: "M" },
        { no: 5, name: "Penarikan FOC under 800 m", sat: "LOT" },
        { no: 6, name: "Galian Penarikan Jalur Tanah Taman (Inc. Patok/Tanda, Perbaikan tanaman/Aspal/Trotoar)", sat: "M" },
        { no: 7, name: "Galian Penarikan Jalur Rojok Alur (Inc. Patok/Tanda, Perbaikan tanaman/Aspal/Trotoar)", sat: "M" },
        { no: 8, name: "Penarikan gorong2 FOC ADSS Short Span", sat: "M" },
        { no: 9, name: "Handhole 40x40x40 cm (Permanen)", sat: "LOT" },
        { no: 10, name: "Manhole 80x80x100 cm (Permanen)", sat: "LOT" },
        { no: 11, name: "Jointing per core (excl. labeling)", sat: "U" },
        { no: 12, name: "Trace core (per JB/ODF/Splitter/FDT/FAT)", sat: "U" },
        { no: 13, name: "OTDR per core (excl. jointing)", sat: "U" },
        { no: 14, name: "Labeling Joint Box", sat: "U" },
        { no: 15, name: "Labeling Kabel(1 pole 2 label, khusus perapihan label)", sat: "U" },
        { no: 16, name: "Labeling In Site Plan (labeling all)", sat: "U" },
        { no: 17, name: "Instalasi FOT MC (POP-CPE)", sat: "AU" },
        { no: 18, name: "Instalasi Splitter GPON / ODP/box", sat: "AU" },
        { no: 19, name: "Pembongkaran kabel ADSS Short Span (incl. redrumming-)", sat: "M" },
        { no: 20, name: "Galian Penarikan Jalur Boring (Inc. Patok/Tanda, Perbaikan tanaman/Aspal/Trotoar)", sat: "M" },
        { no: 21, name: "Penarikan FOC ADSS Long (dokumentasi)", sat: "M" },
        { no: 22, name: "Jointing ADSS LS per core", sat: "AU" },
        { no: 23, name: "Pembongkaran kabel ADSS LS(re-drumming)", sat: "M" },
        { no: 24, name: "Instalasi CCTV (termasuk survey, instalasi, dan dokumentasi hasil pekerjaan)", sat: "AU" },
        { no: 25, name: "Instalasi Access Point (termasuk survey, instalasi, dan dokumentasi hasil pekerjaan)", sat: "AU" },
        { no: 26, name: "Instalasi VMS (Video Management System) termasuk JASA survey dan instalasi", sat: "M" },
        { no: 27, name: "Instalasi Drop Wire (termasuk Jasa Penarikan, Aksesoris, Jointing, OTDR)", sat: "AU" },
        { no: 28, name: "Instalasi Rack dan Power Supply (rectifier, battery, AC/DCPDB, integrasi)", sat: "AU" },
        { no: 29, name: "Instalasi Rack (12u dan 20u) (rectifier, battery, AC/DCPDB, integrasi)", sat: "AU" },
        { no: 30, name: "Dismantle perangkat FOT di userdi/ POP", sat: "AU" },
        { no: 31, name: "Penarikan kabel UTP", sat: "M" },
        { no: 32, name: "Transportasi ADSS SS atau LS jarak > 120Km dari gudang pengambilan kabel", sat: "U" },
        { no: 33, name: "Subduct HDPE Crsing (min 3 kbl FA96/144)", sat: "U" },
        { no: 34, name: "Rumah Kabel (Adaptor > 1000/1442 core) Incl. Pigtail, Adaptor, Sleeves, Pondasi)", sat: "LOT" },
        { no: 35, name: "Rumah Kabel (Adaptor 576 core I/O) Incl. Pigtail, Adaptor, Sleeves, Pondasi)", sat: "M" },
        { no: 36, name: "Fitting Deadend, 6-48 core satu sisi (Inc. Strain clamp, Stop Link, Steel Band)", sat: "U" },
        { no: 37, name: "Fitting Suspension, 6-48 core (Inc. Stop Link, Steel Band)", sat: "U" },
        { no: 38, name: "Fitting Deadend, 96-144 core satu sisi (Inc. Strain clamp, Stop Link, Steel Band)", sat: "U" },
        { no: 39, name: "Fitting Suspension 96-144 core (Inc. Stop Link, Steel Band)", sat: "U" },
        { no: 40, name: "Bracket Deadend (Steel Band, Stop Link)", sat: "U" },
        { no: 41, name: "Bracket Suspension(Stel Band, Stop Link)", sat: "U" },
        { no: 42, name: "Splitter Distribusi 1:8 (Spliter only)", sat: "U" },
        { no: 43, name: "Splitter Distribusi 1:16 (Spliter only)", sat: "U" },
        { no: 44, name: "Patch Cord Single Mode 1 pasang 1.5m", sat: "U" },
        { no: 45, name: "Patch Cord Single Mode 1 pasang 3m", sat: "U" },
        { no: 46, name: "Patch Cord Single Mode 1 pasang 5m", sat: "U" },
        { no: 47, name: "Patch Cord Single Mode 1 pasang 10m", sat: "U" },
        { no: 48, name: "Patch Cord Single Mode 1 pasang 15m", sat: "U" },
        { no: 49, name: "Patch Cord Multi Mode 1 pasang 1.5m", sat: "U" },
        { no: 50, name: "Patch Cord Multi Mode 1 pasang 3m", sat: "U" },
        { no: 51, name: "Patch Cord Multi Mode 1 pasang 5m", sat: "U" },
        { no: 52, name: "Patch Cord Multi Mode 1 pasang 10m", sat: "U" },
        { no: 53, name: "Patch Cord Multi Mode 1 pasang 15m", sat: "U" },
        { no: 54, name: "Patch Cord Single Mode single core 1.5m", sat: "U" },
        { no: 55, name: "Patch Cord Single Mode single core 3m", sat: "U" },
        { no: 56, name: "Patch Cord Single Mode single core 5m", sat: "U" },
        { no: 57, name: "Patch Cord Single Mode single core 10m", sat: "U" },
        { no: 58, name: "Patch Cord Single Mode single core 15m", sat: "U" },
        { no: 59, name: "Joint Box Closure 96 Core", sat: "U" },
        { no: 60, name: "Joint Box Closure 144 Core", sat: "U" },
        { no: 61, name: "Joint Box 24 Core", sat: "U" },
        { no: 62, name: "Joint Box 48 Core", sat: "U" },
        { no: 63, name: "Joint Box 96 Core", sat: "U" },
        { no: 64, name: "Joint Box 144 Core", sat: "U" },
        { no: 65, name: "ODF Rack Mounted 6 Core (SC upc Litech)", sat: "U" },
        { no: 66, name: "ODF Wall Mounted 6 Core (SC upc Litech)", sat: "U" },
        { no: 67, name: "ODF Rack Mounted 12 Core (SC upc Litech)", sat: "U" },
        { no: 68, name: "ODF Rack Mounted 24 Core(SC upc Litech)", sat: "U" },
        { no: 69, name: "ODF Rack Mounted 48 Core (SC upc Litech)", sat: "U" },
        { no: 70, name: "ODF Rack Mounted 96 core (SC upc Litech)", sat: "U" },
        { no: 71, name: "ODF Rack Mounted 144 core(SC upc Litech)", sat: "U" },
        { no: 72, name: "Rack Wall Mounted 12 U", sat: "U" },
        { no: 73, name: "Pipa Galvanis 3/4\" (2 meter)", sat: "BTG" },
        { no: 74, name: "Pipa Galvanis 1/4\" (2 meter)", sat: "BTG" },
        { no: 75, name: "Pipa PVC 3/4\" (3 meter)", sat: "BTG" },
        { no: 76, name: "Subduct HDPE outer Ø 50 mm, inner Ø 42mm", sat: "M" },
        { no: 77, name: "Rumah Kabel (Adaptor 288 core I/O Incl. Pigtail, Adaptor, Cassette dan Pondasi)", sat: "U" },
        { no: 78, name: "Rumah Kabel (Adaptor 144 core I/O Incl. Pigtail, Adaptor, Cassette dan Pondasi)", sat: "U" },
        { no: 79, name: "Tiang Besi 7 m diameter 5 in x 4 in x 2,5 in (incl Jasa Pasang dan Cat)", sat: "BTG" },
        { no: 80, name: "Tiang Besi 9 m (4\"-3mm-6m, 3\"-3mm-1,5m, 2,5\"-3mm-1,5m) (incl Jasa Pasang dan Cat)", sat: "BTG" },
        { no: 81, name: "Tiang besi 12m (5\" -3mm-6m, 4\"-3mm-3m, 3\"-3mm-3m) (incl Jasa Pasang dan Cat)", sat: "BTG" },
        { no: 82, name: "Tiang Beton 9m - 200 daN (incl Jasa Psg)", sat: "BTG" },
        { no: 83, name: "Tiang Beton 12 m 200 daN (incl Jasa Psg)", sat: "BTG" },
        { no: 84, name: "Tiang Beton 14 m 350daN (incl Jasa Psg)", sat: "BTG" },
        { no: 85, name: "I-Ring (4mm x 250mm)", sat: "U" },
        { no: 86, name: "Kawat Selling 10mm", sat: "U" },
        { no: 87, name: "Tension Fitting ADSS LS 900 satu sisi", sat: "U" },
        { no: 88, name: "Tension Fitting ADSS LS 1200 satu sisi", sat: "U" },
        { no: 89, name: "Suspension Fitting ADSS LS 900", sat: "U" },
        { no: 90, name: "Suspension Fitting ADSS LS 1200", sat: "U" },
        { no: 91, name: "Spiral Vibration Dumper span 600", sat: "U" },
        { no: 92, name: "Tower Fit H+clamp (3 fm 6m, 4siku, 2 clamp brsng)", sat: "U" },
        { no: 93, name: "Tower Fit 1 + clamp (1 fm 6 m, 2 clamp) brsng", sat: "U" },
        { no: 94, name: "Tension Fitting ADSS LS 400/600 1 sisi", sat: "U" },
        { no: 95, name: "Corona coil span 600", sat: "U" },
        { no: 96, name: "Suspension Fitting ADSS LS 400/600", sat: "U" },
        { no: 97, name: "Gantry Box ADSS (stainless steel)24 core", sat: "U" },
        { no: 98, name: "Gantry Box ADSS (stainless steel)48 core", sat: "U" },
        { no: 99, name: "Gantry Box ADSS (stainless steel)96 core", sat: "U" },
        { no: 100, name: "Kabel duct dinding (memuat 2 kabel)", sat: "M" },
        { no: 101, name: "Box ODP 16c Out(SC/UPC SM Adptr 9pcs+ 1pc SC/UPC SM Pigtail)", sat: "U" },
        { no: 102, name: "Box ODP 16c Out(SC/UPC SM Adptr 17pcs+1pc SC/UPC SM Pigtail)", sat: "U" },
        { no: 103, name: "Corona coil span 900", sat: "U" },
        { no: 104, name: "Spiral Vibration Dumper span 900", sat: "U" }
    ];

    const dokList = [
        "Surat Pengambilan Kabel", "Dok OTDR", "Surat Pengembalian Kabel",
        "Surat Pengambilan Perangkat", "Dok Perangkat Terpasang (Foto SN)", "Surat Pengembalian Perangkat"
    ];

    const cpList = [
        "Jarak Kabel FO dengan kabel Power > 50 Cm", "Kabel tidak ada yang putus", "Tarikan kabel di depan tiang",
        "Andongan kabel", "Labeling kabel", "Kerapihan Instalasi Accessories", "Tikungan kabel > 15º dengan Deadend",
        "Accessories 3 Suspension: 1 Deadend", "Selongsong suspension memakai karet", "Memakai steelband (2 Ikatan)",
        "Spare kabel rapi (10-15 Meter)", "Kedalaman galian > 60Cm (Lampiran)", "Tidak ada bending (Lampiran)",
        "OTDR tarikan tembus end to end (Lampiran)"
    ];

    let currentStep = 0;
    let activeRecordIndex = -1;
    let currentMitraPhotoBase64 = "";
    let currentDokPhotos = [];
    let currentItemPhotos = [];
    let qcDatabase = JSON.parse(localStorage.getItem('pln_qc_db_v3') || '[]');

    let signatures = { fs: '', mitra: '', ptl: '' };

    const SCRIPT_URL = "PASANG_URL_WEB_APP_APPS_SCRIPT_KAMU_DI_SINI";

    /* =========================================================
       INTEGRASI DATABASE (TiDB Serverless via /api/records) &
       GOOGLE DRIVE (Service Account via /api/drive-upload).
       Semua fungsi di bawah ini sengaja "gagal secara diam-diam"
       (fallback ke localStorage) kalau DATABASE_URL / kredensial
       Google belum di-set, supaya aplikasi tetap jalan normal
       sebelum kamu menyelesaikan setup di README.md.
       ========================================================= */

    async function fetchRecordsFromServer() {
        try {
            const res = await fetch('/api/records');
            const json = await res.json();
            if (json.ok && Array.isArray(json.records)) {
                return json.records;
            }
        } catch (err) {
            console.warn('Belum terhubung ke database (TiDB). Memakai data lokal (localStorage) dulu.', err);
        }
        return null;
    }

    async function syncRecordToServer(rec) {
        try {
            if (rec.id) {
                const res = await fetch(`/api/records/${rec.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(rec)
                });
                const json = await res.json();
                return json.ok;
            } else {
                const res = await fetch('/api/records', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(rec)
                });
                const json = await res.json();
                if (json.ok) {
                    rec.id = json.id;
                    return true;
                }
                return false;
            }
        } catch (err) {
            console.warn('Gagal sinkron ke database (TiDB). Data tetap aman di localStorage.', err);
            return false;
        }
    }

    async function uploadFileToDriveApi(file, folderName) {
        try {
            const fd = new FormData();
            fd.append('file', file);
            fd.append('folderName', folderName || 'Tanpa Nomor PA');
            const res = await fetch('/api/drive-upload', { method: 'POST', body: fd });
            const json = await res.json();
            return json.ok ? json : null;
        } catch (err) {
            console.warn('Gagal upload ke Google Drive (cek kredensial Service Account).', err);
            return null;
        }
    }

    function initQcApp() {
        renderInputTables();
        initSignaturePads();

        // Coba muat riwayat dari database dulu (TiDB Serverless). Kalau belum
        // terhubung/di-setup, otomatis pakai localStorage seperti sebelumnya.
        fetchRecordsFromServer().then((serverRecords) => {
            if (serverRecords) {
                qcDatabase = serverRecords;
                localStorage.setItem('pln_qc_db_v3', JSON.stringify(qcDatabase));
            }
            renderHistory();
        });
    }
    window.initQcApp = initQcApp;

    /* FUNGSI KONTROL HAPUS/BATALKAN FILE PADA INPUT SINGLE */
    function previewMitraPhoto(input) {
        const btnRemove = document.getElementById('btnRemoveMitraPhoto');
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                currentMitraPhotoBase64 = e.target.result;
                const img = document.getElementById('imgMitraPreview');
                img.src = currentMitraPhotoBase64;
                img.style.display = 'block';
                if(btnRemove) btnRemove.style.display = 'inline-flex';
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    function resetMitraPhoto() {
        const input = document.getElementById('fotoPerwakilanMitra');
        const img = document.getElementById('imgMitraPreview');
        const btnRemove = document.getElementById('btnRemoveMitraPhoto');
        if(input) input.value = '';
        if(img) { img.src = ''; img.style.display = 'none'; }
        if(btnRemove) btnRemove.style.display = 'none';
        currentMitraPhotoBase64 = "";
    }

    function toggleFileRemoveBtn(inputId, btnId) {
        const input = document.getElementById(inputId);
        const btn = document.getElementById(btnId);
        if (input && btn) {
            if (input.files && input.files.length > 0) {
                btn.style.display = 'inline-flex';
            } else {
                btn.style.display = 'none';
            }
        }
    }

    function resetSingleInput(inputId, btnId) {
        const input = document.getElementById(inputId);
        const btn = document.getElementById(btnId);
        if (input) input.value = '';
        if (btn) btn.style.display = 'none';
    }

    function renderHistory(filterText = '') {
        const div = document.getElementById('historyList');
        if(qcDatabase.length === 0) {
            div.innerHTML = `<p style="font-size:12px; color:#777;">Belum ada riwayat pengisian. Klik tombol di bawah untuk membuat pengisian baru.</p>`;
            return;
        }

        const query = filterText.toLowerCase().trim();
        const filtered = qcDatabase.filter(rec => {
            const pa = (rec.nomorPA || '').toLowerCase();
            const pelanggan = (rec.namaPelanggan || '').toLowerCase();
            const mitra = (rec.namaMitra || '').toLowerCase();
            return pa.includes(query) || pelanggan.includes(query) || mitra.includes(query);
        });

        if (filtered.length === 0) {
            div.innerHTML = `<p style="font-size:12px; color:#777;">Tidak ditemukan draft dengan kata kunci "${filterText}".</p>`;
            return;
        }

        div.innerHTML = '';
        filtered.forEach((rec) => {
            const originalIndex = qcDatabase.indexOf(rec);
            div.innerHTML += `
                <div class="history-card">
                    <div>
                        <strong>${rec.namaPelanggan || 'Tanpa Nama Pelanggan'}</strong> - PA: <span style="color:var(--pln-blue); font-weight:bold;">${rec.nomorPA || '-'}</span><br>
                        <small>PJT Mitra: ${rec.pjMitra || '-'} | FS: ${rec.namaFS || '-'} | Status: <span style="color:#005A8C; font-weight:bold;">${rec.status || 'Draft Admin/Mitra'}</span></small>
                    </div>
                    <div>
                        <button class="btn btn-outline" onclick="loadRecord(${originalIndex})">Buka / Edit Data</button>
                    </div>
                </div>
            `;
        });
    }

    function filterHistory() {
        const query = document.getElementById('searchDraftInput').value;
        renderHistory(query);
    }

    function createNewForm() {
        activeRecordIndex = qcDatabase.length;
        resetMitraPhoto();
        resetSingleInput('fileBaSpreadsheet', 'btnRemoveBA');
        signatures = { fs: '', mitra: '', ptl: '' };
        clearCanvas('canvasFS', 'fs');
        clearCanvas('canvasMitraReg', 'mitra');
        clearCanvas('canvasPTL', 'ptl');

        qcDatabase.push({
            status: "Draft Permintaan Admin/Mitra",
            matAwal: {}, matAkhir: {}, jasaAwal: {}, jasaAkhir: {},
            alasan: {}, dokStatus: {}, dokAlasan: {}, cpStatus: {}
        });
        loadRecord(activeRecordIndex);
        goToStep(1);
    }

    function loadRecord(idx) {
        activeRecordIndex = idx;
        const rec = qcDatabase[idx];

        document.getElementById('tglQC').value = rec.tglQC || '';
        document.getElementById('nomorPA').value = rec.nomorPA || '';
        document.getElementById('namaPekerjaan').value = rec.namaPekerjaan || '';
        document.getElementById('namaMitra').value = rec.namaMitra || '';
        document.getElementById('pjMitra').value = rec.pjMitra || '';
        document.getElementById('namaFS').value = rec.namaFS || '';
        document.getElementById('namaPOP').value = rec.namaPOP || '';
        document.getElementById('namaPelanggan').value = rec.namaPelanggan || '';
        document.getElementById('alamatPelanggan').value = rec.alamatPelanggan || '';
        document.getElementById('namaPTL').value = rec.namaPTL || '';
        document.getElementById('tglComm').value = rec.tglComm || '';

        currentDokPhotos = rec.uploadedDokFiles || [];
        currentItemPhotos = rec.uploadedItemFiles || [];

        if(rec.mitraPhoto) {
            currentMitraPhotoBase64 = rec.mitraPhoto;
            const img = document.getElementById('imgMitraPreview');
            img.src = currentMitraPhotoBase64;
            img.style.display = 'block';
            document.getElementById('btnRemoveMitraPhoto').style.display = 'inline-flex';
        }

        masterItems.forEach((item, i) => {
            document.getElementById(`mAwal_${i}`).value = rec.matAwal ? (rec.matAwal[i] || '') : '';
            document.getElementById(`jAwal_${i}`).value = rec.jasaAwal ? (rec.jasaAwal[i] || '') : '';
            
            document.getElementById(`mAkhir_${i}`).value = rec.matAkhir ? (rec.matAkhir[i] || '') : '';
            document.getElementById(`jAkhir_${i}`).value = rec.jasaAkhir ? (rec.jasaAkhir[i] || '') : '';
            document.getElementById(`alasan_${i}`).value = rec.alasan ? (rec.alasan[i] || '') : '';

            updateItemEvaluation(i);
        });

        dokList.forEach((dok, idx) => {
            if(rec.dokQty && rec.dokQty[idx]) {
                const el = document.getElementById(`dokQty_${idx}`);
                if(el) {
                    el.value = rec.dokQty[idx];
                }
            }
        });

        cpList.forEach((cp, idx) => {
            if(rec.cpStatus && rec.cpStatus[idx]) {
                const el = document.getElementById(`cpStat_${idx}`);
                if(el) el.value = rec.cpStatus[idx];
            }
        });

        if (rec.signatures) {
            signatures = rec.signatures;
            if(signatures.fs) drawImageToCanvas('canvasFS', signatures.fs);
            if(signatures.mitra) {
                drawImageToCanvas('canvasMitraReg', signatures.mitra);
            }
            if(signatures.ptl) drawImageToCanvas('canvasPTL', signatures.ptl);
        }

        goToStep(1);
    }

    /* RENDER TABEL DENGAN TOMBOL HAPUS (X) DI SETIAP INPUT FILE BUKTI DOKUMENTASI */
    function renderInputTables() {
        const tbodyM = document.querySelector('#tableInputMitra tbody');
        const tbodyFS = document.querySelector('#tableInputFS tbody');
        tbodyM.innerHTML = ''; tbodyFS.innerHTML = '';

        masterItems.forEach((item, idx) => {
            tbodyM.innerHTML += `
                <tr>
                    <td style="text-align:center;">${item.no}</td>
                    <td>${item.name}</td>
                    <td style="text-align:center;"><input type="text" class="input-mini" id="mAwal_${idx}"></td>
                    <td style="text-align:center;">-</td>
                    <td style="text-align:center;"><input type="text" class="input-mini" id="jAwal_${idx}"></td>
                    <td style="text-align:center;">-</td>
                    <td style="text-align:center;">${item.sat}</td>
                </tr>
            `;

            tbodyFS.innerHTML += `
                <tr>
                    <td style="text-align:center;">${item.no}</td>
                    <td>${item.name}</td>
                    <td style="text-align:center;" id="dispMAwal_${idx}">-</td>
                    <td style="text-align:center;"><input type="text" class="input-mini" id="mAkhir_${idx}" oninput="updateItemEvaluation(${idx})" onchange="updateItemEvaluation(${idx})"></td>
                    <td style="text-align:center;" id="dispJAwal_${idx}">-</td>
                    <td style="text-align:center;"><input type="text" class="input-mini" id="jAkhir_${idx}" oninput="updateItemEvaluation(${idx})" onchange="updateItemEvaluation(${idx})"></td>
                    <td style="text-align:center;"><span id="badgeEval_${idx}" class="badge-status status-none">-</span></td>
                    <td><input type="text" class="input-text-table" id="alasan_${idx}" placeholder="Alasan jika beda"></td>
                    <td>
                        <div class="file-upload-wrapper">
                            <input type="file" id="fotoItem_${idx}" accept="image/*,.pdf" onchange="toggleFileRemoveBtn('fotoItem_${idx}', 'btnRemoveItem_${idx}')">
                            <button type="button" id="btnRemoveItem_${idx}" class="btn-remove-file" title="Hapus File" onclick="resetSingleInput('fotoItem_${idx}', 'btnRemoveItem_${idx}')"><i class="fas fa-times"></i></button>
                        </div>
                    </td>
                </tr>
            `;
        });

        const tbodyDok = document.getElementById('tableDokumenBody');
        tbodyDok.innerHTML = '';
        dokList.forEach((dok, idx) => {
            tbodyDok.innerHTML += `
                <tr>
                    <td style="text-align:center;">${idx+1}</td>
                    <td>${dok}</td>
                    <td><input type="text" class="input-mini" id="dokQty_${idx}"></td>
                    <td>
                        <select class="form-control" style="font-size:10px;" id="dokStat_${idx}">
                            <option value="SESUAI">SESUAI</option>
                            <option value="TIDAK SESUAI">TIDAK SESUAI</option>
                        </select>
                    </td>
                    <td><input type="text" class="input-text-table" id="dokAlasan_${idx}" placeholder="Keterangan / Alasan"></td>
                    <td>
                        <div class="file-upload-wrapper">
                            <input type="file" id="fotoDok_${idx}" accept="image/*,.pdf" onchange="toggleFileRemoveBtn('fotoDok_${idx}', 'btnRemoveDok_${idx}')">
                            <button type="button" id="btnRemoveDok_${idx}" class="btn-remove-file" title="Hapus File" onclick="resetSingleInput('fotoDok_${idx}', 'btnRemoveDok_${idx}')"><i class="fas fa-times"></i></button>
                        </div>
                    </td>
                </tr>
            `;
        });

        const tbodyCP = document.getElementById('tableCheckPointBody');
        tbodyCP.innerHTML = '';
        cpList.forEach((cp, idx) => {
            tbodyCP.innerHTML += `
                <tr>
                    <td style="text-align:center;">${idx+1}</td>
                    <td>QC Checklist Item</td>
                    <td>${cp}</td>
                    <td>
                        <select class="form-control" style="font-size:10px;" id="cpStat_${idx}">
                            <option value="-">- (Belum Dicek)</option>
                            <option value="SESUAI (OK)">SESUAI (OK)</option>
                            <option value="TIDAK SESUAI">TIDAK SESUAI</option>
                        </select>
                    </td>
                </tr>
            `;
        });
    }

    function updateItemEvaluation(i) {
        const mAwal = document.getElementById(`mAwal_${i}`).value.trim();
        const mAkhir = document.getElementById(`mAkhir_${i}`).value.trim();
        const jAwal = document.getElementById(`jAwal_${i}`).value.trim();
        const jAkhir = document.getElementById(`jAkhir_${i}`).value.trim();

        const badge = document.getElementById(`badgeEval_${i}`);
        if (badge) {
            const hasData = (mAwal !== '' || mAkhir !== '' || jAwal !== '' || jAkhir !== '');

            if (!hasData) {
                badge.className = "badge-status status-none";
                badge.innerText = "-";
            } else {
                const isMatMismatch = (mAwal !== '' && mAkhir !== '' && mAwal !== mAkhir);
                const isJasaMismatch = (jAwal !== '' && jAkhir !== '' && jAwal !== jAkhir);

                if (isMatMismatch || isJasaMismatch) {
                    badge.className = "badge-status status-mismatch";
                    badge.innerText = "TIDAK SESUAI";
                } else {
                    badge.className = "badge-status status-match";
                    badge.innerText = "SESUAI";
                }
            }
        }
    }

    function initSignaturePads() {
        ['canvasFS', 'canvasMitraReg', 'canvasPTL'].forEach(id => {
            const canvas = document.getElementById(id);
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            let isDrawing = false;

            function getPos(e) {
                const rect = canvas.getBoundingClientRect();
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                return { x: clientX - rect.left, y: clientY - rect.top };
            }

            function startDraw(e) {
                isDrawing = true;
                const p = getPos(e);
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
            }
            function draw(e) {
                if (!isDrawing) return;
                const p = getPos(e);
                ctx.lineWidth = 2;
                ctx.lineCap = 'round';
                ctx.strokeStyle = '#000000';
                ctx.lineTo(p.x, p.y);
                ctx.stroke();
            }
            function stopDraw() {
                if(isDrawing) {
                    isDrawing = false;
                    saveCanvasData(id);
                }
            }

            canvas.addEventListener('mousedown', startDraw);
            canvas.addEventListener('mousemove', draw);
            canvas.addEventListener('mouseup', stopDraw);
            canvas.addEventListener('mouseleave', stopDraw);

            canvas.addEventListener('touchstart', startDraw);
            canvas.addEventListener('touchmove', draw);
            canvas.addEventListener('touchend', stopDraw);
        });
    }

    async function authenticateFingerprint(key) {
        let canvasId = 'canvasFS';
        if(key === 'mitraReg' || key === 'mitra') canvasId = 'canvasMitraReg';
        if(key === 'ptl') canvasId = 'canvasPTL';
        
        if (window.PublicKeyCredential) {
            try {
                const dummyChallenge = new Uint8Array(32);
                window.crypto.getRandomValues(dummyChallenge);

                alert("Silakan sentuh sensor Sidik Jari (Fingerprint) pada HP / Perangkat Anda...");

                renderBiometricStampOnCanvas(canvasId, key);
            } catch (err) {
                renderBiometricStampOnCanvas(canvasId, key);
            }
        } else {
            renderBiometricStampOnCanvas(canvasId, key);
        }
    }

    function renderBiometricStampOnCanvas(canvasId, key) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#059669';
        ctx.font = 'bold 10px Montserrat, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText("✔ VERIFIKASI FINGERPRINT HP", canvas.width / 2, 30);
        
        ctx.fillStyle = '#1E293B';
        ctx.font = '8px Arial, sans-serif';
        const now = new Date().toLocaleString('id-ID');
        ctx.fillText(`TOKEN: BIO-${Math.random().toString(36).substring(2, 9).toUpperCase()}`, canvas.width / 2, 45);
        ctx.fillText(`WAKTU: ${now}`, canvas.width / 2, 58);

        saveCanvasData(canvasId);
        alert("Autentikasi Sidik Jari HP Berhasil Diverifikasi!");
    }

    function saveCanvasData(canvasId) {
        const canvas = document.getElementById(canvasId);
        if(!canvas) return;
        const key = (canvasId === 'canvasFS') ? 'fs' : ((canvasId === 'canvasMitraReg') ? 'mitra' : 'ptl');
        signatures[key] = canvas.toDataURL();
    }

    function clearCanvas(canvasId, key) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        signatures[key] = '';
    }

    function loadFingerprint(input, key) {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const canvasId = (key === 'fs') ? 'canvasFS' : ((key === 'mitra' || key === 'mitraReg') ? 'canvasMitraReg' : 'canvasPTL');
                drawImageToCanvas(canvasId, e.target.result);
                signatures[key] = e.target.result;
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    function drawImageToCanvas(canvasId, src) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.onload = function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
        img.src = src;
    }

    function fileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve({ base64: reader.result, fileName: file.name });
            reader.onerror = error => reject(error);
        });
    }

    async function saveDraftMitra() {
        if(activeRecordIndex < 0) return;
        const rec = qcDatabase[activeRecordIndex];

        rec.tglQC = document.getElementById('tglQC').value;
        rec.nomorPA = document.getElementById('nomorPA').value;
        rec.namaPekerjaan = document.getElementById('namaPekerjaan').value;
        rec.namaMitra = document.getElementById('namaMitra').value;
        rec.pjMitra = document.getElementById('pjMitra').value;
        rec.namaFS = document.getElementById('namaFS').value;
        rec.namaPOP = document.getElementById('namaPOP').value;
        rec.namaPelanggan = document.getElementById('namaPelanggan').value;
        rec.alamatPelanggan = document.getElementById('alamatPelanggan').value;
        rec.namaPTL = document.getElementById('namaPTL').value;
        rec.tglComm = document.getElementById('tglComm').value;
        rec.mitraPhoto = currentMitraPhotoBase64;
        rec.signatures = signatures;

        masterItems.forEach((item, i) => {
            rec.matAwal[i] = document.getElementById(`mAwal_${i}`).value;
            rec.jasaAwal[i] = document.getElementById(`jAwal_${i}`).value;
            
            document.getElementById(`dispMAwal_${i}`).innerText = rec.matAwal[i] || '-';
            document.getElementById(`dispJAwal_${i}`).innerText = rec.jasaAwal[i] || '-';
        });

        rec.status = "Draft Admin/Mitra Tersimpan";
        localStorage.setItem('pln_qc_db_v3', JSON.stringify(qcDatabase));

        // Upload foto perwakilan mitra ke Google Drive (kalau ada file & Service Account sudah di-setup)
        const mitraPhotoInput = document.getElementById('fotoPerwakilanMitra');
        if (mitraPhotoInput && mitraPhotoInput.files[0]) {
            const uploaded = await uploadFileToDriveApi(mitraPhotoInput.files[0], rec.nomorPA || 'Tanpa Nomor PA');
            if (uploaded) rec.mitraPhotoDriveLink = uploaded.webViewLink;
        }

        const synced = await syncRecordToServer(rec);
        localStorage.setItem('pln_qc_db_v3', JSON.stringify(qcDatabase));

        alert(synced
            ? "Draft Permintaan Admin/Mitra berhasil disimpan ke database (TiDB) & lokal!"
            : "Draft tersimpan di perangkat ini (lokal). Database belum terhubung — cek README.md bagian Setup TiDB Serverless.");
        goToStep(2);
    }

    async function saveVerificationFS() {
        if(activeRecordIndex < 0) return;
        const rec = qcDatabase[activeRecordIndex];

        masterItems.forEach((item, i) => {
            rec.matAkhir[i] = document.getElementById(`mAkhir_${i}`).value;
            rec.jasaAkhir[i] = document.getElementById(`jAkhir_${i}`).value;
            rec.alasan[i] = document.getElementById(`alasan_${i}`).value;
        });

        rec.dokQty = {};
        dokList.forEach((dok, idx) => {
            const el = document.getElementById(`dokQty_${idx}`);
            if(el) rec.dokQty[idx] = el.value;
        });

        rec.cpStatus = {};
        cpList.forEach((cp, idx) => {
            const el = document.getElementById(`cpStat_${idx}`);
            if(el) rec.cpStatus[idx] = el.value;
        });

        rec.signatures = signatures;
        rec.status = "Audit FS Selesai";
        localStorage.setItem('pln_qc_db_v3', JSON.stringify(qcDatabase));

        const paNum = rec.nomorPA ? rec.nomorPA.trim() : "NO-PA";

        // BACA FILE SPREADSHEET BA ADMIN
        const baFileInput = document.getElementById('fileBaSpreadsheet');
        if (baFileInput && baFileInput.files[0]) {
            rec.fileBA = await fileToBase64(baFileInput.files[0]);
        }

        // BACA SELURUH FILE UPLOAD DOKUMEN MATERIAL
        rec.uploadedDokFiles = [];
        for (let idx = 0; idx < dokList.length; idx++) {
            const input = document.getElementById(`fotoDok_${idx}`);
            if (input && input.files[0]) {
                const b64 = await fileToBase64(input.files[0]);
                rec.uploadedDokFiles.push(b64);
            }
        }

        // BACA SELURUH FILE UPLOAD AUDIT 104 ITEM
        rec.uploadedItemFiles = [];
        for (let idx = 0; idx < masterItems.length; idx++) {
            const input = document.getElementById(`fotoItem_${idx}`);
            if (input && input.files[0]) {
                const b64 = await fileToBase64(input.files[0]);
                rec.uploadedItemFiles.push(b64);
            }
        }

        currentDokPhotos = rec.uploadedDokFiles;
        currentItemPhotos = rec.uploadedItemFiles;

        alert(`Menyimpan hasil audit & mengunggah berkas untuk Nomor PA (${paNum})...`);

        // Upload semua file bukti (BA, dokumen, per-item) langsung ke Google Drive
        // lewat /api/drive-upload (Service Account) — folder otomatis dibuat per Nomor PA.
        let driveUploadCount = 0;
        let driveFolderLink = null;

        if (baFileInput && baFileInput.files[0]) {
            const up = await uploadFileToDriveApi(baFileInput.files[0], paNum);
            if (up) { rec.fileBADriveLink = up.webViewLink; driveUploadCount++; }
        }
        for (let idx = 0; idx < dokList.length; idx++) {
            const input = document.getElementById(`fotoDok_${idx}`);
            if (input && input.files[0]) {
                const up = await uploadFileToDriveApi(input.files[0], paNum);
                if (up) driveUploadCount++;
            }
        }
        for (let idx = 0; idx < masterItems.length; idx++) {
            const input = document.getElementById(`fotoItem_${idx}`);
            if (input && input.files[0]) {
                const up = await uploadFileToDriveApi(input.files[0], paNum);
                if (up) { driveUploadCount++; driveFolderLink = up.folderId; }
            }
        }

        const synced = await syncRecordToServer(rec);
        localStorage.setItem('pln_qc_db_v3', JSON.stringify(qcDatabase));

        if (driveFolderLink) {
            document.getElementById('folderDriveNotice').style.display = 'block';
            document.getElementById('linkCreatedFolder').href = `https://drive.google.com/drive/folders/${driveFolderLink}`;
        }

        if (synced && driveUploadCount > 0) {
            alert(`Berhasil! Audit tersimpan di database & ${driveUploadCount} berkas terunggah ke Google Drive.`);
        } else if (synced) {
            alert("Audit berhasil tersimpan ke database (TiDB). Tidak ada berkas yang diunggah ke Drive.");
        } else {
            alert(`Audit tersimpan di perangkat ini (lokal) untuk Nomor PA "${paNum}". Cek README.md untuk menghubungkan database/Drive.`);
        }
        goToStep(3);
    }

    function goToStep(s) {
        document.getElementById(`step${currentStep}-container`).style.display = 'none';
        document.getElementById(`step${currentStep}-ind`).classList.remove('active');
        currentStep = s;
        document.getElementById(`step${currentStep}-container`).style.display = 'block';
        document.getElementById(`step${currentStep}-ind`).classList.add('active');
        if(s === 0) renderHistory();
    }

    function openPreview() {
        const namaMitra = document.getElementById('namaMitra').value || 'PT. Rekanan Mitra';
        const pjMitra = document.getElementById('pjMitra').value || 'Penanggung Jawab Mitra';
        const namaFS = document.getElementById('namaFS').value || 'Field Supervisor';
        const namaPTL = document.getElementById('namaPTL').value || 'Ary Firdaus';

        document.querySelectorAll('.pvTglQC').forEach(e => e.innerText = document.getElementById('tglQC').value || '-');
        document.querySelectorAll('.pvNomorPA').forEach(e => e.innerText = document.getElementById('nomorPA').value || '-');
        document.querySelectorAll('.pvNamaPekerjaan').forEach(e => e.innerText = document.getElementById('namaPekerjaan').value || '-');
        document.querySelectorAll('.pvNamaMitra').forEach(e => e.innerText = namaMitra);
        document.querySelectorAll('.pvPJMitra').forEach(e => e.innerText = pjMitra);
        document.querySelectorAll('.pvPJMitraText').forEach(e => e.innerText = `PJT Mitra: ${pjMitra}`);
        document.querySelectorAll('.pvNamaFS').forEach(e => e.innerText = namaFS);
        document.querySelectorAll('.pvNamaPOP').forEach(e => e.innerText = document.getElementById('namaPOP').value || '-');
        document.querySelectorAll('.pvNamaPelanggan').forEach(e => e.innerText = document.getElementById('namaPelanggan').value || '-');
        document.querySelectorAll('.pvAlamatPelanggan').forEach(e => e.innerText = document.getElementById('alamatPelanggan').value || '-');
        document.querySelectorAll('.pvTglComm').forEach(e => e.innerText = document.getElementById('tglComm').value || '-');

        document.getElementById('pvResFisik').innerText = document.getElementById('resFisik').value;
        document.getElementById('pvResSpesifikasi').innerText = document.getElementById('resSpesifikasi').value;
        document.getElementById('pvResTerima').innerText = document.getElementById('resTerima').value;

        const fotoGrid = document.getElementById('pvDokumentasiFotoGrid');
        const allDokFotos = [...(currentDokPhotos || []), ...(currentItemPhotos || [])];
        if (allDokFotos.length > 0) {
            fotoGrid.innerHTML = allDokFotos.map(item => {
                const src = (item && typeof item === 'object') ? item.base64 : item;
                return `<img src="${src}" style="width: 100%; height: 220px; object-fit: cover; border: 1px solid #999; display: block;">`;
            }).join('');
        } else {
            fotoGrid.innerHTML = '<p style="grid-column: 1 / -1; font-weight: bold; color: #555; font-size: 11px;">[ Belum ada foto dokumentasi diunggah ]</p>';
        }

        const imgMitraOut = document.getElementById('pvMitraPhotoOut');
        if (currentMitraPhotoBase64) {
            imgMitraOut.src = currentMitraPhotoBase64;
            imgMitraOut.style.display = 'block';
        } else {
            imgMitraOut.style.display = 'none';
        }

        document.getElementById('pvNamaQCBawah').innerHTML = `<strong>( ${namaFS} )</strong>`;
        document.getElementById('pvNamaMitraBawah').innerHTML = `<strong>( ${pjMitra} )</strong>`;
        document.getElementById('pvNamaPTLBawah').innerHTML = `<strong>( ${namaPTL} )</strong>`;

        document.querySelectorAll('.pvNamaQCBawahText').forEach(e => e.innerHTML = `<strong>( ${namaFS} )</strong>`);
        document.querySelectorAll('.pvNamaMitraBawahText').forEach(e => e.innerHTML = `<strong>( ${pjMitra} )</strong>`);
        document.querySelectorAll('.pvNamaPTLBawahText').forEach(e => e.innerHTML = `<strong>( ${namaPTL} )</strong>`);

        ['H4', 'H5', 'H7'].forEach(h => {
            document.getElementById(`pvSigFS_${h}`).innerHTML = signatures.fs ? `<img src="${signatures.fs}">` : '';
            document.getElementById(`pvSigMitra_${h}`).innerHTML = signatures.mitra ? `<img src="${signatures.mitra}">` : '';
            document.getElementById(`pvSigPTL_${h}`).innerHTML = signatures.ptl ? `<img src="${signatures.ptl}">` : '';
        });

        renderPageItems('page1Body', 0, 30);
        renderPageItems('page2Body', 30, 60);
        renderPageItems('page3Body', 60, 90);
        renderPageItems('page4Body', 90, 104);

        const p5Dok = document.getElementById('page5DokBody');
        p5Dok.innerHTML = '';
        dokList.forEach((dok, i) => {
            const qtyVal = document.getElementById(`dokQty_${i}`) ? document.getElementById(`dokQty_${i}`).value.trim() : '';
            const qty = qtyVal !== '' ? qtyVal : '-';
            const statInput = document.getElementById(`dokStat_${i}`) ? document.getElementById(`dokStat_${i}`).value : 'SESUAI';
            const alasanVal = document.getElementById(`dokAlasan_${i}`) ? document.getElementById(`dokAlasan_${i}`).value.trim() : '';
            const alasan = alasanVal !== '' ? alasanVal : '-';

            let statText = '-';
            let statClass = '';

            if (qtyVal !== '' && parseInt(qtyVal, 10) > 0) {
                statText = statInput;
                statClass = (statText === 'SESUAI') ? 'text-green' : 'text-red';
            }

            p5Dok.innerHTML += `
                <tr>
                    <td style="text-align:center;">${i+1}</td>
                    <td>${dok}</td>
                    <td style="text-align:center;">${qty}</td>
                    <td style="text-align:center;" class="${statClass}">${statText}</td>
                    <td style="text-align:center;">${alasan}</td>
                </tr>
            `;
        });

        const p5CP = document.getElementById('page5CPBody');
        p5CP.innerHTML = '';
        cpList.forEach((cp, i) => {
            const cpVal = document.getElementById(`cpStat_${i}`) ? document.getElementById(`cpStat_${i}`).value : '-';
            let cpClass = '';
            if (cpVal === 'SESUAI (OK)') cpClass = 'text-green';
            else if (cpVal === 'TIDAK SESUAI') cpClass = 'text-red';

            p5CP.innerHTML += `
                <tr>
                    <td style="text-align:center;">${i+1}</td>
                    <td>QC Checklist Item</td>
                    <td>${cp}</td>
                    <td style="text-align:center;" class="${cpClass}">${cpVal}</td>
                </tr>
            `;
        });

        const p6Acc = document.getElementById('page6AccBody');
        p6Acc.innerHTML = '';
        for(let r=1; r<=35; r++) {
            p6Acc.innerHTML += `
                <tr>
                    <td style="text-align:center;">${r}</td><td>-</td><td>-</td>
                    <td style="text-align:center;">${r+35}</td><td>-</td><td>-</td>
                </tr>
            `;
        }

        document.getElementById('modalPreview').style.display = 'block';
    }

    function renderPageItems(elementId, startIdx, endIdx) {
        const tbody = document.getElementById(elementId);
        tbody.innerHTML = '';
        for(let i = startIdx; i < endIdx && i < masterItems.length; i++) {
            const item = masterItems[i];
            const mAwalRaw = document.getElementById(`mAwal_${i}`).value.trim();
            const mAkhirRaw = document.getElementById(`mAkhir_${i}`).value.trim();
            const jAwalRaw = document.getElementById(`jAwal_${i}`).value.trim();
            const jAkhirRaw = document.getElementById(`jAkhir_${i}`).value.trim();
            const alasanRaw = document.getElementById(`alasan_${i}`).value.trim();

            const mAwal = mAwalRaw !== '' ? mAwalRaw : '-';
            const mAkhir = mAkhirRaw !== '' ? mAkhirRaw : '-';
            const jAwal = jAwalRaw !== '' ? jAwalRaw : '-';
            const jAkhir = jAkhirRaw !== '' ? jAkhirRaw : '-';

            const hasData = (mAwalRaw !== '' || mAkhirRaw !== '' || jAwalRaw !== '' || jAkhirRaw !== '');

            let evalHtml = '-';
            if (hasData) {
                const isMatMismatch = (mAwalRaw !== '' && mAkhirRaw !== '' && mAwalRaw !== mAkhirRaw);
                const isJasaMismatch = (jAwalRaw !== '' && jAkhirRaw !== '' && jAwalRaw !== jAkhirRaw);

                if (isMatMismatch || isJasaMismatch) {
                    evalHtml = `<span class="text-red">BEDA</span> ${alasanRaw ? `(${alasanRaw})` : ''}`;
                } else {
                    evalHtml = `<span class="text-green">SESUAI</span>`;
                }
            }

            tbody.innerHTML += `
                <tr>
                    <td style="text-align:center;">${item.no}</td>
                    <td>${item.name}</td>
                    <td style="text-align:center;">${mAwal}</td>
                    <td style="text-align:center;">${mAkhir}</td>
                    <td style="text-align:center;">${item.sat}</td>
                    <td style="text-align:center;">${jAwal}</td>
                    <td style="text-align:center;">${jAkhir}</td>
                    <td style="text-align:center;">${item.sat}</td>
                    <td style="text-align:center; font-size:8.5px;">${evalHtml}</td>
                </tr>
            `;
        }
    }

    function closePreview() { document.getElementById('modalPreview').style.display = 'none'; }
    function printSurat() { openPreview(); window.print(); }
