import React from "react";
import {
  FaTools,
  FaDollyFlatbed,
  FaEdit,
  FaTrash,
  FaInfoCircle,
  FaEye,
  FaEyeSlash,
  FaKey
} from "react-icons/fa";

// ================= BASE =================
interface ActionButtonProps {
  onClick: () => void;
}

interface VisibleButtonProps {
  isVisible: boolean;
  onClick: () => void;
}

// 🎨 base style biar konsisten
const baseClass =
  "p-1 text-gray-500 hover:text-blue-600 transition duration-150";

// ================= ICON BUTTONS =================

export const ServiceButton: React.FC<ActionButtonProps> = ({ onClick }) => (
  <button onClick={onClick} className={baseClass} title="Servis">
    <FaTools size={18} />
  </button>
);

export const DistributionButton: React.FC<ActionButtonProps> = ({
  onClick,
}) => (
  <button onClick={onClick} className={baseClass} title="Distribusi">
    <FaDollyFlatbed size={18} />
  </button>
);

export const EditButton: React.FC<ActionButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className={`${baseClass} hover:text-yellow-600`}
    title="Edit"
  >
    <FaEdit size={18} />
  </button>
);

export const DeleteButton: React.FC<ActionButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className={`${baseClass} hover:text-red-600`}
    title="Hapus"
  >
    <FaTrash size={18} />
  </button>
);

export const DetailButton: React.FC<ActionButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className={`${baseClass} hover:text-indigo-600`}
    title="Detail"
  >
    <FaInfoCircle size={18} />
  </button>
);

export const ResetPasswordButton: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => (
  <button
    onClick={onClick}
    className="p-1 text-gray-500 hover:text-orange-600 transition"
    title="Reset Password"
  >
    <FaKey size={18} />
  </button>
);

// 👁️ Visible Toggle Button
export const VisibleButton: React.FC<VisibleButtonProps> = ({
  isVisible,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={baseClass}
    title={isVisible ? "Sembunyikan" : "Tampilkan"}
  >
    {isVisible ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
  </button>
);

// ================= TEXT BUTTONS =================

export const AddButton: React.FC<ActionButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm"
  >
    + Tambah
  </button>
);

export const ExcelButton: React.FC<ActionButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition"
  >
    Excel
  </button>
);

export const PDFButton: React.FC<ActionButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition"
  >
    PDF
  </button>
);

// ================= GROUP BUTTON =================

export const ActionButton: React.FC<{
  onService?: () => void;
  onDistribution?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}> = ({ onService, onDistribution, onEdit, onDelete }) => (
  <div className="flex items-center gap-2">
    {onService && <ServiceButton onClick={onService} />}
    {onDistribution && <DistributionButton onClick={onDistribution} />}
    {onEdit && <EditButton onClick={onEdit} />}
    {onDelete && <DeleteButton onClick={onDelete} />}
  </div>
);

export default ActionButton;