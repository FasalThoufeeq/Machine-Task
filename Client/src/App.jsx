import AdminDashboard from "./Admin/adminDashboard";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./Admin/adminLogin";
import { useSelector } from "react-redux";
function App() {
  const adminToken = useSelector((state) => state?.admin?.admin?.token);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/admin/*"
            element={
              adminToken ? <AdminDashboard /> : <Navigate to={"/admin-login"} />
            }
          />
          <Route
            path="/admin-login/*"
            element={adminToken ? <Navigate to={"/admin"} /> : <AdminLogin />}
          />
          {/* <Route path="/*" element={<SeekerRoute />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
