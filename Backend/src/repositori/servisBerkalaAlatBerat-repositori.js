import conn from "../application/db.js";

const getServisBerkalaAlatBerat = async () => {
  const [rows] = await conn.query("SELECT * FROM serberalatberat");
  return rows;
};

const getServisBerkalaAlatBeratById = async (id) => {
  const [rows] = await conn.query(
    "SELECT * FROM serberalatberat WHERE id_serberalatberat = ?",
    [id]
  );
  return rows[0];
};

const getServisBerkalaAlatBeratByNoRegistrasi = async (no_registrasi) => {
  const [rows] = await conn.query(
    "SELECT * FROM serberalatberat WHERE no_registrasi = ?",
    [no_registrasi]
  );
  return rows[0];
};

const createServisBerkalaAlatBerat = async (
  no_registrasi,
  oli_mesin,
  filter_oli_mesin
) => {
  return await conn.query(
    "INSERT INTO serberalatberat (no_registrasi, oli_mesin, filter_oli_mesin) VALUES (?, ?, ?)",
    [no_registrasi, oli_mesin, filter_oli_mesin]
  );
};

const updateServisBerkalaAlatBerat = async (
  id,
  no_registrasi,
  oli_mesin,
  filter_oli_mesin
) => {
  return await conn.query(
    "UPDATE serberalatberat SET no_registrasi = ?, oli_mesin = ?, filter_oli_mesin = ? WHERE id_serberalatberat = ?",
    [no_registrasi, oli_mesin, filter_oli_mesin, id]
  );
};

const deleteServisBerkalaAlatBerat = async (id) => {
  return await conn.query(
    "DELETE FROM serberalatberat WHERE id_serberalatberat = ?",
    [id]
  );
};

const deleteServisBerkalaAlatBeratByNoRegistrasi = async (no_registrasi) => {
  return await conn.query(
    "DELETE FROM serberalatberat WHERE no_registrasi = ?",
    [no_registrasi]
  );
};

export default {
  getServisBerkalaAlatBerat,
  getServisBerkalaAlatBeratById,
  getServisBerkalaAlatBeratByNoRegistrasi,
  createServisBerkalaAlatBerat,
  updateServisBerkalaAlatBerat,
  deleteServisBerkalaAlatBerat,
  deleteServisBerkalaAlatBeratByNoRegistrasi,
};
