import conn from "../application/db.js";

const getKendaraan = async () => {
  const [rows] = await conn.query("SELECT * FROM kendaraan");
  return rows;
};

const getKendaraanById = async (id) => {
  const [rows] = await conn.query(
    "SELECT * FROM kendaraan WHERE id_kendaraan = ?",
    [id]
  );
  return rows[0];
};

const getKendaraanByNoPol = async (no_polisi) => {
  const [rows] = await conn.query(
    "SELECT * FROM kendaraan WHERE no_polisi = ?",
    [no_polisi]
  );
  return rows[0];
};

const createKendaraan = async (
  qrcode,
  gambar,
  merek,
  no_polisi,
  no_mesin,
  no_rangka,
  warna,
  harga_pembelian,
  tahun_pembuatan,
  kategori,
  pajak,
  pemegang,
  nik,
  penggunaan,
  kondisi
) => {
  return await conn.query(
    "INSERT INTO kendaraan (qrcode, gambar, merek, no_polisi, no_mesin, no_rangka, warna, harga_pembelian, tahun_pembuatan, kategori, pajak, pemegang, nik, penggunaan, kondisi) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      qrcode,
      gambar,
      merek,
      no_polisi,
      no_mesin,
      no_rangka,
      warna,
      harga_pembelian,
      tahun_pembuatan,
      kategori,
      pajak,
      pemegang,
      nik,
      penggunaan,
      kondisi,
    ]
  );
};

const updateKendaraan = async (
  id,
  qrcode,
  gambar,
  merek,
  no_polisi,
  no_mesin,
  no_rangka,
  warna,
  harga_pembelian,
  tahun_pembuatan,
  kategori,
  pajak,
  pemegang,
  nik,
  penggunaan,
  kondisi
) => {
  return await conn.query(
    "UPDATE kendaraan SET qrcode = ?, gambar = ?, merek = ?, no_polisi = ?, no_mesin = ?, no_rangka = ?, warna = ?, harga_pembelian = ?, tahun_pembuatan = ?, kategori = ?, pajak = ?, pemegang = ?, nik = ?, penggunaan = ?, kondisi = ? WHERE id_kendaraan = ?",
    [
      qrcode,
      gambar,
      merek,
      no_polisi,
      no_mesin,
      no_rangka,
      warna,
      harga_pembelian,
      tahun_pembuatan,
      kategori,
      pajak,
      pemegang,
      nik,
      penggunaan,
      kondisi,
      id,
    ]
  );
};

const deleteKendaraan = async (id) => {
  return await conn.query("DELETE FROM kendaraan WHERE id_kendaraan = ?", [id]);
};

export default {
  getKendaraan,
  getKendaraanById,
  getKendaraanByNoPol,
  createKendaraan,
  updateKendaraan,
  deleteKendaraan,
};
