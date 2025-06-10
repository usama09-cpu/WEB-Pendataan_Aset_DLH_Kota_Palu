# 🏛️ Sistem Web Pendataan Aset DLH Kota Palu

Selamat datang di repositori resmi **Sistem Pendataan Aset** milik **Dinas Lingkungan Hidup (DLH) Kota Palu**. Proyek ini bertujuan untuk membantu proses inventarisasi dan pengelolaan aset secara digital, efisien, dan akurat melalui sistem berbasis web dengan arsitektur client-server.

---

## 📁 Struktur Folder

```
aset-dlh/
├── backend/         # Server-side (API, database, autentikasi)
├── frontend/        # Client-side (UI/UX, komunikasi dengan API)
└── README.md        # Dokumentasi utama proyek
```

---

## 🌐 Teknologi yang Digunakan

### Frontend
- React.js + Vite
- Tailwind CSS
- React Router
- Axios
- JWT Authentication (penanganan token)

### Backend
- Node.js + Express.js
- MySQL
- JSON Web Token (JWT)
- Multer (upload gambar)
- dotenv

---

## 🔐 Fitur Utama

- Autentikasi dan otorisasi berbasis JWT
- Login berbasis role (`admin`, `guest`)
- CRUD data aset (tambah, ubah, hapus, lihat)
- Upload dan preview gambar aset
- Dashboard monitoring aset
- Filter dan pencarian aset
- Antarmuka responsif di semua perangkat

---

## ⚙️ Cara Menjalankan Proyek

### 1. Clone Repositori
```bash
git clone https://github.com/username/aset-dlh-kota-palu.git
cd aset-dlh-kota-palu
```

---

### 2. Jalankan Backend

```bash
cd backend
npm install
cp .env.example .env
```

Ubah isi `.env` sesuai kebutuhan:
```
TOKEN=
```

Kemudian jalankan server:
```bash
npm run dev
```

Backend akan berjalan di: `http://localhost:3000`

---

### 3. Jalankan Frontend

```bash
cd ../frontend
npm install
npm run dev
```

Frontend akan berjalan di: `http://localhost:5173`

Pastikan `baseURL` Axios mengarah ke backend:
```js
// Contoh file src/services/api.js
const BASE_URL = "http://localhost:5000/api";
```

---

## 🏗️ Arsitektur Sistem

```
[ Frontend (React.js) ] ←→ [ Backend (Express.js) ] ←→ [ MongoDB ]
```

- Frontend bertugas menampilkan antarmuka dan mengirim permintaan ke backend.
- Backend bertugas menangani logika bisnis, autentikasi, dan komunikasi dengan database.
- MongoDB menyimpan data aset, pengguna, dan metadata gambar.

---

## 📂 Struktur Direktori (Singkat)

### Backend
```
backend/
├── src/
│   ├── application/     # Konfigurasi Express & Database
│   ├── controller/      # Handler untuk request
│   ├── middleware/      # Middleware (auth, error handler, dll)
│   ├── service/         # Logika bisnis
│   ├── repository/      # Interaksi dengan database
│   ├── helper/          # Utilitas tambahan
│   ├── route/           # Daftar routing API
│   └── main.js          # Entry point aplikasi
├── public/              # File statis (jika ada)
└── .env                 # Konfigurasi lingkungan
```

### Frontend
```
frontend/
├── src/
│   ├── components/   # Komponen UI
│   ├── pages/        # Halaman-halaman utama
│   ├── routes/       # Routing aplikasi
│   ├── services/     # Axios dan pemanggilan API
│   └── App.jsx       # Entry point React
└── public/           # Aset publik
```

---

## ✅ Checklist Fitur

- [x] Login berbasis role (admin, guest)
- [x] Tambah/edit/hapus aset
- [x] Upload gambar aset
- [x] Filter dan cari data aset
- [x] Dashboard rekap aset
- [x] Autentikasi & proteksi route
- [x] Responsif di perangkat mobile

---

## 👨‍💻 Tim Pengembang

| Nama | Peran |
|------|-------|
| Usama | Fullstack Developer |

---

## 📜 Lisensi

Proyek ini berada di bawah lisensi **MIT License**. Lihat file [LICENSE](./LICENSE) untuk informasi lebih lanjut.

---

> Dinas Lingkungan Hidup Kota Palu © 2025 – Sistem Pendataan Aset v1.0
