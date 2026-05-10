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
import { Component } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import SiteUsers from "../pages/DashboardPages/SiteUsers/SiteUsers";
import UserProfile from "../pages/DashboardPages/UserProfile/UserProfile";
import Statistics from "../pages/DashboardPages/Statistics/Statistics";
import MyRegistration from "../pages/DashboardPages/MyRegistration/MyRegistration";
import ManageUser from "../pages/DashboardPages/Admin/ManageUser";
import UserRegistration from "../pages/DashboardPages/UserRegistration/UserRegistration";
import BeAdmin from "../pages/DashboardPages/BeAdmin/BeAdmin";
import ManageAdmin from "../pages/DashboardPages/Admin/ManageAdmin";
import ManageKabinReques from "../pages/DashboardPages/Admin/ManageKabinReques";
import MyKabinStatus from "../pages/DashboardPages/MyKabinStatus/MyKabinStatus";
import NotFound from "../pages/Error/NotFound";
import Banner from "../components/Banner";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Intro></Intro>,
      },
      {
        path: "/home",
        element: <Home />,
      },
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
      // {
      //   path: "/registration",
      //   element: <Register />,
      // },
      {
        path: "/myprofile",
        element: <MyProfile />,
      },
      {
        path: "/applymarriage",
        element: <ApplyMarriage />,
      },
      {
        path: "/createbiodata",
        element: (
          <PrivateRoute>
            <CreateBiodata />
          </PrivateRoute>
        ),
      },
      {
        path: "/kabinnama",
        element: (
          <PrivateRoute>
            <KabinNama />
          </PrivateRoute>
        ),
      },
      {
        path: "/hero",
        element: (
          <PrivateRoute>
            <Hero />
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <Home />,
      },
      {
        path:"banner",
        element:<Banner/>
      },
      {
        path:'not-found',
        element:<NotFound></NotFound>
      }
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/registration", element: <Register /> },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Statistics />,
      },
      {
        path: "site-users",
        Component: SiteUsers,
      },
      {
        path: "dashboard-profile",
        Component: UserProfile,
      },
      {
        path: "registration-data",
        Component: MyRegistration,
      },
      {
        path: "manage-users",
        Component: ManageUser,
      },
      {
        path: "admin-request",
        Component: ManageAdmin,
      },
      {
        path: "user-registration",
        Component: UserRegistration,
      },
      {
        path:"be-admin",
        Component:BeAdmin
      },
      {
        path:"request-kabin",
        Component:ManageKabinReques
      },
      {
        path:'kabin-status',
        Component:MyKabinStatus
      }
    ],
  },
]);
