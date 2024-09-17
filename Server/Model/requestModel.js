import mongoose, { Schema, model } from "mongoose";

const RequestSchema = new Schema(
  {
    requesterName: {
      type: String,
      trim: true,
      required: true,
    },
    requesterEmail: {
      type: String,
      trim: true,
      required: true,
    },
    unitNumber: {
      type: String,
      trim: true,
      required: true,
    },
    serviceType: {
      type: String,
      trim: true,
      required: true,
    },
    extraDetails: {
      type: String,
      trim: true,
      default: "none",
    },
    solved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const Request = model("Request", RequestSchema);
export default Request;
