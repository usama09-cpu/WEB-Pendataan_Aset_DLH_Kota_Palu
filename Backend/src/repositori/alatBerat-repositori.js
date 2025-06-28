import conn from "../application/db.js";
import qr from "../helper/qr.js";

const getAlatBerat = async () => {
  const [rows] = await conn.query(
    "SELECT * FROM alatberat ORDER BY no_registrasi DESC"
  );
  return rows;
};

const getAlatBeratById = async (id) => {
  const [rows] = await conn.query(
    "SELECT * FROM alatberat WHERE id_alatberat = ?",
    [id]
  );
  return rows[0];
};

const getAlatBeratByNoRegistrasi = async (no_registrasi) => {
  const [rows] = await conn.query(
    "SELECT * FROM alatberat WHERE no_registrasi = ?",
    [no_registrasi]
  );
  return rows[0];
};

const createAlatBerat = async (
  qrcode,
  gambar,
  merek,
  no_registrasi,
  no_mesin,
  no_rangka,
  warna,
  harga_pembelian,
  tahun_pembuatan,
  kategori,
  pajak,
  penggunaan,
  kondisi
) => {
  return await conn.query(
    "INSERT INTO alatberat (qrcode, gambar, merek, no_registrasi, no_mesin, no_rangka, warna, harga_pembelian, tahun_pembuatan, kategori, pajak, penggunaan, kondisi) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      qrcode,
      gambar,
      merek,
      no_registrasi,
      no_mesin,
      no_rangka,
      warna,
      harga_pembelian,
      tahun_pembuatan,
      kategori,
      pajak,
      penggunaan,
      kondisi,
    ]
  );
};

const updateAlatBerat = async (
  id,
  qrcode,
  gambar,
  merek,
  no_registrasi,
  no_mesin,
  no_rangka,
  warna,
  harga_pembelian,
  tahun_pembuatan,
  kategori,
  pajak,
  penggunaan,
  kondisi
) => {
  return await conn.query(
    "UPDATE alatberat SET qrcode = ?, gambar = ?, merek = ?, no_registrasi = ?, no_mesin = ?, no_rangka = ?, warna = ?, harga_pembelian = ?, tahun_pembuatan = ?, kategori = ?, pajak = ?, penggunaan = ?, kondisi = ? WHERE id_alatberat = ?",
    [
      qrcode,
      gambar,
      merek,
      no_registrasi,
      no_mesin,
      no_rangka,
      warna,
      harga_pembelian,
      tahun_pembuatan,
      kategori,
      pajak,
      penggunaan,
      kondisi,
      id,
    ]
  );
};

const deleteAlatBerat = async (id) => {
  return await conn.query("DELETE FROM alatberat WHERE id_alatberat = ?", [id]);
};

export default {
  getAlatBerat,
  getAlatBeratById,
  getAlatBeratByNoRegistrasi,
  createAlatBerat,
  updateAlatBerat,
  deleteAlatBerat,
};
