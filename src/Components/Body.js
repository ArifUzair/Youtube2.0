import Sidebar from "./Sidebar"
import MainContainer from "./MainContainer"
import { Outlet } from "react-router-dom"

const Body=()=>{
    return(
        <div className="flex">    
     <div>
        <Sidebar/>
      </div>

        
       <Outlet/>
        </div>
       
          

        
    )
}

export default Body