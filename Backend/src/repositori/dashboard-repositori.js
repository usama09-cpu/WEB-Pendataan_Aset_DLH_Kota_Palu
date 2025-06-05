import conn from "../application/db.js";

const getCountR2 = async () => {
  const [rows] = await conn.query(
    "SELECT COUNT(*) as R2 FROM kendaraan WHERE kategori = 'R2'"
  );
  return rows[0];
};

const getCountR3 = async () => {
  const [rows] = await conn.query(
    "SELECT COUNT(*) as R3 FROM kendaraan WHERE kategori = 'R3'"
  );
  return rows[0];
};

const getCountR4 = async () => {
  const [rows] = await conn.query(
    "SELECT COUNT(*) as R4 FROM kendaraan WHERE kategori = 'R4'"
  );
  return rows[0];
};

const getCountR6 = async () => {
  const [rows] = await conn.query(
    "SELECT COUNT(*) as R6 FROM kendaraan WHERE kategori = 'R6'"
  );
  return rows[0];
};

const getCountAlatBerat = async () => {
  const [rows] = await conn.query(
    "SELECT COUNT(*) as alatberat FROM alatberat"
  );
  return rows[0];
};

const getCountAlatKerja = async () => {
  const [rows] = await conn.query(
    "SELECT COUNT(*) as alatkerja FROM alatkerja"
  );
  return rows[0];
};

const getCountAc = async () => {
  const [rows] = await conn.query("SELECT COUNT(*) as ac FROM ac");
  return rows[0];
};

const getCountTanaman = async () => {
  const [rows] = await conn.query("SELECT COUNT(*) as tanaman FROM tanaman");
  return rows[0];
};

export default {
  getCountR2,
  getCountR3,
  getCountR4,
  getCountR6,
  getCountAlatBerat,
  getCountAlatKerja,
  getCountAc,
  getCountTanaman,
};
