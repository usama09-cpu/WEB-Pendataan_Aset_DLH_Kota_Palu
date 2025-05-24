import tanamanService from "../service/tanaman-service.js";

const getTanaman = async (req, res) => {
  try {
    const result = await tanamanService.getTanaman();
    res
      .status(200)
      .json({ message: "Data tanaman berhasil ditemukan", data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTanamanById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await tanamanService.getTanamanById(id);
    res
      .status(200)
      .json({ message: "Data tanaman berhasil ditemukan", data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const inputTanaman = async (req, res) => {
  try {
    const tanaman = req.body;
    const namaGambar = req.file?.filename || null;
    const bufferGambar = req.file?.buffer || null;
    await tanamanService.inputTanaman(namaGambar, bufferGambar, tanaman);
    res.status(201).json({ message: "Data tanaman berhasil ditambahkan" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTanaman = async (req, res) => {
  try {
    const { id } = req.params;
    const tanaman = req.body;
    const namaGambar = req.file?.filename || null;
    const bufferGambar = req.file?.buffer || null;
    await tanamanService.updateTanaman(id, namaGambar, bufferGambar, tanaman);
    res.status(200).json({ message: "Data tanaman berhasil diperbarui" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTanaman = async (req, res) => {
  try {
    const { id } = req.params;
    await tanamanService.deleteTanaman(id);
    res.status(200).json({ message: "Data tanaman berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getTanaman,
  getTanamanById,
  inputTanaman,
  updateTanaman,
  deleteTanaman,
};
