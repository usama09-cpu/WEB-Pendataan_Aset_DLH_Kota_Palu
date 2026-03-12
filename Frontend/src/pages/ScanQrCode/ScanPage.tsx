import { Link } from "react-router-dom";
import QrScanner from "../../components/scan/qrScanner";
import ThemeTogglerTwo from "../../components/common/ThemeTogglerTwo";

const ScanPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-blue-300 to-blue-200 dark:from-gray-800 dark:to-gray-900 flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-12">
      {/* Tombol kembali */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-50 group
          flex items-center gap-3
          px-3 sm:px-4 md:px-5 py-2.5
          rounded-full
          bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500
          text-white
          shadow-lg shadow-green-500/30
          hover:shadow-xl hover:shadow-green-500/50
          transition-all duration-300
          hover:-translate-y-1"
        aria-label="Kembali ke halaman utama"
      >
        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20 backdrop-blur">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-white"
          >
            <path d="M10.828 12l4.95-4.95-1.414-1.414L8 12l6.364 6.364 1.414-1.414z" />
          </svg>
        </span>

        {/* Text hanya desktop */}
        <span className="hidden md:inline text-sm font-semibold tracking-wide">
          Kembali
        </span>
      </Link>

      {/* Background watermark */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center pointer-events-none"
        style={{
          backgroundImage: "url('/images/logo/tuguNol.png')",
          backgroundSize: "800px",
          opacity: 0.1,
        }}
      />

      {/* Ornamen daun kelor */}
      <img
        src="/images/logo/kelor.png"
        className="absolute top-0 left-0 w-24 md:w-64 opacity-40 rotate-90 pointer-events-none"
      />
      <img
        src="/images/logo/kelor.png"
        className="absolute top-0 right-0 w-24 md:w-64 opacity-40 rotate-180 pointer-events-none"
      />
      <img
        src="/images/logo/kelor.png"
        className="absolute bottom-0 left-0 w-24 md:w-64 opacity-40 pointer-events-none"
      />
      <img
        src="/images/logo/kelor.png"
        className="absolute bottom-0 right-0 w-24 md:w-64 opacity-40 -rotate-90 pointer-events-none"
      />

      {/* ================= MAIN CONTENT ================= */}
      <main className="relative flex-1 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center w-full max-w-6xl mx-auto py-10">
          {/* Kiri */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-4 mb-3">
              <img src="/images/logo/logo-kota-palu.png" className="h-12" />
              <img src="/images/logo/klhk.png" className="h-14" />
            </div>

            <div className="mb-4 h-1 w-24 rounded-full bg-gradient-to-r from-green-500 via-green-600 to-green-700 mx-auto md:mx-0" />

            <h1
              className="text-4xl sm:text-5xl font-extrabold tracking-wide
               bg-gradient-to-r from-green-700 via-green-600 to-green-800
               bg-clip-text text-transparent dark:from-green-400 dark:to-green-300"
            >
              SISTEM INFORMASI
            </h1>
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-wide
               bg-gradient-to-r from-green-700 via-green-600 to-green-800
               bg-clip-text text-transparent dark:from-green-400 dark:to-green-300"
            >
              MANAJEMEN ASET
            </h2>
            <h3 className="text-1xl sm:text-2xl font-bold text-gray-800 dark:text-white">
              Dinas Lingkungan Hidup Kota Palu
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-4 text-1md sm:text-1md leading-relaxed max-w-md mx-auto md:mx-0">
              Unggah gambar QR atau arahkan kamera ke QR untuk menampilkan
              informasi dan riwayat servis aset.
            </p>
          </div>

          {/* Kanan: Card Scanner */}
          <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto rounded-xl shadow-2xl p-6">
            <QrScanner />
          </div>
        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="mt-auto w-full text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 pb-6">
        <div className="mx-auto mb-3 h-px w-32 sm:w-48 bg-gradient-to-r from-transparent via-gray-400/60 to-transparent" />
        <p className="leading-relaxed tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            Dinas Lingkungan Hidup Kota Palu
          </span>
          <span className="hidden sm:inline"> — </span>
          <br className="sm:hidden" />
          Sistem Informasi Manajemen Aset
        </p>
      </footer>

      {/* Theme toggler */}
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeTogglerTwo />
      </div>
    </div>
  );
};

export default ScanPage;
