import choose from "../../public/images/back.jpg"
import slider1 from "../../public/images/bm.jpg"
import slider2 from "../../public/images/to.jpg"
import slider3 from "../../public/images/mb1.jpg"
import slider4 from "../../public/images/ad.jpg"

const Choose = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <img src={choose} alt="" />

  <div className="hero-overlay bg-opacity-50"></div>
  <div className="flex justify-center items-center text-center gap-20">
  <div className="flex-1">
  <div className=" h-96 w-60 carousel carousel-vertical rounded-lg">
  <div className="carousel-item h-full">
    <img src={slider1} />
  </div> 
  <div className="carousel-item h-full">
    <img src={slider2} />
  </div> 
  <div className="carousel-item h-full">
    <img src={slider3} />
  </div> 
  <div className="carousel-item h-full">
    <img src={slider4} />
  </div> 
</div>
  </div>
  <div className="hero-content text-left text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold font-itim">Why You Choose us</h1>
      <p className="mb-5 font-mooli" >There are many reasons why you might choose our car shop. Here are just a few : 
<ul >
    <li>Expert mechanics </li>
    <li>High-quality parts and materials</li>
    <li>Competitive prices</li>
    <li>Competitive prices</li>
    <li> Competitive prices </li>
    <li>Warranty on all repairs </li>
    <li>Convenient location</li>
    <li>Friendly and helpful staff </li>
</ul>
  If you are looking for a car shop that you can trust, then look no further than our shop. We offer the best possible service at the best possible price. We are confident that you will be satisfied with our work.</p>
      
    </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Choose;