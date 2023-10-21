/* eslint-disable react/prop-types */



import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ProductCard = ({car}) => {
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
                    }
                })
            // 
            }
          })

    }
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className=" container w-full h-60" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{brand}</h2>
    <h2 className="card-title">{model}</h2>
    <p>{type}</p>
    <p>{price} Tk</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
      
      <button className="btn btn-primary"><Link to={`updateCar/${_id}`}>Update</Link></button>
      
      
      <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
     
     
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCard;