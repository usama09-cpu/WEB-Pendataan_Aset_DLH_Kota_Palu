import { createPortal } from "react-dom";
import React from "react";

type UserModalProps = {
  isOpen: boolean;
  isAddMode: boolean;
  form: {
    username: string;
    password: string;
    role: string;
  };
  setForm: React.Dispatch<
    React.SetStateAction<{
      username: string;
      password: string;
      role: string;
    }>
  >;
  onClose: () => void;
  onSubmit: () => void;
};

export default function UserModal({
  isOpen,
  isAddMode,
  form,
  setForm,
  onClose,
  onSubmit,
}: UserModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/40 z-[99999]"
      onClick={onClose} // klik luar close
    >
      <div
        className="bg-white p-6 rounded-xl w-80 space-y-4 shadow-lg"
        onClick={(e) => e.stopPropagation()} // biar tidak close saat klik dalam
      >
        <h2 className="text-lg font-semibold">
          {isAddMode ? "Tambah User" : "Edit User"}
        </h2>

        {/* USERNAME */}
        <input
          type="text"
          value={form.username}
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Username"
          autoComplete="username"
        />

        {/* ROLE */}
        <select
          value={form.role}
          onChange={(e) =>
            setForm({ ...form, role: e.target.value })
          }
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Pilih Role --</option>
          <option value="kepalaDinas">kepalaDinas</option>
          <option value="bendahara">bendahara</option>
          <option value="admin">admin</option>
        </select>

        {/* PASSWORD */}
        <input
          type="password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
          autoComplete="new-password"
        />

        {/* ACTION */}
        <div className="flex justify-end gap-2 pt-2">
          <button
            onClick={onClose}
            className="border px-3 py-1 rounded hover:bg-gray-100"
          >
            Batal
          </button>

          <button
            onClick={onSubmit}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            {isAddMode ? "Tambah" : "Simpan"}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}