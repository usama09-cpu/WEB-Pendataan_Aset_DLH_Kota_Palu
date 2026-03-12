import acRepositori from "../repositori/ac-repositori.js";
import servisRepositori from "../repositori/servis-repositori.js";
import onderdilRepositori from "../repositori/onderdil-repositori.js";
import servisBerkalaAcRepositori from "../repositori/servisBerkalaAc-repositori.js";
import kendaraanRepositori from "../repositori/kendaraan-repositori.js";
import alatBeratRepositori from "../repositori/alatBerat-repositori.js";
import alatKerjaRepositori from "../repositori/alatKerja-repositori.js";
import {
  createAset,
  deleteAset,
  updateAset,
} from "../repositori/aset-repositori.js";
import image from "../helper/image.js";
import qrcode from "../helper/qr.js";
import dayjs from "dayjs";

const getAc = async () => {
  const ac = await acRepositori.getAc();
  if (ac.length === 0) {
    throw new Error("Data tidak ditemukan");
  }
  return ac;
};

const getAcByNoRegistrasi = async (no_registrasi) => {
  const ac = await acRepositori.getAcByNoRegistrasi(no_registrasi);
  if (!ac) {
    throw new Error("Data tidak ditemukan");
  }
  return ac;
};

const inputAc = async (namaGambar, bufferGambar, ac) => {
  if (
    !namaGambar ||
    !bufferGambar ||
    !ac.kode_barang ||
    !ac.nama_barang ||
    !ac.merek ||
    !ac.no_registrasi ||
    !ac.no_serial ||
    !ac.ukuran ||
    !ac.ruangan ||
    !ac.asal ||
    !ac.tahun_pembelian ||
    !ac.harga_pembelian ||
    !ac.kondisi ||
    !ac.keterangan
  ) {
    throw new Error("Data tidak lengkap");
  }

  const existingAC = await acRepositori.getAcByNoRegistrasi(ac.no_registrasi);
  if (existingAC) {
    throw new Error("Nomor registrasi sudah terdaftar");
  }

  const existingKendaraan = await kendaraanRepositori.getKendaraanByNoPol(
    ac.no_registrasi
  );
  if (existingKendaraan) {
    throw new Error("Nomor registrasi sudah terdaftar");
  }

  const exixtingAlatKerja =
    await alatKerjaRepositori.getAlatKerjaByNoRegistrasi(ac.no_registrasi);
  if (exixtingAlatKerja) {
    throw new Error("Nomor registrasi sudah terdaftar");
  }

  const exixtingAlatBerat =
    await alatBeratRepositori.getAlatBeratByNoRegistrasi(ac.no_registrasi);
  if (exixtingAlatBerat) {
    throw new Error("Nomor registrasi sudah terdaftar");
  }

  const bufferQr = await qrcode.generateQRCode(ac.no_registrasi);
  const qrCode = await image.uploadImage(
    "ac/qrcode",
    ac.no_registrasi + ".png",
    bufferQr
  );

  const uploadedImage = await image.uploadImage(
    "ac",
    namaGambar,
    bufferGambar,
    "jpeg",
    800
  );

  const aset = await createAset(ac.no_registrasi, "ac");

  await acRepositori.createAc(
    qrCode,
    uploadedImage,
    aset,
    ac.kode_barang,
    ac.nama_barang,
    ac.merek,
    ac.no_registrasi,
    ac.no_serial,
    ac.ukuran,
    ac.ruangan,
    ac.asal,
    ac.tahun_pembelian,
    ac.harga_pembelian,
    ac.kondisi,
    ac.keterangan
  );

  await servisBerkalaAcRepositori.createServisBerkalaAc(
    ac.no_registrasi,
    dayjs().format("YYYY-MM-DD")
  );
};

const updateAc = async (id, namaGambar, bufferGambar, ac) => {
  if (
    !ac.id_aset ||
    !ac.kode_barang ||
    !ac.nama_barang ||
    !ac.merek ||
    !ac.no_registrasi ||
    !ac.no_serial ||
    !ac.ukuran ||
    !ac.ruangan ||
    !ac.asal ||
    !ac.tahun_pembelian ||
    !ac.harga_pembelian ||
    !ac.kondisi ||
    !ac.keterangan
  ) {
    throw new Error("Data tidak lengkap");
  }

  const existingAC = await acRepositori.getAcById(id);
  if (!existingAC) {
    throw new Error("Data tidak ditemukan");
  }

  const acByNoRegistrasi = await acRepositori.getAcByNoRegistrasi(
    ac.no_registrasi
  );
  if (acByNoRegistrasi && acByNoRegistrasi.id_ac != id) {
    throw new Error("Nomor registrasi sudah terdaftar");
  }

  const existingKendaraan = await kendaraanRepositori.getKendaraanByNoPol(
    ac.no_registrasi
  );
  if (existingKendaraan) {
    throw new Error("Nomor registrasi sudah terdaftar");
  }

  const exixtingAlatKerja =
    await alatKerjaRepositori.getAlatKerjaByNoRegistrasi(ac.no_registrasi);
  if (exixtingAlatKerja) {
    throw new Error("Nomor registrasi sudah terdaftar");
  }

  const exixtingAlatBerat =
    await alatBeratRepositori.getAlatBeratByNoRegistrasi(ac.no_registrasi);
  if (exixtingAlatBerat) {
    throw new Error("Nomor registrasi sudah terdaftar");
  }

  let gambarBaru = existingAC.gambar;
  let qrCodeBaru = existingAC.qrcode;

  if (ac.no_registrasi !== existingAC.no_registrasi) {
    await image.deleteImage("ac/qrcode", existingAC.qrcode);
    const bufferQr = await qrcode.generateQRCode(ac.no_registrasi);
    qrCodeBaru = await image.uploadImage(
      "ac/qrcode",
      ac.no_registrasi + ".png",
      bufferQr
    );
  }

  if (namaGambar && bufferGambar) {
    await image.deleteImage("ac", existingAC.gambar);
    gambarBaru = await image.uploadImage(
      "ac",
      namaGambar,
      bufferGambar,
      "jpeg",
      800
    );
  }

  await acRepositori.updateAc(
    id,
    qrCodeBaru,
    gambarBaru,
    ac.kode_barang,
    ac.nama_barang,
    ac.merek,
    ac.no_registrasi,
    ac.no_serial,
    ac.ukuran,
    ac.ruangan,
    ac.asal,
    ac.tahun_pembelian,
    ac.harga_pembelian,
    ac.kondisi,
    ac.keterangan
  );
  await updateAset(ac.id_aset, ac.no_registrasi);
};

// Menghapus AC berdasarkan ID
const deleteAc = async (id) => {
  const ac = await acRepositori.getAcById(id);
  if (!ac) {
    throw new Error("Data tidak ditemukan");
  }

  // Hapus semua data servis yang terkait
  const servis = await servisRepositori.getServisByNoUnik(ac.no_registrasi);

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

    await servisRepositori.deleteServisByIdAset(ac.no_registrasi);
  }

  if (ac.qrcode && ac.qrcode.trim() !== "") {
    await image.deleteImage("ac/qrcode", ac.qrcode);
  }
  if (ac.gambar && ac.gambar.trim() !== "") {
    await image.deleteImage("ac", ac.gambar);
  }

  await acRepositori.deleteAc(id);
  await deleteAset(ac.id_aset);
};

export default {
  getAc,
  getAcByNoRegistrasi,
  inputAc,
  updateAc,
  deleteAc,
};
