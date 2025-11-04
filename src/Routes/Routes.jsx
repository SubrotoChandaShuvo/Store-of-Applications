import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import RootLayout from "../Layouts/RootLayout";
import ErrorPage from "../Pages/ErrorPage";
import Apps from "../Pages/Apps";
import Installations from "../Pages/Installations";
import AllApps from "../Pages/AllApps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading.....</p>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: ()=> fetch('./sampleData.json')
      },
      {
        path: "/products",
        element: <Products />,
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
    ],
  },

]);

export default router;
