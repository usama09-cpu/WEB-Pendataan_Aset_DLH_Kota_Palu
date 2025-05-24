import kendaraanService from "../service/kendaraan-service.js";

// Controller untuk mendapatkan semua kendaraan
const getKendaraan = async (req, res) => {
  try {
    const kendaraanList = await kendaraanService.getKendaraan();
    res.status(200).json({ message: "berhasil", data: kendaraanList });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk mendapatkan kendaraan berdasarkan nomor polisi
const getKendaraanByNoPol = async (req, res) => {
  const { no_polisi } = req.params;
  try {
    const kendaraan = await kendaraanService.getKendaraanByNoPol(no_polisi);
    res.status(200).json({ message: "berhasil", data: kendaraan });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk menambahkan kendaraan
const inputKendaraan = async (req, res) => {
  try {
    const kendaraan = req.body;
    const namaGambar = req.file?.filename || null;
    const bufferGambar = req.file?.buffer || null;

    const result = await kendaraanService.inputKendaraan(
      namaGambar,
      bufferGambar,
      kendaraan
    );
    res.status(201).json({ message: "Kendaraan berhasil ditambahkan" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk memperbarui kendaraan
const updateKendaraan = async (req, res) => {
  const { id } = req.params;
  try {
    const kendaraan = req.body;
    const namaGambar = req.file?.filename || null;
    const bufferGambar = req.file?.buffer || null;

    const result = await kendaraanService.updateKendaraan(
      id,
      namaGambar,
      bufferGambar,
      kendaraan
    );
    res.status(200).json({ message: "Kendaraan berhasil diperbarui" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk menghapus kendaraan
const deleteKendaraan = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await kendaraanService.deleteKendaraan(id);
    res.status(200).json({ message: "Kendaraan berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getKendaraan,
  getKendaraanByNoPol,
  inputKendaraan,
  updateKendaraan,
  deleteKendaraan,
};
