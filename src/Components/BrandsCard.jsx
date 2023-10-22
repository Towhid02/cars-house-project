/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const BrandsCard = ({singleBrand}) => {

    const { _id, brand, model, type, price, image }= singleBrand;
    return (
        <div>
            <h1>{}</h1>
            <div className="card bg-base-100 shadow-xl"  data-aos="fade-up"
     data-aos-anchor-placement="center-center">
  <figure className=" pt-10">
    <img src={image}alt="Shoes" className="rounded-xl w-full " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl md:text-5xl font-itim">{brand}</h2>
    <div className="flex gap-5">
    <h2 className=" font-mooli">Model: {model}</h2>
    <h2 className=" font-mooli">Type:  {type}</h2>
    </div>
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
      <button className="btn btn-primary font-itim"><Link to={`/details/${_id}`}>DETAILS</Link></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BrandsCard;