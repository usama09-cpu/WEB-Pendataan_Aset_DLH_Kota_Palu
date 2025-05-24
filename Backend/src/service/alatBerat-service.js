import alatBeratRepositori from "../repositori/alatBerat-repositori.js";
import servisRepositori from "../repositori/servis-repositori.js";
import onderdilRepositori from "../repositori/onderdil-repositori.js";
import servisBerkalaAlatBeratRepositori from "../repositori/servisBerkalaAlatBerat-repositori.js";
import acRepositori from "../repositori/ac-repositori.js";
import alatKerjaRepositori from "../repositori/alatKerja-repositori.js";
import kendaraanRepositori from "../repositori/kendaraan-repositori.js";
import image from "../helper/image.js";
import qrcode from "../helper/qr.js";
import dayjs from "dayjs";
import e from "express";

const getAlatBerat = async () => {
  const result = await alatBeratRepositori.getAlatBerat();
  if (result.length === 0) {
    throw new Error("Data tidak ditemukan");
  }
  return result;
};

const getAlatBeratByNoRegistrasi = async (no_registrasi) => {
  const result = await alatBeratRepositori.getAlatBeratByNoRegistrasi(
    no_registrasi
  );
  if (!result) {
    throw new Error("Data tidak ditemukan");
  }
  return result;
};

const inputAlatBerat = async (namaGambar, bufferGambar, alatBerat) => {
  if (
    !namaGambar ||
    !bufferGambar ||
    !alatBerat.merek ||
    !alatBerat.no_registrasi ||
    !alatBerat.no_mesin ||
    !alatBerat.no_rangka ||
    !alatBerat.warna ||
    !alatBerat.harga_pembelian ||
    !alatBerat.tahun_pembuatan ||
    !alatBerat.kategori ||
    !alatBerat.pajak ||
    !alatBerat.penggunaan ||
    !alatBerat.kondisi
  ) {
    throw new Error("Data tidak lengkap");
  }

  const existingAlatBerat =
    await alatBeratRepositori.getAlatBeratByNoRegistrasi(
      alatBerat.no_registrasi
    );
  if (existingAlatBerat) {
    throw new Error("Nomor resgistrasi sudah terdaftar");
  }

  const exixtingKendaraan = await kendaraanRepositori.getKendaraanByNoPol(
    alatBerat.no_registrasi
  );
  if (exixtingKendaraan) {
    throw new Error("Nomor resgistrasi sudah terdaftar");
  }

  const existingAlatKerja =
    await alatKerjaRepositori.getAlatKerjaByNoRegistrasi(
      alatBerat.no_registrasi
    );
  if (existingAlatKerja) {
    throw new Error("Nomor resgistrasi sudah terdaftar");
  }

  const existingAc = await acRepositori.getAcByNoRegistrasi(
    alatBerat.no_registrasi
  );
  if (existingAc) {
    throw new Error("Nomor resgistrasi sudah terdaftar");
  }

  const bufferQrCode = await qrcode.generateQRCode(alatBerat.no_registrasi);
  const uploadedQR = await image.uploadImage(
    "alatberat/qrcode",
    alatBerat.no_registrasi + ".png",
    bufferQrCode
  );

  const uploadedImage = await image.uploadImage(
    "alatberat",
    namaGambar,
    bufferGambar
  );

  await servisBerkalaAlatBeratRepositori.createServisBerkalaAlatBerat(
    alatBerat.no_registrasi,
    dayjs().format("YYYY-MM-DD"),
    dayjs().format("YYYY-MM-DD")
  );

  return await alatBeratRepositori.createAlatBerat(
    uploadedQR,
    uploadedImage,
    alatBerat.merek,
    alatBerat.no_registrasi,
    alatBerat.no_mesin,
    alatBerat.no_rangka,
    alatBerat.warna,
    alatBerat.harga_pembelian,
    alatBerat.tahun_pembuatan,
    alatBerat.kategori,
    alatBerat.pajak,
    alatBerat.penggunaan,
    alatBerat.kondisi
  );
};

