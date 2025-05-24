import servisBerkalaAcService from "../service/servisBerkalaAc-service.js";

const getServisBerkalaAc = async (req, res) => {
  try {
    const result = await servisBerkalaAcService.getServisBerkalaAc();
    res.status(200).json({
      message: "Data servis berkala AC berhasil ditemukan",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getServisBerkalaAcByNoRegistrasi = async (req, res) => {
  try {
    const { no_registrasi } = req.params;
    const result =
      await servisBerkalaAcService.getServisBerkalaAcByNoRegistrasi(
        no_registrasi
      );
    res.status(200).json({
      message: "Data servis berkala AC berhasil ditemukan",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateServisBerkalaAc = async (req, res) => {
  try {
    const id = req.params.id;
    const servisBerkalaAc = req.body;
    await servisBerkalaAcService.updateServisBerkalaAc(id, servisBerkalaAc);
    res.status(200).json({ message: "berhasil update" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getServisBerkalaAc,
  getServisBerkalaAcByNoRegistrasi,
  updateServisBerkalaAc,
};
