import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  // Ambil token dari header Authorization
  const tokenFromHeader =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  // Ambil token dari cookies
  const tokenFromCookie = req.cookies.token;

  // Cek apakah token ada di header dan cookies
  if (!tokenFromHeader || !tokenFromCookie) {
    return res
      .status(401)
      .json({ message: "Akses ditolak. Token tidak ditemukan." });
  }

  // Cek apakah token dari header dan cookies tidak sama
  if (tokenFromHeader !== tokenFromCookie) {
    return res
      .status(401)
      .json({ message: "Akses ditolak. Token tidak valid." });
  }

  try {
    // Verifikasi token dari header
    const decoded = jwt.verify(tokenFromHeader, process.env.TOKEN);
    req.user = decoded; // Simpan data user di req.user
    next();
  } catch (err) {
    return res
      .status(403)
      .json({ message: "Token tidak valid atau sudah kadaluarsa." });
  }
};

export default authMiddleware;
