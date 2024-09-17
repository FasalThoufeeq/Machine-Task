import express from "express";
import ResidentController from "../Controllers/residentControllers.js";

const ResidentRoutes = () => {
  const router = express.Router();
  const Controller = ResidentController();

  router.post("/maintenance_request", Controller.createMaintenanceRequest);

  return router;
};

export default ResidentRoutes;
