import express from "express";
import AdminController from "../Controllers/adminControllers.js";
const AdminRoutes = () => {
  const router = express.Router();
  const Controller = AdminController();

  router.post("/add_admin", Controller.addAdmin);

  router.post("/admin_login", Controller.loginAdmin);

  router.get("/maintenance_requests",Controller.getRequests)

  router.put("/maintenance_requests/:reqId", Controller.requestSolved)


  return router;
};

export default AdminRoutes;
