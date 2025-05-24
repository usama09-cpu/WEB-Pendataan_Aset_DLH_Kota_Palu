import conn from "../application/db.js";
import qr from "../helper/qr.js";

const getAlatKerja = async () => {
  const [rows] = await conn.query(
    "SELECT * FROM alatkerja ORDER BY no_registrasi DESC"
  );
  return rows;
};

const getAlatKerjaById = async (id) => {
  const [rows] = await conn.query(
    "SELECT * FROM alatkerja WHERE id_alatkerja = ?",
    [id]
  );
  return rows[0];
};

const getAlatKerjaByNoRegistrasi = async (no_registrasi) => {
  const [rows] = await conn.query(
    "SELECT * FROM alatkerja WHERE no_registrasi = ?",
    [no_registrasi]
  );
  return rows[0];
};

const createAlatKerja = async (
  qrcode,
  gambar,
  merek,
  no_registrasi,
  no_serial,
  asal,
  tahun_pembelian,
  harga_pembelian,
  kondisi,
  keterangan
) => {
  return await conn.query(
    "INSERT INTO alatkerja (qrcode, gambar, merek, no_registrasi, no_serial, asal, tahun_pembelian, harga_pembelian, kondisi, keterangan) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      qrcode,
      gambar,
      merek,
      no_registrasi,
      no_serial,
      asal,
      tahun_pembelian,
      harga_pembelian,
      kondisi,
      keterangan,
    ]
  );
};

const updateAlatKerja = async (
  id,
  qrcode,
  gambar,
  merek,
  no_registrasi,
  no_serial,
  asal,
  tahun_pembelian,
  harga_pembelian,
  kondisi,
  keterangan
) => {
  return await conn.query(
    "UPDATE alatkerja SET qrcode = ?, gambar = ?, merek = ?, no_registrasi = ?, no_serial = ?, asal = ?, tahun_pembelian = ?, harga_pembelian = ?, kondisi = ?, keterangan = ? WHERE id_alatkerja = ?",
    [
      qrcode,
      gambar,
      merek,
      no_registrasi,
      no_serial,
      asal,
      tahun_pembelian,
      harga_pembelian,
      kondisi,
      keterangan,
      id,
    ]
  );
};

const deleteAlatKerja = async (id) => {
  return await conn.query("DELETE FROM alatkerja WHERE id_alatkerja = ?", [id]);
};

export default {
  getAlatKerja,
  getAlatKerjaById,
  getAlatKerjaByNoRegistrasi,
  createAlatKerja,
  updateAlatKerja,
  deleteAlatKerja,
};
