import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";





const Brand = () => {

    const brands = useLoaderData()
    console.log(brands);
   
    return (
        <div>
            {
                brands.map(brand => 
                <BrandCard key={brand.id}
                brands={brand}
                >

                </BrandCard>)
            }
        </div>
    );
};

export default Brand;