/* eslint-disable react/prop-types */
import Swal from "sweetalert2";


const Cart = ({cart, cars, setCars}) => {
    console.log(cart);
   

    const {_id, brand, model, type, price, image } = cart
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

                fetch(`https://cars-world-server-6zjoi6jd9-md-towhidul-islams-projects.vercel.app/carts/${_id}`, {
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
                      const remaining = cars.filter(car => car._id !== _id) ;  
                      setCars(remaining)  
                    }
                })
            // 
            }
          })

    }
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
            <figure><img className="w-80 h-60" src={image} alt="Album"/></figure>
            <div className="card-body">
            <h2 className="card-title text-3xl text-[#51060b] font-bold font-itim"> Brand : {brand}</h2>
            <h2 className="card-title text-[#3f5efb] font-itim">Model : {model}</h2>
            <h2 className="card-title text-[#000851] font-itim">Type : {type}</h2>
            <p className="card-title  font-itim">Price : {price} Tk</p>
            <div className="card-actions justify-end">
            <button type="button"  onClick={() => handleDelete(_id)} className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
            </div>
            </div>
</div>
        </div>
    );
};

export default Cart;