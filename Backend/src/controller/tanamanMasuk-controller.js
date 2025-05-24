import tanamanMasukService from "../service/tanamanMasuk-service.js";

const getTanamanMasuk = async (req, res) => {
  try {
    const result = await tanamanMasukService.getTanamanMasuk();
    res.status(200).json({
      message: "Data tanaman masuk berhasil ditemukan",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTanamanMasukById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await tanamanMasukService.getTanamanMasukById(id);
    res.status(200).json({
      message: "Data tanaman masuk berhasil ditemukan",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTanamanMasukByIdTanaman = async (req, res) => {
  try {
    const { id_tanaman } = req.params;
    console.log(id_tanaman);

    const result = await tanamanMasukService.getTanamanMasukByIdTanaman(
      id_tanaman
    );
    res.status(200).json({
      message: "Data tanaman masuk berhasil ditemukan",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const inputTanamanMasuk = async (req, res) => {
  try {
    const data = req.body;
    await tanamanMasukService.inputTanamanMasuk(data);
    res
      .status(200)
      .json({ message: "Data tanaman masuk berhasil ditambahkan" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTanamanMasuk = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await tanamanMasukService.updateTanamanMasuk(id, data);
    res.status(200).json({ message: "Data tanaman masuk berhasil diupdate" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTanamanMasuk = async (req, res) => {
  try {
    const { id } = req.params;
    await tanamanMasukService.deleteTanamanMasuk(id);
    res.status(200).json({ message: "Data tanaman masuk berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getTanamanMasuk,
  getTanamanMasukById,
  getTanamanMasukByIdTanaman,
  inputTanamanMasuk,
  updateTanamanMasuk,
  deleteTanamanMasuk,
};
