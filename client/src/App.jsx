import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import MainLayout from "./dashboard/layout/MainLayout"
import AddWritter from "./dashboard/pages/AddWritter"
import AdminIndex from "./dashboard/pages/AdminIndex"
import Login from "./dashboard/pages/Login"
import News from "./dashboard/pages/News"
import Unable from "./dashboard/pages/Unable"
import Writters from "./dashboard/pages/Writters"
import ProtectDashBoard from "./middleware/ProtectDashBoard"
import ProtectRole from "./middleware/ProtectRole"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectDashBoard />}>
          <Route path='' element={<MainLayout />}>

            <Route path="" element={<Navigate to="/dashboard/admin" />} />

            <Route path="unable-access" element={<Unable/>} />
            <Route path="news" element={<News />} />
            <Route path="" element={<ProtectRole role='admin'/>} >
            <Route path="admin" element={<AdminIndex />} />
            <Route path="writter/add" element={<AddWritter />} />
            <Route path="writters" element={<Writters />} />
            </Route>
            
          </Route>
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
