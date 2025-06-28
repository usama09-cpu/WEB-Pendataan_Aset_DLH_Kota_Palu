import servisBerkalaKendaraanService from "../service/servisBerkalaKendaraan-service.js";

const getServisBerkalaKendaraan = async (req, res) => {
  try {
    const result =
      await servisBerkalaKendaraanService.getServisBerkalaKendaraan();
    res.status(200).json({
      message: "Data servis berkala kendaraan berhasil ditemukan",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getServisBerkalaKendaraanByNoPol = async (req, res) => {
  try {
    const { no_polisi } = req.params;
    const result =
      await servisBerkalaKendaraanService.getServisBerkalaKendaraanByNoPol(
        no_polisi
      );
    res.status(200).json({
      message: "Data servis berkala kendaraan berhasil ditemukan",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateServisBerkalaKendaraan = async (req, res) => {
  try {
    const id = req.params.id_serberkendaraan;
    const servisBerkalaKendaraan = req.body;
    await servisBerkalaKendaraanService.updateServisBerkalaKendaraan(
      id,
      servisBerkalaKendaraan
    );
    res.status(200).json({ message: "berhasil update" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getServisBerkalaKendaraan,
  getServisBerkalaKendaraanByNoPol,
  updateServisBerkalaKendaraan,
};
