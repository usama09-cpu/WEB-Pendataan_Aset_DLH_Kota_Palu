import conn from "../application/db.js";

const getOnderdilByIdServis = async (id) => {
  const [rows] = await conn.query(
    "SELECT * FROM onderdil WHERE id_servis = ?",
    [id]
  );
  return rows;
};

const createOnderdil = async (id_servis, nama_onderdil, jumlah, harga) => {
  return await conn.query(
    "INSERT INTO onderdil (id_servis, nama_onderdil, jumlah, harga) VALUES (?, ?, ?, ?)",
    [id_servis, nama_onderdil, jumlah, harga]
  );
};
const deleteOnderdilByIdServis = async (id) => {
  return await conn.query("DELETE FROM onderdil WHERE id_servis = ?", [id]);
};

export default {
  getOnderdilByIdServis,
  createOnderdil,
  deleteOnderdilByIdServis,
};
