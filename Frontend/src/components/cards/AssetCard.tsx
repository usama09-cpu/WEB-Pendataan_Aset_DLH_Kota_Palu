import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import {
  MotorIcon,
  CarIcon,
  TruckIcon,
  ExcaIcon,
  LawnIcon,
  AcIcon,
  PlantIcon,
  ParkIcon,
  BurialIcon,
  TriCycleIcon,
} from "../../icons";

import { CardData } from "../../types/cardAsset";

const cardConfig: {
  key: keyof CardData;
  label: string;
  icon: React.FC<{ className?: string }>;
  route: string;
  kategori?: string;
}[] = [
  {
    key: "R2",
    label: "Roda 2",
    icon: MotorIcon,
    route: "/kendaraan",
    kategori: "R2",
  },
  {
    key: "R3",
    label: "Roda 3",
    icon: TriCycleIcon,
    route: "/kendaraan",
    kategori: "R3",
  },
  {
    key: "R4",
    label: "Roda 4",
    icon: CarIcon,
    route: "/kendaraan",
    kategori: "R4",
  },
  {
    key: "R6",
    label: "Roda 6",
    icon: TruckIcon,
    route: "/kendaraan",
    kategori: "R6",
  },

  {
    key: "AlatBerat",
    label: "Alat Berat",
    icon: ExcaIcon,
    route: "/alat-berat",
  },
  {
    key: "AlatKerja",
    label: "Alat Kerja",
    icon: LawnIcon,
    route: "/alat-kerja",
  },
  { key: "Ac", label: "AC", icon: AcIcon, route: "/ac" },
  { key: "Tanaman", label: "Tanaman", icon: PlantIcon, route: "/tanaman" },
  {
    key: "Taman",
    label: "Taman Kota",
    icon: ParkIcon,
    route: "/tanah",
    kategori: "Tanah Taman",
  },
  {
    key: "TPU",
    label: "Tempat Pemakaman Umum",
    icon: BurialIcon,
    route: "/tanah",
    kategori: "Tanah TPU",
  },
];

export default function AssetCard() {
  const [data, setData] = useState<CardData | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAsset = async () => {
      try {
        const response = await api.get("/api/dashboard");
        setData(response.data.data);
      } catch (err) {
        console.error("Gagal mengambil data dashboard:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAsset();
  }, []);

  if (loading || !data) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
      {cardConfig.map(({ key, label, icon: Icon, route, kategori }) => {
        const value = data[key] ?? 0;

        const handleClick = () => {
          if (kategori) {
            navigate(`${route}?kategori=${kategori}`);
          } else {
            navigate(route);
          }
        };

        return (
          <div
            key={key}
            onClick={handleClick}
            className="
      relative cursor-pointer rounded-2xl
      border border-gray-200 bg-white px-6 py-8 shadow-sm
      transition-all duration-300 ease-in-out
      hover:-translate-y-1 hover:shadow-lg
      dark:border-gray-800 dark:bg-white/[0.03]
    "
          >
            <div className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center bg-gray-100 rounded-xl dark:bg-gray-800">
              <Icon className="size-6 text-gray-800 dark:text-white/90" />
            </div>

            <div className="mt-4 flex flex-col items-center justify-center">
              <h2 className="mb-4 text-5xl font-extrabold text-gray-800 dark:text-white/90">
                {value}
              </h2>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
