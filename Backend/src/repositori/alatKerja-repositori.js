import conn from "../application/db.js";

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
  aset,
  kode_barang,
  nama_barang,
  merek,
  no_registrasi,
  no_serial,
  asal,
  tahun_pembelian,
  harga_pembelian,
  kondisi,
  pemegang,
  keterangan
) => {
  const sql = `
  INSERT INTO alatkerja (qrcode, gambar, id_aset, kode_barang, nama_barang, merek, no_registrasi, no_serial, asal, tahun_pembelian, harga_pembelian, kondisi, pemegang, keterangan) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  await conn.query(sql, [
    qrcode,
    gambar,
    aset,
    kode_barang,
    nama_barang,
    merek,
    no_registrasi,
    no_serial,
    asal,
    tahun_pembelian,
    harga_pembelian,
    kondisi,
    pemegang,
    keterangan,
  ]);
};

const updateAlatKerja = async (
  id,
  qrcode,
  gambar,
  kode_barang,
  nama_barang,
  merek,
  no_registrasi,
  no_serial,
  asal,
  tahun_pembelian,
  harga_pembelian,
  kondisi,
  pemegang,
  keterangan
) => {
  return await conn.query(
    "UPDATE alatkerja SET qrcode = ?, gambar = ?, kode_barang = ?, nama_barang = ?, merek = ?, no_registrasi = ?, no_serial = ?, asal = ?, tahun_pembelian = ?, harga_pembelian = ?, kondisi = ?, pemegang = ?, keterangan = ? WHERE id_alatkerja = ?",
    [
      qrcode,
      gambar,
      kode_barang,
      nama_barang,
      merek,
      no_registrasi,
      no_serial,
      asal,
      tahun_pembelian,
      harga_pembelian,
      kondisi,
      pemegang,
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
