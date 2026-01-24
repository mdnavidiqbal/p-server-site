import { createBrowserRouter } from "react-router";
import RootLayout from "../components/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import MyProfile from "../pages/MyProfile/MyProfile";
import ApplyMarriage from "../pages/Marriage/ApplyMarriage";
import CreateBiodata from "../pages/BioData/CreateBiodata";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:"/login",
            Component:Login
        },
        {
            path:"/registration",
            Component:Register
        },
        {
            path:"/myprofile",
            Component:MyProfile
        },
        {
            path:"/applymarriage",
            Component:ApplyMarriage
        },
        {
            path:"/createbiodata",
            Component:CreateBiodata
        }
    ]
  },
]);