/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const BrandsCard = ({singleBrand}) => {

    const { _id, brand, model, type, price, image }= singleBrand;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl"  
     data-aos-anchor-placement="center-center">
  <figure className=" ">
    <img src={image}alt="Shoes" className="rounded-xl w-full " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-4xl md:text-5xl font-itim">{brand}</h2>
    <div className=" md:flex gap-5">
    <h2 className=" font-mooli text-xl font-semibold"> {model}</h2>
    <h2 className=" font-mooli font-semibold">Type:  {type}</h2>
    </div>
    <h2 className="md:card-title font-itim">Price: {price} TK </h2>
    <div className="rating rating-sm">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" checked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" />
</div>
    <div className="card-actions">
      <button className="btn btn-primary font-itim"><Link to={`/details/${_id}`}>DETAILS</Link></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BrandsCard;