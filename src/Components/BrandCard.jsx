/* eslint-disable react/prop-types */


const BrandCard = ({brands}) => {
    console.log(brands);
const {brand_title, image} = brands

    return (
        <div>
          <div className="card w-full lg:w-80 glass">
  <figure><img src={image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className=" btn btn-outline card-title font-itim text-3xl text-[#D2E0FB]" >{brand_title}</h2>
  </div>
</div>
        </div>
    );
};

export default BrandCard;