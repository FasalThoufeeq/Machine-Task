import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import morgan from "morgan";
import connectDB from "./Config/db.js";
import AdminRoutes from "./Routes/adminRoutes.js";
import ResidentRoutes from "./Routes/residentRoutes.js";

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.use("/api/admin", AdminRoutes());
app.use("/api/resident", ResidentRoutes());

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
