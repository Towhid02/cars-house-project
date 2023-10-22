import {
    createBrowserRouter,
  } from "react-router-dom";


import Home from "./Pages/Home";
import Root from "./Root";
import AboutUs from "./Components/AboutUs";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import AddCars from "./Pages/AddCars";
import Product from "./Pages/Product";
import Error from "./Pages/Error";
import AllCars from "./Pages/AllCars";
import UpdateCars from "./Pages/UpdateCars";
import PrivateRoutes from "./Components/PrivateRoutes";
import Details from "./Pages/Details";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      loader: () => fetch('cars.json'),
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/brands/'),

        },
        {
            path: "/aboutUS",
            element: <AboutUs></AboutUs> ,
        },
        {
            path: "/addProduct",
            element:<PrivateRoutes><AddCars></AddCars></PrivateRoutes>  ,
        },
        {
            path: "/allCars",
            element: <PrivateRoutes><AllCars></AllCars></PrivateRoutes> ,
            loader: () => fetch('http://localhost:5000/cars/'),

        },
        {
          path: "/updateCar/:id",
          element:<PrivateRoutes><UpdateCars></UpdateCars></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/cars/${params.id}/`)
      },
        {
            path: "/signUp",
            element: <SignUp></SignUp>,
        },
        {
            path: "/brand/:brand",
            element: <PrivateRoutes><Product></Product></PrivateRoutes>,
            loader: ({params}) => fetch(`http://localhost:5000/brand/${params.brand}/`)
            

            
        },
        {
            path: "/details/:id",
            element:<PrivateRoutes><Details></Details></PrivateRoutes> ,
            loader: ({params}) => fetch(`http://localhost:5000/cars/${params.id}/`)
        },
        {
            path: "/signIn",
            element:<SignIn></SignIn>,
        }
      ]
    },
  ]);

  export default router