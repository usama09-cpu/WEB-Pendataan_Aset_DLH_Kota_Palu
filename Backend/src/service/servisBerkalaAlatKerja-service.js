import servisBerkalaAlatKerjaRepositori from "../repositori/servisBerkalaAlatKerja-repositori.js";
import alatKerjaRepositori from "../repositori/alatKerja-repositori.js";

const getServisBerkalaAlatKerja = async () => {
  const result =
    await servisBerkalaAlatKerjaRepositori.getServisBerkalaAlatKerja();
  if (result.length === 0) {
    throw new Error("Data tidak ditemukan");
  }
  return result;
};

const getServisBerkalaAlatKerjaByNoRegistrasi = async (no_registrasi) => {
  const result =
    await servisBerkalaAlatKerjaRepositori.getServisBerkalaAlatKerjaByNoRegistrasi(
      no_registrasi
    );
  if (!result) {
    throw new Error("Data tidak ditemukan");
  }
  return result;
};

const updateServisBerkalaAlatKerja = async (id, servisBerkalaAlatKerja) => {
  if (
    !servisBerkalaAlatKerja.no_registrasi ||
    !servisBerkalaAlatKerja.oli_mesin
  ) {
    throw new Error("Data tidak lengkap");
  }

  const alatKerja = await alatKerjaRepositori.getAlatKerjaByNoRegistrasi(
    servisBerkalaAlatKerja.no_registrasi
  );
  if (!alatKerja) {
    throw new Error("Alat kerja tidak ditemukan");
  }

  const exist =
    await servisBerkalaAlatKerjaRepositori.getServisBerkalaAlatKerjaByNoRegistrasi(
      servisBerkalaAlatKerja.no_registrasi
    );
  if (!exist) {
    throw new Error("Alat kerja tidak ditemukan");
  }

  return await servisBerkalaAlatKerjaRepositori.updateServisBerkalaAlatKerja(
    id,
    servisBerkalaAlatKerja.no_registrasi,
    servisBerkalaAlatKerja.oli_mesin
  );
};

export default {
  getServisBerkalaAlatKerja,
  getServisBerkalaAlatKerjaByNoRegistrasi,
  updateServisBerkalaAlatKerja,
};
