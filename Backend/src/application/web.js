import express from "express";
import { publicRouter } from "../route/public-api.js";
import { userRouter } from "../route/api.js";
import dotEnv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotEnv.config();

const web = express();

web.use(
  cors({
    origin: "http://localhost:5173", // HARUS alamat spesifik, bukan '*'
    credentials: true,
  })
);

web.use(express.json());
web.use(cookieParser());

// web.use(publicRouter);
web.use(userRouter);

web.use("/static", express.static(path.join(__dirname, "../../public")));

export default web;
