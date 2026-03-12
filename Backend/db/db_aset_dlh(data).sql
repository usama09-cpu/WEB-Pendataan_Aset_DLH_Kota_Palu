-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 16 Nov 2025 pada 12.00
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_aset_dlh`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `ac`
--

CREATE TABLE `ac` (
  `id_ac` int(11) NOT NULL,
  `qrcode` varchar(255) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `id_aset` int(11) NOT NULL,
  `kode_barang` varchar(50) NOT NULL DEFAULT '02.06.02.04.003',
  `nama_barang` varchar(255) NOT NULL DEFAULT 'AC Split',
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

--
-- Dumping data untuk tabel `ac`
--

INSERT INTO `ac` (`id_ac`, `qrcode`, `gambar`, `id_aset`, `kode_barang`, `nama_barang`, `merek`, `no_registrasi`, `no_serial`, `ukuran`, `ruangan`, `asal`, `tahun_pembelian`, `harga_pembelian`, `kondisi`, `keterangan`) VALUES
(1, '1763289708943-AC1-0002.png', '1763289708997-AC1-0002.jpg', 244, '1.1.3.02.01.04.001', 'Ac Split', 'National', 'AC1-0002', 'NBAX31756PD551', '1 PK', 'Default Ruangan', 'Pembelian', '2005', 5544000, 'Baik', 'Default Keterangan'),
(2, '1763289709060-AC1-0001.png', '1763289709118-AC1-0001.jpg', 245, '1.1.3.02.01.04.002', 'Ac Split', 'LG LS-Q096ACM', 'AC1-0001', '6021AUEORO30600S0300', '1 PK', 'Default Ruangan', 'Pembelian', '2016', 4725000, 'Baik', 'Default Keterangan'),
(3, '1763289709236-AC1-0003.png', '1763289709278-AC1-0003.jpg', 246, '1.1.3.02.01.04.003', 'Ac Split', 'Sharp', 'AC1-0003', '12DEFAULTNS', '½ PK', 'Default Ruangan', 'Pembelian', '2022', 4320000, 'Baik', 'Default Keterangan'),
(4, '1763289709324-AC1-0004.png', '1763289709360-AC1-0004.jpg', 247, '1.1.3.02.01.04.004', 'Ac Split', 'Sharp', 'AC1-0004', '12DEFAULTNS', '½ PK', 'Default Ruangan', 'Pembelian', '2022', 4320000, 'Baik', 'Default Keterangan'),
(5, '1763289709419-AC1-0005.png', '1763289709468-AC1-0005.jpg', 248, '1.1.3.02.01.04.005', 'Ac Split', 'Sharp', 'AC1-0005', '12DEFAULTNS', '½ PK', 'Default Ruangan', 'Pembelian', '2022', 4320000, 'Baik', 'Default Keterangan'),
(6, '1763289709527-AC1-0006.png', '1763289709565-AC1-0006.jpg', 249, '1.1.3.02.01.04.006', 'Ac Split', 'Sharp', 'AC1-0006', '12DEFAULTNS', '½ PK', 'Default Ruangan', 'Pembelian', '2022', 4320000, 'Baik', 'Default Keterangan'),
(7, '1763289709640-AC1-0007.png', '1763289709684-AC1-0007.jpg', 250, '1.1.3.02.01.04.007', 'Ac Split', 'Sharp', 'AC1-0007', '12DEFAULTNS', '½ PK', 'Default Ruangan', 'Pembelian', '2022', 4320000, 'Baik', 'Default Keterangan'),
(8, '1763289709745-AC1-0008.png', '1763289709791-AC1-0008.jpg', 251, '1.1.3.02.01.04.008', 'Ac Split', 'Sharp', 'AC1-0008', '12DEFAULTNS', '½ PK', 'Default Ruangan', 'Pembelian', '2022', 4320000, 'Baik', 'Default Keterangan'),
(9, '1763289709864-AC1-0009.png', '1763289709906-AC1-0009.jpg', 252, '1.1.3.02.01.04.009', 'Ac Split', 'Sharp', 'AC1-0009', '12DEFAULTNS', '1 PK', 'Default Ruangan', 'Pembelian', '2022', 5771200, 'Baik', 'Default Keterangan'),
(10, '1763289709964-AC1-0010.png', '1763289710009-AC1-0010.jpg', 253, '1.1.3.02.01.04.010', 'Ac Split', 'Sharp', 'AC1-0010', '12DEFAULTNS', '1 PK', 'Default Ruangan', 'Pembelian', '2022', 5771200, 'Baik', 'Default Keterangan'),
(11, '1763289710062-AC1-0011.png', '1763289710101-AC1-0011.jpg', 254, '1.1.3.02.01.04.011', 'Ac Split', 'Daikin / STV-15CXV', 'AC1-0011', '12DEFAULTNS', '1½ PK', 'Default Ruangan', 'Pembelian', '2023', 5763900, 'Baik', 'Default Keterangan'),
(12, '1763289710152-AC1-0012.png', '1763289710190-AC1-0012.jpg', 255, '1.1.3.02.01.04.012', 'Ac Split', 'Daikin / STV-15CXV', 'AC1-0012', '12DEFAULTNS', '1½ PK', 'Default Ruangan', 'Pembelian', '2023', 5763900, 'Baik', 'Default Keterangan'),
(13, '1763289710233-AC1-0013.png', '1763289710270-AC1-0013.jpg', 256, '1.1.3.02.01.04.013', 'Ac Split', 'Sharp / AU-A18UCY', 'AC1-0013', ' SN: A974019928616', '2 PK', 'Kepala Dinas', 'Pembelian', '2023', 8445500, 'Baik', 'Default Keterangan'),
(14, '1763289710315-AC1-0014.png', '1763289710349-AC1-0014.jpg', 257, '1.1.3.02.01.04.014', 'Ac Split', 'Sharp', 'AC1-0014', ' SN-540H236330131170171396', '½ PK', 'Bendahara', 'Pembelian', '2023', 4044950, 'Baik', 'Default Keterangan'),
(15, '1763289710396-AC1-0015.png', '1763289710431-AC1-0015.jpg', 258, '1.1.3.02.01.04.015', 'Ac Split', 'Sharp', 'AC1-0015', 'SN-540H942660232200120359', '1 PK', 'Default Ruangan', 'Pembelian', '2023', 4406900, 'Baik', 'Default Keterangan'),
(16, '1763289710474-AC1-0016.png', '1763289710516-AC1-0016.jpg', 259, '1.1.3.02.01.04.016', 'Ac Split', 'Sharp', 'AC1-0016', 'SN-540K631990137150171121', '1 PK', 'Default Ruangan', 'Pembelian', '2023', 4406900, 'Baik', 'Default Keterangan'),
(17, '1763289710584-AC1-0017.png', '1763289710625-AC1-0017.jpg', 260, '1.1.3.02.01.04.017', 'Ac Split', 'Sharp', 'AC1-0017', '12DEFAULTNS', '1 PK', 'Default Ruangan', 'Pembelian', '2023', 6000000, 'Baik', 'Default Keterangan'),
(18, '1763289710670-AC2-0001.png', '1763289710710-AC2-0001.jpg', 261, '1.1.3.02.01.04.018', 'Ac Split', 'Sharp', 'AC2-0001', '41003679', '½ PK', 'Default Ruangan', 'Pembelian', '2014', 5000000, 'Baik', 'Default Keterangan'),
(19, '1763289710758-AC2-0002.png', '1763289710794-AC2-0002.jpg', 262, '1.1.3.02.01.04.019', 'Ac Split', 'Sharp', 'AC2-0002', '41000732', '½ PK', 'Default Ruangan', 'Pembelian', '2014', 5000000, 'Baik', 'Default Keterangan'),
(20, '1763289710851-AC2-0003.png', '1763289710891-AC2-0003.jpg', 263, '1.1.3.02.01.04.020', 'Ac Split', 'Polytron', 'AC2-0003', '870073', '½ PK', 'Default Ruangan', 'Pembelian', '2014', 5000000, 'Baik', 'Default Keterangan'),
(21, '1763289710937-AC2-0004.png', '1763289710975-AC2-0004.jpg', 264, '1.1.3.02.01.04.021', 'Ac Split', 'Sharp', 'AC2-0004', '41146677', '1 PK', 'Default Ruangan', 'Pembelian', '2014', 6940000, 'Baik', 'Default Keterangan'),
(22, '1763289711020-AC2-0005.png', '1763289711057-AC2-0005.jpg', 265, '1.1.3.02.01.04.022', 'Ac Split', 'Akira', 'AC2-0005', '73183405000129', '1 PK', 'Default Ruangan', 'Pembelian', '2007', 2626650, 'Baik', 'Default Keterangan'),
(23, '1763289711101-AC2-0007.png', '1763289711136-AC2-0007.jpg', 266, '1.1.3.02.01.04.023', 'Ac Split', 'Panasonic CS-PC9CKH', 'AC2-0007', 'CS-PC9CKH/F104211', '1 PK', 'Default Ruangan', 'Pembelian', '2008', 7500000, 'Baik', 'Default Keterangan'),
(24, '1763289711192-AC2-0008.png', '1763289711230-AC2-0008.jpg', 267, '1.1.3.02.01.04.024', 'Ac Split', 'Sharp', 'AC2-0008', '1140088', '½ PK', 'Default Ruangan', 'Pembelian', '2011', 2925000, 'Baik', 'Default Keterangan'),
(25, '1763289711285-AC2-0009.png', '1763289711337-AC2-0009.jpg', 268, '1.1.3.02.01.04.025', 'Ac Split', 'Sharp', 'AC2-0009', '119196', '½ PK', 'Default Ruangan', 'Pembelian', '2011', 3315000, 'Baik', 'Default Keterangan'),
(26, '1763289711389-AC2-0011.png', '1763289711424-AC2-0011.jpg', 269, '1.1.3.02.01.04.026', 'Ac Split', 'Polytron', 'AC2-0011', '12030699', 'Default PK', 'Default Ruangan', 'Pembelian', '2013', 3880000, 'Baik', 'Default Keterangan'),
(27, '1763289711466-AC2-0012.png', '1763289711509-AC2-0012.jpg', 270, '1.1.3.02.01.04.027', 'Ac Split', 'Electrolux', 'AC2-0012', '94301321', 'Default PK', 'Bidang P2KPKL', 'Pembelian', '2013', 4890000, 'Baik', 'Default Keterangan'),
(28, '1763289711576-AC2-0013.png', '1763289711620-AC2-0013.jpg', 271, '1.1.3.02.01.04.028', 'Ac Split', 'Polytron', 'AC2-0013', '23B00550', '1 PK', 'Default Ruangan', 'Pembelian', '2013', 4893750, 'Baik', 'Default Keterangan'),
(29, '1763289711663-AC2-0014.png', '1763289711698-AC2-0014.jpg', 272, '1.1.3.02.01.04.029', 'Ac Split', 'Polytron', 'AC2-0014', '23B00545', '1 PK', 'Default Ruangan', 'Pembelian', '2013', 4893750, 'Baik', 'Default Keterangan'),
(30, '1763289711750-AC2-0015.png', '1763289711786-AC2-0015.jpg', 273, '1.1.3.02.01.04.030', 'Ac Split', 'Sharp', 'AC2-0015', '3472740017035', '1 PK', 'Default Ruangan', 'Pembelian', '2015', 5028700, 'Baik', 'Default Keterangan'),
(31, '1763289711830-AC2-0016.png', '1763289711866-AC2-0016.jpg', 274, '1.1.3.02.01.04.031', 'Ac Split', 'Panasonic', 'AC2-0016', '7157410258', '1½ PK', 'Default Ruangan', 'Pembelian', '2008', 7500000, 'Baik', 'Default Keterangan'),
(32, '1763289711918-AC0018.png', '1763289711952-AC0018.jpg', 275, '1.1.3.02.01.04.032', 'Ac Split', 'Sharp', 'AC0018', '116447', '1 PK', 'Default Ruangan', 'Pembelian', '2010', 4500000, 'Baik', 'Default Keterangan'),
(33, '1763289712002-AC0019.png', '1763289712041-AC0019.jpg', 276, '1.1.3.02.01.04.033', 'Ac Split', 'Sharp', 'AC0019', '9123278', '1 PK', 'Default Ruangan', 'Pembelian', '2010', 4500000, 'Baik', 'Default Keterangan'),
(34, '1763289712085-AC0020.png', '1763289712124-AC0020.jpg', 277, '1.1.3.02.01.04.034', 'Ac Split', 'Sharp', 'AC0020', '9102520', '2 PK', 'Default Ruangan', 'Pembelian', '2010', 7250000, 'Baik', 'Default Keterangan'),
(35, '1763289712170-AC0021.png', '1763289712203-AC0021.jpg', 278, '1.1.3.02.01.04.035', 'Ac Split', 'Sharp AH-A18KCY', 'AC0021', '3100890012978', '2 PK', 'Sub Bag. Kepegawaian & Perencanaan', 'Pembelian', '2010', 7250000, 'Baik', 'Default Keterangan'),
(36, '1763289712252-AC0022.png', '1763289712287-AC0022.jpg', 279, '1.1.3.02.01.04.036', 'Ac Split', 'Sharp', 'AC0022', '0114049', '1 PK', 'Default Ruangan', 'Pembelian', '2010', 4500000, 'Baik', 'Default Keterangan');

-- --------------------------------------------------------

--
-- Struktur dari tabel `alatberat`
--

CREATE TABLE `alatberat` (
  `id_alatberat` int(11) NOT NULL,
  `qrcode` varchar(255) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `id_aset` int(11) NOT NULL,
  `kode_barang` varchar(50) NOT NULL DEFAULT '1.3.1.02.01.04.001',
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

--
-- Dumping data untuk tabel `alatberat`
--

INSERT INTO `alatberat` (`id_alatberat`, `qrcode`, `gambar`, `id_aset`, `kode_barang`, `merek`, `no_registrasi`, `no_mesin`, `no_rangka`, `warna`, `harga_pembelian`, `tahun_pembuatan`, `kategori`, `pajak`, `penggunaan`, `kondisi`) VALUES
(1, '1763289443735-AB0001.png', '1763289443772-AB0001.jpg', 188, '1.2.1.02.01.01.001', 'Miitsubitshi', 'AB0001', '12DEFAULTNM', '12DEFAULTNR', 'Hitam', 15000000, '2001', 'Bouldoser', '0000-00-00', 'Operasional UPTD TPA', 'Rusak Ringan'),
(2, '1763289443857-AB0002.png', '1763289443902-AB0002.jpg', 189, '1.2.1.02.01.01.002', 'Volvo', 'AB0002', '12DEFAULTNM', '12DEFAULTNR', 'Hitam', 15000000, '2001', 'Wheel Loader', '0000-00-00', 'Operasional UPTD TPA', 'Baik'),
(3, '1763289443992-AB0003.png', '1763289444034-AB0003.jpg', 190, '1.2.1.02.01.01.003', 'Volvo', 'AB0003', '12DEFAULTNM', '12DEFAULTNR', 'Hitam', 15000000, '2001', 'Wheel Loader', '0000-00-00', 'Operasional Bidang Persampahan', 'Baik'),
(4, '1763289444110-AB0004.png', '1763289444152-AB0004.jpg', 191, '1.2.1.02.01.01.004', 'Caterpilar', 'AB0004', '12DEFAULTNM', '12DEFAULTNR', 'Hitam', 15000000, '2001', 'Dozer', '0000-00-00', 'Operasional UPTD TPA', 'Rusak Ringan'),
(5, '1763289444199-AB0005.png', '1763289444233-AB0005.jpg', 192, '1.2.1.02.01.01.005', 'Jhon Deere 310J', 'AB0005', '12DEFAULTNM', '1T0310JXCB 206170', 'Hitam', 15000000, '2001', 'Beachoe Loader', '0000-00-00', 'Operasional Bidang Persampahan', 'Rusak Ringan'),
(6, '1763289444301-AB0006.png', '1763289444337-AB0006.jpg', 193, '1.2.1.02.01.01.006', 'Volvo', 'AB0006', '12DEFAULTNM', '12DEFAULTNR', 'Hitam', 15000000, '2001', 'Excavator', '0000-00-00', 'Operasional UPTD TPA', 'Baik'),
(7, '1763289444392-AB0007.png', '1763289444429-AB0007.jpg', 194, '1.2.1.02.01.01.007', 'Caterpilar', 'AB0007', '12DEFAULTNM', '12DEFAULTNR', 'Hitam', 15000000, '2001', 'Excavator', '0000-00-00', 'Operasional UPTD TPA', 'Rusak Ringan'),
(8, '1763289444483-AB0008.png', '1763289444517-AB0008.jpg', 195, '1.2.1.02.01.01.008', 'HAKO City Master 1250 MP ', 'AB0008', '12DEFAULTNM', '12DEFAULTNR', 'Hitam', 15000000, '2001', 'Road Sweeper', '0000-00-00', 'Operasional UPTD TPA', 'Baik');

-- --------------------------------------------------------

--
-- Struktur dari tabel `alatkerja`
--

CREATE TABLE `alatkerja` (
  `id_alatkerja` int(11) NOT NULL,
  `qrcode` varchar(255) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `id_aset` int(11) NOT NULL,
  `kode_barang` varchar(50) NOT NULL DEFAULT '1.3.1.02.01.04.001',
  `nama_barang` varchar(255) NOT NULL DEFAULT 'Chain saw',
  `merek` varchar(255) NOT NULL,
  `no_registrasi` varchar(255) NOT NULL,
  `no_serial` varchar(255) NOT NULL,
  `asal` varchar(255) NOT NULL,
  `tahun_pembelian` year(4) NOT NULL,
  `harga_pembelian` int(255) NOT NULL,
  `kondisi` varchar(255) NOT NULL,
  `pemegang` varchar(255) NOT NULL DEFAULT 'Kantor DLH',
  `keterangan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `alatkerja`
