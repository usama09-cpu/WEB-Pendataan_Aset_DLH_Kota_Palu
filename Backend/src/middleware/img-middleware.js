// src/middleware/upload.js
import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // maksimal 5MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/heic",
      "image/heif",
    ];
    if (allowedTypes.includes(file.mimetype)) {
      // Buat nama file dari originalname (tanpa spasi)
      const sanitizedOriginalName = file.originalname.replace(/\s+/g, "_");
      file.filename = sanitizedOriginalName; // tambahkan properti filename secara manual
      cb(null, true);
    } else {
      cb(
        new Error("Hanya format JPG, JPEG, HEIC, dan PNG yang diizinkan"),
        false
      );
    }
  },
});

export default upload;
