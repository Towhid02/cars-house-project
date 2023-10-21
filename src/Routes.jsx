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
// import Error from "./Pages/Error";
import AllCars from "./Pages/AllCars";
import UpdateCars from "./Pages/UpdateCars";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      // errorElement: <Error></Error>,
      loader: () => fetch('cars.json'),
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('cars.json'),

        },
        {
            path: "/aboutUS",
            element: <AboutUs></AboutUs> ,
        },
        {
            path: "/addProduct",
            element: <AddCars></AddCars> ,
        },
        {
            path: "/allCars",
            element: <AllCars></AllCars> ,
            loader: () => fetch('http://localhost:5000/cars/'),

        },
        {
          path: "/updateCar/:id",
          element: <UpdateCars></UpdateCars> ,
          loader: ({params}) => fetch(`http://localhost:5000/cars/${params.id}/`)
      },
        {
            path: "/signUp",
            element: <SignUp></SignUp>,
        },
        {
            path: "/product",
            element: <Product></Product>,
            
        },
        {
            path: "/signIn",
            element:<SignIn></SignIn>,
        }
      ]
    },
  ]);

  export default router