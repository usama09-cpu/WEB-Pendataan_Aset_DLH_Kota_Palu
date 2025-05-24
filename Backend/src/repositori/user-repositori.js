import conn from "../application/db.js";

const getUser = async () => {
  const [rows] = await conn.query("SELECT * FROM user");
  return rows;
};

const getUserByUsername = async (username) => {
  const [rows] = await conn.query("SELECT * FROM user WHERE username = ?", [
    username,
  ]);
  return rows[0];
};

const getUserById = async (id) => {
  const [rows] = await conn.query("SELECT * FROM user WHERE id_user = ?", [id]);
  return rows[0];
};

const createUser = async (username, password) => {
  const [result] = await conn.query(
    "INSERT INTO user (username, password) VALUES (?, ?)",
    [username, password]
  );
  return result;
};

const updateUser = async (id, username, password) => {
  const [result] = await conn.query(
    "UPDATE user SET username = ?, password = ? WHERE id_user = ?",
    [username, password, id]
  );
  return result.affectedRows;
};

const deleteUser = async (id) => {
  const [result] = await conn.query("DELETE FROM user WHERE id_user = ?", [id]);
  return result.affectedRows;
};

export default {
  getUser,
  getUserByUsername,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
