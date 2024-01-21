import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import MainLayout from "./dashboard/layout/MainLayout"
import AdminIndex from "./dashboard/pages/AdminIndex"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<MainLayout/>}>
          <Route path="" element={<Navigate to="/dashboard/admin"/>}>
            <Route path="admin" element={<AdminIndex/>}></Route>

          </Route>

        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
