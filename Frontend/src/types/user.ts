export interface UserData {
  id_user: number;
  username: string;
  password: string;
  role: string;
}

export const users: UserData[] = [
  {
    id_user: 1,
    username: "Kepala Dinas",
    password: "kadisDLH-01",
    role: "kepalaDinas",
  },
  {
    id_user: 2,
    username: "Bendahara",
    password: "bendaharaDLH-02",
    role: "bendahara",
  },
  {
    id_user: 3,
    username: "Admin",
    password: "adminDLH-03",
    role: "admin",
  },
];
