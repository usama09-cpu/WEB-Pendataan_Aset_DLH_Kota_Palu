import tanamanKeluarService from "../service/tanamanKeluar-service.js";

const getTanamanKeluar = async (req, res) => {
  try {
    const result = await tanamanKeluarService.getTanamanKeluar();
    res.status(200).json({
      message: "Data tanaman keluar berhasil ditemukan",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTanamanKeluarById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await tanamanKeluarService.getTanamanKeluarById(id);
    res.status(200).json({
      message: "Data tanaman keluar berhasil ditemukan",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTanamanKeluarByIdTanaman = async (req, res) => {
  try {
    const { id_tanaman } = req.params;
    const result = await tanamanKeluarService.getTanamanKeluarByIdTanaman(
      id_tanaman
    );
    res.status(200).json({
      message: "Data tanaman keluar berhasil ditemukan",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const inputTanamanKeluar = async (req, res) => {
  try {
    const data = req.body;
    await tanamanKeluarService.inputTanamanKeluar(data);
    res
      .status(200)
      .json({ message: "Data tanaman keluar berhasil ditambahkan" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTanamanKeluar = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await tanamanKeluarService.updateTanamanKeluar(id, data);
    res.status(200).json({ message: "Data tanaman keluar berhasil diupdate" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTanamanKeluar = async (req, res) => {
  try {
    const { id } = req.params;
    await tanamanKeluarService.deleteTanamanKeluar(id);
    res.status(200).json({ message: "Data tanaman keluar berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getTanamanKeluar,
  getTanamanKeluarById,
  getTanamanKeluarByIdTanaman,
  inputTanamanKeluar,
  updateTanamanKeluar,
  deleteTanamanKeluar,
};
