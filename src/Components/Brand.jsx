import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";






const Brand = () => {

    const brands = useLoaderData()
    console.log(brands);
   
    return (
        <div className="my-10">
            <h1 className=" text-center text-6xl font-grand font-bold">Our Brands</h1>
         
            <div className=" grid grid-cols-3 gap-10   justify-center items-center text-center my-10" >
            {
                brands.map(brand => 
                <BrandCard key={brand.id}
                brands={brand}
                >

                </BrandCard>)
            }
            </div>
        </div>
    );
};

export default Brand;