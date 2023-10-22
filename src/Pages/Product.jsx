import { useLoaderData } from "react-router-dom";
import BrandsCard from "../Components/BrandsCard";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";



const Product = () => {

    const brandsName = useLoaderData()
    console.log(brandsName);
   
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 rounded-xl p-8" style={{backgroundImage:'url(../../public/images/back11.avif)'}}>
           {
                 brandsName.map(singleBrand => <BrandsCard
                 key={singleBrand.id}
                 singleBrand={singleBrand}
                 >
                 </BrandsCard>)
           }
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Product;