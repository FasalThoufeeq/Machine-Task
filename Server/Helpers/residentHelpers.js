import Request from "../Model/requestModel.js";
import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";

const ResidentHelpers = () => {
  const SaveRequest = async (maintenanceRequestDetails) => {
    const newRequest = new Request(maintenanceRequestDetails);
    const savedRequest = await newRequest.save();
    if (savedRequest) {
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
            to: savedRequest?.requesterEmail,
            subject: "From Head of Maintenance",
            html: `<p>Hello ${savedRequest?.requesterName},</p>
                   <p>You got a new message from Residents Maintenance head</p>
    
                   <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; font-weight: bolder;">We got your Maintenance request in ${savedRequest?.serviceType}, we will resolve the issue ass soon as possible and get back to you</p>
  
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
    return savedRequest;
  };
  return {
    SaveRequest,
  };
};
export default ResidentHelpers;
