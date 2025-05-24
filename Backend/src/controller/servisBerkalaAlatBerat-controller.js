import servisBerkalaAlatBeratService from "../service/servisBerkalaAlatBerat-service.js";

const getServisBerkalaAlatBerat = async (req, res) => {
  try {
    const result =
      await servisBerkalaAlatBeratService.getServisBerkalaAlatBerat();
    res.status(200).json({
      message: "Data servis berkala alat berat berhasil ditemukan",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getServisBerkalaAlatBeratByNoRegistrasi = async (req, res) => {
  try {
    const { no_registrasi } = req.params;
    const result =
      await servisBerkalaAlatBeratService.getServisBerkalaAlatBeratByNoRegistrasi(
        no_registrasi
      );
    res.status(200).json({
      message: "Data servis berkala alat berat berhasil ditemukan",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateServisBerkalaAlatBerat = async (req, res) => {
  try {
    const id = req.params.id;
    const servisBerkalaAlatBerat = req.body;
    await servisBerkalaAlatBeratService.updateServisBerkalaAlatBerat(
      id,
      servisBerkalaAlatBerat
    );
    res.status(200).json({ message: "berhasil update" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getServisBerkalaAlatBerat,
  getServisBerkalaAlatBeratByNoRegistrasi,
  updateServisBerkalaAlatBerat,
};
