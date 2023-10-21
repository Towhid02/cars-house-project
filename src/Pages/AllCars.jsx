import { useLoaderData } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AllCars = () => {
    const cars = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
        <h1 className="text-5xl">All cars</h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          
            cars.map(car=> <ProductCard 
            key={car._id}
            car={car}
            ></ProductCard>)
        }
        </div>
        <Footer></Footer>
    </div>
    );
};

export default AllCars;