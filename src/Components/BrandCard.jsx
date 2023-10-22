/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const BrandCard = ({brands}) => {

 
  
    console.log(brands);
const {brand_title, image} = brands

    return (
        <div>
          <div className="card w-full lg:w-80 glass">
  <figure><img src={image} alt="car!"/></figure>
  <div className="card-body card-actions justify-center">
    <h2 className=" btn btn-outline  font-itim text-base lg:text-3xl text-[#D2E0FB]"  ><Link to={`/brand/${brands.brand_title}`}>{brand_title}</Link></h2>
  </div>
</div>
        </div>
    );
};

export default BrandCard;