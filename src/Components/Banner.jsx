import { Link } from "react-router-dom";
import banner from "../../public/images/bannner2.jpg"

const Banner = () => {
    return (
        <div>
            <div className="hero rounded-3xl">
                <img className=" rounded-3xl w-full h-full" src={banner} alt="" />
  <div className="hero-overlay bg-opacity-40 rounded-3xl"></div>
  <div className="hero-content text-center text-2xl font-mooli text-white">
    <div className="max-w-md" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
      <h1 className="mb-5 text-5xl font-bold font-galada  text-[#21ff06]">Cars World</h1>
      <p className='mb-5'>
          Car House is a family-owned and operated car dealership in Chattogram, Bangladesh. We have been serving the community for over five years, and we are proud to be your one-stop shop for all your automotive needs.
            </p>
      <div>
      <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-itim inline-flex items-center font-bold rounded-lg text-xl px-10 py-2.5 text-center mr-2 mb-2"><Link to={"/allCars"}>EXPLORE <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg></Link></button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;