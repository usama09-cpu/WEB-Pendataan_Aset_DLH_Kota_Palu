import kendaraanRepositori from "../repositori/kendaraan-repositori.js";
import servisRepositori from "../repositori/servis-repositori.js";
import onderdilRepositori from "../repositori/onderdil-repositori.js";
import servisBerkalaKendaraanRepositori from "../repositori/servisBerkalaKendaraan-repositori.js";
import alatBeratRepositori from "../repositori/alatBerat-repositori.js";
import alatKerjaRepositori from "../repositori/alatKerja-repositori.js";
import acRepositori from "../repositori/ac-repositori.js";
import {
  createAset,
  deleteAset,
  updateAset,
} from "../repositori/aset-repositori.js";
import image from "../helper/image.js";
import qrcode from "../helper/qr.js";
import dayjs from "dayjs";

const getKendaraan = async () => {
  const result = await kendaraanRepositori.getKendaraan();
  if (result.length === 0) {
    throw new Error("Kendaraan tidak ditemukan");
  }
  return result;
};

const getKendaraanByNoPol = async (no_polisi) => {
  const result = await kendaraanRepositori.getKendaraanByNoPol(no_polisi);
  if (!result) {
    throw new Error("Kendaraan tidak ditemukan");
  }
  return result;
};

const inputKendaraan = async (namaGambar, bufferGambar, kendaraan) => {
  if (
    !namaGambar ||
    !bufferGambar ||
    !kendaraan.kode_barang ||
    !kendaraan.merek ||
    !kendaraan.no_polisi ||
    !kendaraan.no_mesin ||
    !kendaraan.no_rangka ||
    !kendaraan.warna ||
    !kendaraan.harga_pembelian ||
    !kendaraan.tahun_pembuatan ||
    !kendaraan.kategori ||
    !kendaraan.pajak ||
    !kendaraan.pemegang ||
    !kendaraan.nik ||
    !kendaraan.penggunaan ||
    !kendaraan.kondisi
  ) {
    throw new Error("Data kendaraan tidak lengkap");
  }

  const existingKendaraan = await kendaraanRepositori.getKendaraanByNoPol(
    kendaraan.no_polisi
  );

  if (existingKendaraan) {
    throw new Error("Nomor polisi kendaraan sudah ada");
  }

  const existingAlatBerat =
    await alatBeratRepositori.getAlatBeratByNoRegistrasi(kendaraan.no_polisi);

  if (existingAlatBerat) {
    throw new Error("Nomor polisi kendaraan sudah ada");
  }

  const existingAlatKerja =
    await alatKerjaRepositori.getAlatKerjaByNoRegistrasi(kendaraan.no_polisi);

  if (existingAlatKerja) {
    throw new Error("Nomor polisi kendaraan sudah ada");
  }

  const existingAc = await acRepositori.getAcByNoRegistrasi(
    kendaraan.no_polisi
  );

  if (existingAc) {
    throw new Error("Nomor polisi kendaraan sudah ada");
  }

  const bufferQrCode = await qrcode.generateQRCode(kendaraan.no_polisi);
  const qrCode = await image.uploadImage(
    "kendaraan/qrcode",
    kendaraan.no_polisi + ".png",
    bufferQrCode
  );

  const uploadedImage = await image.uploadImage(
    "kendaraan",
    namaGambar,
    bufferGambar,
    "jpeg",
    800
  );

  const aset = await createAset(kendaraan.no_polisi, "kendaraan");

  await kendaraanRepositori.createKendaraan(
    qrCode,
    uploadedImage,
    aset,
    kendaraan.kode_barang,
    kendaraan.merek,
    kendaraan.no_polisi,
    kendaraan.no_mesin,
    kendaraan.no_rangka,
    kendaraan.warna,
    kendaraan.harga_pembelian,
    kendaraan.tahun_pembuatan,
    kendaraan.kategori,
    kendaraan.pajak,
    kendaraan.pemegang,
    kendaraan.nik,
    kendaraan.penggunaan,
    kendaraan.kondisi
  );

  await servisBerkalaKendaraanRepositori.createServisBerkalaKendaraan(
    kendaraan.no_polisi,
    dayjs().format("YYYY-MM-DD"),
    dayjs().format("YYYY-MM-DD"),
    dayjs().format("YYYY-MM-DD"),
    dayjs().format("YYYY-MM-DD"),
    dayjs().format("YYYY-MM-DD")
  );
};

