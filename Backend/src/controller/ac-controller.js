import acService from "../service/ac-service.js";

const getAc = async (req, res) => {
  try {
    const ac = await acService.getAc();
    res.status(200).json({ message: "Data AC berhasil ditemukan", data: ac });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAcByNoRegistrasi = async (req, res) => {
  const { no_registrasi } = req.params;
  try {
    const ac = await acService.getAcByNoRegistrasi(no_registrasi);
    res.status(200).json({ message: "Data AC berhasil ditemukan", data: ac });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const inputAc = async (req, res) => {
  try {
    const ac = req.body;
    const namaGambar = req.file?.filename || null;
    const bufferGambar = req.file?.buffer || null;

    await acService.inputAc(namaGambar, bufferGambar, ac);
    res.status(201).json({ message: "Data AC berhasil ditambahkan" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAc = async (req, res) => {
  try {
    const { id } = req.params;
    const ac = req.body;
    const namaGambar = req.file?.filename || null;
    const bufferGambar = req.file?.buffer || null;
    await acService.updateAc(id, namaGambar, bufferGambar, ac);
    res.status(200).json({ message: "Data AC berhasil diperbarui" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAc = async (req, res) => {
  try {
    const { id } = req.params;
    await acService.deleteAc(id);
    res.status(200).json({ message: "Data AC berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { getAc, getAcByNoRegistrasi, inputAc, updateAc, deleteAc };
