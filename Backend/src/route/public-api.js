import express from "express";
import userController from "../controller/user-controller.js";
import kendaraanController from "../controller/kendaraan-controller.js";
import alatBeratController from "../controller/alatBerat-controller.js";
import alatKerjaController from "../controller/alatKerja-controller.js";
import acController from "../controller/ac-controller.js";
import tanamanController from "../controller/tanaman-controller.js";
import imgMiddleware from "../middleware/img-middleware.js";
import tanamanMasukController from "../controller/tanamanMasuk-controller.js";
import tanamanKeluarController from "../controller/tanamanKeluar-controller.js";
import servisController from "../controller/servis-controller.js";

const publicRouter = new express.Router();
publicRouter.post("/public-api/login", userController.login);
publicRouter.post("/public-api/register", userController.register);

// ============== Route Kendaraan ==============
publicRouter.get("/public-api/kendaraan", kendaraanController.getKendaraan);
publicRouter.get(
  "/public-api/kendaraan/:no_polisi",
  kendaraanController.getKendaraanByNoPol
);
publicRouter.post(
  "/public-api/kendaraan",
  imgMiddleware.single("gambar"),
  kendaraanController.inputKendaraan
);
publicRouter.put(
  "/public-api/kendaraan/:id",
  imgMiddleware.single("gambar"),
  kendaraanController.updateKendaraan
);
publicRouter.delete(
  "/public-api/kendaraan/:id",
  kendaraanController.deleteKendaraan
);
// ============== Route Alat Berat ==============
publicRouter.get("/public-api/alatberat", alatBeratController.getAlatBerat);
publicRouter.get(
  "/public-api/alatberat/:no_resgistrasi",
  alatBeratController.getAlatBeratByNoResgistrasi
);
publicRouter.post(
  "/public-api/alatberat",
  imgMiddleware.single("gambar"),
  alatBeratController.inputAlatBerat
);
publicRouter.put(
  "/public-api/alatberat/:id",
  imgMiddleware.single("gambar"),
  alatBeratController.updateAlatBerat
);
publicRouter.delete(
  "/public-api/alatberat/:id",
  alatBeratController.deleteAlatBerat
);

// ============== Route Alat Kerja ==============
publicRouter.get("/public-api/alatkerja", alatKerjaController.getAlatKerja);
publicRouter.get(
  "/public-api/alatkerja/:no_registrasi",
  alatKerjaController.getAlatKerjaByNoRegistrasi
);
publicRouter.post(
  "/public-api/alatkerja",
  imgMiddleware.single("gambar"),
  alatKerjaController.inputAlatKerja
);
publicRouter.put(
  "/public-api/alatkerja/:id",
  imgMiddleware.single("gambar"),
  alatKerjaController.updateAlatKerja
);
publicRouter.delete(
  "/public-api/alatkerja/:id",
  alatKerjaController.deleteAlatKerja
);

// ============== Route AC ==============
publicRouter.get("/public-api/ac", acController.getAc);
publicRouter.get("/public-api/ac/:no_serial", acController.getAcByNoRegistrasi);
publicRouter.post(
  "/public-api/ac",
  imgMiddleware.single("gambar"),
  acController.inputAc
);
publicRouter.put(
  "/public-api/ac/:id",
  imgMiddleware.single("gambar"),
  acController.updateAc
);
publicRouter.delete("/public-api/ac/:id", acController.deleteAc);

// ============== Route Tanaman ==============
publicRouter.get("/public-api/tanaman", tanamanController.getTanaman);
publicRouter.get("/public-api/tanaman/:id", tanamanController.getTanamanById);
publicRouter.post(
  "/public-api/tanaman",
  imgMiddleware.single("gambar"),
  tanamanController.inputTanaman
);
publicRouter.put(
  "/public-api/tanaman/:id",
  imgMiddleware.single("gambar"),
  tanamanController.updateTanaman
);
publicRouter.delete("/public-api/tanaman/:id", tanamanController.deleteTanaman);

// ============== Route Tanaman Masuk ==============
publicRouter.get(
  "/public-api/tanamanmasuk",
  tanamanMasukController.getTanamanMasuk
);
publicRouter.get(
  "/public-api/tanamanmasuk/:id",
  tanamanMasukController.getTanamanMasukById
);
publicRouter.get(
  "/public-api/tanamanmasuk/tanaman/:id_tanaman",
  tanamanMasukController.getTanamanMasukByIdTanaman
);
publicRouter.post(
  "/public-api/tanamanmasuk",
  tanamanMasukController.inputTanamanMasuk
);
publicRouter.put(
  "/public-api/tanamanmasuk/:id",
  tanamanMasukController.updateTanamanMasuk
);
publicRouter.delete(
  "/public-api/tanamanmasuk/:id",
  tanamanMasukController.deleteTanamanMasuk
);

// ============= Route Tanaman Keluar ==============
publicRouter.get(
  "/public-api/tanamankeluar",
  tanamanKeluarController.getTanamanKeluar
);
publicRouter.get(
  "/public-api/tanamankeluar/:id",
  tanamanKeluarController.getTanamanKeluarById
);
publicRouter.get(
  "/public-api/tanamankeluar/tanaman/:id_tanaman",
  tanamanKeluarController.getTanamanKeluarByIdTanaman
);
publicRouter.post(
  "/public-api/tanamankeluar",
  tanamanKeluarController.inputTanamanKeluar
);
publicRouter.put(
  "/public-api/tanamankeluar/:id",
  tanamanKeluarController.updateTanamanKeluar
);
publicRouter.delete(
  "/public-api/tanamankeluar/:id",
  tanamanKeluarController.deleteTanamanKeluar
);

// ============== Route Servis ==============
publicRouter.get("/public-api/servis", servisController.getServis);
publicRouter.get("/public-api/servis/:id", servisController.getServisById);
publicRouter.get(
  "/public-api/servis/nounik/:no_unik",
  servisController.getServisByNoUnik
);

publicRouter.post(
  "/public-api/servis",
  imgMiddleware.fields([
    { name: "nota_pembayaran", maxCount: 1 },
    { name: "dokumentasi", maxCount: 1 },
  ]),
  servisController.inputServis
);

publicRouter.put(
  "/public-api/servis/:id",
  imgMiddleware.fields([
    { name: "nota_pembayaran", maxCount: 1 },
    { name: "dokumentasi", maxCount: 1 },
  ]),
  servisController.updateServis
);

publicRouter.delete("/public-api/servis/:id", servisController.deleteServis);

export { publicRouter };
