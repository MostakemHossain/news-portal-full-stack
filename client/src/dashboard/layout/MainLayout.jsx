import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"


const MainLayout = () => {
  return (
    <div className="min-w-screen min-h-screen bg-gray-100">
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout