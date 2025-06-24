import servisBerkalaKendaraanRepositori from "../repositori/servisBerkalaKendaraan-repositori.js";
import kendaraanRepositori from "../repositori/kendaraan-repositori.js";

const getServisBerkalaKendaraan = async () => {
  const result =
    await servisBerkalaKendaraanRepositori.getServisBerkalaKendaraan();
  if (result.length === 0) {
    throw new Error("Data tidak ditemukan");
  }
  return result;
};

const getServisBerkalaKendaraanByNoPol = async (no_polisi) => {
  const result =
    await servisBerkalaKendaraanRepositori.getServisBerkalaKendaraanByNoPol(
      no_polisi
    );
  if (!result) {
    throw new Error("Kendaraan tidak ditemukan");
  }
  return result;
};

const updateServisBerkalaKendaraan = async (id, servisBerkalaKendaraan) => {
  if (
    !servisBerkalaKendaraan.no_polisi ||
    !servisBerkalaKendaraan.oli_mesin ||
    !servisBerkalaKendaraan.filter_oli ||
    !servisBerkalaKendaraan.oli_gardan ||
    !servisBerkalaKendaraan.oli_transmisi ||
    !servisBerkalaKendaraan.ban
  ) {
    throw new Error("Data tidak lengkap");
  }
  const Kendaraan = await kendaraanRepositori.getKendaraanByNoPol(
    servisBerkalaKendaraan.no_polisi
  );

  if (!Kendaraan) {
    throw new Error("Kendaraan tidak ditemukan");
  }

  const exist =
    await servisBerkalaKendaraanRepositori.getServisBerkalaKendaraanByNoPol(
      servisBerkalaKendaraan.no_polisi
    );
  if (!exist) {
    throw new Error("Kendaraan tidak ditemukan");
  }

  return await servisBerkalaKendaraanRepositori.updateServisBerkalaKendaraan(
    id,
    servisBerkalaKendaraan.no_polisi,
    servisBerkalaKendaraan.oli_mesin,
    servisBerkalaKendaraan.filter_oli,
    servisBerkalaKendaraan.oli_gardan,
    servisBerkalaKendaraan.oli_transmisi,
    servisBerkalaKendaraan.ban
  );
};

export default {
  getServisBerkalaKendaraan,
  getServisBerkalaKendaraanByNoPol,
  updateServisBerkalaKendaraan,
};
