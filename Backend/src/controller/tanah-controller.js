import tanahService from "../service/tanah-service.js";

const getTanah = async (req, res) => {
  try {
    const result = await tanahService.getTanah();
    res
      .status(200)
      .json({ message: "Data tanah berhasil ditemukan", data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTanahById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await tanahService.getTanahById(id);
    res
      .status(200)
      .json({ message: "Data tanah berhasil ditemukan", data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const inputTanah = async (req, res) => {
  try {
    const tanah = req.body;
    const namaGambar = req.file?.filename || null;
    const bufferGambar = req.file?.buffer || null;
    await tanahService.inputTanah(namaGambar, bufferGambar, tanah);
    res.status(201).json({ message: "Data tanah berhasil ditambahkan" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTanah = async (req, res) => {
  try {
    const { id } = req.params;
    const tanah = req.body;
    const namaGambar = req.file?.filename || null;
    const bufferGambar = req.file?.buffer || null;
    await tanahService.updateTanah(id, namaGambar, bufferGambar, tanah);
    res.status(200).json({ message: "Data tanah berhasil diperbarui" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTanah = async (req, res) => {
  try {
    const { id } = req.params;
    await tanahService.deleteTanah(id);
    res.status(200).json({ message: "Data tanah berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getTanah,
  getTanahById,
  inputTanah,
  updateTanah,
  deleteTanah,
};
