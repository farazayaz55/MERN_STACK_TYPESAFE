import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./Pages/Home";



const  router=createBrowserRouter([
    {
        path:"/",
        element:<Home />
    }
])


const Paths=()=>{
    return <RouterProvider router={router} />
}


export default Paths