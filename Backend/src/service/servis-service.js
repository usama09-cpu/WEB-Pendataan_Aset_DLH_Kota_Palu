import image from "../helper/image.js";
import servisRepositori from "../repositori/servis-repositori.js";
import onderdilRepositori from "../repositori/onderdil-repositori.js";
import kendaraanRepositori from "../repositori/kendaraan-repositori.js";
import alatBeratRepositori from "../repositori/alatBerat-repositori.js";
import alatKerjaRepositori from "../repositori/alatKerja-repositori.js";
import acRepositori from "../repositori/ac-repositori.js";
import servisBerkalaKendaraanRepositori from "../repositori/servisBerkalaKendaraan-repositori.js";
import servisBerkalaAlatBeratRepositori from "../repositori/servisBerkalaAlatBerat-repositori.js";
import servisBerkalaAlatKerjaRepositori from "../repositori/servisBerkalaAlatKerja-repositori.js";
import servisBerkalaAcRepositori from "../repositori/servisBerkalaAc-repositori.js";

const getServis = async () => {
  const dataList = await servisRepositori.getServis();
  if (dataList.length === 0) {
    throw new Error("Data servis tidak ditemukan");
  }

  const dataWithOnderdil = await Promise.all(
    dataList.map(async (data) => {
      const onderdil = await onderdilRepositori.getOnderdilByIdServis(
        data.id_servis
      );
      return { ...data, onderdil };
    })
  );

  return dataWithOnderdil;
};

const getServisById = async (id) => {
  const data = await servisRepositori.getServisById(id);

  if (!data) throw new Error("Data servis tidak ditemukan");

  const onderdil = await onderdilRepositori.getOnderdilByIdServis(
    data.id_servis
  );
  return { ...data, onderdil };
};

const getServisByNoUnik = async (no_unik) => {
  const dataList = await servisRepositori.getServisByNoUnik(no_unik);
  if (dataList.length === 0) {
    throw new Error("Data servis tidak ditemukan");
  }

  const dataWithOnderdil = await Promise.all(
    dataList.map(async (data) => {
      const onderdil = await onderdilRepositori.getOnderdilByIdServis(
        data.id_servis
      );
      return { ...data, onderdil };
    })
  );

  return dataWithOnderdil;
};

