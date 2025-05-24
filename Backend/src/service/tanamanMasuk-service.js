import tanamanMasukRepositori from "../repositori/tanamanMasuk-repositori.js";
import tanamanRepositori from "../repositori/tanaman-repositori.js";

const getTanamanMasuk = async () => {
  const tanamanMasuk = await tanamanMasukRepositori.getTanamanMasuk();
  if (tanamanMasuk.length === 0) {
    throw new Error("Data tidak ditemukan");
  }
  return tanamanMasuk;
};
const getTanamanMasukByIdTanaman = async (id) => {
  const tanamanMasuk = await tanamanMasukRepositori.getTanamanMasukByIdTanaman(
    id
  );
  if (tanamanMasuk.length === 0) {
    throw new Error("Data tidak ditemukan");
  }
  return tanamanMasuk;
};
const getTanamanMasukById = async (id) => {
  const tanamanMasuk = await tanamanMasukRepositori.getTanamanMasukById(id);
  if (!tanamanMasuk) {
    throw new Error("Data tidak ditemukan");
  }
  return tanamanMasuk;
};

const inputTanamanMasuk = async (data) => {
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

  tanaman.stok += data.jumlah;

  await tanamanRepositori.updateTanaman(
    data.id_tanaman,
    tanaman.gambar,
    tanaman.nama,
    tanaman.jenis,
    tanaman.stok,
    tanaman.keterangan
  );

  return await tanamanMasukRepositori.createTanamanMasuk(
    data.id_tanaman,
    data.tanggal,
    data.jumlah,
    data.keterangan
  );
};

const updateTanamanMasuk = async (id, data) => {
  if (!data.id_tanaman || !data.tanggal || !data.jumlah || !data.keterangan) {
    throw new Error("Data tidak lengkap");
  }
  const tanamanMasuk = await tanamanMasukRepositori.getTanamanMasukById(id);
  if (!tanamanMasuk) {
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
  if (data.jumlah > tanamanMasuk.jumlah) {
    const selisih = data.jumlah - tanamanMasuk.jumlah;
    tanaman.stok += selisih;
  } else if (data.jumlah < tanamanMasuk.jumlah) {
    const selisih = tanamanMasuk.jumlah - data.jumlah;
    if (tanaman.stok < selisih) {
      throw new Error("Stok tanaman tidak mencukupi untuk penambahan");
    }
    tanaman.stok -= selisih;
  }

  await tanamanRepositori.updateTanaman(
    data.id_tanaman,
    tanaman.gambar,
    tanaman.nama,
    tanaman.jenis,
    tanaman.stok,
    tanaman.keterangan
  );

  return await tanamanMasukRepositori.updateTanamanMasuk(
    id,
    data.id_tanaman,
    data.tanggal,
    data.jumlah,
    data.keterangan
  );
};

const deleteTanamanMasuk = async (id) => {
  const tanamanMasuk = await tanamanMasukRepositori.getTanamanMasukById(id);
  if (!tanamanMasuk) {
    throw new Error("Data tidak ditemukan");
  }

  const tanaman = await tanamanRepositori.getTanamanById(
    tanamanMasuk.id_tanaman
  );
  if (!tanaman) {
    throw new Error("Data tanaman tidak ditemukan");
  }

  tanaman.stok -= tanamanMasuk.jumlah;

  if (tanaman.stok < 0) {
    throw new Error("Stok tanaman tidak mencukupi");
  }

  await tanamanRepositori.updateTanaman(
    tanamanMasuk.id_tanaman,
    tanaman.gambar,
    tanaman.nama,
    tanaman.jenis,
    tanaman.stok,
    tanaman.keterangan
  );

  console.log(tanaman.stok);

  return await tanamanMasukRepositori.deleteTanamanMasuk(id);
};

export default {
  getTanamanMasuk,
  getTanamanMasukById,
  getTanamanMasukByIdTanaman,
  inputTanamanMasuk,
  updateTanamanMasuk,
  deleteTanamanMasuk,
};
