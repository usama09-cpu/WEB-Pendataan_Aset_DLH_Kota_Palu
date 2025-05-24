import conn from "../application/db.js";

const getTanaman = async () => {
  const [rows] = await conn.query("SELECT * FROM tanaman");
  return rows;
};

const getTanamanById = async (id) => {
  const [rows] = await conn.query(
    "SELECT * FROM tanaman WHERE id_tanaman = ?",
    [id]
  );
  return rows[0];
};

const createTanaman = async (gambar, nama, jenis, stok, keterangan) => {
  return await conn.query(
    "INSERT INTO tanaman (gambar, nama, jenis, stok, keterangan) VALUES (?, ?, ?, ?, ?)",
    [gambar, nama, jenis, stok, keterangan]
  );
};

const updateTanaman = async (id, gambar, nama, jenis, stok, keterangan) => {
  return await conn.query(
    "UPDATE tanaman SET gambar = ?, nama = ?, jenis = ?, stok = ?, keterangan = ? WHERE id_tanaman = ?",
    [gambar, nama, jenis, stok, keterangan, id]
  );
};

const deleteTanaman = async (id) => {
  return await conn.query("DELETE FROM tanaman WHERE id_tanaman = ?", [id]);
};

export default {
  getTanaman,
  getTanamanById,
  createTanaman,
  updateTanaman,
  deleteTanaman,
};
