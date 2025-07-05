import dashboardRepositori from "../repositori/dashboard-repositori.js";

const getDashboard = async () => {
  const countR2 = (await dashboardRepositori.getCountR2()) ?? 0;
  const countR3 = (await dashboardRepositori.getCountR3()) ?? 0;
  const countR4 = (await dashboardRepositori.getCountR4()) ?? 0;
  const countR6 = (await dashboardRepositori.getCountR6()) ?? 0;
  const countAlatBerat = (await dashboardRepositori.getCountAlatBerat()) ?? 0;
  const countAlatKerja = (await dashboardRepositori.getCountAlatKerja()) ?? 0;
  const countAc = (await dashboardRepositori.getCountAc()) ?? 0;
  const countTanaman = (await dashboardRepositori.getCountTanaman()) ?? 0;

  const data = {
    R2: countR2.R2,
    R3: countR3.R3,
    R4: countR4.R4,
    R6: countR6.R6,
    AlatBerat: countAlatBerat.alatberat,
    AlatKerja: countAlatKerja.alatkerja,
    Ac: countAc.ac,
    Tanaman: countTanaman.tanaman,
  };

  return data;
};

export default {
  getDashboard,
};
