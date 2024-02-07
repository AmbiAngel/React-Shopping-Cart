import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Components/Error-page";
import HomePage from "./Components/Home-page";
import ShoppingPage from './Components/Shopping-page'

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children:[
        { 
          index: true,
          element: <Navigate to="home" replace /> 
        },
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/shopping",
          element: <ShoppingPage />,
        },
      ]
    },

    // {
    //   path: "profile/:name",
    //   element: <Profile />,
    // },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;