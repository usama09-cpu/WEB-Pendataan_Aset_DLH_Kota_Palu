import express from "express";
import authMiddleware from "../middleware/auth-middleware.js";
import imgMiddleware from "../middleware/img-middleware.js";
import userController from "../controller/user-controller.js";
import kendaraanController from "../controller/kendaraan-controller.js";
import alatBeratController from "../controller/alatBerat-controller.js";
import alatKerjaController from "../controller/alatKerja-controller.js";
import acController from "../controller/ac-controller.js";
import tanamanController from "../controller/tanaman-controller.js";
import tanamanMasukController from "../controller/tanamanMasuk-controller.js";
import tanamanKeluarController from "../controller/tanamanKeluar-controller.js";
import servisController from "../controller/servis-controller.js";
import servisBerkalaKendaraanController from "../controller/servisBerkalaKendaraan-controller.js";
import servisBerkalaAlatBeratController from "../controller/servisBerkalaAlatBerat-controller.js";
import servisBerkalaAlatKerjaController from "../controller/servisBerkalaAlatKerja-controller.js";
import servisBerkalaAcController from "../controller/serrvisBerkalaAc-controller.js";
import servisBerkalaQrCodeController from "../controller/servisBerkalaQrCode-controller.js";
import dashboardController from "../controller/dashboard-controller.js";

const userRouter = new express.Router();

// ============== Route User ==============
userRouter.post("/api/login", userController.login);
userRouter.post("/api/register", userController.register);
userRouter.get("/api/user", authMiddleware, userController.getUsers);
userRouter.get("/api/user/:id", authMiddleware, userController.getUserById);
userRouter.put("/api/user/:id", authMiddleware, userController.updateUser);
userRouter.delete("/api/user/:id", authMiddleware, userController.deleteUser);
userRouter.post("/api/logout", authMiddleware, userController.logout);

// ============== Route Kendaraan ==============
userRouter.get(
  "/api/kendaraan",
  authMiddleware,
  kendaraanController.getKendaraan
);
userRouter.get(
  "/api/kendaraan/:no_polisi",
  authMiddleware,
  kendaraanController.getKendaraanByNoPol
);
userRouter.post(
  "/api/kendaraan",
  authMiddleware,
  imgMiddleware.single("gambar"),
  kendaraanController.inputKendaraan
);
userRouter.put(
  "/api/kendaraan/:id",
  authMiddleware,
  imgMiddleware.single("gambar"),
  kendaraanController.updateKendaraan
);
userRouter.delete(
  "/api/kendaraan/:id",
  authMiddleware,
  kendaraanController.deleteKendaraan
);

// ============== Route Alat Berat ==============
userRouter.get(
  "/api/alatberat",
  authMiddleware,
  alatBeratController.getAlatBerat
);
userRouter.get(
  "/api/alatberat/:no_resgistrasi",
  alatBeratController.getAlatBeratByNoResgistrasi
);
userRouter.post(
  "/api/alatberat",
  authMiddleware,
  imgMiddleware.single("gambar"),
  alatBeratController.inputAlatBerat
);
userRouter.put(
  "/api/alatberat/:id",
  authMiddleware,
  imgMiddleware.single("gambar"),
  alatBeratController.updateAlatBerat
);
userRouter.delete(
  "/api/alatberat/:id",
  authMiddleware,
  alatBeratController.deleteAlatBerat
);

// ============== Route Alat Kerja ==============
userRouter.get(
  "/api/alatkerja",
  authMiddleware,
  alatKerjaController.getAlatKerja
);
userRouter.get(
  "/api/alatkerja/:no_registrasi",
  authMiddleware,
  alatKerjaController.getAlatKerjaByNoRegistrasi
);
userRouter.post(
  "/api/alatkerja",
  authMiddleware,
  imgMiddleware.single("gambar"),
  alatKerjaController.inputAlatKerja
);
userRouter.put(
  "/api/alatkerja/:id",
  authMiddleware,
  imgMiddleware.single("gambar"),
  alatKerjaController.updateAlatKerja
);
userRouter.delete(
  "/api/alatkerja/:id",
  authMiddleware,
  alatKerjaController.deleteAlatKerja
);

// ============== Route AC ==============
userRouter.get("/api/ac", authMiddleware, acController.getAc);
userRouter.get(
  "/api/ac/:no_serial",
  authMiddleware,
  acController.getAcByNoRegistrasi
);
userRouter.post(
  "/api/ac",
  authMiddleware,
  imgMiddleware.single("gambar"),
  acController.inputAc
);
userRouter.put(
  "/api/ac/:id",
  authMiddleware,
  imgMiddleware.single("gambar"),
  acController.updateAc
);
userRouter.delete("/api/ac/:id", authMiddleware, acController.deleteAc);

// ============== Route Tanaman ==============
userRouter.get("/api/tanaman", authMiddleware, tanamanController.getTanaman);
userRouter.get(
  "/api/tanaman/:id",
  authMiddleware,
  tanamanController.getTanamanById
);
userRouter.post(
  "/api/tanaman",
  authMiddleware,
  imgMiddleware.single("gambar"),
  tanamanController.inputTanaman
);
userRouter.put(
  "/api/tanaman/:id",
  authMiddleware,
  imgMiddleware.single("gambar"),
  tanamanController.updateTanaman
);
userRouter.delete(
  "/api/tanaman/:id",
  authMiddleware,
  tanamanController.deleteTanaman
);

