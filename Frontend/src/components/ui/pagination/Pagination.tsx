type PaginationProps = {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalData: number;
  getPageNumbers: () => number[];
  onPageChange: (page: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  itemsPerPage,
  totalData,
  getPageNumbers,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalData);

  return (
    <div className="mt-10 mb-6 px-4 sm:px-6 lg:px-8">
      <div
        className="
          max-w-2xl mx-auto
          flex flex-col sm:flex-row
          items-center sm:justify-between
          gap-5
          bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-700
          rounded-xl
          px-5 py-4
          shadow-sm
        "
      >
        {/* Info */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Menampilkan{" "}
          <span className="font-semibold text-gray-700 dark:text-gray-200">
            {startItem}
          </span>
          –
          <span className="font-semibold text-gray-700 dark:text-gray-200">
            {endItem}
          </span>{" "}
          dari{" "}
          <span className="font-semibold text-gray-700 dark:text-gray-200">
            {totalData}
          </span>{" "}
          data
        </p>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Prev */}
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="h-9 w-9 flex items-center justify-center rounded-lg
              border border-gray-300 text-gray-600 hover:bg-gray-100
              disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            ‹
          </button>

          {/* Pages */}
          <div className="flex gap-1">
            {getPageNumbers().map((page) => (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`min-w-[36px] h-9 px-3 rounded-lg text-sm font-medium transition
                  ${
                    currentPage === page
                      ? "bg-blue-600 text-white shadow"
                      : "border border-gray-300 text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="h-9 w-9 flex items-center justify-center rounded-lg
              border border-gray-300 text-gray-600 hover:bg-gray-100
              disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
