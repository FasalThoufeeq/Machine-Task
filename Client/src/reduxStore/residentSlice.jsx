import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import residentApi from "../api/residentApi";

export const MaintenanceRequest = createAsyncThunk(
  "maintenance_request",
  async (payload) => {
    try {
      const response = await residentApi.post("maintenance_request", payload);
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  resident: {},
};

const adminSlice = createSlice({
  name: "resident",
  initialState,
  reducers: {},
  extraReducers: () => {},
});
export default adminSlice.reducer;
