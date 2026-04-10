import { createBrowserRouter } from "react-router";
import RootLayout from "../components/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import MyProfile from "../pages/MyProfile/MyProfile";
import ApplyMarriage from "../pages/Marriage/ApplyMarriage";
import CreateBiodata from "../pages/BioData/CreateBiodata";
import Hero from "../components/Hero";
import Contact from "../pages/Contact/Contact";
import KabinNama from "../pages/KabinNama/KabinNama";
import PrivateRoute from "../provider/PrivateRoute";
import Intro from "../pages/IntroPage/Intro";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<RootLayout/>,
    children:[
        {
            index:true,
            element:<Intro></Intro>
        },
        {
            path:"/home",
            element:<Home/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/registration",
            element:<Register/>
        },
        {
            path:"/myprofile",
            element:<MyProfile/>
        },
        {
            path:"/applymarriage",
            element:<ApplyMarriage/>
        },
        {
            path:"/createbiodata",
            element:<PrivateRoute><CreateBiodata/></PrivateRoute>
        },
        {
            path:"/kabinnama",
           element:<PrivateRoute><KabinNama/></PrivateRoute>
        },
        {
            path:"/hero",
            element:<PrivateRoute><Hero/></PrivateRoute>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/dashboard",
            element:<AdminDashboard/>
        },
        {
            path:"*",
            element:<Home/>
        }
    
    ]
  },
]);

