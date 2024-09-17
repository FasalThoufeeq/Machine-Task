import mongoose, { Schema, model } from "mongoose";

const AdminSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    }
  },
  { timestamps: true }
);
const Admin = model("Admin", AdminSchema);
export default Admin;
