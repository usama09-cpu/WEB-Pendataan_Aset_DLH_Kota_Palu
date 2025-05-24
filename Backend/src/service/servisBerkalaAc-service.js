import servisBerkalaAcRepositori from "../repositori/servisBerkalaAc-repositori.js";
import acRepositori from "../repositori/ac-repositori.js";

const getServisBerkalaAc = async () => {
  const result = await servisBerkalaAcRepositori.getServisBerkalaAc();
  if (result.length === 0) {
    throw new Error("Data tidak ditemukan");
  }
  return result;
};

const getServisBerkalaAcByNoRegistrasi = async (no_registrasi) => {
  const result =
    await servisBerkalaAcRepositori.getServisBerkalaAcByNoRegistrasi(
      no_registrasi
    );
  if (!result) {
    throw new Error("Data tidak ditemukan");
  }
  return result;
};

const updateServisBerkalaAc = async (id, servisBerkalaAc) => {
  if (!servisBerkalaAc.no_registrasi || !servisBerkalaAc.cuci) {
    throw new Error("Data tidak lengkap");
  }

  const ac = await acRepositori.getAcByNoRegistrasi(
    servisBerkalaAc.no_registrasi
  );
  if (!ac) {
    throw new Error("AC tidak ditemukan");
  }

  const exist =
    await servisBerkalaAcRepositori.getServisBerkalaAcByNoRegistrasi(
      servisBerkalaAc.no_registrasi
    );
  if (!exist) {
    throw new Error("AC tidak ditemukan");
  }

  return await servisBerkalaAcRepositori.updateServisBerkalaAc(
    id,
    servisBerkalaAc.no_registrasi,
    servisBerkalaAc.cuci
  );
};

export default {
  getServisBerkalaAc,
  getServisBerkalaAcByNoRegistrasi,
  updateServisBerkalaAc,
};
