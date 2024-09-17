import AdminDashboard from './Admin/adminDashboard';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {


  return (
    <>
<BrowserRouter>
            <Routes>
              <Route path="/admin/*" element={<AdminDashboard />} />
              {/* <Route path="/*" element={<SeekerRoute />} /> */}
            </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
