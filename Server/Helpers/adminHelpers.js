import Admin from "../Model/adminModel.js";
import Request from "../Model/requestModel.js";
import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";

const AdminHelper = () => {
  const addAdmin = async (adminDetails) => {
    const newAdmin = new Admin(adminDetails);
    const savedAdmin = await newAdmin.save();
    return savedAdmin;
  };
  const findAdminByEmail = async (email) => {
    const admin = await Admin.findOne({ email: email });
    return admin;
  };
  const getRequests = async () => {
    const Requests = await Request.find();
    return Requests;
  };
  const requestSolved = async (reqId) => {
    const makeRequestSolved = await Request.findByIdAndUpdate(
      { _id: reqId },
      { $set: { solved: true } }
    );

    if (makeRequestSolved) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          host: "smtp.gmail.com",
          port: 465,
          auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
          },
        });
        const mailOptions = {
          from: process.env.EMAIL,
          to: makeRequestSolved?.requesterEmail,
          subject: "From Head of Maintenance",
          html: `<p>Hello ${makeRequestSolved?.requesterName},</p>
                   <p>You got a new message from Residents Maintenance head</p>
    
                   <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; font-weight: bolder;">Your Maintance issue in ${makeRequestSolved?.serviceType} is solved. Check Once and inform us if there any problem</p>
  
                   <p style="margin-left: 12px;font-weight: bolder;">Sincerely,</p>
                   <p style="margin-left: 12px;font-weight: bolder;">Residents Maintenance head</p>`,
        };
        return new Promise(async (resolve, reject) => {
          await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error("Error sending email:", error);
              reject(error);
            } else {
              console.log("Email sent:", info.response);
              resolve(true);
            }
          });
        });
      } catch (error) {
        console.log(error);
      }
    }
    return makeRequestSolved;
  };
  return {
    addAdmin,
    findAdminByEmail,
    getRequests,
    requestSolved,
  };
};

export default AdminHelper;
