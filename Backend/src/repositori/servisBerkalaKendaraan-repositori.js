import conn from "../application/db.js";

const getServisBerkalaKendaraan = async () => {
  const [rows] = await conn.query("SELECT * FROM serberkendaraan");
  return rows;
};

const getServisBerkalaKendaraanById = async (id) => {
  const [rows] = await conn.query(
    "SELECT * FROM serberkendaraan WHERE id_serberkendaraan = ?",
    [id]
  );
  return rows[0];
};

const getServisBerkalaKendaraanByNoPol = async (no_polisi) => {
  const [rows] = await conn.query(
    "SELECT * FROM serberkendaraan WHERE no_polisi = ?",
    [no_polisi]
  );
  return rows[0];
};

const createServisBerkalaKendaraan = async (
  no_polisi,
  oli_mesin,
  filter_oli_mesin,
  oli_gardan,
  oli_transmisi,
  ban
) => {
  return await conn.query(
    "INSERT INTO serberkendaraan (no_polisi, oli_mesin, filter_oli_mesin, oli_gardan, oli_transmisi, ban) VALUES (?, ?, ?, ?, ?, ?)",
    [no_polisi, oli_mesin, filter_oli_mesin, oli_gardan, oli_transmisi, ban]
  );
};

const updateServisBerkalaKendaraan = async (
  id,
  no_polisi,
  oli_mesin,
  filter_oli_mesin,
  oli_gardan,
  oli_transmisi,
  ban
) => {
  return await conn.query(
    "UPDATE serberkendaraan SET no_polisi = ?, oli_mesin = ?, filter_oli_mesin = ?, oli_gardan = ?, oli_transmisi = ?, ban = ? WHERE id_serberkendaraan = ?",
    [no_polisi, oli_mesin, filter_oli_mesin, oli_gardan, oli_transmisi, ban, id]
  );
};

const deleteServisBerkalaKendaraan = async (id) => {
  return await conn.query(
    "DELETE FROM serberkendaraan WHERE id_serberkendaraan = ?",
    [id]
  );
};

const deleteServisBerkalaKendaraanByNoPol = async (no_polisi) => {
  return await conn.query("DELETE FROM serberkendaraan WHERE no_polisi = ?", [
    no_polisi,
  ]);
};

export default {
  getServisBerkalaKendaraan,
  getServisBerkalaKendaraanById,
  getServisBerkalaKendaraanByNoPol,
  createServisBerkalaKendaraan,
  updateServisBerkalaKendaraan,
  deleteServisBerkalaKendaraan,
  deleteServisBerkalaKendaraanByNoPol,
};
