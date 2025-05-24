-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 24 Bulan Mei 2025 pada 16.29
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_asetdlh`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `ac`
--

CREATE TABLE `ac` (
  `id_ac` int(255) NOT NULL,
  `qrcode` varchar(255) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `merek` varchar(255) NOT NULL,
  `no_registrasi` varchar(255) NOT NULL,
  `no_serial` varchar(255) NOT NULL,
  `ukuran` varchar(255) NOT NULL,
  `ruangan` varchar(255) NOT NULL,
  `asal` varchar(255) NOT NULL,
  `tahun_pembelian` year(4) NOT NULL,
  `harga_pembelian` int(255) NOT NULL,
  `kondisi` varchar(255) NOT NULL,
  `keterangan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `alatberat`
--

CREATE TABLE `alatberat` (
  `id_alatberat` int(11) NOT NULL,
  `qrcode` varchar(255) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `merek` varchar(255) NOT NULL,
  `no_registrasi` varchar(255) NOT NULL,
  `no_mesin` varchar(255) NOT NULL,
  `no_rangka` varchar(255) NOT NULL,
  `warna` varchar(255) NOT NULL,
  `harga_pembelian` int(255) NOT NULL,
  `tahun_pembuatan` year(4) NOT NULL,
  `kategori` varchar(255) NOT NULL,
  `pajak` date NOT NULL,
  `penggunaan` varchar(255) NOT NULL,
  `kondisi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `alatkerja`
--

CREATE TABLE `alatkerja` (
  `id_alatkerja` int(255) NOT NULL,
  `qrcode` varchar(255) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `merek` varchar(255) NOT NULL,
  `no_registrasi` varchar(255) NOT NULL,
  `no_serial` varchar(255) NOT NULL,
  `asal` varchar(255) NOT NULL,
  `tahun_pembelian` year(4) NOT NULL,
  `harga_pembelian` int(255) NOT NULL,
  `kondisi` varchar(255) NOT NULL,
  `keterangan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `kendaraan`
--

CREATE TABLE `kendaraan` (
  `id_kendaraan` int(11) NOT NULL,
  `qrcode` varchar(255) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `merek` varchar(255) NOT NULL,
  `no_polisi` varchar(255) NOT NULL,
  `no_mesin` varchar(255) NOT NULL,
  `no_rangka` varchar(255) NOT NULL,
  `warna` varchar(255) NOT NULL,
  `harga_pembelian` int(255) NOT NULL,
  `tahun_pembuatan` year(4) NOT NULL,
  `kategori` varchar(255) NOT NULL,
  `pajak` date NOT NULL,
  `pemegang` varchar(255) NOT NULL,
  `nik` varchar(255) NOT NULL,
  `penggunaan` varchar(255) NOT NULL,
  `kondisi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `onderdil`
--

CREATE TABLE `onderdil` (
  `id_onderdil` int(255) NOT NULL,
  `id_servis` int(255) NOT NULL,
  `nama_onderdil` varchar(255) NOT NULL,
  `jumlah` int(255) NOT NULL,
  `harga` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `serberac`
--

CREATE TABLE `serberac` (
  `id_serberac` int(11) NOT NULL,
  `no_registrasi` varchar(255) NOT NULL,
  `cuci` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `serberalatberat`
--

CREATE TABLE `serberalatberat` (
  `id_serberalatberat` int(11) NOT NULL,
  `no_registrasi` varchar(255) NOT NULL,
  `oli_mesin` date NOT NULL,
  `filter_oli_mesin` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `serberalatkerja`
--

CREATE TABLE `serberalatkerja` (
  `id_serberalatkerja` int(11) NOT NULL,
  `no_registrasi` varchar(255) NOT NULL,
  `oli_mesin` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `serberkendaraan`
--

CREATE TABLE `serberkendaraan` (
  `id_serberkendaraan` int(11) NOT NULL,
  `no_polisi` varchar(255) NOT NULL,
  `oli_mesin` date NOT NULL,
  `filter_oli_mesin` date NOT NULL,
  `oli_gardan` date NOT NULL,
  `oli_transmisi` date NOT NULL,
  `ban` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `servis`
--

CREATE TABLE `servis` (
  `id_servis` int(255) NOT NULL,
  `tanggal` date NOT NULL,
  `no_unik` varchar(255) NOT NULL,
  `nama_bengkel` varchar(255) NOT NULL,
  `biaya_servis` int(255) NOT NULL,
  `nota_pembayaran` varchar(255) NOT NULL,
  `dokumentasi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tanaman`
--

CREATE TABLE `tanaman` (
  `id_tanaman` int(255) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `jenis` varchar(255) NOT NULL,
  `stok` int(255) NOT NULL,
  `keterangan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tanamankeluar`
--

CREATE TABLE `tanamankeluar` (
  `id_tanamankeluar` int(255) NOT NULL,
  `id_tanaman` int(255) NOT NULL,
  `tanggal` date NOT NULL,
  `jumlah` int(255) NOT NULL,
  `keterangan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tanamanmasuk`
--

CREATE TABLE `tanamanmasuk` (
  `id_tanamanmasuk` int(255) NOT NULL,
  `id_tanaman` int(255) NOT NULL,
  `tanggal` date NOT NULL,
  `jumlah` int(255) NOT NULL,
  `keterangan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id_user` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id_user`, `username`, `password`) VALUES
(1, 'uusaamaa_', '$2b$10$xDfJ0KFXpWADElmXgl0CkeUqnyFnGRTGIypOOEAYn45wlbybPTlfi'),
(2, 'admin', '$2b$10$cjl2KbxfR.xZKeTO2QoT/edHEpnTAEWqhO2yEFergdfDbl/wr5fPm');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `ac`
--
ALTER TABLE `ac`
  ADD PRIMARY KEY (`id_ac`),
  ADD UNIQUE KEY `no_registrasi` (`no_registrasi`);

--
-- Indeks untuk tabel `alatberat`
--
ALTER TABLE `alatberat`
  ADD PRIMARY KEY (`id_alatberat`),
  ADD UNIQUE KEY `no_registrasi` (`no_registrasi`);

--
-- Indeks untuk tabel `alatkerja`
--
ALTER TABLE `alatkerja`
  ADD PRIMARY KEY (`id_alatkerja`),
  ADD UNIQUE KEY `no_registrasi` (`no_registrasi`);

--
-- Indeks untuk tabel `kendaraan`
--
ALTER TABLE `kendaraan`
  ADD PRIMARY KEY (`id_kendaraan`),
  ADD UNIQUE KEY `no_polisi` (`no_polisi`);

--
-- Indeks untuk tabel `onderdil`
--
ALTER TABLE `onderdil`
  ADD PRIMARY KEY (`id_onderdil`);

--
-- Indeks untuk tabel `serberac`
--
ALTER TABLE `serberac`
  ADD PRIMARY KEY (`id_serberac`);

--
-- Indeks untuk tabel `serberalatberat`
--
ALTER TABLE `serberalatberat`
  ADD PRIMARY KEY (`id_serberalatberat`);

--
-- Indeks untuk tabel `serberalatkerja`
--
ALTER TABLE `serberalatkerja`
  ADD PRIMARY KEY (`id_serberalatkerja`);

--
-- Indeks untuk tabel `serberkendaraan`
--
ALTER TABLE `serberkendaraan`
  ADD PRIMARY KEY (`id_serberkendaraan`);

--
-- Indeks untuk tabel `servis`
--
ALTER TABLE `servis`
  ADD PRIMARY KEY (`id_servis`);

--
-- Indeks untuk tabel `tanaman`
--
ALTER TABLE `tanaman`
  ADD PRIMARY KEY (`id_tanaman`);

--
-- Indeks untuk tabel `tanamankeluar`
--
ALTER TABLE `tanamankeluar`
  ADD PRIMARY KEY (`id_tanamankeluar`);

--
-- Indeks untuk tabel `tanamanmasuk`
--
ALTER TABLE `tanamanmasuk`
  ADD PRIMARY KEY (`id_tanamanmasuk`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `ac`
--
ALTER TABLE `ac`
  MODIFY `id_ac` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `alatberat`
--
ALTER TABLE `alatberat`
  MODIFY `id_alatberat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `alatkerja`
--
ALTER TABLE `alatkerja`
  MODIFY `id_alatkerja` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `kendaraan`
--
ALTER TABLE `kendaraan`
  MODIFY `id_kendaraan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `onderdil`
--
ALTER TABLE `onderdil`
  MODIFY `id_onderdil` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `serberac`
--
ALTER TABLE `serberac`
  MODIFY `id_serberac` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `serberalatberat`
--
ALTER TABLE `serberalatberat`
  MODIFY `id_serberalatberat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `serberalatkerja`
--
ALTER TABLE `serberalatkerja`
  MODIFY `id_serberalatkerja` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `serberkendaraan`
--
ALTER TABLE `serberkendaraan`
  MODIFY `id_serberkendaraan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `servis`
--
ALTER TABLE `servis`
  MODIFY `id_servis` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `tanaman`
--
ALTER TABLE `tanaman`
  MODIFY `id_tanaman` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `tanamankeluar`
--
ALTER TABLE `tanamankeluar`
  MODIFY `id_tanamankeluar` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `tanamanmasuk`
--
ALTER TABLE `tanamanmasuk`
  MODIFY `id_tanamanmasuk` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
