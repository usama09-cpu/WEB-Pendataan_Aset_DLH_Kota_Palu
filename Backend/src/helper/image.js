import fs from "fs";
import path from "path";
import sharp from "sharp";

// --- Fungsi Upload Gambar dengan Auto-Conversion dan Rename ---
const uploadImage = async (
  folder,
  filename,
  buffer,
  format = "jpeg",
  width = 800
) => {
  const folderPath = path.join("uploads", folder);

  // Pastikan folder ada
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  // Mengganti nama file dengan format unik (misalnya: waktu + ekstensi file)
  const uniqueName = `${Date.now()}-${filename}`;
  const filePath = path.join(folderPath, uniqueName);

  // Konversi gambar menggunakan sharp sebelum disimpan
  await sharp(buffer)
    .resize(width) // Mengubah ukuran gambar
    .toFormat(format, { quality: 80 }) // Mengubah format ke JPEG dengan kualitas 80
    .toFile(filePath); // Menyimpan gambar yang sudah diproses

  return uniqueName;
};

// --- Fungsi Hapus Gambar ---
const deleteImage = async (folder, filename) => {
  const filePath = path.join("uploads", folder, filename);

  if (fs.existsSync(filePath)) {
    await fs.promises.unlink(filePath); // Hapus file gambar lama
  } else {
    throw new Error("Gambar lama tidak ditemukan");
  }

  return "Gambar berhasil dihapus";
};

export default { uploadImage, deleteImage };