--

INSERT INTO `alatkerja` (`id_alatkerja`, `qrcode`, `gambar`, `id_aset`, `kode_barang`, `nama_barang`, `merek`, `no_registrasi`, `no_serial`, `asal`, `tahun_pembelian`, `harga_pembelian`, `kondisi`, `pemegang`, `keterangan`) VALUES
(1, '1763289607460-AK1-0019.png', '1763289607556-AK1-0019.jpg', 196, '1.6.2.02.01.04.001', 'Mesin', 'STHIL 070 ', 'AK1-0019', 'S186585781-S', 'Pembelian', '2019', 22700000, 'Baik', 'Default', 'Tidak Diketahui Keberadaan'),
(2, '1763289607673-AK1-0020.png', '1763289607723-AK1-0020.jpg', 197, '1.6.2.02.01.04.002', 'Mesin', 'STHIL 070 ', 'AK1-0020', 'S186585785-S', 'Pembelian', '2019', 22700000, 'Baik', 'Default', 'Default Keterangan'),
(3, '1763289607809-AK1-0021.png', '1763289607851-AK1-0021.jpg', 198, '1.6.2.02.01.04.003', 'Mesin', 'STHIL 070 ', 'AK1-0021', 'S186585783-S', 'Pembelian', '2019', 22700000, 'Baik', 'Default', 'Default Keterangan'),
(4, '1763289607915-AK1-0022.png', '1763289607958-AK1-0022.jpg', 199, '1.6.2.02.01.04.004', 'Mesin', 'STHIL 070 ', 'AK1-0022', 'S186585788-S', 'Pembelian', '2019', 22700000, 'Rusak Ringan', 'Default', 'Default Keterangan'),
(5, '1763289608023-AK1-0023.png', '1763289608070-AK1-0023.jpg', 200, '1.6.2.02.01.04.005', 'Mesin', 'STHIL 070 ', 'AK1-0023', 'S186544414-S', 'Pembelian', '2019', 22700000, 'Baik', 'Default', 'Default Keterangan'),
(6, '1763289608140-AK1-0024.png', '1763289608176-AK1-0024.jpg', 201, '1.6.2.02.01.04.006', 'Mesin', 'STHIL/MS-382', 'AK1-0024', '368746674-S', 'Pembelian', '2019', 11300000, 'Baik', 'Default', 'Tidak Diketahui Keberadaan'),
(7, '1763289608249-AK1-0025.png', '1763289608296-AK1-0025.jpg', 202, '1.6.2.02.01.04.007', 'Mesin', 'STHIL/MS-382', 'AK1-0025', '368746735-S', 'Pembelian', '2019', 11300000, 'Baik', 'Default', 'Tidak Diketahui Keberadaan'),
(8, '1763289608360-AK1-0026.png', '1763289608396-AK1-0026.jpg', 203, '1.6.2.02.01.04.008', 'Mesin', 'STHIL/MS-382', 'AK1-0026', '368746750-S', 'Pembelian', '2019', 11300000, 'Baik', 'Default', 'Tidak Diketahui Keberadaan'),
(9, '1763289608483-AK1-0027.png', '1763289608529-AK1-0027.jpg', 204, '1.6.2.02.01.04.009', 'Mesin', 'STHIL/MS-382', 'AK1-0027', '368746695-S', 'Pembelian', '2019', 11300000, 'Rusak Ringan', 'Default', 'Default Keterangan'),
(10, '1763289608597-AK1-0028.png', '1763289608636-AK1-0028.jpg', 205, '1.6.2.02.01.04.010', 'Mesin', 'STIHL-070/MS720', 'AK1-0028', '5180540092', 'Pembelian', '2021', 22250000, 'Baik', 'Default', 'Default Keterangan'),
(11, '1763289608695-AK1-0029.png', '1763289608731-AK1-0029.jpg', 206, '1.6.2.02.01.04.011', 'Mesin', 'STIHL-070/MS720', 'AK1-0029', '5187125574', 'Pembelian', '2021', 22250000, 'Baik', 'Default', 'Default Keterangan'),
(12, '1763289608814-AK1-0030.png', '1763289608853-AK1-0030.jpg', 207, '1.6.2.02.01.04.012', 'Mesin', 'STIHL-070/MS720', 'AK1-0030', 'S186918350', 'Pembelian', '2021', 22250000, 'Baik', 'Default', 'Default Keterangan'),
(13, '1763289608944-AK1-0031.png', '1763289608994-AK1-0031.jpg', 208, '1.6.2.02.01.04.013', 'Mesin', 'STILH-MS382', 'AK1-0031', '370544624', 'Pembelian', '2021', 10750000, 'Baik', 'Default', 'Default Keterangan'),
(14, '1763289609053-AK1-0032.png', '1763289609095-AK1-0032.jpg', 209, '1.6.2.02.01.04.014', 'Mesin', 'STILH-MS382', 'AK1-0032', '370544630', 'Pembelian', '2021', 10750000, 'Rusak Ringan', 'Default', 'Default Keterangan'),
(15, '1763289609193-AK1-0033.png', '1763289609242-AK1-0033.jpg', 210, '1.6.2.02.01.04.015', 'Mesin', 'STILH-MS382', 'AK1-0033', '370674978', 'Pembelian', '2021', 10750000, 'Baik', 'Default', 'Default Keterangan'),
(16, '1763289609313-AK1-0034.png', '1763289609357-AK1-0034.jpg', 211, '1.6.2.02.01.04.016', 'Mesin', 'STILH-MS382', 'AK1-0034', '370675080', 'Pembelian', '2021', 10750000, 'Baik', 'Default', 'Default Keterangan'),
(17, '1763289609443-AK1-0035.png', '1763289609486-AK1-0035.jpg', 212, '1.6.2.02.01.04.017', 'Mesin', 'STILH-MS382', 'AK1-0035', '370675081', 'Pembelian', '2021', 10750000, 'Baik', 'Default', 'Default Keterangan'),
(18, '1763289609563-AK1-0036.png', '1763289609606-AK1-0036.jpg', 213, '1.6.2.02.01.04.018', 'Mesin', 'STILH-MS382', 'AK1-0036', '370674982', 'Pembelian', '2021', 10750000, 'Baik', 'Default', 'Default Keterangan'),
(19, '1763289609662-AK1-0037.png', '1763289609705-AK1-0037.jpg', 214, '1.6.2.02.01.04.019', 'Mesin', 'STILH-MS382', 'AK1-0037', '370544634', 'Pembelian', '2021', 10750000, 'Baik', 'Default', 'Default Keterangan'),
(20, '1763289609770-AK1-0038.png', '1763289609818-AK1-0038.jpg', 215, '1.6.2.02.01.04.020', 'Mesin', 'STILH-MS382', 'AK1-0038', '370544628', 'Pembelian', '2021', 10750000, 'Baik', 'Default', 'Default Keterangan'),
(21, '1763289609881-AK1-0039.png', '1763289609925-AK1-0039.jpg', 216, '1.6.2.02.01.04.021', 'Mesin', 'STILH-MS382', 'AK1-0039', '370036457', 'Pembelian', '2021', 10750000, 'Baik', 'Default', 'Tidak Diketahui Keberadaan'),
(22, '1763289609980-AK0013.png', '1763289610018-AK0013.jpg', 217, '1.6.2.02.01.04.022', 'Mesin', 'HONDA / UMR 435T', 'AK0013', 'GCAMT3309189', 'Pembelian', '2014', 6170000, 'Baik', 'Default', 'Tidak Diketahui Keberadaan'),
(23, '1763289610077-AK0014.png', '1763289610114-AK0014.jpg', 218, '1.6.2.02.01.04.023', 'Mesin', 'HONDA / UMR 435T', 'AK0014', 'GCAMT3309200', 'Pembelian', '2014', 6170000, 'Baik', 'Default', 'Tidak Diketahui Keberadaan'),
(24, '1763289610168-AK0015.png', '1763289610207-AK0015.jpg', 219, '1.6.2.02.01.04.024', 'Mesin', 'HONDA / UMR 435T', 'AK0015', 'GCAMT3309198', 'Pembelian', '2014', 6170000, 'Rusak Berat', 'Default', 'Default Keterangan'),
(25, '1763289610278-AK0018.png', '1763289610326-AK0018.jpg', 220, '1.6.2.02.01.04.025', 'Mesin', 'Honda', 'AK0018', 'GX35', 'Pembelian', '2017', 10700000, 'Rusak Berat', 'Default', 'Default Keterangan'),
(26, '1763289610392-AK2-0019.png', '1763289610431-AK2-0019.jpg', 221, '1.6.2.02.01.04.026', 'Mesin', 'Honda', 'AK2-0019', 'GCAMT-4774912', 'Pembelian', '2017', 10700000, 'Baik', 'Default', 'Default Keterangan'),
(27, '1763289610486-AK2-0020.png', '1763289610528-AK2-0020.jpg', 222, '1.6.2.02.01.04.027', 'Mesin', 'HONDA', 'AK2-0020', 'GCAMT-4474653', 'Pembelian', '2017', 5350000, 'Rusak Berat', 'Default', 'Default Keterangan'),
(28, '1763289610594-AK2-0022.png', '1763289610634-AK2-0022.jpg', 223, '1.6.2.02.01.04.028', 'Mesin', 'Honda GCAMT ', 'AK2-0022', 'GCAMT-5336924', 'Pembelian', '2018', 5350000, 'Baik', 'Default', 'Default Keterangan'),
(29, '1763289610705-AK2-0023.png', '1763289610742-AK2-0023.jpg', 224, '1.6.2.02.01.04.029', 'Mesin', 'HONDA GX35 ', 'AK2-0023', 'GCAMT-5329226', 'Pembelian', '2019', 5500000, 'Baik', 'Default', 'Default Keterangan'),
(30, '1763289610797-AK2-0024.png', '1763289610836-AK2-0024.jpg', 225, '1.6.2.02.01.04.030', 'Mesin', 'HONDA GX35 ', 'AK2-0024', 'GCAMT-5334830', 'Pembelian', '2019', 5500000, 'Rusak Berat', 'Default', 'Default Keterangan'),
(31, '1763289610895-AK2-0025.png', '1763289610930-AK2-0025.jpg', 226, '1.6.2.02.01.04.031', 'Mesin', 'HONDA GX35 ', 'AK2-0025', 'GCAMT-5329210', 'Pembelian', '2019', 5500000, 'Baik', 'Default', 'Default Keterangan'),
(32, '1763289610981-AK2-0026.png', '1763289611023-AK2-0026.jpg', 227, '1.6.2.02.01.04.032', 'Mesin', 'HONDA GX35 ', 'AK2-0026', 'GCAMT-5334798', 'Pembelian', '2019', 5500000, 'Baik', 'Default', 'Default Keterangan'),
(33, '1763289611077-AK2-0027.png', '1763289611115-AK2-0027.jpg', 228, '1.6.2.02.01.04.033', 'Mesin', 'HONDA GX35 ', 'AK2-0027', 'GCAMT-5334808', 'Pembelian', '2019', 5500000, 'Rusak Berat', 'Default', 'Default Keterangan'),
(34, '1763289611168-AK2-0028.png', '1763289611206-AK2-0028.jpg', 229, '1.6.2.02.01.04.034', 'Mesin', 'HONDA GX35 ', 'AK2-0028', 'GCAMT-5334811', 'Pembelian', '2019', 5500000, 'Rusak Berat', 'Default', 'Default Keterangan'),
(35, '1763289611465-AK2-0029.png', '1763289611547-AK2-0029.jpg', 230, '1.6.2.02.01.04.035', 'Mesin', 'Honda', 'AK2-0029', 'GCAMT-7038827', 'Pembelian', '2021', 5500000, 'Baik', 'Default', 'Default Keterangan'),
(36, '1763289611659-AK2-0030.png', '1763289611701-AK2-0030.jpg', 231, '1.6.2.02.01.04.036', 'Mesin', 'Matsumoto Platinum / YX35', 'AK2-0030', '-01', 'Pembelian', '2021', 5000000, 'Baik', 'Default', 'Default Keterangan'),
(37, '1763289611765-AK2-0031.png', '1763289611805-AK2-0031.jpg', 232, '1.6.2.02.01.04.037', 'Mesin', 'Matsumoto Platinum / YX35', 'AK2-0031', '-02', 'Pembelian', '2021', 5000000, 'Baik', 'Default', 'Default Keterangan'),
(38, '1763289611864-AK2-0032.png', '1763289611899-AK2-0032.jpg', 233, '1.6.2.02.01.04.038', 'Mesin', 'Matsumoto Platinum / YX35', 'AK2-0032', '-03', 'Pembelian', '2021', 5000000, 'Baik', 'Default', 'Default Keterangan'),
(39, '1763289611962-AK2-0033.png', '1763289611999-AK2-0033.jpg', 234, '1.6.2.02.01.04.039', 'Mesin', 'Matsumoto Platinum / YX35', 'AK2-0033', '-04', 'Pembelian', '2021', 5000000, 'Baik', 'Default', 'Default Keterangan'),
(40, '1763289612056-AK2-0034.png', '1763289612096-AK2-0034.jpg', 235, '1.6.2.02.01.04.040', 'Mesin', 'Matsumoto Platinum / YX35', 'AK2-0034', '-05', 'Pembelian', '2021', 5000000, 'Baik', 'Default', 'Default Keterangan'),
(41, '1763289612151-AK2-0035.png', '1763289612191-AK2-0035.jpg', 236, '1.6.2.02.01.04.041', 'Mesin', 'Matsumoto Platinum / YX35', 'AK2-0035', '-06', 'Pembelian', '2021', 5000000, 'Baik', 'Default', 'Default Keterangan'),
(42, '1763289612245-AK2-0036.png', '1763289612283-AK2-0036.jpg', 237, '1.6.2.02.01.04.042', 'Mesin', 'Matsumoto Platinum / YX35', 'AK2-0036', '-07', 'Pembelian', '2021', 5000000, 'Rusak Ringan', 'Default', 'Default Keterangan'),
(43, '1763289612356-AK2-0037.png', '1763289612402-AK2-0037.jpg', 238, '1.6.2.02.01.04.043', 'Mesin', 'Matsumoto Platinum / YX35', 'AK2-0037', '-08', 'Pembelian', '2021', 5000000, 'Rusak Ringan', 'Default', 'Default Keterangan'),
(44, '1763289612457-AK2-0038.png', '1763289612491-AK2-0038.jpg', 239, '1.6.2.02.01.04.044', 'Mesin', 'HONDA / GX 35', 'AK2-0038', 'GCAMT-7038833', 'Pembelian', '2022', 5500000, 'Baik', 'Default', 'Default Keterangan'),
(45, '1763289612546-AK2-0039.png', '1763289612579-AK2-0039.jpg', 240, '1.6.2.02.01.04.045', 'Mesin', 'HONDA / GX35T', 'AK2-0039', 'HAAN-0009940', 'Pembelian', '2022', 5500000, 'Baik', 'Default', 'Default Keterangan'),
(46, '1763289612637-AK0040.png', '1763289612671-AK0040.jpg', 241, '1.6.2.02.01.04.046', 'Mesin', 'HONDA / GX35T', 'AK0040', 'HAAN-0014298', 'Pembelian', '2022', 5500000, 'Baik', 'Default', 'Default Keterangan'),
(47, '1763289612733-AK0041.png', '1763289612769-AK0041.jpg', 242, '1.6.2.02.01.04.047', 'Mesin', 'HONDA / GX35T', 'AK0041', 'GCAMT-7403176', 'Pembelian', '2022', 11000000, 'Baik', 'Default', 'Default Keterangan'),
(48, '1763289612825-AK0042.png', '1763289612859-AK0042.jpg', 243, '1.6.2.02.01.04.048', 'Mesin', 'HONDA / GX35T', 'AK0042', 'GCAMT-7403178', 'Pembelian', '2022', 11000000, 'Baik', 'Default', 'Default Keterangan');

-- --------------------------------------------------------

--
-- Struktur dari tabel `aset`
--

