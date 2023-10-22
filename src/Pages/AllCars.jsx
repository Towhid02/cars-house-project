import { useLoaderData } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import Header from "../Components/Header";

const AllCars = () => {
    const loadedCars = useLoaderData()
    const [cars, setCars] = useState(loadedCars)
    return (
        <div>
            <Navbar></Navbar>
            {/* <Header></Header> */}
        <h1 className="text-5xl">All cars</h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          
            cars.map(car=> <ProductCard 
            key={car._id}
            car={car}
            cars={cars}
            setCars={setCars}
            ></ProductCard>)
        }
        </div>
        <Footer></Footer>
    </div>
    );
};

export default AllCars;