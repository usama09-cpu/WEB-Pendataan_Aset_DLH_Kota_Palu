import kendaraanRepositori from "../repositori/kendaraan-repositori.js";
import servisRepositori from "../repositori/servis-repositori.js";
import onderdilRepositori from "../repositori/onderdil-repositori.js";
import servisBerkalaKendaraanRepositori from "../repositori/servisBerkalaKendaraan-repositori.js";
import alatBeratRepositori from "../repositori/alatBerat-repositori.js";
import alatKerjaRepositori from "../repositori/alatKerja-repositori.js";
import acRepositori from "../repositori/ac-repositori.js";
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

  const existingNoRegAlatBerat =
    await alatBeratRepositori.getAlatBeratByNoRegistrasi(kendaraan.no_polisi);

  if (existingNoRegAlatBerat) {
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

  await servisBerkalaKendaraanRepositori.createServisBerkalaKendaraan(
    kendaraan.no_polisi,
    dayjs().format("YYYY-MM-DD"),
    dayjs().format("YYYY-MM-DD"),
    dayjs().format("YYYY-MM-DD"),
    dayjs().format("YYYY-MM-DD"),
    dayjs().format("YYYY-MM-DD")
  );

  return await kendaraanRepositori.createKendaraan(
    qrCode,
    uploadedImage,
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
};

// Memperbarui data kendaraan
const updateKendaraan = async (id, namaGambar, bufferGambar, kendaraan) => {
  if (
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

  const existingNoRegAlatBerat =
    await alatBeratRepositori.getAlatBeratByNoRegistrasi(kendaraan.no_polisi);

  if (existingNoRegAlatBerat) {
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
    const serberkendaraan =
      await servisBerkalaKendaraanRepositori.getServisBerkalaKendaraanByNoPol(
        existingKendaraan.no_polisi
      );
    await servisBerkalaKendaraanRepositori.updateServisBerkalaKendaraan(
      serberkendaraan.id_serberkendaraan,
      kendaraan.no_polisi,
      serberkendaraan.oli_mesin,
      serberkendaraan.filter_oli_mesin,
      serberkendaraan.oli_gardan,
      serberkendaraan.oli_transmisi,
      serberkendaraan.ban
    );
    await image.deleteImage("kendaraan/qrcode", existingKendaraan.qrcode);
    const bufferQrCode = await qrcode.generateQRCode(kendaraan.no_polisi);
    qrCodeBaru = await image.uploadImage(
      "kendaraan/qrcode",
      kendaraan.no_polisi + ".png",
      bufferQrCode
    );
    const servisKendaraan = await servisRepositori.getServisByNoUnik(
      existingKendaraan.no_polisi
    );
    if (servisKendaraan.length > 0) {
      await Promise.all(
        servisKendaraan.map(async (data) => {
          await servisRepositori.updateServis(
            data.id_servis,
            data.tanggal,
            kendaraan.no_polisi,
            data.nama_bengkel,
            data.biaya_servis,
            data.nota_pembayaran,
            data.dokumentasi
          );
        })
      );
    }
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

  return await kendaraanRepositori.updateKendaraan(
    id,
    qrCodeBaru,
    gambarBaru,
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
};

// Menghapus kendaraan berdasarkan ID
const deleteKendaraan = async (id) => {
  const kendaraan = await kendaraanRepositori.getKendaraanById(id);
  if (!kendaraan) {
    throw new Error("Kendaraan tidak ditemukan");
  }
  const servis = await servisRepositori.getServisByNoUnik(kendaraan.no_polisi);

  if (servis.length > 0) {
    await Promise.all(
      servis.map(async (data) => {
        await image.deleteImage("servis/nota", data.nota_pembayaran);
        await image.deleteImage("servis/dokumentasi", data.dokumentasi);
        await onderdilRepositori.deleteOnderdilByIdServis(data.id_servis);
      })
    );
    await servisRepositori.deleteServisByNoUnik(kendaraan.no_polisi);
  }

  await servisBerkalaKendaraanRepositori.deleteServisBerkalaKendaraanByNoPol(
    kendaraan.no_polisi
  );
  await image.deleteImage("kendaraan/qrcode", kendaraan.qrcode);
  await image.deleteImage("kendaraan", kendaraan.gambar);

  return await kendaraanRepositori.deleteKendaraan(id);
};

export default {
  getKendaraan,
  getKendaraanByNoPol,
  inputKendaraan,
  updateKendaraan,
  deleteKendaraan,
};
