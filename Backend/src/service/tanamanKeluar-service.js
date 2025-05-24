import tanamanKeluarRepositori from "../repositori/tanamanKeluar-repositori.js";
import tanamanRepositori from "../repositori/tanaman-repositori.js";

const getTanamanKeluar = async () => {
  const tanamanKeluar = await tanamanKeluarRepositori.getTanamanKeluar();
  if (tanamanKeluar.length === 0) {
    throw new Error("Data tidak ditemukan");
  }
  return tanamanKeluar;
};

const getTanamanKeluarById = async (id) => {
  const tanamanKeluar = await tanamanKeluarRepositori.getTanamanKeluarById(id);
  if (!tanamanKeluar) {
    throw new Error("Data tidak ditemukan");
  }
  return tanamanKeluar;
};

const getTanamanKeluarByIdTanaman = async (id) => {
  const tanamanKeluar =
    await tanamanKeluarRepositori.getTanamanKeluarByIdTanaman(id);
  if (tanamanKeluar.length === 0) {
    throw new Error("Data tidak ditemukan");
  }
  return tanamanKeluar;
};

const inputTanamanKeluar = async (data) => {
  if (!data.id_tanaman || !data.tanggal || !data.jumlah || !data.keterangan) {
    throw new Error("Data tidak lengkap");
  }

  const tanaman = await tanamanRepositori.getTanamanById(data.id_tanaman);
  if (!tanaman) {
    throw new Error("Data tanaman tidak ditemukan");
  }

  if (typeof data.jumlah !== "number" || data.jumlah <= 0) {
    throw new Error("Jumlah tanaman harus berupa angka positif");
  }

  if (tanaman.stok < data.jumlah) {
    throw new Error("Stok tanaman tidak mencukupi");
  }

  tanaman.stok -= data.jumlah;
  console.log(tanaman.stok);
  console.log(data.id_tanaman);

  await tanamanRepositori.updateTanaman(
    data.id_tanaman,
    tanaman.gambar,
    tanaman.nama,
    tanaman.jenis,
    tanaman.stok,
    tanaman.keterangan
  );

  return await tanamanKeluarRepositori.createTanamanKeluar(
    data.id_tanaman,
    data.tanggal,
    data.jumlah,
    data.keterangan
  );
};

const updateTanamanKeluar = async (id, data) => {
  if (!data.id_tanaman || !data.tanggal || !data.jumlah || !data.keterangan) {
    throw new Error("Data tidak lengkap");
  }
  const tanamanKeluar = await tanamanKeluarRepositori.getTanamanKeluarById(id);
  if (!tanamanKeluar) {
    throw new Error("Data tidak ditemukan");
  }

  const tanaman = await tanamanRepositori.getTanamanById(data.id_tanaman);
  if (!tanaman) {
    throw new Error("Data tanaman tidak ditemukan");
  }

  if (typeof data.jumlah !== "number" || data.jumlah <= 0) {
    throw new Error("Jumlah tanaman harus berupa angka positif");
  }

  // Penyesuaian stok berdasarkan perubahan jumlah
  if (data.jumlah > tanamanKeluar.jumlah) {
    const selisih = data.jumlah - tanamanKeluar.jumlah;
    if (tanaman.stok < selisih) {
      throw new Error("Stok tanaman tidak mencukupi untuk pengurangan");
    }
    tanaman.stok -= selisih;
  } else if (data.jumlah < tanamanKeluar.jumlah) {
    const selisih = tanamanKeluar.jumlah - data.jumlah;
    tanaman.stok += selisih;
  }

  await tanamanRepositori.updateTanaman(
    data.id_tanaman,
    tanaman.gambar,
    tanaman.nama,
    tanaman.jenis,
    tanaman.stok,
    tanaman.keterangan
  );

  return await tanamanKeluarRepositori.updateTanamanKeluar(
    id,
    data.id_tanaman,
    data.tanggal,
    data.jumlah,
    data.keterangan
  );
};

const deleteTanamanKeluar = async (id) => {
  const tanamanKeluar = await tanamanKeluarRepositori.getTanamanKeluarById(id);
  if (!tanamanKeluar) {
    throw new Error("Data tidak ditemukan");
  }

  const tanaman = await tanamanRepositori.getTanamanById(
    tanamanKeluar.id_tanaman
  );
  if (!tanaman) {
    throw new Error("Data tanaman tidak ditemukan");
  }

  tanaman.stok += tanamanKeluar.jumlah;

  await tanamanRepositori.updateTanaman(
    tanamanKeluar.id_tanaman,
    tanaman.gambar,
    tanaman.nama,
    tanaman.jenis,
    tanaman.stok,
    tanaman.keterangan
  );

  return await tanamanKeluarRepositori.deleteTanamanKeluar(id);
};

export default {
  getTanamanKeluar,
  getTanamanKeluarById,
  getTanamanKeluarByIdTanaman,
  inputTanamanKeluar,
  updateTanamanKeluar,
  deleteTanamanKeluar,
};
