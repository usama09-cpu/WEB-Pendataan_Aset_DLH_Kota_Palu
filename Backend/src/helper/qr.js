import QRCode from "qrcode";

/**
 * Menghasilkan buffer QR Code dari sebuah string/data
 * @param {string} data - Data yang akan dikodekan ke dalam QR Code
 * @param {Object} [options] - Opsi tambahan QR Code (opsional)
 * @returns {Promise<Buffer>} - Buffer gambar PNG dari QR Code
 */
const generateQRCode = async (data, options = {}) => {
  try {
    const buffer = await QRCode.toBuffer(data, {
      type: "png",
      color: {
        dark: "#000000",
        light: "#ffffff",
      },
      ...options,
    });
    return buffer;
  } catch (error) {
    console.error("Gagal membuat QR Code buffer:", error);
    throw error;
  }
};

export default { generateQRCode };
