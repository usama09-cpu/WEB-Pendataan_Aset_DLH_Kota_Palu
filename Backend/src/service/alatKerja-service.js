import alatKerjaRepositori from "../repositori/alatKerja-repositori.js";
import servisRepositori from "../repositori/servis-repositori.js";
import onderdilRepositori from "../repositori/onderdil-repositori.js";
import servisBerkalaAlatKerjaRepositori from "../repositori/servisBerkalaAlatKerja-repositori.js";
import kendaraanRepositori from "../repositori/kendaraan-repositori.js";
import alatBeratRepositori from "../repositori/alatBerat-repositori.js";
import acRepositori from "../repositori/ac-repositori.js";
import {
  createAset,
  deleteAset,
  updateAset,
} from "../repositori/aset-repositori.js";
import image from "../helper/image.js";
import qrcode from "../helper/qr.js";
import dayjs from "dayjs";

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
    !alatKerja.kode_barang ||
    !alatKerja.nama_barang ||
    !alatKerja.merek ||
    !alatKerja.no_registrasi ||
    !alatKerja.no_serial ||
    !alatKerja.asal ||
    !alatKerja.tahun_pembelian ||
    !alatKerja.harga_pembelian ||
    !alatKerja.kondisi ||
    !alatKerja.pemegang ||
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

  const existingKendaraan = await kendaraanRepositori.getKendaraanByNoPol(
    alatKerja.no_registrasi
  );
  if (existingKendaraan) {
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

  const qrCode = await image.uploadImage(
    "alatkerja/qrcode",
    alatKerja.no_registrasi + ".png",
    bufferQr
  );

  const uploadedImage = await image.uploadImage(
    "alatkerja",
    namaGambar,
    bufferGambar,
    "jpeg",
    800
  );

  const aset = await createAset(alatKerja.no_registrasi, "alatkerja");

  await alatKerjaRepositori.createAlatKerja(
    qrCode,
    uploadedImage,
    aset,
    alatKerja.kode_barang,
    alatKerja.nama_barang,
    alatKerja.merek,
    alatKerja.no_registrasi,
    alatKerja.no_serial,
    alatKerja.asal,
    alatKerja.tahun_pembelian,
    alatKerja.harga_pembelian,
    alatKerja.kondisi,
    alatKerja.pemegang,
    alatKerja.keterangan
  );

  await servisBerkalaAlatKerjaRepositori.createServisBerkalaAlatKerja(
    alatKerja.no_registrasi,
    dayjs().format("YYYY-MM-DD")
  );
};

const updateAlatKerja = async (id, namaGambar, bufferGambar, alatKerja) => {
  if (
    !alatKerja.id_aset ||
    !alatKerja.kode_barang ||
    !alatKerja.nama_barang ||
    !alatKerja.merek ||
    !alatKerja.no_registrasi ||
    !alatKerja.no_serial ||
    !alatKerja.asal ||
    !alatKerja.tahun_pembelian ||
    !alatKerja.harga_pembelian ||
    !alatKerja.kondisi ||
    !alatKerja.pemegang ||
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

  const existingKendaraan = await kendaraanRepositori.getKendaraanByNoPol(
    alatKerja.no_registrasi
  );
  if (existingKendaraan) {
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

  let gambarBaru = existingAlatKerja.gambar;
  let qrCodeBaru = existingAlatKerja.qrcode;

  if (alatKerja.no_registrasi !== existingAlatKerja.no_registrasi) {
    await image.deleteImage("alatkerja/qrcode", existingAlatKerja.qrcode);
    const bufferQr = await qrcode.generateQRCode(alatKerja.no_registrasi);
    qrCodeBaru = await image.uploadImage(
      "alatkerja/qrcode",
      alatKerja.no_registrasi + ".png",
      bufferQr
    );
  }

  if (namaGambar && bufferGambar) {
    await image.deleteImage("alatkerja", existingAlatKerja.gambar);
    gambarBaru = await image.uploadImage(
      "alatkerja",
      namaGambar,
      bufferGambar,
      "jpeg",
      800
    );
  }

  await alatKerjaRepositori.updateAlatKerja(
    id,
    qrCodeBaru,
    gambarBaru,
    alatKerja.kode_barang,
    alatKerja.nama_barang,
    alatKerja.merek,
    alatKerja.no_registrasi,
    alatKerja.no_serial,
    alatKerja.asal,
    alatKerja.tahun_pembelian,
    alatKerja.harga_pembelian,
    alatKerja.kondisi,
    alatKerja.pemegang,
    alatKerja.keterangan
  );
  await updateAset(alatKerja.id_aset, alatKerja.no_registrasi);
};

// Menghapus alat kerja berdasarkan ID
const deleteAlatKerja = async (id) => {
  const alatKerja = await alatKerjaRepositori.getAlatKerjaById(id);
  if (!alatKerja) {
    throw new Error("Alat Berat tidak ditemukan");
  }

  // Hapus semua data servis yang terkait
  const servis = await servisRepositori.getServisByNoUnik(
    alatKerja.no_registrasi
  );

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

    await servisRepositori.deleteServisByIdAset(alatKerja.no_registrasi);
  }

  if (alatKerja.qrcode && alatKerja.qrcode.trim() !== "") {
    await image.deleteImage("alatKerja/qrcode", alatKerja.qrcode);
  }
  if (alatKerja.gambar && alatKerja.gambar.trim() !== "") {
    await image.deleteImage("alatKerja", alatKerja.gambar);
  }

  await alatKerjaRepositori.deleteAlatKerja(id);
  await deleteAset(alatKerja.id_aset);
};

export default {
  getAlatKerja,
  getAlatKerjaByNoRegistrasi,
  inputAlatKerja,
  updateAlatKerja,
  deleteAlatKerja,
};
