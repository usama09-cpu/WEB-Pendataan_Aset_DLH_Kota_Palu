import acRepositori from "../repositori/ac-repositori.js";
import servisRepositori from "../repositori/servis-repositori.js";
import onderdilRepositori from "../repositori/onderdil-repositori.js";
import servisBerkalaAcRepositori from "../repositori/servisBerkalaAc-repositori.js";
import kendaraanRepositori from "../repositori/kendaraan-repositori.js";
import alatBeratRepositori from "../repositori/alatBerat-repositori.js";
import alatKerjaRepositori from "../repositori/alatKerja-repositori.js";
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

  const existingAc = await acRepositori.getAcByNoRegistrasi(ac.no_registrasi);
  if (existingAc) {
    throw new Error("Nomor resgistrasi sudah terdaftar");
  }

  const exixtingKendaraan = await kendaraanRepositori.getKendaraanByNoPol(
    ac.no_registrasi
  );
  if (exixtingKendaraan) {
    throw new Error("Nomor resgistrasi sudah terdaftar");
  }

  const exixtingAlatKerja =
    await alatKerjaRepositori.getAlatKerjaByNoRegistrasi(ac.no_registrasi);
  if (exixtingAlatKerja) {
    throw new Error("Nomor resgistrasi sudah terdaftar");
  }

  const exixtingAlatBerat =
    await alatBeratRepositori.getAlatBeratByNoRegistrasi(ac.no_registrasi);
  if (exixtingAlatBerat) {
    throw new Error("Nomor resgistrasi sudah terdaftar");
  }

  const bufferQr = await qrcode.generateQRCode(ac.no_registrasi);
  const uploadedQr = await image.uploadImage(
    "ac/qrcode",
    ac.no_registrasi + ".png",
    bufferQr
  );

  const uploadedImage = await image.uploadImage("ac", namaGambar, bufferGambar);

  await servisBerkalaAcRepositori.createServisBerkalaAc(
    ac.no_registrasi,
    dayjs().format("YYYY-MM-DD")
  );

  return await acRepositori.createAc(
    uploadedQr,
    uploadedImage,
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
};

const updateAc = async (id, namaGambar, bufferGambar, ac) => {
  if (
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

  const existingAc = await acRepositori.getAcById(id);
  if (!existingAc) {
    throw new Error("Data tidak ditemukan");
  }

  const acByNoRegistrasi = await acRepositori.getAcByNoRegistrasi(
    ac.no_registrasi
  );
  if (acByNoRegistrasi && acByNoRegistrasi.id_ac != id) {
    throw new Error("Nomor resgistrasi sudah terdaftar");
  }

  const exixtingKendaraan = await kendaraanRepositori.getKendaraanByNoPol(
    ac.no_registrasi
  );
  if (exixtingKendaraan) {
    throw new Error("Nomor resgistrasi sudah terdaftar");
  }

  const exixtingAlatKerja =
    await alatKerjaRepositori.getAlatKerjaByNoRegistrasi(ac.no_registrasi);
  if (exixtingAlatKerja) {
    throw new Error("Nomor resgistrasi sudah terdaftar");
  }

  const exixtingAlatBerat =
    await alatBeratRepositori.getAlatBeratByNoRegistrasi(ac.no_registrasi);
  if (exixtingAlatBerat) {
    throw new Error("Nomor resgistrasi sudah terdaftar");
  }

  let qrBaru = existingAc.qrcode;
  if (ac.no_registrasi != existingAc.no_registrasi) {
    const serberac =
      await servisBerkalaAcRepositori.getServisBerkalaAcByNoRegistrasi(
        existingAc.no_registrasi
      );
    await servisBerkalaAcRepositori.updateServisBerkalaAc(
      serberac.id_serberac,
      ac.no_registrasi,
      serberac.cuci
    );
    await image.deleteImage("ac/qrcode", existingAc.qrcode);
    const bufferQr = await qrcode.generateQRCode(ac.no_registrasi);
    qrBaru = await image.uploadImage(
      "ac/qrcode",
      ac.no_registrasi + ".png",
      bufferQr
    );

    const servisAc = await servisRepositori.getServisByNoUnik(
      existingAc.no_registrasi
    );
    if (servisAc.length > 0) {
      await Promise.all(
        servisAc.map(async (data) => {
          await servisRepositori.updateServis(
            data.id_servis,
            data.tanggal,
            ac.no_registrasi,
            data.nama_bengkel,
            data.biaya_servis,
            data.nota_pembayaran,
            data.dokumentasi
          );
        })
      );
    }
  }

  let gambarBaru = existingAc.gambar;
  if (namaGambar && bufferGambar) {
    await image.deleteImage("ac", existingAc.gambar);
    gambarBaru = await image.uploadImage("ac", namaGambar, bufferGambar);
  }

  return await acRepositori.updateAc(
    id,
    qrBaru,
    gambarBaru,
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
};

const deleteAc = async (id) => {
  const ac = await acRepositori.getAcById(id);
  if (!ac) {
    throw new Error("Data tidak ditemukan");
  }
  const servis = await servisRepositori.getServisByNoUnik(ac.no_registrasi);

  if (servis.length > 0) {
    await Promise.all(
      servis.map(async (data) => {
        await image.deleteImage("servis/nota", data.nota_pembayaran);
        await image.deleteImage("servis/dokumentasi", data.dokumentasi);
        await onderdilRepositori.deleteOnderdilByIdServis(data.id_servis);
      })
    );
    await servisRepositori.deleteServisByNoUnik(ac.no_registrasi);
  }

  await servisBerkalaAcRepositori.deleteServisBerkalaAcByNoRegistrasi(
    ac.no_registrasi
  );
  await image.deleteImage("ac/qrcode", ac.qrcode);
  await image.deleteImage("ac", ac.gambar);
  return await acRepositori.deleteAc(id);
};

export default {
  getAc,
  getAcByNoRegistrasi,
  inputAc,
  updateAc,
  deleteAc,
};
