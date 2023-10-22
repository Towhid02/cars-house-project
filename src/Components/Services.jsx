import service1 from "../../public/images/oil.avif"
import service2 from "../../public/images/color.avif"
import service3 from "../../public/images/painting.avif"
import service4 from "../../public/images/tire.jpg"
import service5 from "../../public/images/maintain.avif"
import service6 from "../../public/images/man.avif"

const Services = () => {
    return (
        <div className=" p-10 rounded-xl my-2 " style={{backgroundImage: 'url(../../public/images/back10.avif)'}}> 
        <h1 className=" font-bold text-5xl my-5 font-grand"> Our Other Services</h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
         
         
        >

            {/* 1 */}
            <div >
            <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="h-60 w-80" src={service1} alt="Shoes" /></figure>
            <div className=" card-body card-actions justify-center">
            <button className="btn ">OIL CHANGES</button>
            </div>
            </div>
            </div>
            {/* 2 */}
            <div>
            <div >
            <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className="h-60 w-80" src={service2} alt="Shoes" /></figure>
            <div className=" card-body card-actions justify-center">
            <button className="btn ">PAINTING</button>
            </div>
            </div>
            </div>
            </div>
            {/* 3 */}
            <div >
            <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className="h-60 w-80" src={service3} alt="Shoes" /></figure>
            <div className=" card-body card-actions justify-center">
            <button className="btn ">CAR WASH</button>
            </div>
            </div>
            </div>
            {/* 4 */}
            <div>
            <div >
            <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className="h-60 w-80" src={service4} alt="Shoes" /></figure>
            <div className=" card-body card-actions justify-center">
            <button className="btn ">BRAKE INSPECTION</button>
            </div>
            </div>
            </div>
            </div>
            {/* 5 */}
            <div >
            <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className="h-60 w-80" src={service5} alt="Shoes" /></figure>
            <div className=" card-body card-actions justify-center">
            <button className="btn ">ROUTINE MAINTENANCE</button>
            </div>
            </div>
            </div>
            {/* 6 */}
            <div>
            <div >
            <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className="h-60 w-80" src={service6} alt="Shoes" /></figure>
            <div className=" card-body card-actions justify-center">
            <button className="btn ">ENGINE REPAIRS</button>
            </div>
            </div>
            </div>
            </div>
           
            </div>
        </div>
            );
            };

            export default Services;