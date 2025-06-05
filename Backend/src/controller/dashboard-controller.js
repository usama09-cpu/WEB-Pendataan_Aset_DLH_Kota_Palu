import dashboardService from "../service/dashboard-service.js";

const getDashboard = async (req, res) => {
  try {
    const data = await dashboardService.getDashboard();
    res.status(200).json({ message: "berhasil", data: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { getDashboard };
