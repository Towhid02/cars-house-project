import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";
import Cart from "../Components/Cart";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AddCarts = (data) => {
  const [carts, setCarts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/carts/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCarts(data);
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: "Success!",
              text: "Cart Updated Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        })
        .catch((error) => {
          console.error("Error fetching cart data:", error);
        });
    }
  }, [user?.email]);

  return (
    <div>
      <Navbar></Navbar>
      <h1 className=" font-bold text-5xl my-5 font-grand">My Chart </h1>
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
      {carts.map((cart) => (
        <Cart key={cart.id} cart={cart} />
      ))}
    </div>
    <Footer></Footer>
    </div>
  );
};

export default AddCarts;
