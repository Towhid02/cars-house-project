import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";






const Brand = () => {

    const brands = useLoaderData()
    console.log(brands);
   
    return (
        <div>
        <div className="p-10 rounded-xl my-2"style={{backgroundImage:'url(../../public/images/back7.avif)'}} >
            <h1 className=" text-center text-6xl font-grand font-bold">Our Brands</h1>
         
            <div className=" grid grid-cols-2  md:grid-cols-3 gap-5 text-center my-10"  data-aos="fade-up"
                data-aos-anchor-placement="top-center" >
            {
                brands.map(brand => 
                <BrandCard key={brand?.id}
                brands={brand}
                >

                </BrandCard>)
            }
            </div>
        </div>
        </div>
    );
};

export default Brand;