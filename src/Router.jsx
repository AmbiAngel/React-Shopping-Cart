import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import App from "./App";
import { useState, useEffect, useMemo } from "react";

import ErrorPage from "./Components/Error-page";
import HomePage from "./Components/Home-page";
import ShoppingPage from './Components/Shopping-page'
import CartPage from "./Components/Cart-Page"
import AboutPage from "./Components/About-Page";

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
    
  let totalNumOfItems = useMemo(()=>{
    return cartItems.reduce(
      (accumulator, currentValue)=> currentValue.itemQuantity + accumulator,
      0)
  }, [cartItems])
      

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App numOfItems={totalNumOfItems}/>,
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
        {
          path: "/cart",
          element: <CartPage cartItems={cartItems} setCartItems={setCartItems}/>,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
      ]
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;