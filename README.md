# 📚 Aplikasi CRUD Mahasiswa — Bun.js + Prisma + MySQL

> Laporan UTS Pemrograman Web Lanjut — Program Studi Sistem Informasi  
> Universitas Tanjungpura, Semester Genap T.A. 2026/2027

![Bun](https://img.shields.io/badge/Bun-1.3.11-black?logo=bun)
![Hono](https://img.shields.io/badge/Hono-Framework-orange)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma)
![MySQL](https://img.shields.io/badge/MySQL-8.0-blue?logo=mysql)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?logo=tailwindcss)
![Codespaces](https://img.shields.io/badge/GitHub-Codespaces-181717?logo=github)

---

## 📌 Tentang Proyek

Aplikasi web **CRUD Mahasiswa** berbasis **Bun.js** dengan arsitektur **MVC**, menggunakan **Prisma ORM** untuk koneksi ke database **MySQL**, tampilan **Admin Panel** responsif dengan **Tailwind CSS**, dan siap dijalankan langsung di **GitHub Codespaces**.

Proyek ini merupakan hasil refactoring dari penyimpanan data *in-memory* (array JavaScript) menjadi database MySQL yang persisten menggunakan Prisma ORM.

---

## 🛠️ Tech Stack

| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| [Bun.js](https://bun.sh) | 1.3.11 | JavaScript runtime |
| [Hono](https://hono.dev) | Latest | Web framework & routing |
| [Prisma ORM](https://prisma.io) | Latest | Database ORM |
| MySQL | 8.0 | Database server |
| EJS | Latest | Template engine (view) |
| Tailwind CSS | 3.4.17 | CSS framework (Admin Panel) |
| phpMyAdmin | Latest | GUI database manager |
| Docker Compose | — | Container orchestration |

---

## 📁 Struktur Folder

```
UTS-PWLrootroot/
├── .devcontainer/
│   ├── devcontainer.json       # Konfigurasi GitHub Codespaces
│   └── docker-compose.yml      # Service: app + MySQL + phpMyAdmin
├── prisma/
│   ├── schema.prisma           # Definisi model database
│   └── migrations/             # File SQL migrasi (auto-generated)
├── src/
│   ├── app.js                  # Entry point aplikasi
│   ├── config/
│   │   ├── viewEngine.js       # Setup EJS view engine
│   │   └── prisma.js           # Prisma Client singleton
│   ├── controllers/
│   │   ├── homeController.js
│   │   └── mahasiswaController.js
│   ├── models/
│   │   └── mahasiswaModel.js   # CRUD via Prisma
│   ├── routes/
│   │   └── web.js              # Definisi routing
│   └── views/
│       ├── layout.ejs          # Template utama (sidebar + navbar)
│       ├── home.ejs            # Dashboard
│       └── mahasiswa/
│           ├── index.ejs       # Daftar mahasiswa
│           ├── create.ejs      # Form tambah
│           └── edit.ejs        # Form edit
├── .env                        # Konfigurasi DATABASE_URL
├── tailwind.config.js
└── package.json
```

---

## 🚀 Cara Menjalankan di GitHub Codespaces

### 1. Buka di Codespaces

Klik tombol di bawah atau buka repository ini lalu pilih **Code → Codespaces → Create codespace on main**.


### 2. Setup Database
Buka tab **Ports** → port **8080** → **Open in Browser** untuk akses phpMyAdmin.

```
Server   : mysql
Username : root
Password : root
```

Buat database `bun_crud` melalui phpMyAdmin atau jalankan:

```bash
docker exec -it <container_mysql> mysql -u root -proot -e "CREATE DATABASE bun_crud;"
```

### 3. Setup Prisma

```bash
# Install dependencies (jika belum)
bun install

# Jalankan migrasi database
bunx prisma migrate dev --name init

# (Opsional) Buka Prisma Studio
bunx prisma studio
```

### 4. Jalankan aplikasi
Buka **2 terminal** di Codespaces:

**Terminal 1 — Compile Tailwind CSS:**
```bash
bunx tailwindcss -i ./src/public/css/input.css -o ./src/public/css/output.css --watch
```

**Terminal 2 — Jalankan server:**
```bash
bun run src/app.js
```

Buka tab **Ports** → port **3000** → **Open in Browser** ✅


---

## 🗄️ Schema Database

```prisma
model Mahasiswa {
  id   Int    @id @default(autoincrement())
  nama String @db.VarChar(100)
  nim  String @unique @db.VarChar(20)

  @@map("mahasiswa")
}
```

---

## 🌐 Endpoint / Routing

| Method | Endpoint | Fungsi |
|--------|----------|--------|
| GET | `/` | Dashboard |
| GET | `/mahasiswa` | Daftar semua mahasiswa |
| GET | `/mahasiswa/create` | Form tambah mahasiswa |
| POST | `/mahasiswa` | Simpan data baru |
| GET | `/mahasiswa/edit/:id` | Form edit mahasiswa |
| POST | `/mahasiswa/update/:id` | Update data |
| GET | `/mahasiswa/delete/:id` | Hapus data |

---

## ⚙️ Environment Variables

Buat file `.env` di root project:

```env
DATABASE_URL="mysql://root:root@mysql:3306/bun_crud"
```

## 👤 Informasi Mahasiswa

| | |
|---|---|
| **Nama** | Syarifah Munibah Arifah Rajiyah |
| **NIM** | H1101241027 |
| **Program Studi** | Sistem Informasi |
| **Fakultas** | FMIPA — Universitas Tanjungpura |
| **Mata Kuliah** | Pemrograman Web Lanjut |
| **Dosen Pengampu** | Syahru Rahmayuda, S.Kom., M.Kom |

---

## 📄

Proyek ini dibuat untuk UTS Pemrograman Web Lanjut Semester Genap 2026/2027.
