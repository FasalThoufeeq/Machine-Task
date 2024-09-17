import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminApi from "../api/adminApi";

export const LoginAdmin = createAsyncThunk("admin_login", async (payload) => {
  try {
    const response = await adminApi.post("admin_login", payload);
    return response;
  } catch (err) {
    console.log(err);
  }
});

export const GetRequests = createAsyncThunk(
  "maintenance_requests",
  async () => {
    try {
      const response = await adminApi.get("maintenance_requests");
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const SolvedRequest = createAsyncThunk(
  "maintenance_requests",
  async (reqId) => {
    try {
      const response = await adminApi.put(`maintenance_requests/${reqId}`);
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);
const initialState = {
  admin: {},
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    LogoutAdmin: (state) => {
      state.admin = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LoginAdmin.fulfilled, (state, { payload }) => {
      state.admin = payload.data;
    });
  },
});
export const { LogoutAdmin } = adminSlice.actions;
export default adminSlice.reducer;