// ============== Route Tanaman Masuk ==============
userRouter.get(
  "/api/tanamanmasuk",
  authMiddleware,
  tanamanMasukController.getTanamanMasuk
);
userRouter.get(
  "/api/tanamanmasuk/:id",
  authMiddleware,
  tanamanMasukController.getTanamanMasukById
);
userRouter.get(
  "/api/tanamanmasuk/tanaman/:id_tanaman",
  authMiddleware,
  tanamanMasukController.getTanamanMasukByIdTanaman
);
userRouter.post(
  "/api/tanamanmasuk",
  authMiddleware,
  tanamanMasukController.inputTanamanMasuk
);
userRouter.put(
  "/api/tanamanmasuk/:id",
  authMiddleware,
  tanamanMasukController.updateTanamanMasuk
);
userRouter.delete(
  "/api/tanamanmasuk/:id",
  authMiddleware,
  tanamanMasukController.deleteTanamanMasuk
);

// ============= Route Tanaman Keluar ==============
userRouter.get(
  "/api/tanamankeluar",
  authMiddleware,
  tanamanKeluarController.getTanamanKeluar
);
userRouter.get(
  "/api/tanamankeluar/:id",
  authMiddleware,
  tanamanKeluarController.getTanamanKeluarById
);
userRouter.get(
  "/api/tanamankeluar/tanaman/:id_tanaman",
  authMiddleware,
  tanamanKeluarController.getTanamanKeluarByIdTanaman
);
userRouter.post(
  "/api/tanamankeluar",
  authMiddleware,
  tanamanKeluarController.inputTanamanKeluar
);
userRouter.put(
  "/api/tanamankeluar/:id",
  authMiddleware,
  tanamanKeluarController.updateTanamanKeluar
);
userRouter.delete(
  "/api/tanamankeluar/:id",
  authMiddleware,
  tanamanKeluarController.deleteTanamanKeluar
);

// ============== Route Servis ==============
userRouter.get("/api/servis", authMiddleware, servisController.getServis);
userRouter.get(
  "/api/servis/:id",
  authMiddleware,
  servisController.getServisById
);
userRouter.get(
  "/api/servis/nounik/:no_unik",
  authMiddleware,
  servisController.getServisByNoUnik
);

userRouter.post(
  "/api/servis",
  authMiddleware,
  imgMiddleware.fields([
    { name: "nota_pembayaran", maxCount: 1 },
    { name: "dokumentasi", maxCount: 1 },
  ]),
  servisController.inputServis
);

userRouter.put(
  "/api/servis/:id",
  authMiddleware,
  imgMiddleware.fields([
    { name: "nota_pembayaran", maxCount: 1 },
    { name: "dokumentasi", maxCount: 1 },
  ]),
  servisController.updateServis
);

userRouter.delete(
  "/api/servis/:id",
  authMiddleware,
  servisController.deleteServis
);

// ============== Route Servis Berkala Kendaraan ==============
userRouter.get(
  "/api/servisberkalakendaraan",
  authMiddleware,
  servisBerkalaKendaraanController.getServisBerkalaKendaraan
);

userRouter.get(
  "/api/servisberkalakendaraan/:no_polisi",
  authMiddleware,
  servisBerkalaKendaraanController.getServisBerkalaKendaraanByNoPol
);

userRouter.put(
  "/api/servisberkalakendaraan/:no_polisi",
  authMiddleware,
  servisBerkalaKendaraanController.updateServisBerkalaKendaraan
);

// ============== Route Servis Berkala Alat Berat ==============
userRouter.get(
  "/api/servisberkalalatberat",
  authMiddleware,
  servisBerkalaAlatBeratController.getServisBerkalaAlatBerat
);

userRouter.get(
  "/api/servisberkalalatberat/:no_resgistrasi",
  authMiddleware,
  servisBerkalaAlatBeratController.getServisBerkalaAlatBeratByNoRegistrasi
);

userRouter.put(
  "/api/servisberkalalatberat/:no_resgistrasi",
  authMiddleware,
  servisBerkalaAlatBeratController.updateServisBerkalaAlatBerat
);

// ============== Route Servis Berkala Alat Kerja ==============
userRouter.get(
  "/api/servisberkalalatkerja",
  authMiddleware,
  servisBerkalaAlatKerjaController.getServisBerkalaAlatKerja
);

userRouter.get(
  "/api/servisberkalalatkerja/:no_registrasi",
  authMiddleware,
  servisBerkalaAlatKerjaController.getServisBerkalaAlatKerjaByNoRegistrasi
);

userRouter.put(
  "/api/servisberkalalatkerja/:no_registrasi",
  authMiddleware,
  servisBerkalaAlatKerjaController.updateServisBerkalaAlatKerja
);

// ============== Route Servis Berkala AC ==============
userRouter.get(
  "/api/servisberkalaac",
  authMiddleware,
  servisBerkalaAcController.getServisBerkalaAc
);

userRouter.get(
  "/api/servisberkalaac/:no_registrasi",
  authMiddleware,
  servisBerkalaAcController.getServisBerkalaAcByNoRegistrasi
);

userRouter.put(
  "/api/servisberkalaac/:no_registrasi",
  authMiddleware,
  servisBerkalaAcController.updateServisBerkalaAc
);

// ============= Route Servis Berkala QR CODE ==============
userRouter.get(
  "/api/servisberkalaqrcode/:no_unik",
  servisBerkalaQrCodeController.getServisBerkalaQrCode
);

// ============= Dashboard ==============
userRouter.get(
  "/api/dashboard",
  authMiddleware,
  dashboardController.getDashboard
);

export { userRouter };
