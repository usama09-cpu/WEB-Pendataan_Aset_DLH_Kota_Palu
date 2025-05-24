import conn from "../application/db.js";

const getTanamanMasuk = async () => {
  const [rows] = await conn.query(
    "SELECT * FROM tanamanmasuk ORDER BY tanggal DESC"
  );
  return rows;
};

const getTanamanMasukById = async (id) => {
  const [rows] = await conn.query(
    "SELECT * FROM tanamanmasuk WHERE id_tanamanmasuk = ?",
    [id]
  );
  return rows[0];
};

const getTanamanMasukByIdTanaman = async (id) => {
  const [rows] = await conn.query(
    "SELECT * FROM tanamanmasuk WHERE id_tanaman = ? ORDER BY tanggal DESC",
    [id]
  );
  return rows;
};

const createTanamanMasuk = async (id_tanaman, tanggal, jumlah, keterangan) => {
  return await conn.query(
    "INSERT INTO tanamanmasuk (id_tanaman, tanggal, jumlah, keterangan) VALUES (?, ?, ?, ?)",
    [id_tanaman, tanggal, jumlah, keterangan]
  );
};

const updateTanamanMasuk = async (
  id,
  id_tanaman,
  tanggal,
  jumlah,
  keterangan
) => {
  return await conn.query(
    "UPDATE tanamanmasuk SET id_tanaman = ?, tanggal = ?, jumlah = ?, keterangan = ? WHERE id_tanamanmasuk = ?",
    [id_tanaman, tanggal, jumlah, keterangan, id]
  );
};

const deleteTanamanMasuk = async (id) => {
  return await conn.query(
    "DELETE FROM tanamanmasuk WHERE id_tanamanmasuk = ?",
    [id]
  );
};

const deleteTanamanMasukByIdTanaman = async (id) => {
  return await conn.query("DELETE FROM tanamanmasuk WHERE id_tanaman = ?", [
    id,
  ]);
};

export default {
  getTanamanMasuk,
  getTanamanMasukById,
  getTanamanMasukByIdTanaman,
  createTanamanMasuk,
  updateTanamanMasuk,
  deleteTanamanMasuk,
  deleteTanamanMasukByIdTanaman,
};
