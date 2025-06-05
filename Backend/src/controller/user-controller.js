import userService from "../service/user-service.js";
import jwt from "jsonwebtoken";

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json({ message: "berhasil", data: users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    res
      .status(200)
      .json({ message: "berhasil mengambil data user", data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userService.register(username, password);
    res.status(201).json({ message: "berhasil register", data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userService.login(username, password);
    const token = jwt.sign({ id: user.id }, process.env.TOKEN, {
      expiresIn: "1d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production" ? true : false,
      secure: false,
      sameSite: "None",
      path: "/",
      maxAge: 60 * 60 * 24 * 1000,
    });

    res.status(200).json({
      message: "berhasil login",
      id_user: user.id_user,
      username: user.username,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { username, password } = req.body;
    await userService.updateUser(id, username, password);
    res.status(200).json({ message: "berhasil update" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await userService.deleteUser(id);
    res.status(200).json({ message: "berhasil delete" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production" ? true : false,
      secure: false,
      sameSite: "None",
      path: "/",
    });

    res.status(200).json({ message: "berhasil logout" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getUsers,
  getUserById,
  register,
  login,
  updateUser,
  deleteUser,
  logout,
};
