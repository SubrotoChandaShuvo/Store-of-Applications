import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
// import Products from "../Pages/Products";
import RootLayout from "../Layouts/RootLayout";
import ErrorPage from "../Pages/ErrorPage";
import Apps from "../Pages/Apps";
import Installations from "../Pages/Installations";
import AllApps from "../Pages/AllApps";
import AppDetails from "../Pages/appDetails";
import LoadingSpinner from "../Components/LoadingSpinner";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />, 
    hydrateFallbackElement: <LoadingSpinner/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apps",
        Component: Apps
      },
      {
        path: "/Installation",
        Component: Installations
      },
      {
        path: "/AllApps",
        Component: AllApps
      },
      {
        path: "/AllApps/:id",
        Component: AppDetails
      },
    ],
  },

]);

export default router;