// Memperbarui data kendaraan
const updateKendaraan = async (id, namaGambar, bufferGambar, kendaraan) => {
  if (
    !kendaraan.id_aset ||
    !kendaraan.kode_barang ||
    !kendaraan.merek ||
    !kendaraan.no_polisi ||
    !kendaraan.no_mesin ||
    !kendaraan.no_rangka ||
    !kendaraan.warna ||
    !kendaraan.harga_pembelian ||
    !kendaraan.tahun_pembuatan ||
    !kendaraan.kategori ||
    !kendaraan.pajak ||
    !kendaraan.pemegang ||
    !kendaraan.nik ||
    !kendaraan.penggunaan ||
    !kendaraan.kondisi
  ) {
    throw new Error("Data kendaraan tidak lengkap");
  }

  const existingKendaraan = await kendaraanRepositori.getKendaraanById(id);
  if (!existingKendaraan) {
    throw new Error("Kendaraan tidak ditemukan");
  }

  const kendaraanByNoPol = await kendaraanRepositori.getKendaraanByNoPol(
    kendaraan.no_polisi
  );

  if (kendaraanByNoPol && kendaraanByNoPol.id_kendaraan != id) {
    throw new Error("Nomor polisi kendaraan sudah ada");
  }

  const existingAlatBerat =
    await alatBeratRepositori.getAlatBeratByNoRegistrasi(kendaraan.no_polisi);

  if (existingAlatBerat) {
    throw new Error("Nomor polisi kendaraan sudah ada");
  }

  const existingAlatKerja =
    await alatKerjaRepositori.getAlatKerjaByNoRegistrasi(kendaraan.no_polisi);

  if (existingAlatKerja) {
    throw new Error("Nomor polisi kendaraan sudah ada");
  }

  const existingAc = await acRepositori.getAcByNoRegistrasi(
    kendaraan.no_polisi
  );

  if (existingAc) {
    throw new Error("Nomor polisi kendaraan sudah ada");
  }

  let gambarBaru = existingKendaraan.gambar;
  let qrCodeBaru = existingKendaraan.qrcode;

  if (kendaraan.no_polisi !== existingKendaraan.no_polisi) {
    await image.deleteImage("kendaraan/qrcode", existingKendaraan.qrcode);
    const bufferQrCode = await qrcode.generateQRCode(kendaraan.no_polisi);
    qrCodeBaru = await image.uploadImage(
      "kendaraan/qrcode",
      kendaraan.no_polisi + ".png",
      bufferQrCode
    );
  }

  if (namaGambar && bufferGambar) {
    await image.deleteImage("kendaraan", existingKendaraan.gambar);
    gambarBaru = await image.uploadImage(
      "kendaraan",
      namaGambar,
      bufferGambar,
      "jpeg",
      800
    );
  }

  await kendaraanRepositori.updateKendaraan(
    id,
    qrCodeBaru,
    gambarBaru,
    kendaraan.kode_barang,
    kendaraan.merek,
    kendaraan.no_polisi,
    kendaraan.no_mesin,
    kendaraan.no_rangka,
    kendaraan.warna,
    kendaraan.harga_pembelian,
    kendaraan.tahun_pembuatan,
    kendaraan.kategori,
    kendaraan.pajak,
    kendaraan.pemegang,
    kendaraan.nik,
    kendaraan.penggunaan,
    kendaraan.kondisi
  );
  await updateAset(kendaraan.id_aset, kendaraan.no_polisi);
};

// Menghapus kendaraan berdasarkan ID
const deleteKendaraan = async (id) => {
  const kendaraan = await kendaraanRepositori.getKendaraanById(id);
  if (!kendaraan) {
    throw new Error("Kendaraan tidak ditemukan");
  }

  // Hapus semua data servis yang terkait
  const servis = await servisRepositori.getServisByNoUnik(kendaraan.no_polisi);

  if (servis.length > 0) {
    await Promise.all(
      servis.map(async (data) => {
        if (data.nota_pembayaran && data.nota_pembayaran.trim() !== "") {
          await image.deleteImage("servis/nota", data.nota_pembayaran);
        }
        if (data.dokumentasi && data.dokumentasi.trim() !== "") {
          await image.deleteImage("servis/dokumentasi", data.dokumentasi);
        }

        await onderdilRepositori.deleteOnderdilByIdServis(data.id_servis);
      })
    );

    await servisRepositori.deleteServisByIdAset(kendaraan.no_polisi);
  }

  if (kendaraan.qrcode && kendaraan.qrcode.trim() !== "") {
    await image.deleteImage("kendaraan/qrcode", kendaraan.qrcode);
  }
  if (kendaraan.gambar && kendaraan.gambar.trim() !== "") {
    await image.deleteImage("kendaraan", kendaraan.gambar);
  }

  await kendaraanRepositori.deleteKendaraan(id);
  await deleteAset(kendaraan.id_aset);
};

export default {
  getKendaraan,
  getKendaraanByNoPol,
  inputKendaraan,
  updateKendaraan,
  deleteKendaraan,
};
