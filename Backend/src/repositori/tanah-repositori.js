import conn from "../application/db.js";

const getTanah = async () => {
  const [rows] = await conn.query("SELECT * FROM tanah");
  return rows;
};

const getTanahById = async (id) => {
  const [rows] = await conn.query("SELECT * FROM tanah WHERE id_tanah = ?", [
    id,
  ]);
  return rows[0];
};

const createTanah = async (
  gambar,
  kode_barang,
  nama_barang,
  peruntukan,
  alamat,
  luas,
  tahun_pengadaan,
  hak,
  tanggal_sertifikat,
  nomor_sertifikat,
  status_sertifikat,
  asal,
  harga
) => {
  return await conn.query(
    `INSERT INTO tanah (
    gambar,
    kode_barang,  
    nama_barang, peruntukan, alamat, luas, tahun_pengadaan,
      hak, tanggal_sertifikat, nomor_sertifikat, status_sertifikat,
      asal, harga
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      gambar,
      kode_barang,
      nama_barang,
      peruntukan,
      alamat,
      luas,
      tahun_pengadaan,
      hak,
      tanggal_sertifikat,
      nomor_sertifikat,
      status_sertifikat,
      asal,
      harga,
    ]
  );
};

const updateTanah = async (
  id,
  gambar,
  kode_barang,
  nama_barang,
  peruntukan,
  alamat,
  luas,
  tahun_pengadaan,
  hak,
  tanggal_sertifikat,
  nomor_sertifikat,
  status_sertifikat,
  asal,
  harga
) => {
  return await conn.query(
    `UPDATE tanah SET
    gambar = ?,
    kode_barang = ?,
    nama_barang = ?, peruntukan = ?, alamat = ?, luas = ?, tahun_pengadaan = ?,
      hak = ?, tanggal_sertifikat = ?, nomor_sertifikat = ?, status_sertifikat = ?,
      asal = ?, harga = ?
    WHERE id_tanah = ?`,
    [
      gambar,
      kode_barang,
      nama_barang,
      peruntukan,
      alamat,
      luas,
      tahun_pengadaan,
      hak,
      tanggal_sertifikat,
      nomor_sertifikat,
      status_sertifikat,
      asal,
      harga,
      id,
    ]
  );
};

const deleteTanah = async (id) => {
  return await conn.query("DELETE FROM tanah WHERE id_tanah = ?", [id]);
};

export default {
  getTanah,
  getTanahById,
  createTanah,
  updateTanah,
  deleteTanah,
};
