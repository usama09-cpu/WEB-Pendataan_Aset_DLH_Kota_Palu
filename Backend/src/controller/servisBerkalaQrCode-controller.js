import servisBerkalaQrCodeService from "../service/servisBerkalaQrCode-service.js";

const getServisBerkalaQrCode = async (req, res) => {
  try {
    const no_unik = req.params.no_unik;
    const data = await servisBerkalaQrCodeService.getServisBerkalaQrCode(
      no_unik
    );
    res.status(200).json({ message: "Data servis berhasil ditemukan", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getServisBerkalaQrCode,
};
