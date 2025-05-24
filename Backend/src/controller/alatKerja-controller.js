import alatKerjaService from "../service/alatKerja-service.js";

const getAlatKerja = async (req, res) => {
  try {
    const alatKerja = await alatKerjaService.getAlatKerja();
    res
      .status(200)
      .json({ message: "Data alat kerja berhasil ditemukan", data: alatKerja });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAlatKerjaByNoRegistrasi = async (req, res) => {
  const { no_registrasi } = req.params;
  try {
    const alatKerja = await alatKerjaService.getAlatKerjaByNoRegistrasi(
      no_registrasi
    );
    res
      .status(200)
      .json({ message: "Data alat kerja berhasil ditemukan", data: alatKerja });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const inputAlatKerja = async (req, res) => {
  try {
    const alatKerja = req.body;
    const namaGambar = req.file?.filename || null;
    const bufferGambar = req.file?.buffer || null;
    await alatKerjaService.inputAlatKerja(namaGambar, bufferGambar, alatKerja);
    res.status(201).json({ message: "Data alat kerja berhasil ditambahkan" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAlatKerja = async (req, res) => {
  try {
    const { id } = req.params;
    const alatKerja = req.body;
    const namaGambar = req.file?.filename || null;
    const bufferGambar = req.file?.buffer || null;
    await alatKerjaService.updateAlatKerja(
      id,
      namaGambar,
      bufferGambar,
      alatKerja
    );
    res.status(200).json({ message: "Data alat kerja berhasil diperbarui" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAlatKerja = async (req, res) => {
  try {
    const { id } = req.params;
    await alatKerjaService.deleteAlatKerja(id);
    res.status(200).json({ message: "Data alat kerja berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getAlatKerja,
  getAlatKerjaByNoRegistrasi,
  inputAlatKerja,
  updateAlatKerja,
  deleteAlatKerja,
};
