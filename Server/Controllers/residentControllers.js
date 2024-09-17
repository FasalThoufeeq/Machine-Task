import asyncHandler from "express-async-handler";
import ResidentHelpers from "../Helpers/residentHelpers.js";
const ResidentController = () => {
  const createMaintenanceRequest = asyncHandler(async (req, res) => {
    const maintenanceRequestDetails = req.body;
    try {
      const RequestSaved = await ResidentHelpers().SaveRequest(
        maintenanceRequestDetails
      );
      if (RequestSaved) {
        return res.status(200).json({
          msg: "Successfully saved Request",
        });
      } else {
        return res
          .status(500)
          .json({ msg: "Something went wrong to save Request" });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ msg: "Something went wrong to save Request" });
    }
  });
  return {
    createMaintenanceRequest,
  };
};

export default ResidentController;
