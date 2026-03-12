import { useRef, useState, useEffect } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";
import { Result } from "@zxing/library";
import { ScanData } from "../../types/scanQr";
import api from "../../services/api";

type ZoomCapability = {
  zoom?: {
    min: number;
    max: number;
    step?: number;
  };
};

const QrScanner = () => {
  const codeReaderRef = useRef<BrowserMultiFormatReader | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dataSerber, setDataSerber] = useState<ScanData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [scanning, setScanning] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const videoTrackRef = useRef<MediaStreamTrack | null>(null);

  // Zoom state
  const [zoom, setZoom] = useState(1);
  const [zoomRange, setZoomRange] = useState({ min: 1, max: 1 });

  useEffect(() => {
    codeReaderRef.current = new BrowserMultiFormatReader();
    return () => {
      stopCamera();
    };
  }, []);

  const stopCamera = () => {
    setScanning(false);
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
      videoTrackRef.current = null;
    }
  };

  const startCameraScan = async () => {
    setScanning(true);
    setError(null);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" } },
      });

      streamRef.current = stream;
      const videoTrack = stream.getVideoTracks()[0];
      videoTrackRef.current = videoTrack;

      // ===== SAFE ZOOM CAPABILITY DETECTION =====
      const capabilities =
        videoTrack.getCapabilities?.() as MediaTrackCapabilities &
          ZoomCapability;

      if (capabilities.zoom) {
        setZoomRange({
          min: capabilities.zoom.min,
          max: capabilities.zoom.max,
        });
        setZoom(capabilities.zoom.min);
      }

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }

      await codeReaderRef.current?.decodeFromVideoDevice(
        undefined,
        videoRef.current!,
        (res: Result | undefined) => {
          if (res) {
            setResult(res.getText());
            stopCamera();
          }
        }
      );
    } catch (err) {
      console.error(err);
      setError("Gagal mengakses kamera.");
      stopCamera();
    }
  };

  // ===== ZOOM HANDLER (TYPE SAFE) =====
  const handleZoomChange = async (value: number) => {
    setZoom(value);

    const track = videoTrackRef.current;
    if (!track) return;

    try {
      await track.applyConstraints({
        advanced: [{ zoom: value } as unknown as MediaTrackConstraintSet],
      });
    } catch (err) {
      console.warn("Zoom tidak didukung pada perangkat ini", err);
    }
  };

  useEffect(() => {
    if (!result) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      setDataSerber(null);

      try {
        const res = await api.get(`/api/servisberkalaqrcode/${result}`);
        if (!res.data?.data) throw new Error();
        setDataSerber(res.data.data);
      } catch {
        setError("❌ Gagal mengambil data servis.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [result]);

  const resetScanner = () => {
    stopCamera();
    setResult(null);
    setError(null);
    setDataSerber(null);
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      const img = new Image();
      img.onload = async () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.drawImage(img, 0, 0);
        try {
          const res = await codeReaderRef.current?.decodeFromCanvas(canvas);
          if (res) setResult(res.getText());
          else setError("QR Code tidak ditemukan.");
        } catch {
          setError("Gagal membaca QR Code.");
        }
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const renderTanggal = (tgl?: string) =>
    tgl ? new Date(tgl).toLocaleDateString("id-ID") : "-";

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 space-y-6 w-full">
      {!result && (
        <>
          <h1 className="text-2xl sm:text-3xl lg:text-2xl font-bold text-gray-800 dark:text-white">
            SCAN QR CODE
          </h1>

          <button
            onClick={startCameraScan}
            className="w-full sm:max-w-sm flex items-center justify-center gap-3 
                    bg-gradient-to-r from-brand-500 to-brand-900 
                    text-white font-semibold 
                    px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-lg 
                    hover:scale-105 hover:shadow-2xl hover:brightness-110 
                    transition-all duration-300 text-base sm:text-lg"
          >
            <span className="text-xl sm:text-2xl">📷</span> Scan dari Kamera
          </button>

          {scanning && (
            <div className="w-full sm:max-w-sm space-y-3">
              <video
                ref={videoRef}
                className="w-full sm:max-w-sm rounded-2xl shadow-xl border-2 
                      border-indigo-300 dark:border-gray-600"
                autoPlay
                muted
                playsInline
              />
              {zoomRange.max > zoomRange.min && (
                <div className="flex items-center gap-3">
                  <span className="text-sm">🔍</span>
                  <input
                    type="range"
                    min={zoomRange.min}
                    max={zoomRange.max}
                    step="0.1"
                    value={zoom}
                    onChange={(e) => handleZoomChange(Number(e.target.value))}
                    className="w-full accent-green-600"
                  />
                </div>
              )}
            </div>
          )}

          <label
            className="w-full sm:max-w-sm flex items-center justify-center gap-3 
                    bg-gradient-to-r from-green-900 to-green-500 
                    text-white font-semibold 
                    px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-lg cursor-pointer 
                    hover:scale-105 hover:shadow-2xl hover:brightness-110 
                    transition-all duration-300 text-base sm:text-lg"
          >
            <span className="text-xl sm:text-2xl">📁</span> Upload Gambar QR
            Code
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              hidden
            />
          </label>
        </>
      )}

      {result && (
        <div className="text-center space-y-6 w-full">
          <p
            className="text-green-800 dark:text-green-500 font-bold 
                    text-xl sm:text-2xl tracking-wide"
          >
            Nomor Aset:{" "}
            <span className="text-gray-900 dark:text-white break-words">
              {result}
            </span>
          </p>

          {loading && (
            <p className="text-white animate-pulse font-medium text-base sm:text-lg">
              ⏳ Memuat data servis...
            </p>
          )}
          {error && (
            <p className="text-red-500 font-semibold text-sm sm:text-base">
              {error}
            </p>
          )}

          {!loading && !error && dataSerber && (
            <div
              className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg 
                      w-full max-w-md text-sm sm:text-lg 
                      text-gray-800 dark:text-gray-200 
                      space-y-3 border border-gray-200 dark:border-gray-700 
                      mx-auto"
            >
              {dataSerber.no_polisi && (
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 px-2 sm:px-10">
                  <span className="font-semibold">No Polisi:</span>
                  <span>{dataSerber.no_polisi}</span>
                </div>
              )}
              {dataSerber.no_registrasi && (
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 px-2 sm:px-10">
                  <span className="font-semibold">No Registrasi:</span>
                  <span>{dataSerber.no_registrasi}</span>
                </div>
              )}
              {dataSerber.oli_mesin && (
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 px-2 sm:px-10">
                  <span className="font-semibold">Oli Mesin:</span>
                  <span>{renderTanggal(dataSerber.oli_mesin)}</span>
                </div>
              )}
              {dataSerber.filter_oli_mesin && (
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 px-2 sm:px-10">
                  <span className="font-semibold">Filter Oli Mesin:</span>
                  <span>{renderTanggal(dataSerber.filter_oli_mesin)}</span>
                </div>
              )}
              {dataSerber.oli_gardan && (
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 px-2 sm:px-10">
                  <span className="font-semibold">Oli Gardan:</span>
                  <span>{renderTanggal(dataSerber.oli_gardan)}</span>
                </div>
              )}
              {dataSerber.oli_transmisi && (
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 px-2 sm:px-10">
                  <span className="font-semibold">Oli Transmisi:</span>
                  <span>{renderTanggal(dataSerber.oli_transmisi)}</span>
                </div>
              )}
              {dataSerber.ban && (
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 px-2 sm:px-10">
                  <span className="font-semibold">Ban:</span>
                  <span>{renderTanggal(dataSerber.ban)}</span>
                </div>
              )}
              {dataSerber.cuci && (
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 px-2 sm:px-10">
                  <span className="font-semibold">Cuci AC:</span>
                  <span>{renderTanggal(dataSerber.cuci)}</span>
                </div>
              )}
            </div>
          )}

          <button
            onClick={resetScanner}
            className="mt-4 w-full sm:max-w-md flex items-center justify-center gap-2
                    bg-gradient-to-r from-brand-500 to-brand-900 
                    text-white font-semibold 
                    px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-lg 
                    hover:scale-105 hover:shadow-2xl hover:brightness-110
                    transition-all duration-300 text-base sm:text-lg"
          >
            🔄 Scan Lagi
          </button>
        </div>
      )}
    </div>
  );
};

export default QrScanner;
