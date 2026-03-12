import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { EyeCloseIcon, EyeIcon, QRIcon } from "../../icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Button from "../ui/button/Button";
import { useAuthStore } from "../../stores/authStore";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Nama pengguna dan kata sandi wajib diisi.");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post(
        "/api/login",
        { username, password },
        { withCredentials: true }
      );

      const role = response.data.role;
      const user = {
        id: response.data.id_user,
        name: response.data.username,
      };

      login({ role, user });

      navigate("/home");
    } catch (err) {
      if (err instanceof Error) {
        console.error("Login gagal:", err.message);
      } else {
        console.error("Login gagal:", String(err));
      }
      alert("Login gagal. Silakan cek kembali username dan kata sandi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-10 text-center relative">
            {/* Logo Kota Palu & DLH */}
            <div className="flex items-center justify-center gap-4 mb-3">
              <img
                src="/images/logo/logo-kota-palu.png"
                alt="Logo Kota Palu"
                className="h-12 w-auto object-contain"
              />
              <img
                src="/images/logo/klhk.png"
                alt="Logo DLH"
                className="h-14 w-auto object-contain"
              />
            </div>

            {/* Garis aksen */}
            <div
              className="mx-auto mb-4 w-24 h-1 rounded-full
               bg-gradient-to-r from-green-500 via-green-600 to-green-700"
            />

            {/* Judul utama */}
            <h1
              className="text-3xl sm:text-4xl font-extrabold tracking-wide
               bg-gradient-to-r from-green-700 via-green-600 to-green-800
               bg-clip-text text-transparent dark:from-green-400 dark:to-green-300"
            >
              SISTEM INFORMASI
            </h1>

            {/* Sub judul */}
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
              MANAJEMEN ASET
            </h2>

            {/* Keterangan instansi */}
            <p className="mt-2 text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Dinas Lingkungan Hidup Kota Palu
            </p>
          </div>

          <div className="relative mb-10 flex flex-col items-center text-center gap-3">
            {/* Daun kelor kiri atas */}
            <img
              src="/images/logo/kelor.png"
              alt="Daun Kelor"
              className="absolute -top-8 -left-8 w-20 opacity-20 rotate-90 pointer-events-none"
            />

            {/* Daun kelor kanan bawah */}
            <img
              src="/images/logo/kelor.png"
              alt="Daun Kelor"
              className="absolute -bottom-10 -right-10 w-24 opacity-20 -rotate-90 pointer-events-none"
            />

            {/* Tombol QR */}
            <Link
              to="/scan"
              className="group flex flex-col items-center gap-2 rounded-xl
               border border-dashed border-green-500/60
               p-4 hover:bg-green-50 dark:hover:bg-gray-800
               transition-all duration-300"
            >
              <QRIcon
                className="w-36 h-36 text-green-700 dark:text-green-400
                 group-hover:scale-105 transition-transform duration-300"
              />

              <span className="text-xs font-semibold text-green-700 dark:text-green-400">
                Klik untuk Scan QR
              </span>
            </Link>
          </div>

          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Masuk
            </h1>
            <p className="text-sm text-gray-500 dark:text-white">
              Masukkan nama pengguna dan sandi anda!
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <Label className="dark:text-white">
                  Nama <span className="text-error-500">*</span>
                </Label>
                <Input
                  placeholder="Masukkan nama anda..."
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                />
              </div>

              <div>
                <Label className="dark:text-white">
                  Kata Sandi <span className="text-error-500">*</span>
                </Label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan kata sandi anda..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                  <span
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute z-10 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                  >
                    {showPassword ? (
                      <EyeIcon className="fill-gray-500 dark:fill-white size-5" />
                    ) : (
                      <EyeCloseIcon className="fill-gray-500 dark:fill-white size-5" />
                    )}
                  </span>
                </div>
              </div>

              <div>
                <Button
                  className="w-full"
                  size="sm"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Memproses..." : "Masuk"}
                </Button>
              </div>
            </div>
          </form>
          {/* Footer */}
          <footer
            className="
    mt-10 sm:mt-14
    w-full text-center
    text-xs sm:text-sm
    text-gray-600 dark:text-gray-400
  "
          >
            {/* Garis pemisah */}
            <div
              className="
      mx-auto mb-3 h-px w-32 sm:w-48
      bg-gradient-to-r from-transparent via-gray-400/60 to-transparent
    "
            />

            {/* Teks footer */}
            <p className="leading-relaxed tracking-wide">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                Dinas Lingkungan Hidup Kota Palu
              </span>
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> — </span>
              Sistem Informasi Manajemen Aset
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
