/* eslint-disable react/prop-types */



import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ProductCard = ({car, cars, setCars}) => {
    const {_id, brand, model, type, image, price} = car;
    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/cars/${_id}`, {
                    method: 'DELETE'
                })
                .then (res => res.json())
                .then(data =>{
                    console.log(data);
                    if (data.deleteCount > 0) {
                        Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                      const remaining = cars.filter(ca => ca._id !== _id) ;  
                      setCars(remaining)  
                    }
                })
            // 
            }
          })

    }
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl " style={{backgroundImage:'url(../../public/images/back5.jpg)'}}>
  <figure><img className=" container w-full h-60" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl text-[#51060b] font-bold font-itim">{brand}</h2>
    <h2 className="card-title text-[#3f5efb] font-itim">Model: {model}</h2>
    
    <p className="card-title text-[#000851] font-itim"> Type: {type}</p>
    <div className="rating rating-sm">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" checked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" />
</div>
    <p className="card-title text-[#182848] font-itim">Price: {price} Tk</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
      
      <button className="btn btn-primary"><Link to={`/updateCar/${_id}`}>Update</Link></button>
      
      
      <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
     
     
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCard;
// background: linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%); #00c9ff
// background: linear-gradient(90deg, #1CB5E0 0%, #000851 100%); #000851
// background: linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%); #3f5efb
// background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%); #182848
// background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);