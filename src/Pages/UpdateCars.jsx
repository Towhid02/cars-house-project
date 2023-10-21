import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


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
        fetch(`http://localhost:5000/cars/${car._id}`, {
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
    <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">Add a Car</h2>
        <form onSubmit={handleUpdateCars}>
          
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text"> Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" 
                        name="name" placeholder=" Name" 
                        className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
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
                        <span className="label-text">Model</span>
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
                        <span className="label-text">Type</span>
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
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="rating" 
                        placeholder="Rating" 
                        className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Price</span>
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
                        <span className="label-text">image URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="image" placeholder="image URL" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <input type="submit" value="Add Car" className="btn btn-block" />

        </form>
    </div>
);
};

export default UpdateCars;