const inputServis = async (
  data,
  namaGambarNota,
  bufferGambarNota,
  namaGambarDokumentasi,
  bufferGambarDokumentasi
) => {
  if (
    !data.tanggal ||
    !data.no_unik ||
    !data.nama_bengkel ||
    !data.onderdil ||
    !data.biaya_servis ||
    !namaGambarNota ||
    !bufferGambarNota ||
    !namaGambarDokumentasi ||
    !bufferGambarDokumentasi
  ) {
    throw new Error("Data tidak lengkap");
  }

  const existingKendaraan = await kendaraanRepositori.getKendaraanByNoPol(
    data.no_unik
  );

  const existingAlatBerat =
    await alatBeratRepositori.getAlatBeratByNoRegistrasi(data.no_unik);

  const existingAlatKerja =
    await alatKerjaRepositori.getAlatKerjaByNoRegistrasi(data.no_unik);

  const existingAC = await acRepositori.getACByNoRegistrasi(data.no_unik);

  if (
    !existingKendaraan &&
    !existingAlatBerat &&
    !existingAlatKerja &&
    !existingAC
  ) {
    throw new Error("Aset tidak ditemukan");
  }

  const nota = await image.uploadImage(
    "servis/nota",
    namaGambarNota,
    bufferGambarNota
  );
  const dokumentasi = await image.uploadImage(
    "servis/dokumentasi",
    namaGambarDokumentasi,
    bufferGambarDokumentasi
  );

  const servis = await servisRepositori.createServis(
    data.tanggal,
    data.no_unik,
    data.nama_bengkel,
    data.biaya_servis,
    nota,
    dokumentasi
  );

  const id_servis = servis.insertId;

  if (typeof data.onderdil === "string") {
    data.onderdil = JSON.parse(data.onderdil);
  }

  if (data.onderdil && Array.isArray(data.onderdil)) {
    for (const item of data.onderdil) {
      if (!item.nama_onderdil || !item.jumlah || !item.harga) {
        throw new Error("Data onderdil tidak lengkap");
      }

      // // Update Servis berkala Kendaraan
      // if (existingKendaraan) {
      //   const servisBerkalaKendaraan =
      //     await servisBerkalaKendaraanRepositori.getServisBerkalaKendaraanByNoPol(
      //       data.no_unik
      //     );
      //   if (item.nama_onderdil == "oli_mesin") {
      //     await servisBerkalaKendaraanRepositori.updateServisBerkalaKendaraan(
      //       servisBerkalaKendaraan.id_serberkendaraan,
      //       servisBerkalaKendaraan.no_polisi,
      //       data.tanggal,
      //       servisBerkalaKendaraan.filter_oli_mesin,
      //       servisBerkalaKendaraan.oli_gardan,
      //       servisBerkalaKendaraan.oli_transmisi,
      //       servisBerkalaKendaraan.ban
      //     );
      //   } else if (item.nama_onderdil == "filter_oli_mesin") {
      //     await servisBerkalaKendaraanRepositori.updateServisBerkalaKendaraan(
      //       servisBerkalaKendaraan.id_serberkendaraan,
      //       servisBerkalaKendaraan.no_polisi,
      //       servisBerkalaKendaraan.oli_mesin,
      //       data.tanggal,
      //       servisBerkalaKendaraan.oli_gardan,
      //       servisBerkalaKendaraan.oli_transmisi,
      //       servisBerkalaKendaraan.ban
      //     );
      //   } else if (item.nama_onderdil == "oli_gardan") {
      //     await servisBerkalaKendaraanRepositori.updateServisBerkalaKendaraan(
      //       servisBerkalaKendaraan.id_serberkendaraan,
      //       servisBerkalaKendaraan.no_polisi,
      //       servisBerkalaKendaraan.oli_mesin,
      //       servisBerkalaKendaraan.filter_oli_mesin,
      //       data.tanggal,
      //       servisBerkalaKendaraan.oli_transmisi,
      //       servisBerkalaKendaraan.ban
      //     );
      //   } else if (item.nama_onderdil == "oli_transmisi") {
      //     await servisBerkalaKendaraanRepositori.updateServisBerkalaKendaraan(
      //       servisBerkalaKendaraan.id_serberkendaraan,
      //       servisBerkalaKendaraan.no_polisi,
      //       servisBerkalaKendaraan.oli_mesin,
      //       servisBerkalaKendaraan.filter_oli_mesin,
      //       servisBerkalaKendaraan.oli_gardan,
      //       data.tanggal,
      //       servisBerkalaKendaraan.ban
      //     );
      //   } else if (item.nama_onderdil == "ban") {
      //     await servisBerkalaKendaraanRepositori.updateServisBerkalaKendaraan(
      //       servisBerkalaKendaraan.id_serberkendaraan,
      //       servisBerkalaKendaraan.no_polisi,
      //       servisBerkalaKendaraan.oli_mesin,
      //       servisBerkalaKendaraan.filter_oli_mesin,
      //       servisBerkalaKendaraan.oli_gardan,
      //       servisBerkalaKendaraan.oli_transmisi,
      //       data.tanggal
      //     );
      //   }
      // }

      // // Update Servis berkala Alat Berat
      // if (existingAlatBerat) {
      //   const servisBerkalaAlatBerat =
      //     await servisBerkalaAlatBeratRepositori.getServisBerkalaAlatBeratByNoRegistrasi(
      //       data.no_unik
      //     );
      //   if (item.nama_onderdil == "oli_mesin") {
      //     await servisBerkalaAlatBeratRepositori.updateServisBerkalaAlatBerat(
      //       servisBerkalaAlatBerat.id_serberalatberat,
      //       servisBerkalaAlatBerat.no_registrasi,
      //       data.tanggal,
      //       servisBerkalaAlatBerat.filter_oli_mesin
      //     );
      //   } else if (item.nama_onderdil == "filter_oli_mesin") {
      //     await servisBerkalaAlatBeratRepositori.updateServisBerkalaAlatBerat(
      //       servisBerkalaAlatBerat.id_serberalatberat,
      //       servisBerkalaAlatBerat.no_registrasi,
      //       servisBerkalaAlatBerat.oli_mesin,
      //       data.tanggal
      //     );
      //   }
      // }

      // // Update Servis berkala Alat Kerja
      // if (existingAlatKerja) {
      //   const servisBerkalaAlatKerja =
      //     await servisBerkalaAlatKerjaRepositori.getServisBerkalaAlatKerjaByNoRegistrasi(
      //       data.no_unik
      //     );
      //   if (item.nama_onderdil == "oli_mesin") {
      //     await servisBerkalaAlatKerjaRepositori.updateServisBerkalaAlatKerja(
      //       servisBerkalaAlatKerja.id_serberalatkerja,
      //       servisBerkalaAlatKerja.no_registrasi,
      //       data.tanggal
      //     );
      //   }
      // }

      // // Update Servis berkala Ac
      // if (existingAC) {
      //   const servisBerkalaAc =
      //     await servisBerkalaAcRepositori.getServisBerkalaAcByNoRegistrasi(
      //       data.no_unik
      //     );
      //   if (item.nama_onderdil == "cuci") {
      //     await servisBerkalaAcRepositori.updateServisBerkalaAc(
      //       servisBerkalaAc.id_serberac,
      //       servisBerkalaAc.no_registrasi,
      //       data.tanggal
      //     );
      //   }
      // }

      // Update Servis berkala Kendaraan
      if (existingKendaraan) {
        const servisBerkalaKendaraan =
          await servisBerkalaKendaraanRepositori.getServisBerkalaKendaraanByNoPol(
            data.no_unik
          );

        switch (item.nama_onderdil) {
          case "oli_mesin":
            await servisBerkalaKendaraanRepositori.updateServisBerkalaKendaraan(
              servisBerkalaKendaraan.id_serberkendaraan,
              servisBerkalaKendaraan.no_polisi,
              data.tanggal,
              servisBerkalaKendaraan.filter_oli_mesin,
              servisBerkalaKendaraan.oli_gardan,
              servisBerkalaKendaraan.oli_transmisi,
              servisBerkalaKendaraan.ban
            );
            break;

          case "filter_oli_mesin":
            await servisBerkalaKendaraanRepositori.updateServisBerkalaKendaraan(
              servisBerkalaKendaraan.id_serberkendaraan,
              servisBerkalaKendaraan.no_polisi,
              servisBerkalaKendaraan.oli_mesin,
              data.tanggal,
              servisBerkalaKendaraan.oli_gardan,
              servisBerkalaKendaraan.oli_transmisi,
              servisBerkalaKendaraan.ban
            );
            break;

          case "oli_gardan":
            await servisBerkalaKendaraanRepositori.updateServisBerkalaKendaraan(
              servisBerkalaKendaraan.id_serberkendaraan,
              servisBerkalaKendaraan.no_polisi,
              servisBerkalaKendaraan.oli_mesin,
              servisBerkalaKendaraan.filter_oli_mesin,
              data.tanggal,
              servisBerkalaKendaraan.oli_transmisi,
              servisBerkalaKendaraan.ban
            );
            break;

          case "oli_transmisi":
            await servisBerkalaKendaraanRepositori.updateServisBerkalaKendaraan(
              servisBerkalaKendaraan.id_serberkendaraan,
              servisBerkalaKendaraan.no_polisi,
              servisBerkalaKendaraan.oli_mesin,
              servisBerkalaKendaraan.filter_oli_mesin,
              servisBerkalaKendaraan.oli_gardan,
              data.tanggal,
              servisBerkalaKendaraan.ban
            );
            break;

          case "ban":
            await servisBerkalaKendaraanRepositori.updateServisBerkalaKendaraan(
              servisBerkalaKendaraan.id_serberkendaraan,
              servisBerkalaKendaraan.no_polisi,
              servisBerkalaKendaraan.oli_mesin,
              servisBerkalaKendaraan.filter_oli_mesin,
              servisBerkalaKendaraan.oli_gardan,
              servisBerkalaKendaraan.oli_transmisi,
              data.tanggal
            );
            break;
        }
      }

      // Update Servis berkala Alat Berat
      if (existingAlatBerat) {
        const servisBerkalaAlatBerat =
          await servisBerkalaAlatBeratRepositori.getServisBerkalaAlatBeratByNoRegistrasi(
            data.no_unik
          );

        switch (item.nama_onderdil) {
          case "oli_mesin":
            await servisBerkalaAlatBeratRepositori.updateServisBerkalaAlatBerat(
              servisBerkalaAlatBerat.id_serberalatberat,
              servisBerkalaAlatBerat.no_registrasi,
              data.tanggal,
              servisBerkalaAlatBerat.filter_oli_mesin
            );
            break;

          case "filter_oli_mesin":
            await servisBerkalaAlatBeratRepositori.updateServisBerkalaAlatBerat(
              servisBerkalaAlatBerat.id_serberalatberat,
              servisBerkalaAlatBerat.no_registrasi,
              servisBerkalaAlatBerat.oli_mesin,
              data.tanggal
            );
            break;
        }
      }

      // Update Servis berkala Alat Kerja
      if (existingAlatKerja) {
        const servisBerkalaAlatKerja =
          await servisBerkalaAlatKerjaRepositori.getServisBerkalaAlatKerjaByNoRegistrasi(
            data.no_unik
          );

        switch (item.nama_onderdil) {
          case "oli_mesin":
            await servisBerkalaAlatKerjaRepositori.updateServisBerkalaAlatKerja(
              servisBerkalaAlatKerja.id_serberalatkerja,
              servisBerkalaAlatKerja.no_registrasi,
              data.tanggal
            );
            break;
        }
      }

      // Update Servis berkala AC
      if (existingAC) {
        const servisBerkalaAc =
          await servisBerkalaAcRepositori.getServisBerkalaAcByNoRegistrasi(
            data.no_unik
          );

        switch (item.nama_onderdil) {
          case "cuci":
            await servisBerkalaAcRepositori.updateServisBerkalaAc(
              servisBerkalaAc.id_serberac,
              servisBerkalaAc.no_registrasi,
              data.tanggal
            );
            break;
        }
      }

      await onderdilRepositori.createOnderdil(
        id_servis,
        item.nama_onderdil,
        item.jumlah,
        item.harga
      );
    }
  }

  return { message: "Servis berhasil ditambahkan", id_servis };
};

