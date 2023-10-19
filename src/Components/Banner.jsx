import banner from "../../public/images/bannner2.jpg"

const Banner = () => {
    return (
        <div>
            <div className="hero relative">
                <img className=" w-full h-full" src={banner} alt="" />
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-center text-2xl font-mooli text-white">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold font-galada  text-[#21ff06]">Cars World</h1>
      <p className='mb-5'>
          Car House is a family-owned and operated car dealership in Chattogram, Bangladesh. We have been serving the community for over five years, and we are proud to be your one-stop shop for all your automotive needs.
            </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;