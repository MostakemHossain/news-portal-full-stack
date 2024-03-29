import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const MainLayout = () => {
  return (
    <div className="min-w-screen bg-gray-100">
      <SideBar />
      <div className="ml-[250px] w-[calc(100vh - 260px)] min-h-[100vh]">
        <Header />
        <div className="p-4">
          <div className="pt-[85px]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
