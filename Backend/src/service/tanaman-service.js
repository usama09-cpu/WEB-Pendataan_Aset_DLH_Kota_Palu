import tanamanRepositori from "../repositori/tanaman-repositori.js";
import tanamanMasukRepositori from "../repositori/tanamanMasuk-repositori.js";
import tanamanKeluarRepositori from "../repositori/tanamanKeluar-repositori.js";
import image from "../helper/image.js";

const getTanaman = async () => {
  const tanaman = await tanamanRepositori.getTanaman();
  if (tanaman.length === 0) {
    throw new Error("Data tidak ditemukan");
  }
  return tanaman;
};

const getTanamanById = async (id) => {
  const tanaman = await tanamanRepositori.getTanamanById(id);
  if (!tanaman) {
    throw new Error("Data tidak ditemukan");
  }
  return tanaman;
};

const inputTanaman = async (namaGambar, bufferGambar, tanaman) => {
  if (
    !namaGambar ||
    !bufferGambar ||
    !tanaman.nama ||
    !tanaman.jenis ||
    !tanaman.stok ||
    !tanaman.keterangan
  ) {
    throw new Error("Data tidak lengkap");
  }
  const gambarBaru = await image.uploadImage(
    "tanaman",
    namaGambar,
    bufferGambar
  );
  return await tanamanRepositori.createTanaman(
    gambarBaru,
    tanaman.nama,
    tanaman.jenis,
    tanaman.stok,
    tanaman.keterangan
  );
};

const updateTanaman = async (id, namaGambar, bufferGambar, tanaman) => {
  if (!tanaman.nama || !tanaman.jenis || !tanaman.stok || !tanaman.keterangan) {
    throw new Error("Data tidak lengkap");
  }
  const existingTanaman = await tanamanRepositori.getTanamanById(id);
  if (!existingTanaman) {
    throw new Error("Data tidak ditemukan");
  }
  let gambarBaru = existingTanaman.gambar;

  if (namaGambar && bufferGambar) {
    await image.deleteImage("tanaman", existingTanaman.gambar);
    gambarBaru = await image.uploadImage("tanaman", namaGambar, bufferGambar);
  }
  return await tanamanRepositori.updateTanaman(
    id,
    gambarBaru,
    tanaman.nama,
    tanaman.jenis,
    tanaman.stok,
    tanaman.keterangan
  );
};

const deleteTanaman = async (id) => {
  const tanaman = await tanamanRepositori.getTanamanById(id);
  if (!tanaman) {
    throw new Error("Data tidak ditemukan");
  }
  const tanamanMasuk = await tanamanMasukRepositori.getTanamanMasukByIdTanaman(
    id
  );
  if (tanamanMasuk) {
    await tanamanMasukRepositori.deleteTanamanMasukByIdTanaman(id);
  }
  const tanamanKeluar =
    await tanamanKeluarRepositori.getTanamanKeluarByIdTanaman(id);
  if (tanamanKeluar) {
    await tanamanKeluarRepositori.deleteTanamanKeluarByIdTanaman(id);
  }
  await image.deleteImage("tanaman", tanaman.gambar);
  return await tanamanRepositori.deleteTanaman(id);
};

export default {
  getTanaman,
  getTanamanById,
  inputTanaman,
  updateTanaman,
  deleteTanaman,
};
