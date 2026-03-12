import conn from "../application/db.js";

export const getAsetByNoUnik = async (no_unik) => {
  const [rows] = await conn.query("SELECT * FROM aset WHERE no_unik = ?", [no_unik]);
  return rows[0];
};

export const createAset = async (no_unik, jenis) => {
  const [rows] = await conn.query(
    "INSERT INTO aset (no_unik, jenis) VALUES (?, ?)",
    [no_unik, jenis]
  );
  return rows.insertId;
};

export const updateAset = async (id_aset, no_unik) => {
  await conn.query(
    `
    UPDATE aset SET no_unik = ? WHERE id_aset = ?`,
    [no_unik, id_aset]
  );
};

export const deleteAset = async (id_aset) => {
  await conn.query(
    `
    DELETE FROM aset WHERE id_aset = ?`,
    [id_aset]
  );
};
