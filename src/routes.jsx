import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";


export const route = createBrowserRouter([

    {
        path:"/",
        element:<Home/>,
    },
])