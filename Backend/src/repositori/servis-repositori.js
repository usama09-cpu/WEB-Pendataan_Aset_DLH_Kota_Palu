import conn from "../application/db.js";

const getServis = async () => {
  const [rows] = await conn.query("SELECT * FROM servis ORDER BY tanggal DESC");
  return rows;
};

const getServisByNoUnik = async (no_unik) => {
  const [rows] = await conn.query(
    `SELECT s.*, a.id_aset, a.no_unik, a.jenis
     FROM servis s
     JOIN aset a ON s.id_aset = a.id_aset
     WHERE a.no_unik = ?
     ORDER BY s.tanggal DESC`,
    [no_unik]
  );
  return rows;
};

const getServisById = async (id) => {
  const [rows] = await conn.query("SELECT * FROM servis WHERE id_servis = ?", [
    id,
  ]);
  return rows[0];
};

const createServis = async (
  tanggal,
  id_aset,
  nama_bengkel,
  biaya_servis,
  nota_pembayaran,
  dokumentasi
) => {
  const [rows] = await conn.query(
    "INSERT INTO servis (tanggal, id_aset, nama_bengkel, biaya_servis, nota_pembayaran, dokumentasi) VALUES (?, ?, ?, ?, ?, ?)",
    [tanggal, id_aset, nama_bengkel, biaya_servis, nota_pembayaran, dokumentasi]
  );
  return rows;
};

const updateServis = async (
  id,
  tanggal,
  id_aset,
  nama_bengkel,
  biaya_servis,
  nota_pembayaran,
  dokumentasi
) => {
  return await conn.query(
    "UPDATE servis SET tanggal = ?, id_aset = ?, nama_bengkel = ?, biaya_servis = ?, nota_pembayaran = ?, dokumentasi = ? WHERE id_servis = ?",
    [
      tanggal,
      id_aset,
      nama_bengkel,
      biaya_servis,
      nota_pembayaran,
      dokumentasi,
      id,
    ]
  );
};

const deleteServis = async (id) => {
  return await conn.query("DELETE FROM servis WHERE id_servis = ?", [id]);
};

const deleteServisByIdAset = async (id_aset) => {
  return await conn.query("DELETE FROM servis WHERE id_aset = ?", [id_aset]);
};

export default {
  getServis,
  getServisByNoUnik,
  getServisById,
  createServis,
  updateServis,
  deleteServis,
  deleteServisByIdAset,
};
