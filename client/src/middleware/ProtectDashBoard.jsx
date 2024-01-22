import { Navigate, Outlet } from "react-router-dom"


const ProtectDashBoard = () => {
    const userInfo={
        name:'mostakem',
        role:'admin'
    }

    if(userInfo){
       return <Outlet/>
    }else{
      return  <Navigate to='/login'/>
    }
  
}

export default ProtectDashBoard