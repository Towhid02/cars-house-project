import { useContext } from "react";


import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";


const Navbar = () => {

  const {user, logOut} = useContext(AuthContext)
    const Links = <>
         <li><Link to={"/"}>Home</Link></li>
         <li><Link to={"/addProduct"}>Add Product</Link></li>
         <li><Link to={"/aboutUs"}>About Us</Link></li>
         <li><Link to={"/signUp"}>Sign Up</Link></li>
    </>
    return (
        <div className="  w-full   border-2 rounded-lg px-10 py-2" style={{backgroundImage:'url(../../public/images/nav.png)'}}>
         
            <div className="navbar navbar-expand-lg navbar-dark shadow-5-strong rounded-lg">
              
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
       {Links}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-[#aefb2a] text-2xl font-galada">Cars_World</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-black ">
      {Links}
    </ul>
  </div>
  <div className="navbar-end">
  {
                !user ?  <li className="btn btn-accent bg-[#aefb2a] text-black"><Link to={'/login'}>Sign In</Link></li> 
                :  <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL ? user?.photoURL : "/public/avater.jpg"} />
                  </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li><a>Settings</a></li>
                  <li><a   onClick={()=>logOut()}>Logout</a></li>
                </ul>
              </div>
              }
  </div>
</div>
        </div>
    );
};

export default Navbar;