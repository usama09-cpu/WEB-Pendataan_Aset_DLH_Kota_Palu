import userRepositori from "../repositori/user-repositori.js";
import bcrypt from "bcrypt";

const getUsers = async () => {
  return userRepositori.getUser();
};

const getUserById = async (id) => {
  const user = await userRepositori.getUserById(id);
  if (!user) {
    throw new Error("User tidak ditemukan");
  }
  return user;
};

const register = async (username, password) => {
  if (!username || !password) {
    throw new Error("Username atau password harus diisi");
  }

  const existingUser = await userRepositori.getUserByUsername(username);
  if (existingUser) {
    throw new Error("Username sudah digunakan");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await userRepositori.createUser(username, hashedPassword);

  // Ambil data user yang baru dibuat
  return userRepositori.getUserByUsername(username);
};

const login = async (username, password) => {
  if (!username || !password) {
    throw new Error("Username atau password harus diisi");
  }

  const user = await userRepositori.getUserByUsername(username);
  if (!user) {
    throw new Error("Username tidak ditemukan");
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    throw new Error("Password salah");
  }

  return user;
};

const updateUser = async (id, username, password) => {
  if (!username || !password) {
    throw new Error("Username atau password harus diisi");
  }

  const existingUser = await userRepositori.getUserById(id);
  if (!existingUser) {
    throw new Error("Username tidak ditemukan");
  }

  const existingUserByUsername = await userRepositori.getUserByUsername(
    username
  );
  if (existingUserByUsername && existingUserByUsername.id_user != id) {
    throw new Error("Username sudah digunakan");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  return userRepositori.updateUser(id, username, hashedPassword);
};

const deleteUser = async (id) => {
  if (!id) {
    throw new Error("Username harus diisi");
  }

  const existingUser = await userRepositori.getUserById(id);
  if (!existingUser) {
    throw new Error("Username tidak ditemukan");
  }

  return userRepositori.deleteUser(id);
};

export default {
  getUsers,
  getUserById,
  register,
  login,
  updateUser,
  deleteUser,
};
