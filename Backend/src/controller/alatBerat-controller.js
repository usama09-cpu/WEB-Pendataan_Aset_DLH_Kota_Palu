import alatBeratService from "../service/alatBerat-service.js";

const getAlatBerat = async (req, res) => {
  try {
    const result = await alatBeratService.getAlatBerat();
    res.status(200).json({ message: "berhasil", data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAlatBeratByNoResgistrasi = async (req, res) => {
  try {
    const { no_resgistrasi } = req.params;
    const result = await alatBeratService.getAlatBeratByNoRegistrasi(
      no_resgistrasi
    );
    res.status(200).json({ message: "berhasil", data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const inputAlatBerat = async (req, res) => {
  try {
    const namaGambar = req.file?.filename || null;
    const bufferGambar = req.file?.buffer || null;
    const alatBerat = req.body;
    await alatBeratService.inputAlatBerat(namaGambar, bufferGambar, alatBerat);
    res.status(201).json({ message: "Alat Berat berhasil ditambahkan" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAlatBerat = async (req, res) => {
  try {
    const { id } = req.params;
    const namaGambar = req.file?.filename || null;
    const bufferGambar = req.file?.buffer || null;
    const alatBerat = req.body;
    await alatBeratService.updateAlatBerat(
      id,
      namaGambar,
      bufferGambar,
      alatBerat
    );
    res.status(200).json({ message: "Alat Berat berhasil diperbarui" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAlatBerat = async (req, res) => {
  try {
    const { id } = req.params;
    await alatBeratService.deleteAlatBerat(id);
    res.status(200).json({ message: "Alat Berat berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getAlatBerat,
  getAlatBeratByNoResgistrasi,
  inputAlatBerat,
  updateAlatBerat,
  deleteAlatBerat,
};
