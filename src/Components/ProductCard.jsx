/* eslint-disable react/prop-types */




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

                fetch(`https://cars-world-server-6zjoi6jd9-md-towhidul-islams-projects.vercel.app/cars/${_id}`, {
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
            <div className="card card-compact  bg-base-100 shadow-xl bg-productCartBg" >
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
    <div className="card-actions flex justify-center">
    <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Details</button>
      
    
      
      
    <button type="button"  onClick={() => handleDelete(_id)} className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
      
     
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