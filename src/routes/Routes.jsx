import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AllChefs from "../pages/AllChefs/AllChefs";
import ChefDetails from "../layout/ChefDetails";
import ChefInfo from "../pages/ChefInfo/ChefInfo/ChefInfo";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/LoginRegister/Login/Login";
import Register from "../pages/LoginRegister/Register/Register";
import PrivateRoute from "./PrivateRoute";
import BlogsLayout from "../layout/BlogsLayout";
import NotFoundLayout from "../layout/NotFoundLayout";

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
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`),
        children: [
            {
                path: ':id',
                element: <ChefInfo></ChefInfo>,
                
            }
        ]
    },

    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },

    {
        path: '/blogs',
        element: <BlogsLayout></BlogsLayout>
    },
    {
        path: '*',
        element: <NotFoundLayout></NotFoundLayout>
    }
])

export default router;