import { AiFillDashboard, AiOutlinePlus } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logos.jpeg";

const SideBar = () => {
    const {pathname} = useLocation();
    return (
        <div className="w-[250px] h-screen fixed left-0 top-0 bg-white">
            <div className="h-[70px]  flex justify-center items-center">
                <Link to='/'>
                    <img src={logo} alt="" />

                </Link>

            </div>
            <ul className="px-3 flex flex-col gap-y-1 font-medium">
                <li>
                    <Link to="/dashboard/admin" className={`px-3 py-2 ${pathname==='/dashboard/admin'?"bg-indigo-500 text-white":"bg- white text-[#404040f6]"} hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                        <span className="text-xl"><AiFillDashboard/></span>
                        <span>DashBoard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/news" className={`px-3 py-2 ${pathname==='/dashboard/news'?"bg-indigo-500 text-white":"bg- white text-[#404040f6]"} hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                        <span className="text-xl"><BiNews/></span>
                        <span>News</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/writter/add" className={`px-3 py-2 ${pathname==='/dashboard/writter/add'?"bg-indigo-500 text-white":"bg- white text-[#404040f6]"} hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                        <span className="text-xl"><AiOutlinePlus/></span>
                        <span>Add Writer</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/writters" className={`px-3 py-2 ${pathname==='/dashboard/writters'?"bg-indigo-500 text-white":"bg- white text-[#404040f6]"} hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                        <span className="text-xl"><FiUser/></span>
                        <span>Writers</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/profile" className={`px-3 py-2 ${pathname==='/dashboard/profile'?"bg-indigo-500 text-white":"bg- white text-[#404040f6]"} hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                        <span className="text-xl"><ImProfile/></span>
                        <span>Profile</span>
                    </Link>
                </li>

            </ul>



        </div>
    )
}

export default SideBar