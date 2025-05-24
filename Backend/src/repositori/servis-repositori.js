import conn from "../application/db.js";

const getServis = async () => {
  const [rows] = await conn.query("SELECT * FROM servis ORDER BY tanggal DESC");
  return rows;
};

const getServisByNoUnik = async (no_unik) => {
  const [rows] = await conn.query(
    "SELECT * FROM servis WHERE no_unik = ? ORDER BY tanggal DESC",
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
  no_unik,
  nama_bengkel,
  biaya_servis,
  nota_pembayaran,
  dokumentasi
) => {
  const [rows] = await conn.query(
    "INSERT INTO servis (tanggal, no_unik, nama_bengkel, biaya_servis, nota_pembayaran, dokumentasi) VALUES (?, ?, ?, ?, ?, ?)",
    [tanggal, no_unik, nama_bengkel, biaya_servis, nota_pembayaran, dokumentasi]
  );
  return rows;
};

const updateServis = async (
  id,
  tanggal,
  no_unik,
  nama_bengkel,
  biaya_servis,
  nota_pembayaran,
  dokumentasi
) => {
  return await conn.query(
    "UPDATE servis SET tanggal = ?, no_unik = ?, nama_bengkel = ?, biaya_servis = ?, nota_pembayaran = ?, dokumentasi = ? WHERE id_servis = ?",
    [
      tanggal,
      no_unik,
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

const deleteServisByNoUnik = async (no_unik) => {
  return await conn.query("DELETE FROM servis WHERE no_unik = ?", [no_unik]);
};

export default {
  getServis,
  getServisByNoUnik,
  getServisById,
  createServis,
  updateServis,
  deleteServis,
  deleteServisByNoUnik,
};