const updateServis = async (
  id,
  data,
  namaGambarNota,
  bufferGambarNota,
  namaGambarDokumentasi,
  bufferGambarDokumentasi
) => {
  if (
    !data.tanggal ||
    !data.no_unik ||
    !data.nama_bengkel ||
    !data.onderdil ||
    !data.biaya_servis
  ) {
    throw new Error("Data tidak lengkap");
  }

  const existingServis = await servisRepositori.getServisById(id);
  if (!existingServis) {
    throw new Error("Data servis tidak ditemukan");
  }

  const existingKendaraan = await kendaraanRepositori.getKendaraanByNoPol(
    data.no_unik
  );

  const existingAlatBerat =
    await alatBeratRepositori.getAlatBeratByNoRegistrasi(data.no_unik);

  const existingAlatKerja =
    await alatKerjaRepositori.getAlatKerjaByNoRegistrasi(data.no_unik);

  const existingAC = await acRepositori.getACByNoRegistrasi(data.no_unik);

  if (
    !existingKendaraan &&
    !existingAlatBerat &&
    !existingAlatKerja &&
    !existingAC
  ) {
    throw new Error("Aset tidak ditemukan");
  }

  let nota = existingServis.nota_pembayaran;
  let dokumentasi = existingServis.dokumentasi;

  if (namaGambarNota && bufferGambarNota) {
    await image.deleteImage("servis/nota", existingServis.nota_pembayaran);
    nota = await image.uploadImage(
      "servis/nota",
      namaGambarNota,
      bufferGambarNota
    );
  }

  if (namaGambarDokumentasi && bufferGambarDokumentasi) {
    await image.deleteImage("servis/dokumentasi", existingServis.dokumentasi);
    dokumentasi = await image.uploadImage(
      "servis/dokumentasi",
      namaGambarDokumentasi,
      bufferGambarDokumentasi
    );
  }

  await servisRepositori.updateServis(
    id,
    data.tanggal,
    data.no_unik,
    data.nama_bengkel,
    data.biaya_servis,
    nota,
    dokumentasi
  );

  await onderdilRepositori.deleteOnderdilByIdServis(id);

  if (typeof data.onderdil === "string") {
    data.onderdil = JSON.parse(data.onderdil);
  }

  if (data.onderdil && Array.isArray(data.onderdil)) {
    for (const item of data.onderdil) {
      if (!item.nama_onderdil || !item.jumlah || !item.harga) {
        throw new Error("Data onderdil tidak lengkap");
      }

      // // Update Servis berkala Kendaraan
      // if (existingKendaraan) {
      //   const servisBerkalaKendaraan =
      //     await servisBerkalaKendaraanRepositori.getServisBerkalaKendaraanByNoPol(
      //       data.no_unik
      //     );
      //   if (item.nama_onderdil == "oli_mesin") {
      //     await servisBerkalaKendaraanRepositori.updateServisBerkalaKendaraan(
      //       servisBerkalaKendaraan.id_serberkendaraan,
      //       servisBerkalaKendaraan.no_polisi,
      //       data.tanggal,
      //       servisBerkalaKendaraan.filter_oli_mesin,
      //       servisBerkalaKendaraan.oli_gardan,
      //       servisBerkalaKendaraan.oli_transmisi,
      //       servisBerkalaKendaraan.ban
      //     );
      //   } else if (item.nama_onderdil == "filter_oli_mesin") {
      //     await servisBerkalaKendaraanRepositori.updateServisBerkalaKendaraan(
      //       servisBerkalaKendaraan.id_serberkendaraan,
      //       servisBerkalaKendaraan.no_polisi,
      //       servisBerkalaKendaraan.oli_mesin,
      //       data.tanggal,
      //       servisBerkalaKendaraan.oli_gardan,
      //       servisBerkalaKendaraan.oli_transmisi,
      //       servisBerkalaKendaraan.ban
      //     );
      //   } else if (item.nama_onderdil == "oli_gardan") {
      //     await servisBerkalaKendaraanRepositori.updateServisBerkalaKendaraan(
      //       servisBerkalaKendaraan.id_serberkendaraan,
      //       servisBerkalaKendaraan.no_polisi,
      //       servisBerkalaKendaraan.oli_mesin,
      //       servisBerkalaKendaraan.filter_oli_mesin,
      //       data.tanggal,
      //       servisBerkalaKendaraan.oli_transmisi,
      //       servisBerkalaKendaraan.ban
      //     );
      //   } else if (item.nama_onderdil == "oli_transmisi") {
      //     await servisBerkalaKendaraanRepositori.updateServisBerkalaKendaraan(
      //       servisBerkalaKendaraan.id_serberkendaraan,
      //       servisBerkalaKendaraan.no_polisi,
      //       servisBerkalaKendaraan.oli_mesin,
      //       servisBerkalaKendaraan.filter_oli_mesin,
      //       servisBerkalaKendaraan.oli_gardan,
      //       data.tanggal,
      //       servisBerkalaKendaraan.ban
      //     );
      //   } else if (item.nama_onderdil == "ban") {
      //     await servisBerkalaKendaraanRepositori.updateServisBerkalaKendaraan(
      //       servisBerkalaKendaraan.id_serberkendaraan,
      //       servisBerkalaKendaraan.no_polisi,
      //       servisBerkalaKendaraan.oli_mesin,
      //       servisBerkalaKendaraan.filter_oli_mesin,
      //       servisBerkalaKendaraan.oli_gardan,
      //       servisBerkalaKendaraan.oli_transmisi,
      //       data.tanggal
      //     );
      //   }
      // }

      // // Update Servis berkala Alat Berat
      // if (existingAlatBerat) {
      //   const servisBerkalaAlatBerat =
      //     await servisBerkalaAlatBeratRepositori.getServisBerkalaAlatBeratByNoRegistrasi(
      //       data.no_unik
      //     );
      //   if (item.nama_onderdil == "oli_mesin") {
      //     await servisBerkalaAlatBeratRepositori.updateServisBerkalaAlatBerat(
      //       servisBerkalaAlatBerat.id_serberalatberat,
      //       servisBerkalaAlatBerat.no_registrasi,
      //       data.tanggal,
      //       servisBerkalaAlatBerat.filter_oli_mesin
      //     );
      //   } else if (item.nama_onderdil == "filter_oli_mesin") {
      //     await servisBerkalaAlatBeratRepositori.updateServisBerkalaAlatBerat(
      //       servisBerkalaAlatBerat.id_serberalatberat,
      //       servisBerkalaAlatBerat.no_registrasi,
      //       servisBerkalaAlatBerat.oli_mesin,
      //       data.tanggal
      //     );
      //   }
      // }

      // // Update Servis berkala Alat Kerja
      // if (existingAlatKerja) {
      //   const servisBerkalaAlatKerja =
      //     await servisBerkalaAlatKerjaRepositori.getServisBerkalaAlatKerjaByNoRegistrasi(
      //       data.no_unik
      //     );
      //   if (item.nama_onderdil == "oli_mesin") {
      //     await servisBerkalaAlatKerjaRepositori.updateServisBerkalaAlatKerja(
      //       servisBerkalaAlatKerja.id_serberalatkerja,
      //       servisBerkalaAlatKerja.no_registrasi,
      //       data.tanggal
      //     );
      //   }
      // }

      // // Update Servis berkala Ac
      // if (existingAC) {
      //   const servisBerkalaAc =
      //     await servisBerkalaAcRepositori.getServisBerkalaAcByNoRegistrasi(
      //       data.no_unik
      //     );
      //   if (item.nama_onderdil == "cuci") {
      //     await servisBerkalaAcRepositori.updateServisBerkalaAc(
      //       servisBerkalaAc.id_serberac,
      //       servisBerkalaAc.no_registrasi,
      //       data.tanggal
      //     );
      //   }
      // }

      // Update Servis berkala Kendaraan
      if (existingKendaraan) {
        const servisBerkalaKendaraan =
          await servisBerkalaKendaraanRepositori.getServisBerkalaKendaraanByNoPol(
            data.no_unik
          );

        switch (item.nama_onderdil) {
          case "oli_mesin":
            await servisBerkalaKendaraanRepositori.updateServisBerkalaKendaraan(
              servisBerkalaKendaraan.id_serberkendaraan,
              servisBerkalaKendaraan.no_polisi,
              data.tanggal,
              servisBerkalaKendaraan.filter_oli_mesin,
              servisBerkalaKendaraan.oli_gardan,
              servisBerkalaKendaraan.oli_transmisi,
              servisBerkalaKendaraan.ban
            );
            break;

          case "filter_oli_mesin":
            await servisBerkalaKendaraanRepositori.updateServisBerkalaKendaraan(
              servisBerkalaKendaraan.id_serberkendaraan,
              servisBerkalaKendaraan.no_polisi,
              servisBerkalaKendaraan.oli_mesin,
              data.tanggal,
              servisBerkalaKendaraan.oli_gardan,
              servisBerkalaKendaraan.oli_transmisi,
              servisBerkalaKendaraan.ban
            );
            break;

          case "oli_gardan":
            await servisBerkalaKendaraanRepositori.updateServisBerkalaKendaraan(
              servisBerkalaKendaraan.id_serberkendaraan,
              servisBerkalaKendaraan.no_polisi,
              servisBerkalaKendaraan.oli_mesin,
              servisBerkalaKendaraan.filter_oli_mesin,
              data.tanggal,
              servisBerkalaKendaraan.oli_transmisi,
              servisBerkalaKendaraan.ban
            );
            break;

          case "oli_transmisi":
            await servisBerkalaKendaraanRepositori.updateServisBerkalaKendaraan(
              servisBerkalaKendaraan.id_serberkendaraan,
              servisBerkalaKendaraan.no_polisi,
              servisBerkalaKendaraan.oli_mesin,
              servisBerkalaKendaraan.filter_oli_mesin,
              servisBerkalaKendaraan.oli_gardan,
              data.tanggal,
              servisBerkalaKendaraan.ban
            );
            break;

          case "ban":
            await servisBerkalaKendaraanRepositori.updateServisBerkalaKendaraan(
              servisBerkalaKendaraan.id_serberkendaraan,
              servisBerkalaKendaraan.no_polisi,
              servisBerkalaKendaraan.oli_mesin,
              servisBerkalaKendaraan.filter_oli_mesin,
              servisBerkalaKendaraan.oli_gardan,
              servisBerkalaKendaraan.oli_transmisi,
              data.tanggal
            );
            break;
        }
      }

      // Update Servis berkala Alat Berat
      if (existingAlatBerat) {
        const servisBerkalaAlatBerat =
          await servisBerkalaAlatBeratRepositori.getServisBerkalaAlatBeratByNoRegistrasi(
            data.no_unik
          );

        switch (item.nama_onderdil) {
          case "oli_mesin":
            await servisBerkalaAlatBeratRepositori.updateServisBerkalaAlatBerat(
              servisBerkalaAlatBerat.id_serberalatberat,
              servisBerkalaAlatBerat.no_registrasi,
              data.tanggal,
              servisBerkalaAlatBerat.filter_oli_mesin
            );
            break;

          case "filter_oli_mesin":
            await servisBerkalaAlatBeratRepositori.updateServisBerkalaAlatBerat(
              servisBerkalaAlatBerat.id_serberalatberat,
              servisBerkalaAlatBerat.no_registrasi,
              servisBerkalaAlatBerat.oli_mesin,
              data.tanggal
            );
            break;
        }
      }

      // Update Servis berkala Alat Kerja
      if (existingAlatKerja) {
        const servisBerkalaAlatKerja =
          await servisBerkalaAlatKerjaRepositori.getServisBerkalaAlatKerjaByNoRegistrasi(
            data.no_unik
          );

        switch (item.nama_onderdil) {
          case "oli_mesin":
            await servisBerkalaAlatKerjaRepositori.updateServisBerkalaAlatKerja(
              servisBerkalaAlatKerja.id_serberalatkerja,
              servisBerkalaAlatKerja.no_registrasi,
              data.tanggal
            );
            break;
        }
      }

      // Update Servis berkala AC
      if (existingAC) {
        const servisBerkalaAc =
          await servisBerkalaAcRepositori.getServisBerkalaAcByNoRegistrasi(
            data.no_unik
          );

        switch (item.nama_onderdil) {
          case "cuci":
            await servisBerkalaAcRepositori.updateServisBerkalaAc(
              servisBerkalaAc.id_serberac,
              servisBerkalaAc.no_registrasi,
              data.tanggal
            );
            break;
        }
      }

      await onderdilRepositori.createOnderdil(
        id,
        item.nama_onderdil,
        item.jumlah,
        item.harga
      );
    }
  }

  return { message: "Servis berhasil diperbarui" };
};

const deleteServis = async (id) => {
  const existingServis = await servisRepositori.getServisById(id);
  if (!existingServis) {
    throw new Error("Data servis tidak ditemukan");
  }
  await image.deleteImage("servis/nota", existingServis.nota_pembayaran);
  await image.deleteImage("servis/dokumentasi", existingServis.dokumentasi);
  await onderdilRepositori.deleteOnderdilByIdServis(id);
  await servisRepositori.deleteServis(id);
  return { message: "Servis berhasil dihapus" };
};

export default {
  getServis,
  getServisById,
  getServisByNoUnik,
  inputServis,
  updateServis,
  deleteServis,
};
