import conn from "../application/db.js";

const getServisBerkalaAc = async () => {
  const [rows] = await conn.query("SELECT * FROM serberac");
  return rows;
};

const getServisBerkalaAcById = async (id) => {
  const [rows] = await conn.query(
    "SELECT * FROM serberac WHERE id_serberac = ?",
    [id]
  );
  return rows[0];
};

const getServisBerkalaAcByNoRegistrasi = async (no_registrasi) => {
  const [rows] = await conn.query(
    "SELECT * FROM serberac WHERE no_registrasi = ?",
    [no_registrasi]
  );
  return rows[0];
};

const createServisBerkalaAc = async (no_registrasi, cuci) => {
  return await conn.query(
    "INSERT INTO serberac (no_registrasi, cuci) VALUES (?, ?)",
    [no_registrasi, cuci]
  );
};

const updateServisBerkalaAc = async (id, no_registrasi, cuci) => {
  return await conn.query(
    "UPDATE serberac SET no_registrasi = ?, cuci = ? WHERE id_serberac = ?",
    [no_registrasi, cuci, id]
  );
};

const deleteServisBerkalaAc = async (id) => {
  return await conn.query("DELETE FROM serberac WHERE id_serberac = ?", [id]);
};

const deleteServisBerkalaAcByNoRegistrasi = async (no_registrasi) => {
  return await conn.query("DELETE FROM serberac WHERE no_registrasi = ?", [
    no_registrasi,
  ]);
};

export default {
  getServisBerkalaAc,
  getServisBerkalaAcById,
  getServisBerkalaAcByNoRegistrasi,
  createServisBerkalaAc,
  updateServisBerkalaAc,
  deleteServisBerkalaAc,
  deleteServisBerkalaAcByNoRegistrasi,
};
