import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AllChefs from "../pages/AllChefs/AllChefs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/chefs',
                element: <AllChefs></AllChefs>,
                loader: async () => await fetch(`http://localhost:5000/chefs`)
            }
        ]
    }
])

export default router;