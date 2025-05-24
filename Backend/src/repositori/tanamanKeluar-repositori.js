import conn from "../application/db.js";

const getTanamanKeluar = async () => {
  const [rows] = await conn.query(
    "SELECT * FROM tanamankeluar ORDER BY tanggal DESC"
  );
  return rows;
};

const getTanamanKeluarById = async (id) => {
  const [rows] = await conn.query(
    "SELECT * FROM tanamankeluar WHERE id_tanamankeluar = ?",
    [id]
  );
  return rows[0];
};

const getTanamanKeluarByIdTanaman = async (id) => {
  const [rows] = await conn.query(
    "SELECT * FROM tanamankeluar WHERE id_tanaman = ? ORDER BY tanggal DESC",
    [id]
  );
  return rows;
};

const createTanamanKeluar = async (id_tanaman, tanggal, jumlah, keterangan) => {
  return await conn.query(
    "INSERT INTO tanamankeluar (id_tanaman, tanggal, jumlah, keterangan) VALUES (?, ?, ?, ?)",
    [id_tanaman, tanggal, jumlah, keterangan]
  );
};

const updateTanamanKeluar = async (
  id,
  id_tanaman,
  tanggal,
  jumlah,
  keterangan
) => {
  return await conn.query(
    "UPDATE tanamankeluar SET id_tanaman = ?, tanggal = ?, jumlah = ?, keterangan = ? WHERE id_tanamankeluar = ?",
    [id_tanaman, tanggal, jumlah, keterangan, id]
  );
};

const deleteTanamanKeluar = async (id) => {
  return await conn.query(
    "DELETE FROM tanamankeluar WHERE id_tanamankeluar = ?",
    [id]
  );
};

const deleteTanamanKeluarByIdTanaman = async (id) => {
  return await conn.query("DELETE FROM tanamankeluar WHERE id_tanaman = ?", [
    id,
  ]);
};

export default {
  getTanamanKeluar,
  getTanamanKeluarById,
  getTanamanKeluarByIdTanaman,
  createTanamanKeluar,
  updateTanamanKeluar,
  deleteTanamanKeluar,
  deleteTanamanKeluarByIdTanaman,
};
