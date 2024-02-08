import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Components/Error-page";
import HomePage from "./Components/Home-page";
import ShoppingPage from './Components/Shopping-page'
import { useState, useEffect } from "react";

const Router = () => {

  let [cartItems, setCartItems] = useState([])

  let [data, setData] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect( () => {
    fetch('https://fakestoreapi.com/products')
          .then(res=>res.json())
          .then(actualData=>{
            setData(actualData)
            setError(null)
          })
          .catch((err) => {
            setError(err.message);
            setData(null);
          })
          .finally(() => {
            setLoading(false);
          })
  }, []);

  console.log(data);
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
          element: <HomePage data={data} loading={loading} error={error} />,
        },
        {
          path: "/shopping",
          element: <ShoppingPage data={data} loading={loading} error={error} setCartItems={setCartItems} cartItems={cartItems}/>,
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