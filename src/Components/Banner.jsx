import { Link } from "react-router-dom";
import banner from "../assets/bannner2.jpg"

const Banner = () => {
    return (
        <div>
            <div className="hero rounded-3xl">
                <img className=" rounded-2xl w-full h-full" src={banner} alt="" />
  <div className="hero-overlay bg-opacity-70 rounded-3xl"></div>
  <div className="hero-content text-center font-mooli text-white">
    <div className="max-w-md p-5 " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
      <h1 className="mb-5 text-3xl md:text-5xl font-bold font-galada  text-[#21ff06]">Cars World</h1>
      <p className='mb-5 text-xl md:text-2xl'>
          Car House is a family-owned and operated car dealership in Chattogram, Bangladesh. We have been serving the community for over five years, and we are proud to be your one-stop shop for all your automotive needs.
            </p>
      <div>
      <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-itim inline-flex items-center font-bold rounded-full text-2xl px-10 py-2.5 text-center mr-2 mb-2"><Link to={"/allCars"}>ALL CARS</Link></button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;