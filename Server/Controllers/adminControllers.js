import asyncHandler from "express-async-handler";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import Services from "../Services/services.js";
import AdminHelper from "../Helpers/adminHelpers.js";

const AdminController = () => {
  const addAdmin = asyncHandler(async (req, res) => {
    const adminDetails = req.body;
    try {
      const hashedPassword = await Services().encryptPassword(
        adminDetails.password
      );
      adminDetails.password = hashedPassword;
      const savedAdmin = await AdminHelper().addAdmin(adminDetails);
      if (savedAdmin) {
        return res.status(200).json({
          msg: "Successfully verified",
          adminDetails: savedAdmin,
        });
      } else {
        return res
          .status(500)
          .json({ msg: "Something went wrong to add admin" });
      }
    } catch (error) {
      return res.status(500).json({ msg: "Something went wrong to add admin" });
    }
  });
  const loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    try {
      const admin = await AdminHelper().findAdminByEmail(email);
      if (admin) {
        const isPasswordCorrect = await Services().comparePassword(
          password,
          admin?.password
        );
        if (isPasswordCorrect) {
          const secret = process.env.JWT_SECRET;
          const accessToken = jwt.sign(
            { role: "Admin", adminId: admin?._id },
            secret
          );
          return res.status(200).json({
            msg: "Login Successfully",
            adminDetails: admin,
            token: accessToken,
          });
        } else {
          return res.status(500).json({ msg: "Password not match" });
        }
      } else {
        return res.status(500).json({ msg: "Admin not found" });
      }
    } catch (error) {
      return res.status(500).json({ msg: "Something went wrong to login" });
    }
  });
  const getRequests = asyncHandler(async (req, res) => {
    try {
      const Requests = await AdminHelper().getRequests();
      if (Requests?.length) {
        return res.status(200).json({
          msg: "Successfully fetched Requests",
          Requests: Requests,
        });
      } else {
        return res.status(500).json({ msg: "There is no Requests" });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ msg: "Something went wrong to fetch Requests" });
    }
  });
  const requestSolved = asyncHandler(async (req, res) => {
    const { reqId } = req.params;
    try {
      const makeRequestSolved = await AdminHelper().requestSolved(reqId);
      if (makeRequestSolved) {
        return res.status(200).json({
          msg: "Successfully changed to solved",
        });
      } else {
        return res
          .status(500)
          .json({ msg: "Something went wrong to change Requests Details" });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ msg: "Something went wrong to change Requests Details" });
    }
  });
  return {
    addAdmin,
    loginAdmin,
    getRequests,
    requestSolved,
  };
};

export default AdminController;
