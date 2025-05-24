import conn from "../application/db.js";

const getServisBerkalaAlatKerja = async () => {
  const [rows] = await conn.query("SELECT * FROM serberalatkerja");
  return rows;
};

const getServisBerkalaAlatKerjaById = async (id) => {
  const [rows] = await conn.query(
    "SELECT * FROM serberalatkerja WHERE id_serberalatkerja = ?",
    [id]
  );
  return rows[0];
};

const getServisBerkalaAlatKerjaByNoRegistrasi = async (no_registrasi) => {
  const [rows] = await conn.query(
    "SELECT * FROM serberalatkerja WHERE no_registrasi = ?",
    [no_registrasi]
  );
  return rows[0];
};

const createServisBerkalaAlatKerja = async (no_registrasi, oli_mesin) => {
  return await conn.query(
    "INSERT INTO serberalatkerja (no_registrasi, oli_mesin) VALUES (?, ?)",
    [no_registrasi, oli_mesin]
  );
};

const updateServisBerkalaAlatKerja = async (id, no_registrasi, oli_mesin) => {
  return await conn.query(
    "UPDATE serberalatkerja SET no_registrasi = ?, oli_mesin = ? WHERE id_serberalatkerja = ?",
    [no_registrasi, oli_mesin, id]
  );
};

const deleteServisBerkalaAlatKerjaById = async (id) => {
  return await conn.query(
    "DELETE FROM serberalatkerja WHERE id_serberalatkerja = ?",
    [id]
  );
};

const deleteServisBerkalaAlatKerjaByNoRegistrasi = async (no_registrasi) => {
  return await conn.query(
    "DELETE FROM serberalatkerja WHERE no_registrasi = ?",
    [no_registrasi]
  );
};

export default {
  getServisBerkalaAlatKerja,
  getServisBerkalaAlatKerjaById,
  getServisBerkalaAlatKerjaByNoRegistrasi,
  createServisBerkalaAlatKerja,
  updateServisBerkalaAlatKerja,
  deleteServisBerkalaAlatKerjaById,
  deleteServisBerkalaAlatKerjaByNoRegistrasi,
};
