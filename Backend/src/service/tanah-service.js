import tanahRepositori from "../repositori/tanah-repositori.js";
import image from "../helper/image.js";

const getTanah = async () => {
  const data = await tanahRepositori.getTanah();
  if (data.length === 0) {
    throw new Error("Data tidak ditemukan");
  }
  return data;
};

const getTanahById = async (id) => {
  const data = await tanahRepositori.getTanahById(id);
  if (!data) {
    throw new Error("Data tidak ditemukan");
  }
  return data;
};

const inputTanah = async (namaGambar, bufferGambar, tanah) => {
  if (
    !namaGambar ||
    !bufferGambar ||
    !tanah.kode_barang ||
    !tanah.nama_barang ||
    !tanah.peruntukan ||
    !tanah.alamat ||
    !tanah.luas ||
    !tanah.tahun_pengadaan ||
    !tanah.hak ||
    !tanah.status_sertifikat ||
    !tanah.asal ||
    !tanah.harga
  ) {
    throw new Error("Data tidak lengkap");
  }

  const gambarBaru = await image.uploadImage("tanah", namaGambar, bufferGambar);

  return await tanahRepositori.createTanah(
    gambarBaru,
    tanah.kode_barang,
    tanah.nama_barang,
    tanah.peruntukan,
    tanah.alamat,
    tanah.luas,
    tanah.tahun_pengadaan,
    tanah.hak,
    tanah.tanggal_sertifikat || null,
    tanah.nomor_sertifikat || null,
    tanah.status_sertifikat,
    tanah.asal,
    tanah.harga
  );
};

const updateTanah = async (id, namaGambar, bufferGambar, tanah) => {
  if (
    !tanah.kode_barang ||
    !tanah.nama_barang ||
    !tanah.peruntukan ||
    !tanah.alamat ||
    !tanah.luas ||
    !tanah.tahun_pengadaan ||
    !tanah.hak ||
    !tanah.tanggal_sertifikat ||
    !tanah.nomor_sertifikat ||
    !tanah.status_sertifikat ||
    !tanah.asal ||
    !tanah.harga
  ) {
    throw new Error("Data tidak lengkap");
  }
  const existingTanah = await tanahRepositori.getTanahById(id);
  if (!existingTanah) {
    throw new Error("Data tidak ditemukan");
  }
  let gambarBaru = existingTanah.gambar;

  if (namaGambar && bufferGambar) {
    await image.deleteImage("tanah", existingTanah.gambar);
    gambarBaru = await image.uploadImage("tanah", namaGambar, bufferGambar);
  }
  return await tanahRepositori.updateTanah(
    id,
    gambarBaru,
    tanah.kode_barang,
    tanah.nama_barang,
    tanah.peruntukan,
    tanah.alamat,
    tanah.luas,
    tanah.tahun_pengadaan,
    tanah.hak,
    tanah.tanggal_sertifikat,
    tanah.nomor_sertifikat,
    tanah.status_sertifikat,
    tanah.asal,
    tanah.harga
  );
};

const deleteTanah = async (id) => {
  const data = await tanahRepositori.getTanahById(id);
  if (!data) {
    throw new Error("Data tidak ditemukan");
  }
  return await tanahRepositori.deleteTanah(id);
};

export default {
  getTanah,
  getTanahById,
  inputTanah,
  updateTanah,
  deleteTanah,
};