const updateAlatBerat = async (id, namaGambar, bufferGambar, alatBerat) => {
  if (
    !alatBerat.merek ||
    !alatBerat.no_registrasi ||
    !alatBerat.no_mesin ||
    !alatBerat.no_rangka ||
    !alatBerat.warna ||
    !alatBerat.harga_pembelian ||
    !alatBerat.tahun_pembuatan ||
    !alatBerat.kategori ||
    !alatBerat.pajak ||
    !alatBerat.penggunaan ||
    !alatBerat.kondisi
  ) {
    throw new Error("Data tidak lengkap");
  }
  const existingAlatBerat = await alatBeratRepositori.getAlatBeratById(id);

  if (!existingAlatBerat) {
    throw new Error("Data tidak ditemukan");
  }

  const exixtingKendaraan = await kendaraanRepositori.getKendaraanByNoPol(
    alatBerat.no_registrasi
  );
  if (exixtingKendaraan) {
    throw new Error("Nomor resgistrasi sudah terdaftar");
  }

  const existingAlatKerja =
    await alatKerjaRepositori.getAlatKerjaByNoRegistrasi(
      alatBerat.no_registrasi
    );
  if (existingAlatKerja) {
    throw new Error("Nomor resgistrasi sudah terdaftar");
  }

  const existingAc = await acRepositori.getAcByNoRegistrasi(
    alatBerat.no_registrasi
  );
  if (existingAc) {
    throw new Error("Nomor resgistrasi sudah terdaftar");
  }

  const AlatBeratByNoRegistrasi =
    await alatBeratRepositori.getAlatBeratByNoRegistrasi(
      alatBerat.no_registrasi
    );

  if (AlatBeratByNoRegistrasi && AlatBeratByNoRegistrasi.id_alatberat != id) {
    throw new Error("Nomor resgistrasi sudah terdaftar");
  }

  let qrCodeBaru = existingAlatBerat.qrcode;
  if (existingAlatBerat.no_registrasi != alatBerat.no_registrasi) {
    const serberalatberat =
      await servisBerkalaAlatBeratRepositori.getServisBerkalaAlatBeratByNoRegistrasi(
        existingAlatBerat.no_registrasi
      );
    await servisBerkalaAlatBeratRepositori.updateServisBerkalaAlatBerat(
      serberalatberat.id_serberalatberat,
      alatBerat.no_registrasi,
      serberalatberat.oli_mesin,
      serberalatberat.filter_oli_mesin
    );
    await image.deleteImage("alatberat/qrcode", existingAlatBerat.qrcode);
    const bufferQrCode = await qrcode.generateQRCode(alatBerat.no_registrasi);
    qrCodeBaru = await image.uploadImage(
      "alatberat/qrcode",
      alatBerat.no_registrasi + ".png",
      bufferQrCode
    );

    const servisAlatBerat = await servisRepositori.getServisByNoUnik(
      existingAlatBerat.no_registrasi
    );
    if (servisAlatBerat.length > 0) {
      await Promise.all(
        servisAlatBerat.map(async (data) => {
          await servisRepositori.updateServis(
            data.id_servis,
            data.tanggal,
            alatBerat.no_registrasi,
            data.nama_bengkel,
            data.biaya_servis,
            data.nota_pembayaran,
            data.dokumentasi
          );
        })
      );
    }
  }

  let gambarBaru = existingAlatBerat.gambar;
  if (namaGambar && bufferGambar) {
    await image.deleteImage("alatberat", existingAlatBerat.gambar);
    gambarBaru = await image.uploadImage("alatberat", namaGambar, bufferGambar);
  }
  return await alatBeratRepositori.updateAlatBerat(
    id,
    qrCodeBaru,
    gambarBaru,
    alatBerat.merek,
    alatBerat.no_registrasi,
    alatBerat.no_mesin,
    alatBerat.no_rangka,
    alatBerat.warna,
    alatBerat.harga_pembelian,
    alatBerat.tahun_pembuatan,
    alatBerat.kategori,
    alatBerat.pajak,
    alatBerat.penggunaan,
    alatBerat.kondisi
  );
};

const deleteAlatBerat = async (id) => {
  const existingAlatBerat = await alatBeratRepositori.getAlatBeratById(id);
  if (!existingAlatBerat) {
    throw new Error("Data tidak ditemukan");
  }

  const servis = await servisRepositori.getServisByNoUnik(
    existingAlatBerat.no_registrasi
  );

  if (servis.length > 0) {
    await Promise.all(
      servis.map(async (data) => {
        await image.deleteImage("servis/nota", data.nota_pembayaran);
        await image.deleteImage("servis/dokumentasi", data.dokumentasi);
        await onderdilRepositori.deleteOnderdilByIdServis(data.id_servis);
      })
    );
    await servisRepositori.deleteServisByNoUnik(
      existingAlatBerat.no_registrasi
    );
  }
  await servisBerkalaAlatBeratRepositori.deleteServisBerkalaAlatBeratByNoRegistrasi(
    existingAlatBerat.no_registrasi
  );
  await image.deleteImage("alatberat", existingAlatBerat.gambar);
  await image.deleteImage("alatberat/qrcode", existingAlatBerat.qrcode);
  return await alatBeratRepositori.deleteAlatBerat(id);
};

export default {
  getAlatBerat,
  getAlatBeratByNoRegistrasi,
  inputAlatBerat,
  updateAlatBerat,
  deleteAlatBerat,
};
