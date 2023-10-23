
import Swal from 'sweetalert2'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const AddCars = () => {

        const handleAddCars = event => {
            event.preventDefault();
    
            const form = event.target;
    
            const name = form.name.value;
            const brand = form.brand.value;
            const model = form.model.value;
            const type = form.type.value;
            const rating = form.rating.value;
            const price = form.price.value;
            const image = form.image.value;
    
            const newCar = { name, brand, model, type, rating, price,image }
    
            console.log(newCar);
            fetch('https://cars-world-server-6zjoi6jd9-md-towhidul-islams-projects.vercel.app/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
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
        <div className="bg-[#F4F3F0] p-10 md:p-24 rounded-3xl my-8 bg-addCarBg" >
            <h2 className="text-3xl font-extrabold text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  rounded-full px-5 py-2.5 text-center mr-2 mb-2 font-mooli">ADD CARS</h2>
            <form onSubmit={handleAddCars}>
              
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-mooli text-white"> Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" 
                            name="name" placeholder=" Name" 
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-xl font-mooli text-white">Brand Name</span>
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
                            <span className="label-text text-xl font-mooli text-white">Model</span>
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
                            <span className="label-text text-xl font-mooli text-white">Type</span>
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
                            <span className="label-text text-xl font-mooli text-white">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" 
                            placeholder="Rating" 
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-xl font-mooli text-white">Price</span>
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
                            <span className="label-text text-xl font-mooli text-white">image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Car" className="btn text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  rounded-full px-5 py-2.5 text-center mr-2 mb-2 btn-block" />

            </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddCars;