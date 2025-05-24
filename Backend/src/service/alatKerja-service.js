import alatKerjaRepositori from "../repositori/alatKerja-repositori.js";
import servisRepositori from "../repositori/servis-repositori.js";
import onderdilRepositori from "../repositori/onderdil-repositori.js";
import servisBerkalaAlatKerjaRepositori from "../repositori/servisBerkalaAlatKerja-repositori.js";
import kendaraanRepositori from "../repositori/kendaraan-repositori.js";
import alatBeratRepositori from "../repositori/alatBerat-repositori.js";
import acRepositori from "../repositori/ac-repositori.js";
import image from "../helper/image.js";
import qrcode from "../helper/qr.js";
import dayjs from "dayjs";
import e from "express";

const getAlatKerja = async () => {
  const alatKerja = await alatKerjaRepositori.getAlatKerja();
  if (alatKerja.length === 0) {
    throw new Error("Data tidak ditemukan");
  }
  return alatKerja;
};

const getAlatKerjaByNoRegistrasi = async (no_registrasi) => {
  const alatKerja = await alatKerjaRepositori.getAlatKerjaByNoRegistrasi(
    no_registrasi
  );
  if (!alatKerja) {
    throw new Error("Data tidak ditemukan");
  }
  return alatKerja;
};

const inputAlatKerja = async (namaGambar, bufferGambar, alatKerja) => {
  if (
    !namaGambar ||
    !bufferGambar ||
    !alatKerja.merek ||
    !alatKerja.no_registrasi ||
    !alatKerja.no_serial ||
    !alatKerja.asal ||
    !alatKerja.tahun_pembelian ||
    !alatKerja.harga_pembelian ||
    !alatKerja.kondisi ||
    !alatKerja.keterangan
  ) {
    throw new Error("Data tidak lengkap");
  }

  const existingAlatKerja =
    await alatKerjaRepositori.getAlatKerjaByNoRegistrasi(
      alatKerja.no_registrasi
    );
  if (existingAlatKerja) {
    throw new Error("Nomor resgistrasi sudah terdaftar");
  }

  const exixtingKendaraan = await kendaraanRepositori.getKendaraanByNoPol(
    alatKerja.no_registrasi
  );
  if (exixtingKendaraan) {
    throw new Error("Nomor resgistrasi sudah terdaftar");
  }

  const existingAlatBerat =
    await alatBeratRepositori.getAlatBeratByNoRegistrasi(
      alatKerja.no_registrasi
    );
  if (existingAlatBerat) {
    throw new Error("Nomor resgistrasi sudah terdaftar");
  }

  const existingAc = await acRepositori.getAcByNoRegistrasi(
    alatKerja.no_registrasi
  );
  if (existingAc) {
    throw new Error("Nomor resgistrasi sudah terdaftar");
  }

  const bufferQr = await qrcode.generateQRCode(alatKerja.no_registrasi);
  const uploadedQr = await image.uploadImage(
    "alatkerja/qrcode",
    alatKerja.no_registrasi + ".png",
    bufferQr
  );

  await servisBerkalaAlatKerjaRepositori.createServisBerkalaAlatKerja(
    alatKerja.no_registrasi,
    dayjs().format("YYYY-MM-DD")
  );

  const uploadedImage = await image.uploadImage(
    "alatkerja",
    namaGambar,
    bufferGambar
  );
  alatKerja.gambar = uploadedImage;
  const alatKerjaBaru = await alatKerjaRepositori.createAlatKerja(
    uploadedQr,
    uploadedImage,
    alatKerja.merek,
    alatKerja.no_registrasi,
    alatKerja.no_serial,
    alatKerja.asal,
    alatKerja.tahun_pembelian,
    alatKerja.harga_pembelian,
    alatKerja.kondisi,
    alatKerja.keterangan
  );
  return alatKerjaBaru;
};

const updateAlatKerja = async (id, namaGambar, bufferGambar, alatKerja) => {
  if (
    !alatKerja.merek ||
    !alatKerja.no_registrasi ||
    !alatKerja.no_serial ||
    !alatKerja.asal ||
    !alatKerja.tahun_pembelian ||
    !alatKerja.harga_pembelian ||
    !alatKerja.kondisi ||
    !alatKerja.keterangan
  ) {
    throw new Error("Data tidak lengkap");
  }

  const existingAlatKerja = await alatKerjaRepositori.getAlatKerjaById(id);
  if (!existingAlatKerja) {
    throw new Error("Data tidak ditemukan");
  }

  const AlatKerjaByNoRegistrasi =
    await alatKerjaRepositori.getAlatKerjaByNoRegistrasi(
      alatKerja.no_registrasi
    );
  if (AlatKerjaByNoRegistrasi && AlatKerjaByNoRegistrasi.id_alatkerja != id) {
    throw new Error("Nomor resgistrasi sudah terdaftar");
  }

  const exixtingKendaraan = await kendaraanRepositori.getKendaraanByNoPol(
    alatKerja.no_registrasi
  );
  if (exixtingKendaraan) {
    throw new Error("Nomor resgistrasi sudah terdaftar");
  }

  const existingAlatBerat =
    await alatBeratRepositori.getAlatBeratByNoRegistrasi(
      alatKerja.no_registrasi
    );
  if (existingAlatBerat) {
    throw new Error("Nomor resgistrasi sudah terdaftar");
  }

  const existingAc = await acRepositori.getAcByNoRegistrasi(
    alatKerja.no_registrasi
  );
  if (existingAc) {
    throw new Error("Nomor resgistrasi sudah terdaftar");
  }

  let qrCodeBaru = existingAlatKerja.qrcode;
  if (existingAlatKerja.no_registrasi != alatKerja.no_registrasi) {
    const serberalatkerja =
      await servisBerkalaAlatKerjaRepositori.getServisBerkalaAlatKerjaByNoRegistrasi(
        existingAlatKerja.no_registrasi
      );
    await servisBerkalaAlatKerjaRepositori.updateServisBerkalaAlatKerja(
      serberalatkerja.id_serberalatkerja,
      alatKerja.no_registrasi,
      serberalatkerja.oli_mesin
    );
    await image.deleteImage("alatkerja/qrcode", existingAlatKerja.qrcode);
    const bufferQr = await qrcode.generateQRCode(alatKerja.no_registrasi);
    qrCodeBaru = await image.uploadImage(
      "alatkerja/qrcode",
      alatKerja.no_registrasi + ".png",
      bufferQr
    );

    const servisAlatKerja = await servisRepositori.getServisByNoUnik(
      existingAlatKerja.no_registrasi
    );
    if (servisAlatKerja.length > 0) {
      await Promise.all(
        servisAlatKerja.map(async (data) => {
          await servisRepositori.updateServis(
            data.id_servis,
            data.tanggal,
            alatKerja.no_registrasi,
            data.nama_bengkel,
            data.biaya_servis,
            data.nota_pembayaran,
            data.dokumentasi
          );
        })
      );
    }
  }

  let gambarBaru = existingAlatKerja.gambar;

  if (namaGambar && bufferGambar) {
    await image.deleteImage("alatkerja", existingAlatKerja.gambar);
    gambarBaru = await image.uploadImage("alatkerja", namaGambar, bufferGambar);
  }

  const alatKerjaBaru = await alatKerjaRepositori.updateAlatKerja(
    id,
    qrCodeBaru,
    gambarBaru,
    alatKerja.merek,
    alatKerja.no_registrasi,
    alatKerja.no_serial,
    alatKerja.asal,
    alatKerja.tahun_pembelian,
    alatKerja.harga_pembelian,
    alatKerja.kondisi,
    alatKerja.keterangan
  );
  return alatKerjaBaru;
};

const deleteAlatKerja = async (id) => {
  const alatKerja = await alatKerjaRepositori.getAlatKerjaById(id);
  if (!alatKerja) {
    throw new Error("Data tidak ditemukan");
  }
  const servis = await servisRepositori.getServisByNoUnik(
    alatKerja.no_registrasi
  );

  if (servis.length > 0) {
    await Promise.all(
      servis.map(async (data) => {
        await image.deleteImage("servis/nota", data.nota_pembayaran);
        await image.deleteImage("servis/dokumentasi", data.dokumentasi);
        await onderdilRepositori.deleteOnderdilByIdServis(data.id_servis);
      })
    );
    await servisRepositori.deleteServisByNoUnik(alatKerja.no_registrasi);
  }

  await servisBerkalaAlatKerjaRepositori.deleteServisBerkalaAlatKerjaByNoRegistrasi(
    alatKerja.no_registrasi
  );
  await image.deleteImage("alatkerja/qrcode", alatKerja.qrcode);
  await image.deleteImage("alatkerja", alatKerja.gambar);
  return await alatKerjaRepositori.deleteAlatKerja(id);
};

export default {
  getAlatKerja,
  getAlatKerjaByNoRegistrasi,
  inputAlatKerja,
  updateAlatKerja,
  deleteAlatKerja,
};
