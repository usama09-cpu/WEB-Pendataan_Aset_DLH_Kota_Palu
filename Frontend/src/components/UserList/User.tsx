import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useSearch } from "../../hooks/useSearch";
import { usePagination } from "../../hooks/usePagination";

import Pagination from "../ui/pagination/Pagination";
import SearchInput from "../ui/search/Search";

import { handleExportExcel } from "../../handler/handleExportExcel";
import { handleExportPdf } from "../../handler/handleExportPdf";

import { hakAkses } from "../../utils/aclUtils";
import { useAuthStore } from "../../stores/authStore";

import {
  EditButton,
  DeleteButton,
  AddButton,
  ExcelButton,
  PDFButton,
} from "../ui/button/ActionButton";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import api from "../../services/api";
import { UserData } from "../../types/user";

// MODAL
import UserModal from "../modals/UserModal";

export default function UserTable() {
  const roleAuth = useAuthStore((s) => s.role);

  // ================= FETCH =================
  const { data, setData, loading, fetchData } =
    useFetch<UserData>("/api/user");

  useEffect(() => {
    fetchData();
  }, []);

  // ================= SEARCH =================
  const { search, setSearch, filtered } = useSearch(
    data || [],
    (item, query) =>
      item.username.toLowerCase().includes(query) ||
      item.role.toLowerCase().includes(query)
  );

  // ================= PAGINATION =================
  const itemsPerPage = 10;

  const {
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedData,
    getPageNumbers,
  } = usePagination(filtered, itemsPerPage);

  // ================= MODAL =================
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState<UserData | null>(null);
  const [isAddMode, setIsAddMode] = useState(false);

  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "",
  });

  // ================= ADD =================
  const handleAdd = () => {
    setForm({ username: "", password: "", role: "" });
    setSelected(null);
    setIsAddMode(true);
    setIsModalOpen(true);
  };

  // ================= EDIT =================
  const handleEdit = async (id: number) => {
    setIsAddMode(false);
    setIsModalOpen(true);

    try {
      const res = await api.get(`/api/user/${id}`);
      const user = res.data.data;

      setSelected(user);
      setForm({
        username: user.username,
        password: "",
        role: user.role || "",
      });
    } catch (err) {
      console.error("Gagal fetch user:", err);
    }
  };

  // ================= SUBMIT =================
  const handleSubmit = async () => {
    try {
      if (!form.username.trim()) {
        alert("Username wajib diisi!");
        return;
      }

      if (!form.role) {
        alert("Role wajib dipilih!");
        return;
      }

      if (isAddMode && !form.password.trim()) {
        alert("Password wajib diisi!");
        return;
      }

      if (isAddMode) {
        await api.post("/api/register", form);
      } else {
        if (!selected) return;

        await api.put(`/api/user/${selected.id_user}`, {
          username: form.username,
          role: form.role,
          ...(form.password && { password: form.password }),
        });
      }

      setIsModalOpen(false);
      setSelected(null);
      fetchData();
    } catch (err) {
      console.error("Gagal simpan:", err);
    }
  };

  // ================= DELETE =================
  const handleDelete = async (id: number) => {
    if (confirm("Yakin ingin menghapus user ini?")) {
      try {
        await api.delete(`/api/user/${id}`);
        setData((prev) =>
          prev.filter((item) => item.id_user !== id)
        );
      } catch (err) {
        console.error("Gagal delete:", err);
      }
    }
  };

  // ================= EXPORT =================
  const exportHeaders = ["Username", "Role"];
  const exportRows = (search ? filtered : data).map((row) => [
    row.username,
    row.role,
  ]);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">

      {/* HEADER */}
      <div className="p-4 flex justify-between items-center">
        {roleAuth && hakAkses(roleAuth, "user", "create") && (
          <AddButton onClick={handleAdd} />
        )}

        <div className="flex gap-2 items-center">
          <SearchInput value={search} onChange={setSearch} />

          <ExcelButton
            onClick={() =>
              handleExportExcel(exportHeaders, exportRows, "Data User")
            }
          />

          <PDFButton
            onClick={() =>
              handleExportPdf(exportHeaders, exportRows, "Data User")
            }
          />
        </div>
      </div>

      {/* TABLE */}
      {loading ? (
        <p className="p-4 text-gray-500 dark:text-gray-300">
          Loading...
        </p>
      ) : (
        <div className="max-w-full overflow-x-auto">
          <div className="min-w-[600px]">
            <Table>
              
              {/* HEADER */}
              <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                <TableRow>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-bold text-center text-sm text-gray-700 dark:text-gray-400"
                  >
                    Username
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-bold text-center text-sm text-gray-700 dark:text-gray-400"
                  >
                    Role
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-bold text-center text-sm text-gray-700 dark:text-gray-400"
                  >
                    Password
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-bold text-center text-sm text-gray-700 dark:text-gray-400"
                  >
                    Aksi
                  </TableCell>
                </TableRow>
              </TableHeader>

              {/* BODY */}
              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {paginatedData.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="text-center py-4 text-gray-400 dark:text-gray-500"
                    >
                      Tidak ada data
                    </TableCell>
                  </TableRow>
                ) : (
                  paginatedData.map((user) => (
                    <TableRow key={user.id_user}>
                      <TableCell className="px-5 py-3 text-center text-sm font-medium text-gray-600 dark:text-gray-400">
                        {user.username}
                      </TableCell>

                      <TableCell className="px-5 py-3 text-center text-sm font-medium text-gray-600 dark:text-gray-400">
                        {user.role}
                      </TableCell>

                      <TableCell className="px-5 py-3 text-center text-sm font-medium text-gray-600 dark:text-gray-400">
                        ********
                      </TableCell>

                      <TableCell className="px-5 py-3 text-center text-sm font-medium text-gray-600 dark:text-gray-400">
                        <div className="flex justify-center gap-2">
                          {roleAuth &&
                            hakAkses(roleAuth, "user", "update") && (
                              <EditButton
                                onClick={() =>
                                  handleEdit(user.id_user)
                                }
                              />
                            )}

                          {roleAuth &&
                            hakAkses(roleAuth, "user", "delete") && (
                              <DeleteButton
                                onClick={() =>
                                  handleDelete(user.id_user)
                                }
                              />
                            )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>

            {/* PAGINATION */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              itemsPerPage={itemsPerPage}
              totalData={data.length}
              getPageNumbers={getPageNumbers}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      )}

      {/* MODAL */}
      <UserModal
        isOpen={isModalOpen}
        isAddMode={isAddMode}
        form={form}
        setForm={setForm}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
}