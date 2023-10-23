/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const UpdateCars = () => {

    const car = useLoaderData()
    const {_id, brand, model, type, image, price} = car;

    const handleUpdateCars = event => {

        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const model = form.model.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const image = form.image.value;

        const updatedCar = {  name, brand, model, type, rating, price, image }

        console.log(updatedCar);
        fetch(`https://cars-world-server-6zjoi6jd9-md-towhidul-islams-projects.vercel.app/cars/${car._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedCar)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Car Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

return (
    <div>
    <Navbar></Navbar>
    <div className="p-24" style={{backgroundImage: 'url(../../public/images/back1.jpg)'}}>
        <h2 className="text-[#51060b] font-extrabold text-2xl font-itim btn   bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800  rounded-full  px-5 py-2.5 text-center mr-2 mb-2">Update Cars</h2>
        <form onSubmit={handleUpdateCars}>
          
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-mooli"> Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" 
                        name="name" placeholder=" Name" 
                        className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text text-xl font-mooli">Brand Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" 
                        name="brand" placeholder="Brand Name" 
                        className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form supplier row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-mooli">Model</span>
                    </label>
                    <label className="input-group">
                        <input type="text" 
                        name="model" 
                        placeholder=" Model" 
                        className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text text-xl font-mooli">Type</span>
                    </label>
                    <label className="input-group">
                        <input type="text" 
                        name="type" placeholder="Type" 
                        className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form category and details row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-mooli">Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="rating" 
                        placeholder="Rating" 
                        className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text text-xl font-mooli">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="number" name="price" placeholder="Price" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form image url row */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl font-mooli">image URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="image" placeholder="image URL" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <input type="submit" value="update Car" className="btn btn-block text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2" />

        </form>
    </div>
    <Footer></Footer>
    </div>
);
};

export default UpdateCars;