import {
    createBrowserRouter,
  } from "react-router-dom";


import Home from "./Pages/Home";
import Root from "./Root";
import AboutUs from "./Components/AboutUs";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import AddCars from "./Pages/AddCars";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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
            path: "/signUp",
            element: <SignUp></SignUp>,
        },
        {
            path: "/signIn",
            element:<SignIn></SignIn>,
        }
      ]
    },
  ]);

  export default router