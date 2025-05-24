import servisBerkalaAlatBeratRepositori from "../repositori/servisBerkalaAlatBerat-repositori.js";
import alatBeratRepositori from "../repositori/alatBerat-repositori.js";

const getServisBerkalaAlatBerat = async () => {
  const result =
    await servisBerkalaAlatBeratRepositori.getServisBerkalaAlatBerat();
  if (result.length === 0) {
    throw new Error("Data tidak ditemukan");
  }
  return result;
};

const getServisBerkalaAlatBeratByNoRegistrasi = async (no_registrasi) => {
  const result =
    await servisBerkalaAlatBeratRepositori.getServisBerkalaAlatBeratByNoRegistrasi(
      no_registrasi
    );
  if (!result) {
    throw new Error("Data tidak ditemukan");
  }
  return result;
};

const updateServisBerkalaAlatBerat = async (id, servisBerkalaAlatBerat) => {
  if (
    !servisBerkalaAlatBerat.no_registrasi ||
    !servisBerkalaAlatBerat.oli_mesin ||
    !servisBerkalaAlatBerat.filter_oli_mesin
  ) {
    throw new Error("Data tidak lengkap");
  }
  const alatBerat = await alatBeratRepositori.getAlatBeratByNoRegistrasi(
    servisBerkalaAlatBerat.no_registrasi
  );
  if (!alatBerat) {
    throw new Error("Alat berat tidak ditemukan");
  }
  const existingServisBerkalaAlatBerat =
    await servisBerkalaAlatBeratRepositori.getServisBerkalaAlatBeratByNoRegistrasi(
      servisBerkalaAlatBerat.no_registrasi
    );
  if (!existingServisBerkalaAlatBerat) {
    throw new Error("Alat berat tidak ditemukan");
  }

  return await servisBerkalaAlatBeratRepositori.updateServisBerkalaAlatBerat(
    id,
    servisBerkalaAlatBerat.no_registrasi,
    servisBerkalaAlatBerat.oli_mesin,
    servisBerkalaAlatBerat.filter_oli_mesin
  );
};

export default {
  getServisBerkalaAlatBerat,
  getServisBerkalaAlatBeratByNoRegistrasi,
  updateServisBerkalaAlatBerat,
};
