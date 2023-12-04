import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import App from "../App";
import About from "../components/pages/About/About";

import Shop from "../components/pages/Shop/Shop";
import Blog from "../components/pages/Blog/Blog";
import Contactus from "../components/pages/Contact Us/Contactus";
import Privacy from "../components/pages/privacy";
import Login from "../components/Authentication/Login";
import SignUp from "../components/Authentication/SignUp";
import Plants from "../components/AliHydro/Plants";
import Imageuploader from "../components/AliHydro/Imageuploader";
import ShowSensorData from "../components/AliHydro/ShowSensorData";
import BlogDetails from "../components/pages/Blog/BlogDetails";
import Diseases from "../components/pages/Diseases";
import DiseasesDetails from "../components/pages/Diseases/DiseasesDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/About",
        element: <About></About>,
      },
      {
        path: "/Shop",
        element: <Shop></Shop>,
        // loader: () => fetch("/data.json")
      },
      {
        path: "/Blog",
        element: <Blog></Blog>,
      },
      {
        path: "/Contactus",
        element: <Contactus></Contactus>,
      },
      {
        path: "/Privacy",
        element: <Privacy></Privacy>,
      },
      {
        path: "/diseases",
        element: <Diseases />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/plants",
    element: <Plants></Plants>,
  },
  {
    path: "/image-uploader",
    element: <Imageuploader></Imageuploader>,
  },
  {
    path: "/show-sensor-data",
    element: <ShowSensorData />,
  },
  // {
  //   path: "blog/blog-details/:slug",
  //   element: <BlogDetails/>,
  // },
  {
    path: "/diseases/diseases-details/:slug",
    element: (
      <PrivateRoute>
        <DiseasesDetails />
      </PrivateRoute>
    ),
  },
]);
export default router;
