import servisServis from "../service/servis-service.js";

const getServis = async (req, res) => {
  try {
    const data = await servisServis.getServis();
    res.status(200).json({ message: "Data servis berhasil ditemukan", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getServisById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await servisServis.getServisById(id);
    res.status(200).json({ message: "Data servis berhasil ditemukan", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getServisByNoUnik = async (req, res) => {
  try {
    const { no_unik } = req.params;
    const data = await servisServis.getServisByNoUnik(no_unik);
    res.status(200).json({ message: "Data servis berhasil ditemukan", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const inputServis = async (req, res) => {
  try {
    const data = req.body;
    const files = req.files;

    const notaPembayaran = files?.["nota_pembayaran"]?.[0];
    const dokumentasi = files?.["dokumentasi"]?.[0];

    const namaGambarNota = notaPembayaran?.originalname || null;
    const bufferGambarNota = notaPembayaran?.buffer || null;

    const namaGambarDokumentasi = dokumentasi?.originalname || null;
    const bufferGambarDokumentasi = dokumentasi?.buffer || null;
    await servisServis.inputServis(
      data,
      namaGambarNota,
      bufferGambarNota,
      namaGambarDokumentasi,
      bufferGambarDokumentasi
    );
    res.status(200).json({ message: "Data servis berhasil diinput" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateServis = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const files = req.files;

    const notaPembayaran = files?.["nota_pembayaran"]?.[0];
    const dokumentasi = files?.["dokumentasi"]?.[0];

    const namaGambarNota = notaPembayaran?.originalname || null;
    const bufferGambarNota = notaPembayaran?.buffer || null;

    const namaGambarDokumentasi = dokumentasi?.originalname || null;
    const bufferGambarDokumentasi = dokumentasi?.buffer || null;
    await servisServis.updateServis(
      id,
      data,
      namaGambarNota,
      bufferGambarNota,
      namaGambarDokumentasi,
      bufferGambarDokumentasi
    );
    res.status(200).json({ message: "Data servis berhasil diperbarui" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteServis = async (req, res) => {
  try {
    const { id } = req.params;
    await servisServis.deleteServis(id);
    res.status(200).json({ message: "Data servis berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getServis,
  getServisById,
  getServisByNoUnik,
  inputServis,
  updateServis,
  deleteServis,
};
