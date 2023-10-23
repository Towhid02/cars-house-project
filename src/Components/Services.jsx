import service1 from "../assets/oil.avif"
import service2 from "../assets/color.avif"
import service3 from "../assets/painting.avif"
import service4 from "../assets/tire.jpg"
import service5 from "../assets/maintain.avif"
import service6 from "../assets/man.avif"

const Services = () => {
    return (
        <div className=" p-10 rounded-xl my-2 bg-serviceBg"> 
        <h1 className=" font-bold text-5xl my-5 font-grand text-blue-300"> Our Other Services</h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
         
         
        >

            {/* 1 */}
            <div >
            <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="h-60 w-80" src={service1} alt="Shoes" /></figure>
            <div className=" card-body card-actions justify-center">
            <button className="btn text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5  text-center mr-2 mb-2">OIL CHANGES</button>
            </div>
            </div>
            </div>
            {/* 2 */}
            <div>
            <div >
            <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className="h-60 w-80" src={service2} alt="Shoes" /></figure>
            <div className=" card-body card-actions justify-center">
            <button className="btn text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5  text-center  mr-2 mb-2 ">PAINTING</button>
            </div>
            </div>
            </div>
            </div>
            {/* 3 */}
            <div >
            <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className="h-60 w-80" src={service3} alt="Shoes" /></figure>
            <div className=" card-body card-actions justify-center">
            <button className="btn text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5  text-center mr-2 mb-2 ">CAR WASH</button>
            </div>
            </div>
            </div>
            {/* 4 */}
            <div>
            <div >
            <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className="h-60 w-80" src={service4} alt="Shoes" /></figure>
            <div className=" card-body card-actions justify-center">
            <button className="btn text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5  text-center mr-2 mb-2 ">BRAKE INSPECTION</button>
            </div>
            </div>
            </div>
            </div>
            {/* 5 */}
            <div >
            <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className="h-60 w-80" src={service5} alt="Shoes" /></figure>
            <div className=" card-body card-actions justify-center">
            <button className="btn text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5  text-center mr-2 mb-2 ">ROUTINE MAINTENANCE</button>
            </div>
            </div>
            </div>
            {/* 6 */}
            <div>
            <div >
            <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className="h-60 w-80" src={service6} alt="Shoes" /></figure>
            <div className=" card-body card-actions justify-center">
            <button className="btn text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5  text-center  mr-2 mb-2 ">ENGINE REPAIRS</button>
            </div>
            </div>
            </div>
            </div>
           
            </div>
        </div>
            );
            };

            export default Services;