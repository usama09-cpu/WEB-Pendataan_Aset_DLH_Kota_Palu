import alatBeratRepositori from "../repositori/alatBerat-repositori.js";
import servisRepositori from "../repositori/servis-repositori.js";
import onderdilRepositori from "../repositori/onderdil-repositori.js";
import servisBerkalaAlatBeratRepositori from "../repositori/servisBerkalaAlatBerat-repositori.js";
import acRepositori from "../repositori/ac-repositori.js";
import alatKerjaRepositori from "../repositori/alatKerja-repositori.js";
import kendaraanRepositori from "../repositori/kendaraan-repositori.js";
import {
  createAset,
  deleteAset,
  updateAset,
} from "../repositori/aset-repositori.js";
import image from "../helper/image.js";
import qrcode from "../helper/qr.js";
import dayjs from "dayjs";

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
    !alatBerat.kode_barang ||
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
    throw new Error("Data alat berat tidak lengkap");
  }

  const existingAlatBerat =
    await alatBeratRepositori.getAlatBeratByNoRegistrasi(
      alatBerat.no_registrasi
    );
  if (existingAlatBerat) {
    throw new Error("Nomor registrasi sudah terdaftar");
  }

  const existingKendaraan = await kendaraanRepositori.getKendaraanByNoPol(
    alatBerat.no_registrasi
  );
  if (existingKendaraan) {
    throw new Error("Nomor registrasi sudah terdaftar");
  }

  const existingAlatKerja =
    await alatKerjaRepositori.getAlatKerjaByNoRegistrasi(
      alatBerat.no_registrasi
    );
  if (existingAlatKerja) {
    throw new Error("Nomor registrasi sudah terdaftar");
  }

  const existingAc = await acRepositori.getAcByNoRegistrasi(
    alatBerat.no_registrasi
  );
  if (existingAc) {
    throw new Error("Nomor registrasi sudah terdaftar");
  }

  const bufferQrCode = await qrcode.generateQRCode(alatBerat.no_registrasi);
  const qrCode = await image.uploadImage(
    "alatberat/qrcode",
    alatBerat.no_registrasi + ".png",
    bufferQrCode
  );

  const uploadedImage = await image.uploadImage(
    "alatberat",
    namaGambar,
    bufferGambar,
    "jpeg",
    800
  );

  const aset = await createAset(alatBerat.no_registrasi, "alatberat");

  await alatBeratRepositori.createAlatBerat(
    qrCode,
    uploadedImage,
    aset,
    alatBerat.kode_barang,
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

  await servisBerkalaAlatBeratRepositori.createServisBerkalaAlatBerat(
    alatBerat.no_registrasi,
    dayjs().format("YYYY-MM-DD"),
    dayjs().format("YYYY-MM-DD")
  );
};

const updateAlatBerat = async (id, namaGambar, bufferGambar, alatBerat) => {
  if (
    !alatBerat.id_aset ||
    !alatBerat.kode_barang ||
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
    throw new Error("Data alat berat tidak lengkap");
  }

  const existingAlatBerat = await alatBeratRepositori.getAlatBeratById(id);
  if (!existingAlatBerat) {
    throw new Error("Data tidak ditemukan");
  }

  const existingKendaraan = await kendaraanRepositori.getKendaraanByNoPol(
    alatBerat.no_registrasi
  );
  if (existingKendaraan) {
    throw new Error("Nomor registrasi sudah terdaftar");
  }

  const existingAlatKerja =
    await alatKerjaRepositori.getAlatKerjaByNoRegistrasi(
      alatBerat.no_registrasi
    );
  if (existingAlatKerja) {
    throw new Error("Nomor registrasi sudah terdaftar");
  }

  const existingAc = await acRepositori.getAcByNoRegistrasi(
    alatBerat.no_registrasi
  );
  if (existingAc) {
    throw new Error("Nomor registrasi sudah terdaftar");
  }

  const AlatBeratByNoRegistrasi =
    await alatBeratRepositori.getAlatBeratByNoRegistrasi(
      alatBerat.no_registrasi
    );

  if (AlatBeratByNoRegistrasi && AlatBeratByNoRegistrasi.id_alatberat != id) {
    throw new Error("Nomor registrasi sudah terdaftar");
  }

  let gambarBaru = existingAlatBerat.gambar;
  let qrCodeBaru = existingAlatBerat.qrcode;

  if (alatBerat.no_registrasi !== existingAlatBerat.no_registrasi) {
    await image.deleteImage("alatberat/qrcode", existingAlatBerat.qrcode);
    const bufferQrCode = await qrcode.generateQRCode(alatBerat.no_registrasi);
    qrCodeBaru = await image.uploadImage(
      "alatberat/qrcode",
      alatBerat.no_registrasi + ".png",
      bufferQrCode
    );
  }

  if (namaGambar && bufferGambar) {
    await image.deleteImage("alatberat", existingAlatBerat.gambar);
    gambarBaru = await image.uploadImage(
      "alatberat",
      namaGambar,
      bufferGambar,
      "jpeg",
      800
    );
  }
  
  await alatBeratRepositori.updateAlatBerat(
    id,
    qrCodeBaru,
    gambarBaru,
    alatBerat.kode_barang,
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
  await updateAset(alatBerat.id_aset, alatBerat.no_registrasi);
};

// Menghapus alat berat berdasarkan ID
const deleteAlatBerat = async (id) => {
  const alatBerat = await alatBeratRepositori.getAlatBeratById(id);
  if (!alatBerat) {
    throw new Error("Alat Berat tidak ditemukan");
  }

  // Hapus semua data servis yang terkait
  const servis = await servisRepositori.getServisByNoUnik(
    alatBerat.no_registrasi
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

    await servisRepositori.deleteServisByIdAset(alatBerat.no_registrasi);
  }

  if (alatBerat.qrcode && alatBerat.qrcode.trim() !== "") {
    await image.deleteImage("alatberat/qrcode", alatBerat.qrcode);
  }
  if (alatBerat.gambar && alatBerat.gambar.trim() !== "") {
    await image.deleteImage("alatberat", alatBerat.gambar);
  }

  await alatBeratRepositori.deleteAlatBerat(id);
  await deleteAset(alatBerat.id_aset);
};

export default {
  getAlatBerat,
  getAlatBeratByNoRegistrasi,
  inputAlatBerat,
  updateAlatBerat,
  deleteAlatBerat,
};
