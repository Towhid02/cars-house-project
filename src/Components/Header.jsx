import audi from "../../public/images/audi1.jpg"
import bmw from "../../public/images/bmw1.jpg"
import benz from "../../public/images/benz.jpg"
import toyota from "../../public/images/toyota-slider.jpg"

const Header = () => {
    return (
        <div>
        <div className="carousel w-full rounded-2xl my-2">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={benz}className="w-full brightness-50 opacity-95"  />
    <div  className=" absolute  p-5 md:p-24 lg:p-60 ">
    <h1 className=" text-xl  md:text-5xl lg:text-6xl font-bold text-[#35d83d] font-itim">MERCEDES-BENZ</h1>
    <p className=" m-5 md:p-5 text-sm md:text-2xl lg:text-4xl text-white  font-mooli">Mercedes-Benz, commonly referred to as Mercedes and sometimes as Benz, is a German luxury and commercial vehicle automotive brand established in 1926.</p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
     
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={bmw} className="w-full brightness-50 opacity-95" />
    <div  className=" absolute inset-0 p-5 md:p-24 lg:p-60 ">
    <h1 className=" text-2xl  md:text-5xl lg:text-6xl font-bold text-[#35d83d] font-itim">AUDI</h1>
    <p className="  md:p-5 text-base md:text-2xl lg:text-4xl text-white  font-mooli">Audi AG is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany. </p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={toyota} className="w-full brightness-50 opacity-95" />
    <div  className=" absolute inset-0 p-5 md:p-24 lg:p-60 ">
    <h1 className=" text-2xl  md:text-5xl lg:text-6xl font-bold text-[#35d83d] font-itim">TOYOTA</h1>
    <p className="  md:p-5 text-base md:text-2xl lg:text-4xl text-white  font-mooli">Toyota Motor Corporation is a Japanese multinational automotive manufacturer headquartered in Toyota City, Aichi, Japan. </p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={audi} className="w-full brightness-50 opacity-95" />
    <div  className=" absolute inset-0 p-5 md:p-24 lg:p-60 ">
    <h1 className=" text-2xl  md:text-5xl lg:text-6xl font-bold text-[#35d83d] font-itim">BMW</h1>
    <p className="  md:p-5 text-base md:text-2xl lg:text-4xl text-white  font-mooli">Bayerische Motoren Werke AG, abbreviated as BMW, is a German multinational manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany.</p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
</div>  
    );
};

export default Header;