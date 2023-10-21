/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const BrandsCard = ({singleBrand}) => {

    const { _id, brand, model, type, price, image }= singleBrand;
    return (
        <div>
            <h1>{}</h1>
            <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image}alt="Shoes" className="rounded-xl w-72 h-60" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-5xl font-itim">{brand}</h2>
    <h2 className="card-title font-itim">Model: {model}</h2>
    <h2 className="card-title font-itim">Type:  {type}</h2>
    <h2 className="card-title font-itim">Price: {price} TK </h2>
    <div className="rating rating-sm">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" checked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" />
</div>
    <p className="font-itim">Discover the power of innovation and the thrill of the road with our latest lineup of cutting-edge vehicles. </p>
    <div className="card-actions">
      <button className="btn btn-primary font-itim"><Link to={`details/${_id}`}>DETAILS</Link></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BrandsCard;