CREATE TABLE `aset` (
  `id_aset` int(11) NOT NULL,
  `no_unik` varchar(255) NOT NULL,
  `jenis` enum('kendaraan','ac','alatberat','alatkerja') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `aset`
--

INSERT INTO `aset` (`id_aset`, `no_unik`, `jenis`) VALUES
(1, 'DN 3745 A', 'kendaraan'),
(2, 'DN 3743 A', 'kendaraan'),
(3, 'DN 4958 A', 'kendaraan'),
(4, 'DN 5697 A', 'kendaraan'),
(5, 'DN 3407 A', 'kendaraan'),
(6, 'DN 5288 AD', 'kendaraan'),
(7, 'DN 3404 A', 'kendaraan'),
(8, 'DN 3249 A', 'kendaraan'),
(9, 'DN 3250 A', 'kendaraan'),
(10, 'DN 3251 A', 'kendaraan'),
(11, 'DN 3511 A', 'kendaraan'),
(12, 'DN 3509 A', 'kendaraan'),
(13, 'DN 3478 A', 'kendaraan'),
(14, 'DN 5294 A', 'kendaraan'),
(15, 'DN 3395 A', 'kendaraan'),
(16, 'DN 5426 A', 'kendaraan'),
(17, 'DN 3835 A', 'kendaraan'),
(18, 'DN 3836 A', 'kendaraan'),
(19, 'DN 3839 A', 'kendaraan'),
(20, 'DN 6268 A', 'kendaraan'),
(21, 'DN 4827 A', 'kendaraan'),
(22, 'DN 4822 A', 'kendaraan'),
(23, 'DN. 4825 A', 'kendaraan'),
(24, 'DN 4826 A', 'kendaraan'),
(25, 'DN 4830 A', 'kendaraan'),
(26, 'DN 4829 A', 'kendaraan'),
(27, 'DN 4828 A', 'kendaraan'),
(28, 'DN 3878 A', 'kendaraan'),
(29, 'DN 3884 A', 'kendaraan'),
(30, 'DN 3880 A', 'kendaraan'),
(31, 'DN 3879 A', 'kendaraan'),
(32, 'DN 3885 A', 'kendaraan'),
(33, 'DN 3883 A', 'kendaraan'),
(34, 'DN 3904 A', 'kendaraan'),
(35, 'DN 3903 A', 'kendaraan'),
(36, 'DN 6183 A', 'kendaraan'),
(37, 'DN 6184 A', 'kendaraan'),
(38, 'DN 6179 A', 'kendaraan'),
(39, 'DN 6175 A', 'kendaraan'),
(40, 'DN 6190 A', 'kendaraan'),
(41, 'DN 6182 A', 'kendaraan'),
(42, 'DN 6176 A', 'kendaraan'),
(43, 'DN 6185 A', 'kendaraan'),
(44, 'DN 6203 A', 'kendaraan'),
(45, 'DN 6178 A', 'kendaraan'),
(46, 'DN 6187 A', 'kendaraan'),
(47, 'DN 6188 A', 'kendaraan'),
(48, 'DN 6189 A', 'kendaraan'),
(49, 'DN 6192 A', 'kendaraan'),
(50, 'DN 6177 A', 'kendaraan'),
(51, 'DN 6186 A', 'kendaraan'),
(52, 'DN 6180 A', 'kendaraan'),
(53, 'DN 3150 A', 'kendaraan'),
(54, 'DN 3152 A', 'kendaraan'),
(55, 'DN 3157 A', 'kendaraan'),
(56, 'DN 6363 ST', 'kendaraan'),
(57, 'DN 8853 A', 'kendaraan'),
(58, 'DN 8169 A', 'kendaraan'),
(59, 'DN 8201 A', 'kendaraan'),
(60, 'DN 1467 A', 'kendaraan'),
(61, 'DN 128 AD', 'kendaraan'),
(62, 'DN 8014 A', 'kendaraan'),
(63, 'DN 8025 A', 'kendaraan'),
(64, 'DN 8028 A', 'kendaraan'),
(65, 'DN 1086 A', 'kendaraan'),
(66, 'DN 8379 A', 'kendaraan'),
(67, 'DN 8358 A', 'kendaraan'),
(68, 'DN 8385 A', 'kendaraan'),
(69, 'DN 8343 A', 'kendaraan'),
(70, 'DN 8388 A', 'kendaraan'),
(71, 'DN 8336 A', 'kendaraan'),
(72, 'DN 8359 A', 'kendaraan'),
(73, 'DN 8370 A', 'kendaraan'),
(74, 'DN 8377 A', 'kendaraan'),
(75, 'DN 8346 A', 'kendaraan'),
(76, 'DN 8356 A', 'kendaraan'),
(77, 'DN 8374 A', 'kendaraan'),
(78, 'DN 8352 A', 'kendaraan'),
(79, 'DN 8355 A', 'kendaraan'),
(80, 'DN 8347 A', 'kendaraan'),
(81, 'DN 8378 A', 'kendaraan'),
(82, 'DN 8376 A', 'kendaraan'),
(83, 'DN 8392 A', 'kendaraan'),
(84, 'DN 8348 A', 'kendaraan'),
(85, 'DN 8371 A', 'kendaraan'),
(86, 'DN 8382 A', 'kendaraan'),
(87, 'DN 8386 A', 'kendaraan'),
(88, 'DN 8350 A', 'kendaraan'),
(89, 'DN 8349 A', 'kendaraan'),
(90, 'DN 8381 A', 'kendaraan'),
(91, 'DN 8354 A', 'kendaraan'),
(92, 'DN 8390 A', 'kendaraan'),
(93, 'DN 8363 A', 'kendaraan'),
(94, 'DN 8351 A', 'kendaraan'),
(95, 'DN 8389 A', 'kendaraan'),
(96, 'DN 8380 A', 'kendaraan'),
(97, 'DN 8393 A', 'kendaraan'),
(98, 'DN 8365 A', 'kendaraan'),
(99, 'DN 8353 A', 'kendaraan'),
(100, 'DN 8366 A', 'kendaraan'),
(101, 'DN 8367 A', 'kendaraan'),
(102, 'DN 8360 A', 'kendaraan'),
(103, 'DN 8364 A', 'kendaraan'),
(104, 'DN 8368 A', 'kendaraan'),
(105, 'DN 8372 A', 'kendaraan'),
(106, 'DN 8391 A', 'kendaraan'),
(107, 'DN 8373 A', 'kendaraan'),
(108, 'DN 8345 A', 'kendaraan'),
(109, 'DN 8361 A', 'kendaraan'),
(110, 'DN 8387 A', 'kendaraan'),
(111, 'DN 8357 A', 'kendaraan'),
(112, 'DN 8362 A', 'kendaraan'),
(113, 'DN 8375 A', 'kendaraan'),
(114, 'DN 8426 A', 'kendaraan'),
(115, 'DN 8423 A', 'kendaraan'),
(116, 'DN 8427 A', 'kendaraan'),
(117, 'DN 8428 A', 'kendaraan'),
(118, 'DN 8407 A', 'kendaraan'),
(119, 'DN 8410 A', 'kendaraan'),
(120, 'DN 8411 A', 'kendaraan'),
(121, 'DN 8421 A', 'kendaraan'),
(122, 'DN 8424 A', 'kendaraan'),
(123, 'DN 8413 A', 'kendaraan'),
(124, 'DN 8420 A', 'kendaraan'),
(125, 'DN 8425 A', 'kendaraan'),
(126, 'DN 8416 A', 'kendaraan'),
(127, 'DN 8417 A', 'kendaraan'),
(128, 'DN 8415 A', 'kendaraan'),
(129, 'DN 8419 A', 'kendaraan'),
(130, 'DN 8412 A', 'kendaraan'),
(131, 'DN 8408 A', 'kendaraan'),
(132, 'DN 8409 A', 'kendaraan'),
(133, 'DN 8414 A', 'kendaraan'),
(134, 'DN 8422 A', 'kendaraan'),
(135, 'DN 8418 A', 'kendaraan'),
(136, 'DN 8430 A', 'kendaraan'),
(137, 'DN 8431 A', 'kendaraan'),
(138, 'DN 1011 A', 'kendaraan'),
(139, 'DN 8710 A', 'kendaraan'),
(140, 'DN 8711 A', 'kendaraan'),
(141, 'DN 8712 A', 'kendaraan'),
(142, 'DN 8731 A', 'kendaraan'),
(143, 'DN 8730 A', 'kendaraan'),
(144, 'DN 8736 A', 'kendaraan'),
(145, 'DN 8734 A', 'kendaraan'),
(146, 'DN 8735 A', 'kendaraan'),
(147, 'DN 9069 A', 'kendaraan'),
(148, 'DN 9307 A', 'kendaraan'),
(149, 'DN 9013 A', 'kendaraan'),
(150, 'DN 7701 A', 'kendaraan'),
(151, 'DN 9312 A', 'kendaraan'),
(152, 'DN 9065 A', 'kendaraan'),
(153, 'DN 9340 A', 'kendaraan'),
(154, 'DN 9341 A', 'kendaraan'),
(155, 'DN 9342 A', 'kendaraan'),
(156, 'DN 9345 A', 'kendaraan'),
(157, 'DN 9344 A', 'kendaraan'),
(158, 'DN 9350 A', 'kendaraan'),
(159, 'DN 9351 A', 'kendaraan'),
(160, 'DN 9353 A', 'kendaraan'),
(161, 'DN 8402 A', 'kendaraan'),
(162, 'DN 8733 A', 'kendaraan'),
(163, 'DN 9314 A', 'kendaraan'),
(164, 'DN 9316 A', 'kendaraan'),
(165, 'DN 9613 A', 'kendaraan'),
(166, 'DN 8713 A', 'kendaraan'),
(167, 'DN 8714 A', 'kendaraan'),
(168, 'DN 8715 A', 'kendaraan'),
(169, 'DN 9002 P', 'kendaraan'),
(170, 'DN 8302 A', 'kendaraan'),
(171, 'DN 8301 A', 'kendaraan'),
(172, 'DN 8331 A', 'kendaraan'),
(173, 'DN 8327 A', 'kendaraan'),
(174, 'DN 8334 A', 'kendaraan'),
(175, 'DN 8326 A', 'kendaraan'),
(176, 'DN 8325 A', 'kendaraan'),
(177, 'DN 8324 A', 'kendaraan'),
(178, 'DN 8330 A', 'kendaraan'),
(179, 'DN 8329 A', 'kendaraan'),
(180, 'DN 8328 A', 'kendaraan'),
(181, 'DN 8335 A', 'kendaraan'),
(182, 'DN 8718 A', 'kendaraan'),
(183, 'DN 8717 A', 'kendaraan'),
(184, 'DN 8721 A', 'kendaraan'),
(185, 'DN 8719 A', 'kendaraan'),
(186, 'DN 9800 A', 'kendaraan'),
(187, 'DN 8429 A', 'kendaraan'),
(188, 'AB0001', 'alatberat'),
(189, 'AB0002', 'alatberat'),
(190, 'AB0003', 'alatberat'),
(191, 'AB0004', 'alatberat'),
(192, 'AB0005', 'alatberat'),
(193, 'AB0006', 'alatberat'),
(194, 'AB0007', 'alatberat'),
(195, 'AB0008', 'alatberat'),
(196, 'AK1-0019', 'alatkerja'),
(197, 'AK1-0020', 'alatkerja'),
(198, 'AK1-0021', 'alatkerja'),
(199, 'AK1-0022', 'alatkerja'),
(200, 'AK1-0023', 'alatkerja'),
(201, 'AK1-0024', 'alatkerja'),
(202, 'AK1-0025', 'alatkerja'),
(203, 'AK1-0026', 'alatkerja'),
(204, 'AK1-0027', 'alatkerja'),
(205, 'AK1-0028', 'alatkerja'),
(206, 'AK1-0029', 'alatkerja'),
(207, 'AK1-0030', 'alatkerja'),
(208, 'AK1-0031', 'alatkerja'),
(209, 'AK1-0032', 'alatkerja'),
(210, 'AK1-0033', 'alatkerja'),
(211, 'AK1-0034', 'alatkerja'),
(212, 'AK1-0035', 'alatkerja'),
(213, 'AK1-0036', 'alatkerja'),
(214, 'AK1-0037', 'alatkerja'),
(215, 'AK1-0038', 'alatkerja'),
(216, 'AK1-0039', 'alatkerja'),
(217, 'AK0013', 'alatkerja'),
(218, 'AK0014', 'alatkerja'),
(219, 'AK0015', 'alatkerja'),
(220, 'AK0018', 'alatkerja'),
(221, 'AK2-0019', 'alatkerja'),
(222, 'AK2-0020', 'alatkerja'),
(223, 'AK2-0022', 'alatkerja'),
(224, 'AK2-0023', 'alatkerja'),
(225, 'AK2-0024', 'alatkerja'),
(226, 'AK2-0025', 'alatkerja'),
(227, 'AK2-0026', 'alatkerja'),
(228, 'AK2-0027', 'alatkerja'),
(229, 'AK2-0028', 'alatkerja'),
(230, 'AK2-0029', 'alatkerja'),
(231, 'AK2-0030', 'alatkerja'),
(232, 'AK2-0031', 'alatkerja'),
(233, 'AK2-0032', 'alatkerja'),
(234, 'AK2-0033', 'alatkerja'),
(235, 'AK2-0034', 'alatkerja'),
(236, 'AK2-0035', 'alatkerja'),
(237, 'AK2-0036', 'alatkerja'),
(238, 'AK2-0037', 'alatkerja'),
(239, 'AK2-0038', 'alatkerja'),
(240, 'AK2-0039', 'alatkerja'),
(241, 'AK0040', 'alatkerja'),
(242, 'AK0041', 'alatkerja'),
(243, 'AK0042', 'alatkerja'),
(244, 'AC1-0002', 'ac'),
(245, 'AC1-0001', 'ac'),
(246, 'AC1-0003', 'ac'),
(247, 'AC1-0004', 'ac'),
(248, 'AC1-0005', 'ac'),
(249, 'AC1-0006', 'ac'),
(250, 'AC1-0007', 'ac'),
(251, 'AC1-0008', 'ac'),
(252, 'AC1-0009', 'ac'),
(253, 'AC1-0010', 'ac'),
(254, 'AC1-0011', 'ac'),
(255, 'AC1-0012', 'ac'),
(256, 'AC1-0013', 'ac'),
(257, 'AC1-0014', 'ac'),
(258, 'AC1-0015', 'ac'),
(259, 'AC1-0016', 'ac'),
(260, 'AC1-0017', 'ac'),
(261, 'AC2-0001', 'ac'),
(262, 'AC2-0002', 'ac'),
(263, 'AC2-0003', 'ac'),
(264, 'AC2-0004', 'ac'),
(265, 'AC2-0005', 'ac'),
(266, 'AC2-0007', 'ac'),
(267, 'AC2-0008', 'ac'),
(268, 'AC2-0009', 'ac'),
(269, 'AC2-0011', 'ac'),
(270, 'AC2-0012', 'ac'),
(271, 'AC2-0013', 'ac'),
(272, 'AC2-0014', 'ac'),
(273, 'AC2-0015', 'ac'),
(274, 'AC2-0016', 'ac'),
(275, 'AC0018', 'ac'),
(276, 'AC0019', 'ac'),
(277, 'AC0020', 'ac'),
(278, 'AC0021', 'ac'),
(279, 'AC0022', 'ac');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kendaraan`
--

CREATE TABLE `kendaraan` (
  `id_kendaraan` int(11) NOT NULL,
  `qrcode` varchar(255) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `id_aset` int(11) NOT NULL,
  `kode_barang` varchar(50) NOT NULL DEFAULT '1.3.1.02.01.04.001',
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

--
-- Dumping data untuk tabel `kendaraan`
--

INSERT INTO `kendaraan` (`id_kendaraan`, `qrcode`, `gambar`, `id_aset`, `kode_barang`, `merek`, `no_polisi`, `no_mesin`, `no_rangka`, `warna`, `harga_pembelian`, `tahun_pembuatan`, `kategori`, `pajak`, `pemegang`, `nik`, `penggunaan`, `kondisi`) VALUES
(1, '1763288653778-DN 3745 A.png', '1763288654135-DN_3745_A.jpg', 1, '1.3.1.02.01.04.005', 'Honda Vario / Ati 1121Bo1 A/T', 'DN 3745 A', 'JFH1E-1294301', 'MH1JFH111 EK293938', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'TPA', '720404010', 'Operasional UPTD TPA', 'Baik'),
(2, '1763288654203-DN 3743 A.png', '1763288654239-DN_3743_A.jpg', 2, '1.3.1.02.01.04.006', 'Honda Vario / Ati 1121B 01 A/T', 'DN 3743 A', 'JFH1E-1281323', 'MH1JFH112EK284049', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Amran Isnauna', '720404010', 'Operasional Kasubag Kepegawaian', 'Baik'),
(3, '1763288654338-DN 4958 A.png', '1763288654375-DN_4958_A.jpg', 3, '1.3.1.02.01.04.007', 'Suzuki Shogun/ Fl 125 RCD', 'DN 4958 A', 'F496-455317', 'MH8BF45SAEJ-185802', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Mirwan', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(4, '1763288654438-DN 5697 A.png', '1763288654481-DN_5697_A.jpg', 4, '1.3.1.02.01.04.008', 'Jupiter Mx 135 CC', 'DN 5697 A', '2S6-135379', 'MH32S60016K134973', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Usran', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(5, '1763288654563-DN 3407 A.png', '1763288708348-mobil.png', 5, '1.3.1.02.01.04.009', 'Honda /Nf100 Sld / Bebek', 'DN 3407 A', 'HB42E-1174368', 'MH1HB42167K1645', 'Hitam', 15000000, '2001', 'R2', '1899-11-30', 'Dedi', '720404010', 'Operasional Work Shoop', 'Baik'),
(6, '1763288654660-DN 5288 AD.png', '1763288654693-DN_5288_AD.jpg', 6, '1.3.1.02.01.04.010', 'Honda Gl 160 D / Bebek', 'DN 5288 AD', 'KC12E-1039282', 'MH1KC12117K039197', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Nyoman', '720404010', 'Operasional Work Shoop', 'Rusak Ringan'),
(7, '1763288654754-DN 3404 A.png', '1763288654789-DN_3404_A.jpg', 7, '1.3.1.02.01.04.011', 'Suzuki Shogun / Fd 125 Xrm', 'DN 3404 A', 'F404-1D190175', 'MH8FD125R7J190161', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'PENGHAPUSAN', '720404010', 'Operasional Pengawas TPU ', 'Rusak Berat'),
(8, '1763288654845-DN 3249 A.png', '1763288654882-DN_3249_A.jpg', 8, '1.3.1.02.01.04.012', 'Yamaha Xeon M/T', 'DN 3249 A', '44D-124054', 'MH344D001BK124034', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'PENGHAPUSAN', '720404010', 'Operasional Bidang RTH', 'Baik'),
(9, '1763288654939-DN 3250 A.png', '1763288654982-DN_3250_A.jpg', 9, '1.3.1.02.01.04.013', 'Yamaha Xeon M/T', 'DN 3250 A', '44D-109754', 'MH344D001BK109764', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Deslina', '720404010', 'Operasional Bid. Penataan', 'Baik'),
(10, '1763288655038-DN 3251 A.png', '1763288655084-DN_3251_A.jpg', 10, '1.3.1.02.01.04.014', 'Yamaha Xeon M/T', 'DN 3251 A', '44D-098519', 'MH344D001AK098479', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'PENGHAPUSAN', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(11, '1763288655133-DN 3511 A.png', '1763288655168-DN_3511_A.jpg', 11, '1.3.1.02.01.04.015', 'Honda NF12A1C M/T', 'DN 3511 A', 'JBF1E-1039932', 'MH1JBF119CK040380', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Jumadil', '720404010', 'Operasional Pengawas Taman (RTH)', 'Baik'),
(12, '1763288655240-DN 3509 A.png', '1763288655287-DN_3509_A.jpg', 12, '1.3.1.02.01.04.016', 'Honda Nf125Trf Supra X', 'DN 3509 A', 'JBF1E-1052032', 'MH1JBF114CK052436', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Anita, S.A.P', '720404010', 'Oprasional Sub Kepegawaian', 'Baik'),
(13, '1763288655347-DN 3478 A.png', '1763288655380-DN_3478_A.jpg', 13, '1.3.1.02.01.04.017', 'Honda NF11C1CA M/T (OR)', 'DN 3478 A', 'JBH1E-1306984', 'MH1JBH110CK311452', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Desti Rante Alo', '720404010', 'Operasional Bidang P2PKPL', 'Baik'),
(14, '1763288655442-DN 5294 A.png', '1763288655480-DN_5294_A.jpg', 14, '1.3.1.02.01.04.018', 'Honda WIN / Mcb 97Cc', 'DN 5294 A', 'HBDE-1137802', 'MH1HABD1X5K138911', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Ishar', '720404010', 'Operasional Pengawas Taman (RTH)', 'Baik'),
(15, '1763288655536-DN 3395 A.png', '1763288655571-DN_3395_A.jpg', 15, '1.3.1.02.01.04.019', 'Honda Supra/Nf 100 SLD', 'DN 3395 A', 'HB42E-1169735', 'MH1HB42147K164984', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Tamsir U', '720404010', 'Operasional Pengawas Taman (RTH)', 'Baik'),
(16, '1763288655625-DN 5426 A.png', '1763288655664-DN_5426_A.jpg', 16, '1.3.1.02.01.04.020', 'Honda Revo 125', 'DN 5426 A', 'JBK3E-1091626', 'MH1JBK3197K092179', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Andres', '720404010', 'Ops. Pengawas Penebangan (RTH)', 'Baik'),
(17, '1763288655715-DN 3835 A.png', '1763288655754-DN_3835_A.jpg', 17, '1.3.1.02.01.04.021', 'Honda New Vario 125', 'DN 3835 A', 'JFU1E-1241658', 'MH1JFU116FK240596', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Syawal Ibrahim, A.Md', '720404010', 'Ops. Kasubag Keuangan', 'Baik'),
(18, '1763288655807-DN 3836 A.png', '1763288655849-DN_3836_A.jpg', 18, '1.3.1.02.01.04.022', 'Honda New Vario 125', 'DN 3836 A', 'JFU1E-1232498', 'MH1JFU118FK232774', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Elni Amir', '720404010', 'Ops. Bendahara Penerima', 'Baik'),
(19, '1763288655893-DN 3839 A.png', '1763288655930-DN_3839_A.jpg', 19, '1.3.1.02.01.04.023', 'Honda New Vario 125', 'DN 3839 A', 'JFU1E-1245367', 'MH1JFU110FK245406', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Akhir Lamantu, A.Md', '720404010', 'Operasional Bendahara Pengeluaran', 'Baik'),
(20, '1763288655991-DN 6268 A.png', '1763288656034-DN_6268_A.jpg', 20, '1.3.1.02.01.04.024', 'Honda New Vario 125', 'DN 6268 A', 'JFU1E-1245367', 'MH1JFU115FK245403', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Silvana, ST.MSc', '720404010', 'Operasional Bid. Penataan', 'Baik'),
(21, '1763288656085-DN 4827 A.png', '1763288656121-DN_4827_A.jpg', 21, '1.3.1.02.01.04.025', 'Honda / Ne12A1C / Nf12A1Cf M/T', 'DN 4827 A', 'JBG1E-1159970', 'MH1JBG114EK160225', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Parman', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(22, '1763288656172-DN 4822 A.png', '1763288656210-DN_4822_A.jpg', 22, '1.3.1.02.01.04.026', 'Honda / Ne12A1C / Nf12A1Cf M/T', 'DN 4822 A', 'JBG1E-1159916', 'MH1JBG11XEK160231', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'TPA', '720404010', 'Operasional UPTD TPA', 'Baik'),
(23, '1763288656306-DN. 4825 A.png', '1763288656341-DN._4825_A.jpg', 23, '1.3.1.02.01.04.027', 'Honda / Ne12A1C / Nf12A1Cf M/T', 'DN. 4825 A', 'JBG1E-1160053', 'MH1JBG113EK160359', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Jun', '720404010', 'Operasional Pengurus Barang', 'Baik'),
(24, '1763288656399-DN 4826 A.png', '1763288656441-DN_4826_A.jpg', 24, '1.3.1.02.01.04.028', 'Honda / Ne12A1C / Nf12A1Cf M/T', 'DN 4826 A', 'JBG1E-1159712', 'MH1JBG116EK160260', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Ramlin', '720404010', 'Operasional Pemb. Pengurus Barang', 'Baik'),
(25, '1763288656504-DN 4830 A.png', '1763288656540-DN_4830_A.jpg', 25, '1.3.1.02.01.04.029', 'Honda / Ne12A1 / Nf1 2A1 Cf M/T', 'DN 4830 A', 'JBG1E-1160070', 'MH1JBG17EK160316', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Moh. Irwansyah', '720404010', 'Operasional Korcam', 'Baik'),
(26, '1763288656599-DN 4829 A.png', '1763288656634-DN_4829_A.jpg', 26, '1.3.1.02.01.04.030', 'Honda / Ne1 / Nf1 2A1Cf M/T', 'DN 4829 A', 'JBG1E-1160096', 'MH1JBG13EK160314', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Fredik Nante', '720404010', 'Ops. Pengawas Penebangan (RTH)', 'Baik'),
(27, '1763288656693-DN 4828 A.png', '1763288656730-DN_4828_A.jpg', 27, '1.3.1.02.01.04.031', 'Honda / Ne1 / Nf1 2A1Cft M/T', 'DN 4828 A', 'JBG1E-1158863', 'MH1JBG11XEK159192', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Moh. Suhari', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(28, '1763288656780-DN 3878 A.png', '1763288656816-DN_3878_A.jpg', 28, '1.3.1.02.01.04.032', 'Honda Beat D1B02N13L2 A/T', 'DN 3878 A', 'JM11E - 1302884', 'MH 1 JM1116HK311285', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'TPA', '720404010', 'Operasional UPTD TPA', 'Baik'),
(29, '1763288656866-DN 3884 A.png', '1763288656907-DN_3884_A.jpg', 29, '1.3.1.02.01.04.033', 'Honda Beat D1B02N13L2 A/T', 'DN 3884 A', 'JM11E - 1288734', 'MH 1 JM1114HK296964', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Arsid', '720404010', 'Operasional Korcam', 'Baik'),
(30, '1763288656961-DN 3880 A.png', '1763288656995-DN_3880_A.jpg', 30, '1.3.1.02.01.04.034', 'Honda Beat D1B02N13L2 A/T', 'DN 3880 A', 'JM11E - 11294398', 'MH 1 JM111XHK305005', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Abd. Musawir', '720404010', 'Operasional Korcam', 'Baik'),
(31, '1763288657045-DN 3879 A.png', '1763288657083-DN_3879_A.jpg', 31, '1.3.1.02.01.04.035', 'Honda Beat D1B02N13L2 A/T', 'DN 3879 A', 'JM11E - 1299375', 'MH 1 JM1118HK310316', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Sofyan', '720404010', 'Operasional Korcam', 'Baik'),
(32, '1763288657138-DN 3885 A.png', '1763288657174-DN_3885_A.jpg', 32, '1.3.1.02.01.04.036', 'Honda Beat D1B02N13L2 A/T', 'DN 3885 A', 'JM11E - 1285561', 'MH 1 JM1115HK294768', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Robin', '720404010', 'Operasional Korcam', 'Baik'),
(33, '1763288657224-DN 3883 A.png', '1763288657265-DN_3883_A.jpg', 33, '1.3.1.02.01.04.037', 'Honda Beat D1B02N13L2 A/T', 'DN 3883 A', 'JM11E - 1075046', 'MH 1 JM1114GK077548', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Kadis', '720404010', 'Operasional Korcam', 'Baik'),
(34, '1763288657320-DN 3904 A.png', '1763288657353-DN_3904_A.jpg', 34, '1.3.1.02.01.04.038', 'Honda Beat / D1B02N13L2 A/T', 'DN 3904 A', 'JM11E-1777801', 'MH1JM1115JK794824', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Ratna, S.E', '720404010', 'Oprasional Kasub Perencanaan ', 'Baik'),
(35, '1763288657404-DN 3903 A.png', '1763288657450-DN_3903_A.jpg', 35, '1.3.1.02.01.04.039', 'Honda Beat / D1B02N13L2 A/T', 'DN 3903 A', 'JM11E-1759143', 'MH1JM1116JK776185', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Agus Winarno, S.T', '720404010', 'Oprasional Bid. Penataan', 'Baik'),
(36, '1763288657497-DN 6183 A.png', '1763288657533-DN_6183_A.jpg', 36, '1.3.1.02.01.04.040', 'Honda / Vario 125 Cbs', 'DN 6183 A', 'JM41E1793061', 'JM4111MK793675', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Almin Ly', '720404010', 'Operasional Korcam', 'Baik'),
(37, '1763288657589-DN 6184 A.png', '1763288657622-DN_6184_A.jpg', 37, '1.3.1.02.01.04.041', 'Honda / Vario 125 Cbs', 'DN 6184 A', 'JM41E1792485', 'JM4116MK793056', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Arsyad', '720404010', 'Operasional Korcam', 'Baik'),
(38, '1763288657683-DN 6179 A.png', '1763288657725-DN_6179_A.jpg', 38, '1.3.1.02.01.04.042', 'Honda / Vario 125 Cbs', 'DN 6179 A', 'JM41E1793431', 'JM411XMK780567', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Sahrudin', '720404010', 'Operasional Korcam', 'Baik'),
(39, '1763288657770-DN 6175 A.png', '1763288657814-DN_6175_A.jpg', 39, '1.3.1.02.01.04.043', 'Honda / Vario 125 Cbs', 'DN 6175 A', 'JM41E1788947', 'JM4111MK789531', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Mohammad Jufri', '720404010', 'Operasional Korcam', 'Baik'),
(40, '1763288657861-DN 6190 A.png', '1763288657897-DN_6190_A.jpg', 40, '1.3.1.02.01.04.044', 'Honda / Vario 125 Cbs', 'DN 6190 A', 'JM41E1788680', 'JM4115MK789273', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Sahar', '720404010', 'Operasional Korcam', 'Baik'),
(41, '1763288657947-DN 6182 A.png', '1763288657981-DN_6182_A.jpg', 41, '1.3.1.02.01.04.045', 'Honda / Vario 125 Cbs', 'DN 6182 A', 'JM41E1793089', 'JM4112MK793667', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Makmur Hamsudin', '720404010', 'Operasional Korcam', 'Baik'),
(42, '1763288658039-DN 6176 A.png', '1763288658077-DN_6176_A.jpg', 42, '1.3.1.02.01.04.046', 'Honda / Vario 125 Cbs', 'DN 6176 A', 'JM41E1789050', 'JM4117MK789632', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Erfin', '720404010', 'Operasional Korcam', 'Baik'),
(43, '1763288658122-DN 6185 A.png', '1763288658232-DN_6185_A.jpg', 43, '1.3.1.02.01.04.047', 'Honda / Vario 125 Cbs', 'DN 6185 A', 'JM41E1792464', 'JM4110MK793036', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Moh. Yasin Jalil', '720404010', 'Operasional Korcam', 'Baik'),
(44, '1763288658314-DN 6203 A.png', '1763288658349-DN_6203_A.jpg', 44, '1.3.1.02.01.04.048', 'Honda / Vario 125 Cbs', 'DN 6203 A', 'JM41E1783256', 'JM4111MK781834', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Rini Anggraini', '720404010', 'Operasional Bidang P2PKPL', 'Baik'),
(45, '1763288658403-DN 6178 A.png', '1763288658440-DN_6178_A.jpg', 45, '1.3.1.02.01.04.049', 'Honda / Vario 125 Cbs', 'DN 6178 A', 'JM41E1790003', 'JM411XMK790192', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Ariyadin, S.A.P', '720404010', 'Ops. Koordinator Penagih Retribusi', 'Baik'),
(46, '1763288658491-DN 6187 A.png', '1763288658529-DN_6187_A.jpg', 46, '1.3.1.02.01.04.050', 'Honda / Vario 125 Cbs', 'DN 6187 A', 'JM41E1791952', 'JM4115MK792593', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Arifin Moh. Saidin', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(47, '1763288658577-DN 6188 A.png', '1763288658612-DN_6188_A.jpg', 47, '1.3.1.02.01.04.051', 'Honda / Vario 125 Cbs', 'DN 6188 A', 'JM41E1791987', 'JM4114MK792584', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Kamrin', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(48, '1763288658666-DN 6189 A.png', '1763288658700-DN_6189_A.jpg', 48, '1.3.1.02.01.04.052', 'Honda / Vario 125 Cbs', 'DN 6189 A', 'JM41E1792025', 'JM4118MK792541', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Moh. Ali Akbar', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(49, '1763288658755-DN 6192 A.png', '1763288658793-DN_6192_A.jpg', 49, '1.3.1.02.01.04.053', 'Honda / Vario 125 Cbs', 'DN 6192 A', 'JM41E1792041', 'JM4119MK792547', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Bambang', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(50, '1763288658837-DN 6177 A.png', '1763288658874-DN_6177_A.jpg', 50, '1.3.1.02.01.04.054', 'Honda / Vario 125 Cbs', 'DN 6177 A', 'JM41E1777380', 'JM4115MK790259', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Mahmudin', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(51, '1763288658921-DN 6186 A.png', '1763288658956-DN_6186_A.jpg', 51, '1.3.1.02.01.04.055', 'Honda / Vario 125 Cbs', 'DN 6186 A', 'JM41E1790592', 'JM4113MK790650', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Mustar Latuo, S.A.P', '720404010', 'Operasional Sekretariat', 'Baik'),
(52, '1763288659004-DN 6180 A.png', '1763288659045-DN_6180_A.jpg', 52, '1.3.1.02.01.04.056', 'Honda / Vario 125 Cbs', 'DN 6180 A', 'JM41E1788052', 'JM4114MK790222', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Dirwan', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(53, '1763288659100-DN 3150 A.png', '1763288659136-DN_3150_A.jpg', 53, '1.3.1.02.01.04.057', 'Honda / Beat Street', 'DN 3150 A', 'JM82E-1908116', 'MH1JM8215PK908623', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Syarif', '720404010', 'Operasional Pengawas Penyapu Jalan', 'Baik'),
(54, '1763288659180-DN 3152 A.png', '1763288659216-DN_3152_A.jpg', 54, '1.3.1.02.01.04.058', 'Honda / Beat Street', 'DN 3152 A', 'JM82E-1897519', 'MH1JM8215PK896124', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Ramli', '720404010', 'Operasional Pengawas Penyapu Jalan', 'Baik'),
(55, '1763288659265-DN 3157 A.png', '1763288659304-DN_3157_A.jpg', 55, '1.3.1.02.01.04.059', 'Honda / Beat Street', 'DN 3157 A', 'JM82E-1904071', 'MH1JM8215PK904562', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Ilsaf', '720404010', 'Operasional Pengawas Penyapu Jalan', 'Baik'),
(56, '1763288659351-DN 6363 ST.png', '1763288659385-DN_6363_ST.jpg', 56, '1.3.1.02.01.04.060', 'Honda / Beat Street', 'DN 6363 ST', 'JM82E-1900933', 'MH1JM8215PK901553', 'Hitam', 15000000, '2001', 'R2', '0000-00-00', 'Mustapa', '720404010', 'Operasional Pengawas Penyapu Jalan', 'Baik'),
(57, '1763288984655-DN 8853 A.png', '1763288984711-DN_8853_A.jpg', 57, '1.3.1.02.01.04.001', 'Toyota Hilux Double Cabin 4x4 M/T', 'DN 8853 A', '2KD-A147300', 'MR0FR22G4D0759232', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Hisyam Baba', '720404010', 'Operasional Kepala Bidang Peng. Persampahan dan Limbah B3', 'Baik'),
(58, '1763288984771-DN 8169 A.png', '1763288984807-DN_8169_A.jpg', 58, '1.3.1.02.01.04.002', 'Toyota Hilux Double Cabin 2.5', 'DN 8169 A', '2KDS089817', 'MHR0FR22G4C0618708', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Ibnu Mundzir', '720404010', 'Operasional Sekretaris Dinas', 'Baik'),
(59, '1763288984864-DN 8201 A.png', '1763288984906-DN_8201_A.jpg', 59, '1.3.1.02.01.04.003', 'Toyota Kijang Pick Up', 'DN 8201 A', '7K-0811353', 'MHF31KF6050044721', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Moh. Saiful', '720404010', 'Operasional UPTD Tempat Pemrosesan Akhir Sampah', 'Baik'),
(60, '1763288984961-DN 1467 A.png', '1763288984994-DN_1467_A.jpg', 60, '1.3.1.02.01.04.004', 'Toyata Avanza 1.3 Minibus 7 Penumpang', 'DN 1467 A', 'K3MD77557', 'MHKM1BA3-JEK202382', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Tatang Suratman', '720404010', 'Operasional Kepala Bidang Tata Lingkungan dan Pengendalian Pencemaran', 'Baik'),
(61, '1763288985054-DN 128 AD.png', '1763288985091-DN_128_AD.jpg', 61, '1.3.1.02.01.04.005', 'Daihatsu Xenia 1.0 Minibus 7 Penumpang', 'DN 128 AD', 'DF59379', 'MHKV1BA2JAK061728', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Moh. Crystal Malik', '720404010', 'Operasional Kabid P2PKPL', 'Baik'),
(62, '1763288985146-DN 8014 A.png', '1763288985180-DN_8014_A.jpg', 62, '1.3.1.02.01.04.007', 'Suzuki Carry Pick Up', 'DN 8014 A', 'G15AID-390722', 'MHYGDN41THJ432882', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Suharni', '720404010', 'Operasional Bidang Pengelolaan RTH ', 'Baik'),
(63, '1763288985233-DN 8025 A.png', '1763288985275-DN_8025_A.jpg', 63, '1.3.1.02.01.04.008', 'Mits. L300 Pick Up', 'DN 8025 A', '4D56C-RX1561', 'MK2L0PU39HK013529', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Abd. Razak / TRC', '720404010', 'Operasional Bidang Peng. Persampahan dan Limbah B3', 'Baik'),
(64, '1763288985338-DN 8028 A.png', '1763288985375-DN_8028_A.jpg', 64, '1.3.1.02.01.04.009', 'Suzuki Carry Pick Up', 'DN 8028 A', 'G15AID402440 ', 'MHYGDN41THJ442094 ', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Desti Rante Alo', '720404010', 'Operasional Bidang P2PKPL', 'Baik'),
(65, '1763288985450-DN 1086 A.png', '1763288985486-DN_1086_A.jpg', 65, '1.3.1.02.01.04.010', 'Toyata New Avanza G 1.5 Minibus 7 Penumpang', 'DN 1086 A', '2NR-G756950', 'MHKAB1BY5NK009219', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Herdy Firmansyah', '720404010', 'Operasional Kepala Bidang Peng. RTH', 'Baik'),
(66, '1763288985544-DN 8379 A.png', '1763288985586-DN_8379_A.jpg', 66, '1.3.1.02.01.04.011', 'Suzuki Carry Mini Dump', 'DN 8379 A', 'K15BT - 1235201', 'MHYHDC61TMJ - 211112', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Kepala UPTD TPA', 'Baik'),
(67, '1763288985643-DN 8358 A.png', '1763288985686-DN_8358_A.jpg', 67, '1.3.1.02.01.04.012', 'Suzuki Carry Mini Dump', 'DN 8358 A', 'K15BT - 1235609', 'MHYHDC61TMJ - 211235', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Birobuli Utara 01', 'Baik'),
(68, '1763288985737-DN 8385 A.png', '1763288985773-DN_8385_A.jpg', 68, '1.3.1.02.01.04.013', 'Suzuki Carry Mini Dump', 'DN 8385 A', 'K15BT - 1236438', 'MHYHDC61TMJ - 211649', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Besusu Tengah 01', 'Baik'),
(69, '1763288985833-DN 8343 A.png', '1763288985867-DN_8343_A.jpg', 69, '1.3.1.02.01.04.014', 'Suzuki Carry Mini Dump', 'DN 8343 A', 'K15BT - 1236513', 'MHYHDC61TMJ - 211709', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Birobuli Selatan 02', 'Baik'),
(70, '1763288985915-DN 8388 A.png', '1763288985952-DN_8388_A.jpg', 70, '1.3.1.02.01.04.015', 'Suzuki Carry Mini Dump', 'DN 8388 A', 'K15BT - 1236501', 'MHYHDC61TMJ - 211776', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Siranindi 01', 'Baik'),
(71, '1763288986013-DN 8336 A.png', '1763288986051-DN_8336_A.jpg', 71, '1.3.1.02.01.04.016', 'Suzuki Carry Mini Dump', 'DN 8336 A', 'K15BT - 1237372', 'MHYHDC61TMJ - 212164', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Tatura Utara 02', 'Baik'),
(72, '1763288986101-DN 8359 A.png', '1763288986145-DN_8359_A.jpg', 72, '1.3.1.02.01.04.017', 'Suzuki Carry Mini Dump', 'DN 8359 A', 'K15BT - 1237682', 'MHYHDC61TMJ - 212229', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Tatura Utara 01', 'Baik'),
(73, '1763288986201-DN 8370 A.png', '1763288986236-DN_8370_A.jpg', 73, '1.3.1.02.01.04.018', 'Suzuki Carry Mini Dump', 'DN 8370 A', 'K15BT - 1238732', 'MHYHDC61TMJ - 212869', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Tatura Selatan 02', 'Baik'),
(74, '1763288986292-DN 8377 A.png', '1763288986328-DN_8377_A.jpg', 74, '1.3.1.02.01.04.019', 'Suzuki Carry Mini Dump', 'DN 8377 A', 'K15BT - 1239559', 'MHYHDC61TMJ - 213202', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Tatura Selatan 01', 'Baik'),
(75, '1763288986412-DN 8346 A.png', '1763288986459-DN_8346_A.jpg', 75, '1.3.1.02.01.04.020', 'Suzuki Carry Mini Dump', 'DN 8346 A', 'K15BT - 1239644', 'MHYHDC61TMJ - 213350', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Pengawu 01', 'Baik'),
(76, '1763288986528-DN 8356 A.png', '1763288986563-DN_8356_A.jpg', 76, '1.3.1.02.01.04.021', 'Suzuki Carry Mini Dump', 'DN 8356 A', 'K15BT - 1239882', 'MHYHDC61TMJ - 213435', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Lolu Utara 02', 'Baik'),
(77, '1763288986610-DN 8374 A.png', '1763288986648-DN_8374_A.jpg', 77, '1.3.1.02.01.04.022', 'Suzuki Carry Mini Dump', 'DN 8374 A', 'K15BT - 1240193', 'MHYHDC61TMJ - 213595', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Tanamodindi 02', 'Baik'),
(78, '1763288986697-DN 8352 A.png', '1763288986731-DN_8352_A.jpg', 78, '1.3.1.02.01.04.023', 'Suzuki Carry Mini Dump', 'DN 8352 A', 'K15BT - 1239623', 'MHYHDC61TMJ - 213775', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Balaroa 02', 'Baik'),
(79, '1763288986780-DN 8355 A.png', '1763288986819-DN_8355_A.jpg', 79, '1.3.1.02.01.04.024', 'Suzuki Carry Mini Dump', 'DN 8355 A', 'K15BT - 1241141', 'MHYHDC61TMJ - 214146', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Lasoani 01', 'Baik'),
(80, '1763288986868-DN 8347 A.png', '1763288986904-DN_8347_A.jpg', 80, '1.3.1.02.01.04.025', 'Suzuki Carry Mini Dump', 'DN 8347 A', 'K15BT - 1238334', 'MHYHDC61TMJ - 214288', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Lasoani 02', 'Baik'),
(81, '1763288986961-DN 8378 A.png', '1763288987000-DN_8378_A.jpg', 81, '1.3.1.02.01.04.026', 'Suzuki Carry Mini Dump', 'DN 8378 A', 'K15BT - 1242018', 'MHYHDC61TMJ - 214241', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Tondo 01', 'Baik'),
(82, '1763288987047-DN 8376 A.png', '1763288987081-DN_8376_A.jpg', 82, '1.3.1.02.01.04.027', 'Suzuki Carry Mini Dump', 'DN 8376 A', 'K15BT - 1241612', 'MHYHDC61TMJ - 214370', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Kamonji 01', 'Baik'),
(83, '1763288987133-DN 8392 A.png', '1763288988376-DN_8392_A.jpg', 83, '1.3.1.02.01.04.028', 'Suzuki Carry Mini Dump', 'DN 8392 A', 'K15BT - 1242485', 'MHYHDC61TMJ - 214810', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Talise Valangguni 01', 'Baik'),
(84, '1763288988495-DN 8348 A.png', '1763288988543-DN_8348_A.jpg', 84, '1.3.1.02.01.04.029', 'Suzuki Carry Mini Dump', 'DN 8348 A', 'K15BT - 1242615', 'MHYHDC61TMJ - 214862', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Talise Valangguni 02', 'Baik'),
(85, '1763288988604-DN 8371 A.png', '1763288988642-DN_8371_A.jpg', 85, '1.3.1.02.01.04.030', 'Suzuki Carry Mini Dump', 'DN 8371 A', 'K15BT - 1243123', 'MHYHDC61TMJ - 215203', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Talise Induk 01', 'Baik'),
(86, '1763288988735-DN 8382 A.png', '1763288988770-DN_8382_A.jpg', 86, '1.3.1.02.01.04.031', 'Suzuki Carry Mini Dump', 'DN 8382 A', 'K15BT - 1243042', 'MHYHDC61TMJ - 215284', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Pengawu 02', 'Baik'),
(87, '1763288988825-DN 8386 A.png', '1763288988859-DN_8386_A.jpg', 87, '1.3.1.02.01.04.032', 'Suzuki Carry Mini Dump', 'DN 8386 A', 'K15BT - 1243617', 'MHYHDC61TMJ - 215387', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Palupi 01', 'Baik'),
(88, '1763288988909-DN 8350 A.png', '1763288988944-DN_8350_A.jpg', 88, '1.3.1.02.01.04.033', 'Suzuki Carry Mini Dump', 'DN 8350 A', 'K15BT - 1243763', 'MHYHDC61TMJ - 215438', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Palupi 02', 'Baik'),
(89, '1763288988995-DN 8349 A.png', '1763288989043-DN_8349_A.jpg', 89, '1.3.1.02.01.04.034', 'Suzuki Carry Mini Dump', 'DN 8349 A', 'K15BT - 1244305', 'MHYHDC61TMJ - 215607', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Bayaoge 01', 'Baik'),
(90, '1763288989092-DN 8381 A.png', '1763288989129-DN_8381_A.jpg', 90, '1.3.1.02.01.04.035', 'Suzuki Carry Mini Dump', 'DN 8381 A', 'K15BT - 1245088', 'MHYHDC61TMJ - 215886', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Bayaoge 02', 'Baik'),
(91, '1763288989208-DN 8354 A.png', '1763288989246-DN_8354_A.jpg', 91, '1.3.1.02.01.04.036', 'Suzuki Carry Mini Dump', 'DN 8354 A', 'K15BT - 1244430', 'MHYHDC61TMJ - 215809', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Nunu 02', 'Baik'),
(92, '1763288989293-DN 8390 A.png', '1763288989331-DN_8390_A.jpg', 92, '1.3.1.02.01.04.037', 'Suzuki Carry Mini Dump', 'DN 8390 A', 'K15BT - 1245077', 'MHYHDC61TMJ - 215987', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Nunu 01', 'Baik'),
(93, '1763288989386-DN 8363 A.png', '1763288989420-DN_8363_A.jpg', 93, '1.3.1.02.01.04.038', 'Suzuki Carry Mini Dump', 'DN 8363 A', 'K15BT - 1243563', 'MHYHDC61TMJ - 216094', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Ujuna 01', 'Baik'),
(94, '1763288989463-DN 8351 A.png', '1763288989504-DN_8351_A.jpg', 94, '1.3.1.02.01.04.039', 'Suzuki Carry Mini Dump', 'DN 8351 A', 'K15BT - 1242608', 'MHYHDC61TMJ - 215335', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Ujuna 02', 'Baik'),
(95, '1763288989552-DN 8389 A.png', '1763288989586-DN_8389_A.jpg', 95, '1.3.1.02.01.04.040', 'Suzuki Carry Mini Dump', 'DN 8389 A', 'K15BT - 1245500', 'MHYHDC61TMJ - 216233', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Balaroa 01', 'Baik'),
(96, '1763288989641-DN 8380 A.png', '1763288989677-DN_8380_A.jpg', 96, '1.3.1.02.01.04.041', 'Suzuki Carry Mini Dump', 'DN 8380 A', 'K15BT - 1245515', 'MHYHDC61TMJ - 216301', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Tanamodindi 01', 'Baik'),
(97, '1763288989731-DN 8393 A.png', '1763288989765-DN_8393_A.jpg', 97, '1.3.1.02.01.04.042', 'Suzuki Carry Mini Dump', 'DN 8393 A', 'K15BT - 1245590', 'MHYHDC61TMJ - 216378', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Lere 01', 'Baik'),
(98, '1763288989811-DN 8365 A.png', '1763288989851-DN_8365_A.jpg', 98, '1.3.1.02.01.04.043', 'Suzuki Carry Mini Dump', 'DN 8365 A', 'K15BT - 1246017', 'MHYHDC61TMJ - 216479', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Lere 02', 'Baik'),
(99, '1763288989899-DN 8353 A.png', '1763288989940-DN_8353_A.jpg', 99, '1.3.1.02.01.04.044', 'Suzuki Carry Mini Dump', 'DN 8353 A', 'K15BT - 1246244', 'MHYHDC61TMJ - 216581', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Kamonji 02', 'Baik'),
(100, '1763288989988-DN 8366 A.png', '1763288990021-DN_8366_A.jpg', 100, '1.3.1.02.01.04.045', 'Suzuki Carry Mini Dump', 'DN 8366 A', 'K15BT - 1246469', 'MHYHDC61TMJ - 216715', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Tondo 02', 'Baik'),
(101, '1763288990081-DN 8367 A.png', '1763288990119-DN_8367_A.jpg', 101, '1.3.1.02.01.04.046', 'Suzuki Carry Mini Dump', 'DN 8367 A', 'K15BT - 1246487', 'MHYHDC61TMJ - 216820', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Baru 02', 'Baik'),
(102, '1763288990273-DN 8360 A.png', '1763288990305-DN_8360_A.jpg', 102, '1.3.1.02.01.04.047', 'Suzuki Carry Mini Dump', 'DN 8360 A', 'K15BT - 1247166', 'MHYHDC61TMJ - 217062', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Besusu Timur 02', 'Baik'),
(103, '1763288990373-DN 8364 A.png', '1763288990407-DN_8364_A.jpg', 103, '1.3.1.02.01.04.048', 'Suzuki Carry Mini Dump', 'DN 8364 A', 'K15BT - 1247085', 'MHYHDC61TMJ - 216955', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Siranindi 02', 'Baik'),
(104, '1763288990455-DN 8368 A.png', '1763288990487-DN_8368_A.jpg', 104, '1.3.1.02.01.04.049', 'Suzuki Carry Mini Dump', 'DN 8368 A', 'K15BT - 1247362', 'MHYHDC61TMJ - 217201', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Birobuli Selatan 01', 'Baik'),
(105, '1763288990542-DN 8372 A.png', '1763288990579-DN_8372_A.jpg', 105, '1.3.1.02.01.04.050', 'Suzuki Carry Mini Dump', 'DN 8372 A', 'K15BT - 1247599', 'MHYHDC61TMJ - 217269', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Besusu Barat 02', 'Baik'),
(106, '1763288990628-DN 8391 A.png', '1763288990669-DN_8391_A.jpg', 106, '1.3.1.02.01.04.051', 'Suzuki Carry Mini Dump', 'DN 8391 A', 'K15BT - 1248077', 'MHYHDC61TMJ - 217447', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Besusu Barat 01', 'Baik'),
(107, '1763288990718-DN 8373 A.png', '1763288990756-DN_8373_A.jpg', 107, '1.3.1.02.01.04.052', 'Suzuki Carry Mini Dump', 'DN 8373 A', 'K15BT - 1248062', 'MHYHDC61TMJ - 217558', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Besusu Tengah 02', 'Baik'),
(108, '1763288990803-DN 8345 A.png', '1763288990844-DN_8345_A.jpg', 108, '1.3.1.02.01.04.053', 'Suzuki Carry Mini Dump', 'DN 8345 A', 'K15BT - 1248512', 'MHYHDC61TMJ - 217693', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Birobuli Utara 02', 'Baik'),
(109, '1763288990893-DN 8361 A.png', '1763288990930-DN_8361_A.jpg', 109, '1.3.1.02.01.04.054', 'Suzuki Carry Mini Dump', 'DN 8361 A', 'K15BT - 1248913', 'MHYHDC61TMJ - 217814', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Besusu Timur 01', 'Baik'),
(110, '1763288990978-DN 8387 A.png', '1763288991012-DN_8387_A.jpg', 110, '1.3.1.02.01.04.055', 'Suzuki Carry Mini Dump', 'DN 8387 A', 'K15BT - 1246636', 'MHYHDC61TMJ - 218007', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Baru 01', 'Baik'),
(111, '1763288991067-DN 8357 A.png', '1763288991101-DN_8357_A.jpg', 111, '1.3.1.02.01.04.056', 'Suzuki Carry Mini Dump', 'DN 8357 A', 'K15BT - 1249915', 'MHYHDC61TMJ - 218094', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Lolu Utara 01', 'Baik'),
(112, '1763288991160-DN 8362 A.png', '1763288991195-DN_8362_A.jpg', 112, '1.3.1.02.01.04.057', 'Suzuki Carry Mini Dump', 'DN 8362 A', 'K15BT - 1249365', 'MHYHDC61TMJ - 218185', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Talise Induk 02', 'Baik'),
(113, '1763288991266-DN 8375 A.png', '1763288991302-DN_8375_A.jpg', 113, '1.3.1.02.01.04.058', 'Suzuki Carry Mini Dump', 'DN 8375 A', 'K15BT - 1250345', 'MHYHDC61TMJ - 218431', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Lolu Selatan 02', 'Baik'),
(114, '1763288991346-DN 8426 A.png', '1763288991387-DN_8426_A.jpg', 114, '1.3.1.02.01.04.059', 'Mits. L300 Mini Dump', 'DN 8426 A', '4N14UAM9214', 'PAEL67MYNNB000520', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Lolu Selatan 01', 'Baik'),
(115, '1763288991448-DN 8423 A.png', '1763288991486-DN_8423_A.jpg', 115, '1.3.1.02.01.04.060', 'Mits. L300 Mini Dump', 'DN 8423 A', '4N14UAL3448', 'PAEL67MYNNB000541', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Pantoloan Boya', 'Baik'),
(116, '1763288991527-DN 8427 A.png', '1763288991564-DN_8427_A.jpg', 116, '1.3.1.02.01.04.061', 'Mits. L300 Mini Dump', 'DN 8427 A', '4N14UAM9215', 'PAEL67MYNNB000521', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Pantoloan Induk', 'Baik'),
(117, '1763288991610-DN 8428 A.png', '1763288991649-DN_8428_A.jpg', 117, '1.3.1.02.01.04.062', 'Mits. L300 Mini Dump', 'DN 8428 A', '4N14UAM9134', 'PAEL67MYNNB000505', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Tavanjuka', 'Baik'),
(118, '1763288991714-DN 8407 A.png', '1763288991749-DN_8407_A.jpg', 118, '1.3.1.02.01.04.063', 'Mits. L300 Mini Dump', 'DN 8407 A', '4N14UAM9155', 'PAEL67MYNNB000503', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Duyu', 'Baik'),
(119, '1763288991795-DN 8410 A.png', '1763288991830-DN_8410_A.jpg', 119, '1.3.1.02.01.04.064', 'Mits. L300 Mini Dump', 'DN 8410 A', '4N14UAM6702', 'PAEL67MYNNB000440', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Petobo', 'Baik'),
(120, '1763288991902-DN 8411 A.png', '1763288991946-DN_8411_A.jpg', 120, '1.3.1.02.01.04.065', 'Mits. L300 Mini Dump', 'DN 8411 A', '4N14UAM6703', 'PAEL67MYNNB000441', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Donggala Kodi', 'Baik'),
(121, '1763288992000-DN 8421 A.png', '1763288992033-DN_8421_A.jpg', 121, '1.3.1.02.01.04.066', 'Mits. L300 Mini Dump', 'DN 8421 A', '4N14UAM7230', 'PAEL67MYNNB000465', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Kabonena', 'Baik'),
(122, '1763288992101-DN 8424 A.png', '1763288992147-DN_8424_A.jpg', 122, '1.3.1.02.01.04.067', 'Mits. L300 Mini Dump', 'DN 8424 A', '4N14UAM6811', 'PAEL67MYNNB000438', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Silae', 'Baik'),
(123, '1763288992198-DN 8413 A.png', '1763288992231-DN_8413_A.jpg', 123, '1.3.1.02.01.04.068', 'Mits. L300 Mini Dump', 'DN 8413 A', '4N14UAM6836', 'PAEL67MYNNB000456', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Tipo', 'Baik'),
(124, '1763288992338-DN 8420 A.png', '1763288992370-DN_8420_A.jpg', 124, '1.3.1.02.01.04.069', 'Mits. L300 Mini Dump', 'DN 8420 A', '4N14UAM3223', 'PAEL67MYNNB000410', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Buluri', 'Baik'),
(125, '1763288992411-DN 8425 A.png', '1763288992448-DN_8425_A.jpg', 125, '1.3.1.02.01.04.070', 'Mits. L300 Mini Dump', 'DN 8425 A', '4N14UAN3858', 'PAEL67MYNNB000730', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Watusampu', 'Baik'),
(126, '1763288992508-DN 8416 A.png', '1763288992540-DN_8416_A.jpg', 126, '1.3.1.02.01.04.071', 'Mits. L300 Mini Dump', 'DN 8416 A', '4N14UAM8666', 'PAEL67MYNNB000487', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Layana Indah', 'Baik'),
(127, '1763288992595-DN 8417 A.png', '1763288992629-DN_8417_A.jpg', 127, '1.3.1.02.01.04.072', 'Mits. L300 Mini Dump', 'DN 8417 A', '4N14UAM9154', 'PAEL67MYNNB000502', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Kawatuna', 'Baik'),
(128, '1763288992680-DN 8415 A.png', '1763288992717-DN_8415_A.jpg', 128, '1.3.1.02.01.04.073', 'Mits. L300 Mini Dump', 'DN 8415 A', '4N14UAM6795', 'PAEL67MYNNB000433', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Poboya', 'Baik'),
(129, '1763288992788-DN 8419 A.png', '1763288992824-DN_8419_A.jpg', 129, '1.3.1.02.01.04.074', 'Mits. L300 Mini Dump', 'DN 8419 A', '4N14UAM9149', 'PAEL67MYNNB000496', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Mamboro Induk', 'Baik'),
(130, '1763288992870-DN 8412 A.png', '1763288992906-DN_8412_A.jpg', 130, '1.3.1.02.01.04.075', 'Mits. L300 Mini Dump', 'DN 8412 A', '4N14UAN2087', 'PAEL67MYNNB000687', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Mamboro Barat', 'Baik'),
(131, '1763288992955-DN 8408 A.png', '1763288992989-DN_8408_A.jpg', 131, '1.3.1.02.01.04.076', 'Mits. L300 Mini Dump', 'DN 8408 A', '4N14UAM6807', 'PAEL67MYNNB000448', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Kayumalue Ngapa', 'Baik'),
(132, '1763288993039-DN 8409 A.png', '1763288993082-DN_8409_A.jpg', 132, '1.3.1.02.01.04.077', 'Mits. L300 Mini Dump', 'DN 8409 A', '4N14UAN3855', 'PAEL67MYNNB000728', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Kayumalue Pajeko', 'Baik'),
(133, '1763288993125-DN 8414 A.png', '1763288993160-DN_8414_A.jpg', 133, '1.3.1.02.01.04.078', 'Mits. L300 Mini Dump', 'DN 8414 A', '4N14UAM9171', 'PAEL67MYNNB000536', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Taipa', 'Baik'),
(134, '1763288993204-DN 8422 A.png', '1763288993237-DN_8422_A.jpg', 134, '1.3.1.02.01.04.079', 'Mits. L300 Mini Dump', 'DN 8422 A', '4N14UAM9211', 'PAEL67MYNNB000515', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Lambara', 'Baik'),
(135, '1763288993278-DN 8418 A.png', '1763288993308-DN_8418_A.jpg', 135, '1.3.1.02.01.04.080', 'Mits. L300 Mini Dump', 'DN 8418 A', '4N14UAM6801', 'PAEL67MYNNB000434', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Baiya', 'Baik'),
(136, '1763288993364-DN 8430 A.png', '1763288993407-DN_8430_A.jpg', 136, '1.3.1.02.01.04.081', 'Suzuki Carry Mini Tangki', 'DN 8430 A', 'K15BT - 1499251', 'MHYHDC61TPJ - 213768', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Pengangkutan Sampah Kel. Mpanau', 'Baik'),
(137, '1763288993450-DN 8431 A.png', '1763288993494-DN_8431_A.jpg', 137, '1.3.1.02.01.04.082', 'Suzuki Carry Mini Tangki', 'DN 8431 A', 'K15BT - 1492472', 'MHYHDC61TPJ - 210941', 'Hitam', 0, '2001', 'R4', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Pengelolaan RTH Di Pihak Ke 3', 'Baik'),
(138, '1763289195729-DN 1011 A.png', '1763289195791-mobil.png', 138, '1.3.1.02.01.04.010', 'Suzuki APV Station Wagon', 'DN 1011 A', 'DEFAULT', '615AID-179401', 'Hitam', 15000000, '2001', 'R4', '2001-01-21', 'Moh. Sofyan', '72720404', 'Operasional UPTD Laboratorium DLH', 'Baik'),
(139, '1763289281228-DN 8710 A.png', '1763289281323-DN_8710_A.jpg', 139, '1.3.1.02.01.05.001', 'Toyota Dyna / Dyna 130 Ht', 'DN 8710 A', 'W04ADT-RR09037', 'MHFC1JU435110026 W04DT-RR09037', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(140, '1763289281380-DN 8711 A.png', '1763289281422-DN_8711_A.jpg', 140, '1.3.1.02.01.05.002', 'Toyota Dyna / Dyna 130 Ht', 'DN 8711 A', 'WO4DT-RR09058', 'MHFC1JU43E5110032 W04DT-RR09058', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(141, '1763289281476-DN 8712 A.png', '1763289281509-DN_8712_A.jpg', 141, '1.3.1.02.01.05.003', 'Toyota Dyna / Dyna 130 Ht', 'DN 8712 A', 'WO4DT-RR09147', 'MHFC1JU43E5110168 W04DT-RR09174', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(142, '1763289281563-DN 8731 A.png', '1763289281605-DN_8731_A.jpg', 142, '1.3.1.02.01.05.004', 'Toyota / Rino 115', 'DN 8731 A', '14B-1627780', 'MH8F31BY430004228', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Rusak Ringan'),
(143, '1763289281668-DN 8730 A.png', '1763289281708-DN_8730_A.jpg', 143, '1.3.1.02.01.05.005', 'Toyota / Rino 115', 'DN 8730 A', '14B-15222349', 'MHF31BY4300036646', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang RTH', 'Baik'),
(144, '1763289281768-DN 8736 A.png', '1763289281803-DN_8736_A.jpg', 144, '1.3.1.02.01.05.006', 'Toyota / Rino 115 Dump Truck', 'DN 8736 A', '14B-1626488', 'MHF31BY4300042282', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang RTH', 'Baik'),
(145, '1763289281852-DN 8734 A.png', '1763289281893-DN_8734_A.jpg', 145, '1.3.1.02.01.05.007', 'Toyota / Rino 115', 'DN 8734 A', '14B-1623584', 'MHF31BY430004181', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Rusak Ringan'),
(146, '1763289281940-DN 8735 A.png', '1763289281990-DN_8735_A.jpg', 146, '1.3.1.02.01.05.008', 'Toyota / Rino 115', 'DN 8735 A', '14B-1632286', 'MHF31BY4300042778', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Rusak Ringan'),
(147, '1763289282041-DN 9069 A.png', '1763289282073-DN_9069_A.jpg', 147, '1.3.1.02.01.05.009', 'Toyota / Rino 115', 'DN 9069 A', '14B-1627819', 'MHF31BY4300042287', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Rusak Ringan'),
(148, '1763289282125-DN 9307 A.png', '1763289282166-DN_9307_A.jpg', 148, '1.3.1.02.01.05.010', 'Toyota / Rino 115', 'DN 9307 A', 'WO4D-JJ20131', 'MHFC1JU4040010760', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(149, '1763289282209-DN 9013 A.png', '1763289282274-DN_9013_A.jpg', 149, '1.3.1.02.01.05.011', 'Toyota / Rino 115', 'DN 9013 A', '14B-1675491', 'MF31BY4310049958', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Rusak Berat'),
(150, '1763289282336-DN 7701 A.png', '1763289282372-DN_7701_A.jpg', 150, '1.3.1.02.01.05.012', 'Toyota / Rino 115 Tangki Air', 'DN 7701 A', '14B-1332949', 'MHF31BY4301014700', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang RTH', 'Rusak Ringan'),
(151, '1763289282424-DN 9312 A.png', '1763289282459-DN_9312_A.jpg', 151, '1.3.1.02.01.05.013', 'Toyota / Rino 115', 'DN 9312 A', 'W04D- JJ13683', 'MHFC1JU4030004505', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional UPTD TPA', 'Rusak Ringan'),
(152, '1763289282503-DN 9065 A.png', '1763289282536-DN_9065_A.jpg', 152, '1.3.1.02.01.05.014', 'Toyota / Rino 115 Tangki Air', 'DN 9065 A', '1327351', 'MHF31BY4301014344', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang RTH', 'Rusak Ringan'),
(153, '1763289282579-DN 9340 A.png', '1763289282632-DN_9340_A.jpg', 153, '1.3.1.02.01.05.015', 'Toyota Dyna 110 / Truck', 'DN 9340 A', 'W04DT-PJ20451', 'MHFCIJU41B5028986', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(154, '1763289282684-DN 9341 A.png', '1763289282718-DN_9341_A.jpg', 154, '1.3.1.02.01.05.016', 'Toyota Dyna Ps 110 / Truck', 'DN 9341 A', 'W04DT-PJ20400', 'MHFCIJU41B5028987', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(155, '1763289282790-DN 9342 A.png', '1763289282824-DN_9342_A.jpg', 155, '1.3.1.02.01.05.017', 'Toyota Dyna Ps 110 / Truck', 'DN 9342 A', 'W04DT-PJ20402', 'MHFC1JU41B5029167', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(156, '1763289282877-DN 9345 A.png', '1763289282912-DN_9345_A.jpg', 156, '1.3.1.02.01.05.018', 'Toyota Dyna 130 HT / Truck', 'DN 9345 A', 'W04DT-RJ43308', 'MHFC1JU43B5039506', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(157, '1763289282968-DN 9344 A.png', '1763289283003-DN_9344_A.jpg', 157, '1.3.1.02.01.05.019', 'Toyota Dyna 130 HT / Truck', 'DN 9344 A', 'W04DT-RJ43198', 'MHFC1JU43B5039361', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(158, '1763289283058-DN 9350 A.png', '1763289283092-DN_9350_A.jpg', 158, '1.3.1.02.01.05.020', 'Toyota / Truck', 'DN 9350 A', 'W04DT-RJ43411', 'MHFC1JU43B5039669', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(159, '1763289283139-DN 9351 A.png', '1763289283176-DN_9351_A.jpg', 159, '1.3.1.02.01.05.021', 'Toyota / Truck', 'DN 9351 A', 'W04DT-RJ44090', 'MHFC1JU43B5040333', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(160, '1763289283227-DN 9353 A.png', '1763289283272-DN_9353_A.jpg', 160, '1.3.1.02.01.05.022', 'Toyota / Truck', 'DN 9353 A', 'W04DT-RJ43396', 'MHFC1JU43B5039594', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(161, '1763289283319-DN 8402 A.png', '1763289283354-DN_8402_A.jpg', 161, '1.3.1.02.01.05.023', 'Toyota Dyna / Truck', 'DN 8402 A', 'W04DT-PJ21854', 'MHFC1JU41B5032190', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(162, '1763289283404-DN 8733 A.png', '1763289283440-DN_8733_A.jpg', 162, '1.3.1.02.01.05.024', 'Toyota / Rino', 'DN 8733 A', '14B-1623584', 'MHF31BY4300041824', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(163, '1763289283486-DN 9314 A.png', '1763289283519-DN_9314_A.jpg', 163, '1.3.1.02.01.05.026', 'Toyota / Dyna Long4000', 'DN 9314 A', 'WO4D-JJ36781', 'MHFC1JU4050026638', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(164, '1763289283573-DN 9316 A.png', '1763289283613-DN_9316_A.jpg', 164, '1.3.1.02.01.05.027', 'Toyota  / Dyna Long', 'DN 9316 A', 'WO4D-JJ37199', 'MHFC1JU4050026865', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(165, '1763289283655-DN 9613 A.png', '1763289283691-DN_9613_A.jpg', 165, '1.3.1.02.01.05.028', 'Toyota Dyna Ht 130 Tangki Air', 'DN 9613 A', 'WO4DTNJ11234', 'MHFC1JU44001783', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Pertamanan (RTH)', 'Baik'),
(166, '1763289283766-DN 8713 A.png', '1763289283801-DN_8713_A.jpg', 166, '1.3.1.02.01.05.029', 'Toyota Dyna 130 HT', 'DN 8713 A', 'W04DT- RR13133', 'MHFC1JU43E5113591', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(167, '1763289283854-DN 8714 A.png', '1763289283892-DN_8714_A.jpg', 167, '1.3.1.02.01.05.030', 'Toyota Dyna 130 HT', 'DN 8714 A', 'W04DT-RR06978', 'MHFC1JU43E5107707', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(168, '1763289284033-DN 8715 A.png', '1763289284077-DN_8715_A.jpg', 168, '1.3.1.02.01.05.031', 'Toyota Dyna 130 HT', 'DN 8715 A', 'W04DT-RR13136', 'MHFC1JU43E5113594', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(169, '1763289284134-DN 9002 P.png', '1763289284169-DN_9002_P.jpg', 169, '1.3.1.02.01.05.032', 'Hino / Dutro Dump Truck', 'DN 9002 P', '1675881', 'Y4310049938', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Penebangan (RTH)', 'Baik'),
(170, '1763289284233-DN 8302 A.png', '1763289284271-DN_8302_A.jpg', 170, '1.3.1.02.01.05.034', 'Hino 300 Dutro 130 Hd 6.8 Ps', 'DN 8302 A', 'W04DTRR56319', 'MJECIJ643J5165762', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(171, '1763289284331-DN 8301 A.png', '1763289284367-DN_8301_A.jpg', 171, '1.3.1.02.01.05.035', 'Hino 300 Dutro 130 Hd 6.8 Ps', 'DN 8301 A', 'W04DTRR56320', 'MJJGC164315165763', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(172, '1763289284425-DN 8331 A.png', '1763289284462-DN_8331_A.jpg', 172, '1.3.1.02.01.05.036', 'Hino / Dutro 130 Hd', 'DN 8331 A', 'W04DTR89944', 'MJEC1JG43M5199089', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(173, '1763289284536-DN 8327 A.png', '1763289284609-DN_8327_A.jpg', 173, '1.3.1.02.01.05.037', 'Hino / Dutro 130 Hd', 'DN 8327 A', 'W04DTR89041', 'MJEC1JG43M5199221', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(174, '1763289284659-DN 8334 A.png', '1763289284690-DN_8334_A.jpg', 174, '1.3.1.02.01.05.038', 'Hino / Dutro 130 Hd', 'DN 8334 A', 'W04DTR89044', 'MJEC1JG43M5199224', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik');
INSERT INTO `kendaraan` (`id_kendaraan`, `qrcode`, `gambar`, `id_aset`, `kode_barang`, `merek`, `no_polisi`, `no_mesin`, `no_rangka`, `warna`, `harga_pembelian`, `tahun_pembuatan`, `kategori`, `pajak`, `pemegang`, `nik`, `penggunaan`, `kondisi`) VALUES
(175, '1763289284744-DN 8326 A.png', '1763289284792-DN_8326_A.jpg', 175, '1.3.1.02.01.05.039', 'Hino / Dutro 130 Hd', 'DN 8326 A', 'W04DTR89045', 'MJEC1JG43M5199225', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(176, '1763289284846-DN 8325 A.png', '1763289284881-DN_8325_A.jpg', 176, '1.3.1.02.01.05.040', 'Hino / Dutro 130 Hd', 'DN 8325 A', 'W04DTR89046', 'MJEC1JG43M5199226', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(177, '1763289284933-DN 8324 A.png', '1763289284970-DN_8324_A.jpg', 177, '1.3.1.02.01.05.041', 'Hino / Dutro 130 Hd', 'DN 8324 A', 'W04DTR89047', 'MJEC1JG43M5199227', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(178, '1763289285018-DN 8330 A.png', '1763289285059-DN_8330_A.jpg', 178, '1.3.1.02.01.05.042', 'Hino / Dutro 130 Hd', 'DN 8330 A', 'W04DTR89048', 'MJEC1JG43M5199228', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(179, '1763289285101-DN 8329 A.png', '1763289285136-DN_8329_A.jpg', 179, '1.3.1.02.01.05.043', 'Hino / Dutro 130 Hd', 'DN 8329 A', 'W04DTR89072', 'MJEC1JG43M5199262', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(180, '1763289285183-DN 8328 A.png', '1763289285231-DN_8328_A.jpg', 180, '1.3.1.02.01.05.044', 'Hino / Dutro 130 Hd', 'DN 8328 A', 'W04DTR89074', 'MJEC1JG43M5199264', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(181, '1763289285283-DN 8335 A.png', '1763289285317-DN_8335_A.jpg', 181, '1.3.1.02.01.05.045', 'Hino / Dutro 130 Hd', 'DN 8335 A', 'W04DTR89078', 'MJEC1JG43M5199268', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(182, '1763289285366-DN 8718 A.png', '1763289285413-DN_8718_A.jpg', 182, '1.3.1.02.01.05.046', 'Toyota Dyna 110 ET Arm Roll + Cat', 'DN 8718 A', 'W04DT-PJ59350', 'MHC1JU41F5129211', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(183, '1763289285456-DN 8717 A.png', '1763289285495-DN_8717_A.jpg', 183, '1.3.1.02.01.05.047', 'Toyota Dyna 110 ET Arm Roll + Cat', 'DN 8717 A', 'W04DT-PJ59349', 'MHC1JU41F5129210', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(184, '1763289285541-DN 8721 A.png', '1763289285578-DN_8721_A.jpg', 184, '1.3.1.02.01.05.048', 'Toyota Dyna 110 ET Arm Roll + Cat', 'DN 8721 A', 'W04DT-PJ59365', 'MHC1JU41F5129311', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(185, '1763289285630-DN 8719 A.png', '1763289285664-DN_8719_A.jpg', 185, '1.3.1.02.01.05.049', 'Toyota Dyna 110 ET Arm Roll + Cat', 'DN 8719 A', 'W04DT-PJ59364', 'MHC1JU41F5129310', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Bidang Persampahan', 'Baik'),
(186, '1763289285710-DN 9800 A.png', '1763289285741-DN_9800_A.jpg', 186, '1.3.1.02.01.05.050', 'Truck Crane Korerasi Dyna 110', 'DN 9800 A', 'W04DT-PJ59460', 'MHC1JUX1F5025346', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Penebangan (RTH)', 'Baik'),
(187, '1763289285804-DN 8429 A.png', '1763289285857-DN_8429_A.jpg', 187, '1.3.1.02.01.05.051', 'Truk Crane Skylift Hino/ Dutro', 'DN 8429 A', 'N04CWYJ23530', 'MJECCB2F7P5013184', 'Hitam', 0, '2001', 'R6', '0000-00-00', 'Dinas', '720404010', 'Operasional Penebangan (RTH)', 'Baik');

-- --------------------------------------------------------

--
-- Struktur dari tabel `onderdil`
--

CREATE TABLE `onderdil` (
  `id_onderdil` int(11) NOT NULL,
  `id_servis` int(11) NOT NULL,
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

--
-- Dumping data untuk tabel `serberac`
--

INSERT INTO `serberac` (`id_serberac`, `no_registrasi`, `cuci`) VALUES
(1, 'AC1-0002', '2025-11-16'),
(2, 'AC1-0001', '2025-11-16'),
(3, 'AC1-0003', '2025-11-16'),
(4, 'AC1-0004', '2025-11-16'),
(5, 'AC1-0005', '2025-11-16'),
(6, 'AC1-0006', '2025-11-16'),
(7, 'AC1-0007', '2025-11-16'),
(8, 'AC1-0008', '2025-11-16'),
(9, 'AC1-0009', '2025-11-16'),
(10, 'AC1-0010', '2025-11-16'),
(11, 'AC1-0011', '2025-11-16'),
(12, 'AC1-0012', '2025-11-16'),
(13, 'AC1-0013', '2025-11-16'),
(14, 'AC1-0014', '2025-11-16'),
(15, 'AC1-0015', '2025-11-16'),
(16, 'AC1-0016', '2025-11-16'),
(17, 'AC1-0017', '2025-11-16'),
(18, 'AC2-0001', '2025-11-16'),
(19, 'AC2-0002', '2025-11-16'),
(20, 'AC2-0003', '2025-11-16'),
(21, 'AC2-0004', '2025-11-16'),
(22, 'AC2-0005', '2025-11-16'),
(23, 'AC2-0007', '2025-11-16'),
(24, 'AC2-0008', '2025-11-16'),
(25, 'AC2-0009', '2025-11-16'),
(26, 'AC2-0011', '2025-11-16'),
(27, 'AC2-0012', '2025-11-16'),
(28, 'AC2-0013', '2025-11-16'),
(29, 'AC2-0014', '2025-11-16'),
(30, 'AC2-0015', '2025-11-16'),
(31, 'AC2-0016', '2025-11-16'),
(32, 'AC0018', '2025-11-16'),
(33, 'AC0019', '2025-11-16'),
(34, 'AC0020', '2025-11-16'),
(35, 'AC0021', '2025-11-16'),
(36, 'AC0022', '2025-11-16');

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

--
-- Dumping data untuk tabel `serberalatberat`
--

INSERT INTO `serberalatberat` (`id_serberalatberat`, `no_registrasi`, `oli_mesin`, `filter_oli_mesin`) VALUES
(1, 'AB0001', '2025-11-16', '2025-11-16'),
(2, 'AB0002', '2025-11-16', '2025-11-16'),
(3, 'AB0003', '2025-11-16', '2025-11-16'),
(4, 'AB0004', '2025-11-16', '2025-11-16'),
(5, 'AB0005', '2025-11-16', '2025-11-16'),
(6, 'AB0006', '2025-11-16', '2025-11-16'),
(7, 'AB0007', '2025-11-16', '2025-11-16'),
(8, 'AB0008', '2025-11-16', '2025-11-16');

-- --------------------------------------------------------

--
-- Struktur dari tabel `serberalatkerja`
--

CREATE TABLE `serberalatkerja` (
  `id_serberalatkerja` int(11) NOT NULL,
  `no_registrasi` varchar(255) NOT NULL,
  `oli_mesin` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `serberalatkerja`
--

INSERT INTO `serberalatkerja` (`id_serberalatkerja`, `no_registrasi`, `oli_mesin`) VALUES
(1, 'AK1-0019', '2025-11-16'),
(2, 'AK1-0020', '2025-11-16'),
(3, 'AK1-0021', '2025-11-16'),
(4, 'AK1-0022', '2025-11-16'),
(5, 'AK1-0023', '2025-11-16'),
(6, 'AK1-0024', '2025-11-16'),
(7, 'AK1-0025', '2025-11-16'),
(8, 'AK1-0026', '2025-11-16'),
(9, 'AK1-0027', '2025-11-16'),
(10, 'AK1-0028', '2025-11-16'),
(11, 'AK1-0029', '2025-11-16'),
(12, 'AK1-0030', '2025-11-16'),
(13, 'AK1-0031', '2025-11-16'),
(14, 'AK1-0032', '2025-11-16'),
(15, 'AK1-0033', '2025-11-16'),
(16, 'AK1-0034', '2025-11-16'),
(17, 'AK1-0035', '2025-11-16'),
(18, 'AK1-0036', '2025-11-16'),
(19, 'AK1-0037', '2025-11-16'),
(20, 'AK1-0038', '2025-11-16'),
(21, 'AK1-0039', '2025-11-16'),
(22, 'AK0013', '2025-11-16'),
(23, 'AK0014', '2025-11-16'),
(24, 'AK0015', '2025-11-16'),
(25, 'AK0018', '2025-11-16'),
(26, 'AK2-0019', '2025-11-16'),
(27, 'AK2-0020', '2025-11-16'),
(28, 'AK2-0022', '2025-11-16'),
(29, 'AK2-0023', '2025-11-16'),
(30, 'AK2-0024', '2025-11-16'),
(31, 'AK2-0025', '2025-11-16'),
(32, 'AK2-0026', '2025-11-16'),
(33, 'AK2-0027', '2025-11-16'),
(34, 'AK2-0028', '2025-11-16'),
(35, 'AK2-0029', '2025-11-16'),
(36, 'AK2-0030', '2025-11-16'),
(37, 'AK2-0031', '2025-11-16'),
(38, 'AK2-0032', '2025-11-16'),
(39, 'AK2-0033', '2025-11-16'),
(40, 'AK2-0034', '2025-11-16'),
(41, 'AK2-0035', '2025-11-16'),
(42, 'AK2-0036', '2025-11-16'),
(43, 'AK2-0037', '2025-11-16'),
(44, 'AK2-0038', '2025-11-16'),
(45, 'AK2-0039', '2025-11-16'),
(46, 'AK0040', '2025-11-16'),
(47, 'AK0041', '2025-11-16'),
(48, 'AK0042', '2025-11-16');

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

--
-- Dumping data untuk tabel `serberkendaraan`
--

INSERT INTO `serberkendaraan` (`id_serberkendaraan`, `no_polisi`, `oli_mesin`, `filter_oli_mesin`, `oli_gardan`, `oli_transmisi`, `ban`) VALUES
(1, 'DN 3745 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(2, 'DN 3743 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(3, 'DN 4958 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(4, 'DN 5697 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(5, 'DN 3407 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(6, 'DN 5288 AD', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(7, 'DN 3404 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(8, 'DN 3249 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(9, 'DN 3250 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(10, 'DN 3251 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(11, 'DN 3511 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(12, 'DN 3509 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(13, 'DN 3478 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(14, 'DN 5294 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(15, 'DN 3395 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(16, 'DN 5426 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(17, 'DN 3835 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(18, 'DN 3836 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(19, 'DN 3839 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(20, 'DN 6268 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(21, 'DN 4827 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(22, 'DN 4822 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(23, 'DN. 4825 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(24, 'DN 4826 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(25, 'DN 4830 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(26, 'DN 4829 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(27, 'DN 4828 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(28, 'DN 3878 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(29, 'DN 3884 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(30, 'DN 3880 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(31, 'DN 3879 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(32, 'DN 3885 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(33, 'DN 3883 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(34, 'DN 3904 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(35, 'DN 3903 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(36, 'DN 6183 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(37, 'DN 6184 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(38, 'DN 6179 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(39, 'DN 6175 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(40, 'DN 6190 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(41, 'DN 6182 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(42, 'DN 6176 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(43, 'DN 6185 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(44, 'DN 6203 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(45, 'DN 6178 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(46, 'DN 6187 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(47, 'DN 6188 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(48, 'DN 6189 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(49, 'DN 6192 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(50, 'DN 6177 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(51, 'DN 6186 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(52, 'DN 6180 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(53, 'DN 3150 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(54, 'DN 3152 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(55, 'DN 3157 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(56, 'DN 6363 ST', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(57, 'DN 8853 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(58, 'DN 8169 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(59, 'DN 8201 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(60, 'DN 1467 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(61, 'DN 128 AD', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(62, 'DN 8014 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(63, 'DN 8025 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(64, 'DN 8028 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(65, 'DN 1086 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(66, 'DN 8379 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(67, 'DN 8358 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(68, 'DN 8385 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(69, 'DN 8343 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(70, 'DN 8388 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(71, 'DN 8336 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(72, 'DN 8359 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(73, 'DN 8370 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(74, 'DN 8377 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(75, 'DN 8346 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(76, 'DN 8356 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(77, 'DN 8374 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(78, 'DN 8352 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(79, 'DN 8355 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(80, 'DN 8347 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(81, 'DN 8378 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(82, 'DN 8376 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(83, 'DN 8392 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(84, 'DN 8348 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(85, 'DN 8371 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(86, 'DN 8382 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(87, 'DN 8386 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(88, 'DN 8350 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(89, 'DN 8349 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(90, 'DN 8381 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(91, 'DN 8354 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(92, 'DN 8390 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(93, 'DN 8363 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(94, 'DN 8351 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(95, 'DN 8389 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(96, 'DN 8380 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(97, 'DN 8393 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(98, 'DN 8365 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(99, 'DN 8353 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(100, 'DN 8366 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(101, 'DN 8367 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(102, 'DN 8360 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(103, 'DN 8364 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(104, 'DN 8368 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(105, 'DN 8372 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(106, 'DN 8391 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(107, 'DN 8373 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(108, 'DN 8345 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(109, 'DN 8361 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(110, 'DN 8387 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(111, 'DN 8357 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(112, 'DN 8362 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(113, 'DN 8375 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(114, 'DN 8426 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(115, 'DN 8423 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(116, 'DN 8427 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(117, 'DN 8428 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(118, 'DN 8407 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(119, 'DN 8410 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(120, 'DN 8411 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(121, 'DN 8421 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(122, 'DN 8424 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(123, 'DN 8413 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(124, 'DN 8420 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(125, 'DN 8425 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(126, 'DN 8416 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(127, 'DN 8417 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(128, 'DN 8415 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(129, 'DN 8419 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(130, 'DN 8412 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(131, 'DN 8408 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(132, 'DN 8409 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(133, 'DN 8414 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(134, 'DN 8422 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(135, 'DN 8418 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(136, 'DN 8430 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(137, 'DN 8431 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(138, 'DN 1011 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(139, 'DN 8710 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(140, 'DN 8711 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(141, 'DN 8712 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(142, 'DN 8731 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(143, 'DN 8730 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(144, 'DN 8736 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(145, 'DN 8734 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(146, 'DN 8735 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(147, 'DN 9069 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(148, 'DN 9307 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(149, 'DN 9013 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(150, 'DN 7701 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(151, 'DN 9312 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(152, 'DN 9065 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(153, 'DN 9340 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(154, 'DN 9341 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(155, 'DN 9342 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(156, 'DN 9345 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(157, 'DN 9344 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(158, 'DN 9350 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(159, 'DN 9351 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(160, 'DN 9353 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(161, 'DN 8402 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(162, 'DN 8733 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(163, 'DN 9314 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(164, 'DN 9316 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(165, 'DN 9613 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(166, 'DN 8713 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(167, 'DN 8714 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(168, 'DN 8715 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(169, 'DN 9002 P', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(170, 'DN 8302 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(171, 'DN 8301 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(172, 'DN 8331 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(173, 'DN 8327 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(174, 'DN 8334 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(175, 'DN 8326 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(176, 'DN 8325 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(177, 'DN 8324 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(178, 'DN 8330 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(179, 'DN 8329 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(180, 'DN 8328 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(181, 'DN 8335 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(182, 'DN 8718 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(183, 'DN 8717 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(184, 'DN 8721 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(185, 'DN 8719 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(186, 'DN 9800 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16'),
(187, 'DN 8429 A', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16', '2025-11-16');

-- --------------------------------------------------------

--
-- Struktur dari tabel `servis`
--

CREATE TABLE `servis` (
  `id_servis` int(11) NOT NULL,
  `tanggal` date NOT NULL,
  `id_aset` int(11) NOT NULL,
  `nama_bengkel` varchar(255) NOT NULL,
  `biaya_servis` int(255) NOT NULL,
  `nota_pembayaran` varchar(255) NOT NULL,
  `dokumentasi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tanah`
--

CREATE TABLE `tanah` (
  `id_tanah` int(11) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `kode_barang` varchar(50) NOT NULL DEFAULT '1.3.1.02.01.04.001',
  `nama_barang` varchar(255) NOT NULL,
  `peruntukan` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `luas` int(255) NOT NULL,
  `tahun_pengadaan` year(4) NOT NULL,
  `hak` varchar(255) NOT NULL,
  `tanggal_sertifikat` date NOT NULL,
  `nomor_sertifikat` varchar(255) NOT NULL,
  `status_sertifikat` varchar(255) NOT NULL,
  `asal` varchar(255) NOT NULL,
  `harga` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tanah`
--

INSERT INTO `tanah` (`id_tanah`, `gambar`, `kode_barang`, `nama_barang`, `peruntukan`, `alamat`, `luas`, `tahun_pengadaan`, `hak`, `tanggal_sertifikat`, `nomor_sertifikat`, `status_sertifikat`, `asal`, `harga`) VALUES
(1, '1763290013717-Tanah_TPU.jpg', '1.2.1.05.01.01.001', 'Tanah TPU', 'TPU Poboya', 'Poboya', 30000, '2005', 'Hak Pakai', '0000-00-00', 'Belum', 'Belum', 'Hibah', 2147483647),
(2, '1763290013778-Tanah_TPU.jpg', '1.2.1.05.01.01.002', 'Tanah TPU', 'TPU Lambara', 'Lambara', 2500, '2005', 'Hak Pakai', '0000-00-00', 'Belum', 'Belum', 'Hibah', 25000000),
(3, '1763290013816-Tanah_TPU.jpg', '1.2.1.05.01.01.003', 'Tanah TPU', 'TPU Tavanjuka', 'Lrg. Sumur Buvuoge Kel. Tawanjuka Kec. Tatanga', 1180, '2021', 'Default', '0000-00-00', 'Belum', 'Belum', 'Pembelian', 244600000),
(4, '1763290013941-Tanah_Taman.jpg', '1.2.1.05.01.01.004', 'Tanah Taman', 'Taman Median Muh. Yamin', 'Jin. M Yamin', 2500, '2005', 'Hak Pakai', '0000-00-00', 'Belum', 'Belum', 'Hibah', 607500000),
(5, '1763290013993-Tanah_Taman.jpg', '1.2.1.05.01.01.005', 'Tanah Taman', 'Taman Median Juanda', 'Jin. Juanda', 1078, '2005', 'Hak Pakai', '0000-00-00', 'Belum', 'Belum', 'Hibah', 307230000),
(6, '1763290014042-Tanah_Taman.jpg', '1.2.1.05.01.01.006', 'Tanah Taman', 'Taman Median Muh. Hata', 'Jin. M Hata', 1127, '2005', 'Hak Pakai', '0000-00-00', 'Belum', 'Belum', 'Hibah', 321195000),
(7, '1763290014088-Tanah_Taman.jpg', '1.2.1.05.01.01.007', 'Tanah Taman', 'Taman Segitiga Hasanudin', 'Jin. Sultan Hasanudin', 120, '2005', 'Hak Pakai', '0000-00-00', 'Belum', 'Belum', 'Hibah', 9600000),
(8, '1763290014129-Tanah_Taman.jpg', '1.2.1.05.01.01.008', 'Tanah Taman', 'Taman Segi Tiga Miangas (Depan Denpal)', 'Jln. Miangas', 80, '2005', 'Hak Pakai', '0000-00-00', 'Belum', 'Belum', 'Hibah', 12800000),
(9, '1763290014173-Tanah_Taman.jpg', '1.2.1.05.01.01.009', 'Tanah Taman', 'Taman Dewi Sartika (Ramba)', 'Jin. Dewi Sartika', 72, '2005', 'Hak Pakai', '0000-00-00', 'Belum', 'Belum', 'Hibah', 11520000),
(10, '1763290014218-Tanah_Taman.jpg', '1.2.1.05.01.01.010', 'Tanah Taman', 'Taman Bundaran Palupi (Songgolangi)', 'Jln. Igusti Ngurahrai', 580, '2005', 'Hak Pakai', '0000-00-00', 'Belum', 'Belum', 'Hibah', 11600000),
(11, '1763290014266-Tanah_Taman.jpg', '1.2.1.05.01.01.011', 'Tanah Taman', 'Taman Nasional', 'Jln. Wolter Monginsidi', 5000, '2005', 'Hak Pakai', '0000-00-00', 'Belum', 'Belum', 'Hibah', 1970000000),
(12, '1763290014306-Tanah_Taman.jpg', '1.2.1.05.01.01.012', 'Tanah Taman', 'Taman  GOR', 'Jin. M Hatta', 20000, '2005', 'Hak Pakai', '0000-00-00', 'Belum', 'Belum', 'Hibah', 2147483647),
(13, '1763290014341-Tanah_Taman.jpg', '1.2.1.05.01.01.013', 'Tanah Taman', 'Taman Segitiga Talise', 'Jln. Yos sudarso', 150, '2005', 'Hak Pakai', '0000-00-00', 'Belum', 'Belum', 'Hibah', 42750000),
(14, '1763290014386-Tanah_Taman.jpg', '1.2.1.05.01.01.014', 'Tanah Taman', 'Taman Segitiga PWI', 'Jln. Patimura', 11000, '2005', 'Hak Pakai', '0000-00-00', 'Belum', 'Belum', 'Hibah', 704000000),
(15, '1763290014434-Tanah_Taman.jpg', '1.2.1.05.01.01.015', 'Tanah Taman', 'Taman Segitiga Gajah Mada', 'Jln. Gajah Mada', 65, '2005', 'Hak Pakai', '0000-00-00', 'Belum', 'Belum', 'Hibah', 25610000),
(16, '1763290014476-Tanah_Taman.jpg', '1.2.1.05.01.01.016', 'Tanah Taman', 'Taman Segitiga Gumbasa (Toko Balikpapan)', 'Jln. Sungai Gumbasa', 35, '2005', 'Hak Pakai', '0000-00-00', 'Belum', 'Belum', 'Hibah', 4480000),
(17, '1763290014519-Tanah_Taman.jpg', '1.2.1.05.01.01.017', 'Tanah Taman', 'Taman Segitiga Bantilan Lasoso', 'Jln. Bantilan', 758, '2005', 'Hak Pakai', '0000-00-00', 'Belum', 'Belum', 'Hibah', 27288000),
(18, '1763290014569-Tanah_Taman.jpg', '1.2.1.05.01.01.018', 'Tanah Taman', 'Taman Jembatan Satu', 'Jln. Gajah Mada', 90, '2005', 'Hak Pakai', '0000-00-00', 'Belum', 'Belum', 'Hibah', 35460000),
(19, '1763290014612-Tanah_Taman.jpg', '1.2.1.05.01.01.019', 'Tanah Taman', 'Taman Pantai Talise', 'Jln. Rajamoili', 25000, '2005', 'Hak Pakai', '0000-00-00', 'Belum', 'Belum', 'Hibah', 2147483647),
(20, '1763290153418-tanah.png', '1.3.1.02.01.04.005', 'Tanah Bangunan Kantor', 'Kantor Dinas Lingkungan Hidup', 'Jl. Kakatua No. 09 Kel. Tanamodindi', 662, '1995', 'Hak Pakai', '2003-03-29', '19.05.03.05.4.00048  AU 394874', 'Sudah', 'Hibah', 937392000),
(21, '1763290241369-tanah.png', '1.3.1.02.01.04.005', 'Tanah Taman', 'Taman Segitiga Masomba (Depan Eks Mall)', 'Jin. W Monginsidi', 88, '2005', 'Hak Pakai', '2021-04-28', '19.05.01.10.4.00096 AAU 376425', 'Sudah', 'Hibah', 26792000),
(22, '1763290335068-tanah.png', '1.3.1.02.01.04.005', 'Tanah Taman', 'Taman Bundaran Bumi nyiur', 'Jln. Bumi Nyiur', 659, '2005', 'Hak Pakai', '2019-09-10', '19.05.01.06.4.00252 AAH 939895', 'Sudah', 'Hibah', 35200000),
(23, '1763290426522-tanah.png', '1.3.1.02.01.04.005', 'Tanah Taman', 'Taman Bundaran STQ', 'Jln. Sukarno Hata', 1678, '2005', 'Hak Pakai', '2021-12-30', '19.05.08.03.4.00061 AAH 945868', 'Sudah', 'Hibah', 160000000),
(24, '1763290521714-tanah.png', '1.3.1.02.01.04.002', 'Tanah Bangunan Laboratorium', 'Laboratorium DLH', 'Jln. Pipit No.01', 320, '2006', 'Hak Pakai', '2011-09-21', '19.05.03.05.4.00053  BE 435495', 'Sudah', 'Hibah', 377067000),
(25, '1763290602313-tanah.png', '1.3.1.02.01.04.002', 'Tanah Kosong', 'RTH Pantoloan', 'Kel. Pantoloan', 499, '1995', 'Hak Pakai', '2019-10-11', '19.05.07.08.4.00018 AAE 048950', 'Sudah', 'Hibah', 63872000),
(26, '1763290698110-tanah.png', '1.3.1.02.01.04.005', 'Tanah Taman', 'Taman Vatulemo', 'Watulemo', 2000, '2005', 'Hak Pakai', '2002-02-12', '19.05.03.05.4.00043 AS 137233', 'Sudah', 'Hibah', 486000000),
(27, '1763290775757-tanah.png', '1.3.1.02.01.04.002', 'Tanah TPA', 'TPA  Kawatuna.  Sertifikat Luas 5 Hektar', 'Kawatuna', 250000, '2005', 'Hak Pakai', '2003-11-18', '19.05.03.04.4.00048 AU 411069', 'Sudah', 'Hibah', 1787500000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tanaman`
--

CREATE TABLE `tanaman` (
  `id_tanaman` int(11) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `kode_barang` varchar(50) NOT NULL DEFAULT '1.3.1.02.01.04.001',
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
  `id_tanamankeluar` int(11) NOT NULL,
  `id_tanaman` int(11) NOT NULL,
  `tanggal` date NOT NULL,
  `jumlah` int(255) NOT NULL,
  `keterangan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tanamanmasuk`
--

CREATE TABLE `tanamanmasuk` (
  `id_tanamanmasuk` int(11) NOT NULL,
  `id_tanaman` int(11) NOT NULL,
  `tanggal` date NOT NULL,
  `jumlah` int(255) NOT NULL,
  `keterangan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id_user`, `username`, `password`, `role`) VALUES
(1, 'Kepala Dinas', '$2a$12$4OH44WPOXVBMkczY2Kjiku7J7Agb/s6wqCAs6UH6kMtlu4DpJXCyy', 'kepalaDinas'),
(2, 'Bendahara', '$2a$12$tv.yVv5HWfxSXA4KK8PaC.z7sckQy3uFzIYjk74y9iwIRb9hjWS7C', 'bendahara'),
(3, 'Admin', '$2a$12$tPhZsvZbIffNlQEgzMYFG.8y9tgDaPZTnHSmfsvTfOPoQNI3aDoxG', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `ac`
--
ALTER TABLE `ac`
  ADD PRIMARY KEY (`id_ac`),
  ADD UNIQUE KEY `no_registrasi` (`no_registrasi`),
  ADD KEY `fk_ac_aset` (`id_aset`);

--
-- Indeks untuk tabel `alatberat`
--
ALTER TABLE `alatberat`
  ADD PRIMARY KEY (`id_alatberat`),
  ADD UNIQUE KEY `no_registrasi` (`no_registrasi`),
  ADD KEY `fk_alatberat_aset` (`id_aset`);

--
-- Indeks untuk tabel `alatkerja`
--
ALTER TABLE `alatkerja`
  ADD PRIMARY KEY (`id_alatkerja`),
  ADD UNIQUE KEY `no_registrasi` (`no_registrasi`),
  ADD KEY `fk_alatkerja_aset` (`id_aset`);

--
-- Indeks untuk tabel `aset`
--
ALTER TABLE `aset`
  ADD PRIMARY KEY (`id_aset`),
  ADD UNIQUE KEY `no_unik` (`no_unik`);

--
-- Indeks untuk tabel `kendaraan`
--
ALTER TABLE `kendaraan`
  ADD PRIMARY KEY (`id_kendaraan`),
  ADD UNIQUE KEY `no_polisi` (`no_polisi`),
  ADD KEY `fk_kendaraan_aset` (`id_aset`);

--
-- Indeks untuk tabel `onderdil`
--
ALTER TABLE `onderdil`
  ADD PRIMARY KEY (`id_onderdil`),
  ADD KEY `onderdil_ibfk_1` (`id_servis`);

--
-- Indeks untuk tabel `serberac`
--
ALTER TABLE `serberac`
  ADD PRIMARY KEY (`id_serberac`),
  ADD UNIQUE KEY `no_registrasi` (`no_registrasi`);

--
-- Indeks untuk tabel `serberalatberat`
--
ALTER TABLE `serberalatberat`
  ADD PRIMARY KEY (`id_serberalatberat`),
  ADD UNIQUE KEY `no_registrasi` (`no_registrasi`);

--
-- Indeks untuk tabel `serberalatkerja`
--
ALTER TABLE `serberalatkerja`
  ADD PRIMARY KEY (`id_serberalatkerja`),
  ADD UNIQUE KEY `no_registrasi` (`no_registrasi`);

--
-- Indeks untuk tabel `serberkendaraan`
--
ALTER TABLE `serberkendaraan`
  ADD PRIMARY KEY (`id_serberkendaraan`),
  ADD UNIQUE KEY `no_polisi` (`no_polisi`);

--
-- Indeks untuk tabel `servis`
--
ALTER TABLE `servis`
  ADD PRIMARY KEY (`id_servis`),
  ADD KEY `id_aset` (`id_aset`) USING BTREE;

--
-- Indeks untuk tabel `tanah`
--
ALTER TABLE `tanah`
  ADD PRIMARY KEY (`id_tanah`);

--
-- Indeks untuk tabel `tanaman`
--
ALTER TABLE `tanaman`
  ADD PRIMARY KEY (`id_tanaman`);

--
-- Indeks untuk tabel `tanamankeluar`
--
ALTER TABLE `tanamankeluar`
  ADD PRIMARY KEY (`id_tanamankeluar`),
  ADD KEY `tanamankeluar_ibfk_1` (`id_tanaman`);

--
-- Indeks untuk tabel `tanamanmasuk`
--
ALTER TABLE `tanamanmasuk`
  ADD PRIMARY KEY (`id_tanamanmasuk`),
  ADD KEY `tanamanmasuk_ibfk_1` (`id_tanaman`);

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
  MODIFY `id_ac` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT untuk tabel `alatberat`
--
ALTER TABLE `alatberat`
  MODIFY `id_alatberat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `alatkerja`
--
ALTER TABLE `alatkerja`
  MODIFY `id_alatkerja` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT untuk tabel `aset`
--
ALTER TABLE `aset`
  MODIFY `id_aset` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=280;

--
-- AUTO_INCREMENT untuk tabel `kendaraan`
--
ALTER TABLE `kendaraan`
  MODIFY `id_kendaraan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=188;

--
-- AUTO_INCREMENT untuk tabel `onderdil`
--
ALTER TABLE `onderdil`
  MODIFY `id_onderdil` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `serberac`
--
ALTER TABLE `serberac`
  MODIFY `id_serberac` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT untuk tabel `serberalatberat`
--
ALTER TABLE `serberalatberat`
  MODIFY `id_serberalatberat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `serberalatkerja`
--
ALTER TABLE `serberalatkerja`
  MODIFY `id_serberalatkerja` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT untuk tabel `serberkendaraan`
--
ALTER TABLE `serberkendaraan`
  MODIFY `id_serberkendaraan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=188;

--
-- AUTO_INCREMENT untuk tabel `servis`
--
ALTER TABLE `servis`
  MODIFY `id_servis` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `tanah`
--
ALTER TABLE `tanah`
  MODIFY `id_tanah` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT untuk tabel `tanaman`
--
ALTER TABLE `tanaman`
  MODIFY `id_tanaman` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `tanamankeluar`
--
ALTER TABLE `tanamankeluar`
  MODIFY `id_tanamankeluar` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `tanamanmasuk`
--
ALTER TABLE `tanamanmasuk`
  MODIFY `id_tanamanmasuk` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `ac`
--
ALTER TABLE `ac`
  ADD CONSTRAINT `fk_ac_aset` FOREIGN KEY (`id_aset`) REFERENCES `aset` (`id_aset`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `alatberat`
--
ALTER TABLE `alatberat`
  ADD CONSTRAINT `fk_alatberat_aset` FOREIGN KEY (`id_aset`) REFERENCES `aset` (`id_aset`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `alatkerja`
--
ALTER TABLE `alatkerja`
  ADD CONSTRAINT `fk_alatkerja_aset` FOREIGN KEY (`id_aset`) REFERENCES `aset` (`id_aset`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `kendaraan`
--
ALTER TABLE `kendaraan`
  ADD CONSTRAINT `fk_kendaraan_aset` FOREIGN KEY (`id_aset`) REFERENCES `aset` (`id_aset`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `onderdil`
--
ALTER TABLE `onderdil`
  ADD CONSTRAINT `onderdil_ibfk_1` FOREIGN KEY (`id_servis`) REFERENCES `servis` (`id_servis`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `serberac`
--
ALTER TABLE `serberac`
  ADD CONSTRAINT `serberac_ibfk_1` FOREIGN KEY (`no_registrasi`) REFERENCES `ac` (`no_registrasi`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `serberalatberat`
--
ALTER TABLE `serberalatberat`
  ADD CONSTRAINT `serberalatberat_ibfk_1` FOREIGN KEY (`no_registrasi`) REFERENCES `alatberat` (`no_registrasi`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `serberalatkerja`
--
ALTER TABLE `serberalatkerja`
  ADD CONSTRAINT `serberalatkerja_ibfk_1` FOREIGN KEY (`no_registrasi`) REFERENCES `alatkerja` (`no_registrasi`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `serberkendaraan`
--
ALTER TABLE `serberkendaraan`
  ADD CONSTRAINT `serberkendaraan_ibfk_1` FOREIGN KEY (`no_polisi`) REFERENCES `kendaraan` (`no_polisi`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `servis`
--
ALTER TABLE `servis`
  ADD CONSTRAINT `servis_ibfk_1` FOREIGN KEY (`id_aset`) REFERENCES `aset` (`id_aset`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `tanamankeluar`
--
ALTER TABLE `tanamankeluar`
  ADD CONSTRAINT `tanamankeluar_ibfk_1` FOREIGN KEY (`id_tanaman`) REFERENCES `tanaman` (`id_tanaman`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `tanamanmasuk`
--
ALTER TABLE `tanamanmasuk`
  ADD CONSTRAINT `tanamanmasuk_ibfk_1` FOREIGN KEY (`id_tanaman`) REFERENCES `tanaman` (`id_tanaman`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
