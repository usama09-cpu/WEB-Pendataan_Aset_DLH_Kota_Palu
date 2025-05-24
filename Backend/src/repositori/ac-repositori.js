import conn from "../application/db.js";
import qr from "../helper/qr.js";

const getAc = async () => {
  const [rows] = await conn.query(
    "SELECT * FROM ac ORDER BY no_registrasi DESC"
  );
  return rows;
};

const getAcById = async (id) => {
  const [rows] = await conn.query("SELECT * FROM ac WHERE id_ac = ?", [id]);
  return rows[0];
};

const getAcByNoRegistrasi = async (no_registrasi) => {
  const [rows] = await conn.query("SELECT * FROM ac WHERE no_registrasi = ?", [
    no_registrasi,
  ]);
  return rows[0];
};

const createAc = async (
  qrcode,
  gambar,
  merek,
  no_registrasi,
  no_serial,
  ukuran,
  ruangan,
  asal,
  tahun_pembelian,
  harga_pembelian,
  kondisi,
  keterangan
) => {
  return await conn.query(
    "INSERT INTO ac (qrcode, gambar, merek, no_registrasi, no_serial, ukuran, ruangan, asal, tahun_pembelian, harga_pembelian, kondisi, keterangan) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      qrcode,
      gambar,
      merek,
      no_registrasi,
      no_serial,
      ukuran,
      ruangan,
      asal,
      tahun_pembelian,
      harga_pembelian,
      kondisi,
      keterangan,
    ]
  );
};

const updateAc = async (
  id,
  qrcode,
  gambar,
  merek,
  no_registrasi,
  no_serial,
  ukuran,
  ruangan,
  asal,
  tahun_pembelian,
  harga_pembelian,
  kondisi,
  keterangan
) => {
  return await conn.query(
    "UPDATE ac SET qrcode = ?, gambar = ?, merek = ?, no_registrasi = ?, no_serial = ?, ukuran = ?, ruangan = ?, asal = ?, tahun_pembelian = ?, harga_pembelian = ?, kondisi = ?, keterangan = ? WHERE id_ac = ?",
    [
      qrcode,
      gambar,
      merek,
      no_registrasi,
      no_serial,
      ukuran,
      ruangan,
      asal,
      tahun_pembelian,
      harga_pembelian,
      kondisi,
      keterangan,
      id,
    ]
  );
};

const deleteAc = async (id) => {
  return await conn.query("DELETE FROM ac WHERE id_ac = ?", [id]);
};

export default {
  getAc,
  getAcById,
  getAcByNoRegistrasi,
  createAc,
  updateAc,
  deleteAc,
};
