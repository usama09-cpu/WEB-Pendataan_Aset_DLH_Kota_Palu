import servisBerkalaAlatKerjaService from "../service/servisBerkalaAlatKerja-service.js";

const getServisBerkalaAlatKerja = async (req, res) => {
  try {
    const result =
      await servisBerkalaAlatKerjaService.getServisBerkalaAlatKerja();
    res.status(200).json({
      message: "Data servis berkala alat kerja berhasil ditemukan",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getServisBerkalaAlatKerjaByNoRegistrasi = async (req, res) => {
  try {
    const { no_registrasi } = req.params;
    const result =
      await servisBerkalaAlatKerjaService.getServisBerkalaAlatKerjaByNoRegistrasi(
        no_registrasi
      );
    res.status(200).json({
      message: "Data servis berkala alat kerja berhasil ditemukan",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateServisBerkalaAlatKerja = async (req, res) => {
  try {
    const id = req.params.id;
    const servisBerkalaAlatKerja = req.body;
    await servisBerkalaAlatKerjaService.updateServisBerkalaAlatKerja(
      id,
      servisBerkalaAlatKerja
    );
    res.status(200).json({ message: "berhasil update" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getServisBerkalaAlatKerja,
  getServisBerkalaAlatKerjaByNoRegistrasi,
  updateServisBerkalaAlatKerja,
};
