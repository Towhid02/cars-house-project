import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";



const Details = () => {

  const { user } = useContext(AuthContext)
    
    const brands = useLoaderData()
    console.log(brands);

    const {_id, brand, model, type, price, image }= brands;

    const  handleCart = ()=> {
      const data = {
        email: user.email,
        products: brands

      }
      console.log(data);
      fetch('http://localhost:5000/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Car Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
        
    }


    return (
        <div>
            <Navbar></Navbar>
           <div className="card glass bg-[]" style={{backgroundImage: 'url(/public/images/back5.jpg)'}}>
  <figure><img className=" rounded-lg shadow-2xl" src={image} alt="car!"/></figure>
  <div className="card-body" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
    <h2 className="card-title text-[#046C4E] text-2xl md:text-5xl font-itim">{brand} Automobile</h2>
    <h2 className="card-title text-[#046C4E] text-xl md:text-3xl font-mooli ">Model : {model}-series-2022</h2>
    <h2 className="card-title text-[#046C4E] text-xl md:text-3xl font-mooli">Type  : {type} & Four Wheeler</h2>
    <h2 className="card-title text-[#046C4E] text-xl md:text-3xl font-mooli"> Price : {price} Tk </h2>
    <div className="rating ">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500"  />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" checked />
</div>
    <p className="font-itim text-blue-800 text-justify">This type of car that combines the features of a passenger car with those of an off-road vehicle. SUVs are typically larger and heavier than cars, and they have higher ground clearance, which makes them better suited for driving over rough terrain. Many SUVs also have four-wheel drive or all-wheel drive, which gives them even more traction in slippery or challenging conditions.</p>
  </div>
  <div className="">
  <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2"><Link to={`/updateCar/${_id}`}>Update</Link></button>

  <button type="button" className=" relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-medium text-gray-900 rounded-full group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400" onClick={()=> handleCart()}>
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Add Cart</span></button>
  </div>
</div>
<Footer></Footer>
</div>
    );
};

export default Details;