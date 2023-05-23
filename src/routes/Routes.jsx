import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AllChefs from "../pages/AllChefs/AllChefs";
import ChefDetails from "../layout/ChefDetails";
import ChefInfo from "../pages/ChefInfo/ChefInfo/ChefInfo";

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
                
            }
        ]
    },

    {
        path: '/chef-detail',
        element: <ChefDetails></ChefDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`),
        children: [
            {
                path: ':id',
                element: <ChefInfo></ChefInfo>,
                
            }
        ]
    }
])

export default router;