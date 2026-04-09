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

// ✅ MODAL
import UserModal from "../modals/UserModal";

export default function UserTable() {
  const roleAuth = useAuthStore((s) => s.role);

  // ================= FETCH =================
  const { data, setData, loading, fetchData } =
    useFetch<UserData>("/api/user");

  // 🔥 FIX: trigger fetch pertama
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
      fetchData(); // refresh data
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
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
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
        <p className="p-4 text-gray-500">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell isHeader className="text-center">
                  Username
                </TableCell>
                <TableCell isHeader className="text-center">
                  Role
                </TableCell>
                <TableCell isHeader className="text-center">
                  Password
                </TableCell>
                <TableCell isHeader className="text-center">
                  Aksi
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginatedData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-4">
                    Tidak ada data
                  </TableCell>
                </TableRow>
              ) : (
                paginatedData.map((user) => (
                  <TableRow key={user.id_user}>
                    <TableCell className="text-center">
                      {user.username}
                    </TableCell>

                    <TableCell className="text-center">
                      {user.role}
                    </TableCell>

                    <TableCell className="text-center">
                      ********
                    </TableCell>

                    <TableCell className="text-center">
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

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            totalData={data.length}
            getPageNumbers={getPageNumbers}
            onPageChange={setCurrentPage}
          />
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