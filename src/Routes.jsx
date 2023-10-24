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
import AddCarts from "./Pages/AddCarts";


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
            loader: () => fetch('https://cars-world-server-6zjoi6jd9-md-towhidul-islams-projects.vercel.app/brands/'),

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
            loader: () => fetch('https://cars-world-server-6zjoi6jd9-md-towhidul-islams-projects.vercel.app/cars/'),

        },
        {
          path: "/updateCar/:id",
          element:<PrivateRoutes><UpdateCars></UpdateCars></PrivateRoutes>,
          loader: ({params}) => fetch(`https://cars-world-server-6zjoi6jd9-md-towhidul-islams-projects.vercel.app/cars/${params.id}/`)
      },
        {
            path: "/signUp",
            element: <SignUp></SignUp>,
        },
        {
            path: "/addCarts",
            element: <PrivateRoutes><AddCarts></AddCarts></PrivateRoutes>,
        },
        {
            path: "/brand/:brand",
            element: <PrivateRoutes><Product></Product></PrivateRoutes>,
            loader: ({params}) => fetch(`https://cars-world-server-6zjoi6jd9-md-towhidul-islams-projects.vercel.app/brand/${params.brand}/`)
            

            
        },
        {
            path: "/details/:id",
            element:<PrivateRoutes><Details></Details></PrivateRoutes> ,
            loader: ({params}) => fetch(`https://cars-world-server-6zjoi6jd9-md-towhidul-islams-projects.vercel.app/cars/${params.id}/`)
        },
        {
            path: "/signIn",
            element:<SignIn></SignIn>,
        }
      ]
    },
  ]);

  export default router