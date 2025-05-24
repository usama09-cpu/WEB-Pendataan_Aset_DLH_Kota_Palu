import servisBerkalaKendaraanRepositori from "../repositori/servisBerkalaKendaraan-repositori.js";
import servisBerkalaAlatBeratRepositori from "../repositori/servisBerkalaAlatBerat-repositori.js";
import servisBerkalaAlatKerjaRepositori from "../repositori/servisBerkalaAlatKerja-repositori.js";
import servisBerkalaAcRepositori from "../repositori/servisBerkalaAc-repositori.js";

const getServisBerkalaQrCode = async (no_unik) => {
  const kendaraan =
    await servisBerkalaKendaraanRepositori.getServisBerkalaKendaraanByNoPol(
      no_unik
    );
  const alatBerat =
    await servisBerkalaAlatBeratRepositori.getServisBerkalaAlatBeratByNoRegistrasi(
      no_unik
    );
  const alatKerja =
    await servisBerkalaAlatKerjaRepositori.getServisBerkalaAlatKerjaByNoRegistrasi(
      no_unik
    );
  const ac = await servisBerkalaAcRepositori.getServisBerkalaAcByNoRegistrasi(
    no_unik
  );

  if (!kendaraan && !alatBerat && !alatKerja && !ac) {
    throw new Error("Data tidak ditemukan");
  }

  if (kendaraan) {
    return kendaraan;
  } else if (alatBerat) {
    return alatBerat;
  } else if (alatKerja) {
    return alatKerja;
  } else if (ac) {
    return ac;
  }
};

export default { getServisBerkalaQrCode };
