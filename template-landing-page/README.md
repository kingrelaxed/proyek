# Template Landing Page Universal

Landing page statis yang responsif untuk berbagai jenis usaha. Tidak membutuhkan framework, proses build, atau aset gambar eksternal.

## Cara pakai

1. Buka `script.js`.
2. Edit objek `BUSINESS_CONFIG` di bagian paling atas untuk mengganti nama usaha, deskripsi, warna, kontak, layanan, paket/harga, testimoni, dan FAQ.
3. Simpan ketiga file dalam satu folder dan buka `index.html` di browser.
4. Unggah file ke hosting statis untuk menerbitkan halaman.

### Pengaturan penting

- `name` dan `tagline`: nama dan pesan singkat usaha.
- `colors`: warna tema dalam format hex (`#rrggbb`).
- `hero`: judul, deskripsi, teks tombol, dan pesan utama.
- `contact`: nomor WhatsApp format internasional tanpa tanda `+` (contoh `6281234567890`), nomor tampilan, email, dan lokasi.
- `features`, `services`, `testimonials`, dan `faqs`: tambah, hapus, atau ubah item dalam daftar.
- `packages`: isi tepat tiga paket untuk tampilan harga; `price` berupa angka tanpa pemisah ribuan, `features` adalah daftar manfaat, dan `popular` menentukan paket yang ditonjolkan.
- `currency` dan `locale`: format harga, misalnya `IDR` dan `id-ID`.

Tautan tombol paket dan kontak akan dibuat otomatis dari nomor WhatsApp di konfigurasi. Pastikan nomor, harga, testimoni, dan informasi usaha sudah diganti sebelum halaman dipublikasikan.

## Berkas

- `index.html` — struktur dan konten halaman.
- `style.css` — tema, tata letak, dan breakpoint responsif.
- `script.js` — konfigurasi usaha, pembuatan konten dinamis, format harga, dan interaksi menu mobile.
