type Permission = "create" | "read" | "update" | "delete";

const RESOURCES = [
  "kendaraan",
  "alatBerat",
  "alatKerja",
  "ac",
  "tanah",
  "tanaman",
  "tanamanMasuk",
  "tanamanKeluar",
  "servisAc",
  "servisKendaraan",
  "servisAlatBerat",
  "servisAlatKerja",
  "serberAc",
  "serberKendaraan",
  "serberAlatBerat",
  "serberAlatKerja",
  "user",
] as const;

const FULL_ACCESS: Permission[] = ["create", "read", "update", "delete"];
const LIMITED_ACCESS: Permission[] = ["create", "read"];
const READ_ACCESS: Permission[] = ["read"];

const createAccessMap = (
  permissions: Permission[],
  isFullAccess = false
) => {
  const map = Object.fromEntries(
    RESOURCES.map((res) => [res, permissions])
  );

  // resource user hanya untuk full access
  if (!isFullAccess) {
    map.user = ["read"];
  }

  return map;
};

export const ACL = {
  kepalaDinas: createAccessMap(READ_ACCESS),
  bendahara: createAccessMap(FULL_ACCESS, true),
  admin: createAccessMap(LIMITED_ACCESS),
};
