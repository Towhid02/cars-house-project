/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
// import { FaGoogle} from 'react-icons/fa';
import {  BiShow } from 'react-icons/bi';


const SignUp = () => {

  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('')
    const [show, setShow] = useState('')

  const { createUser, setUser, signInWithGoogle } = useContext(AuthContext)
  
  const navigate = useNavigate()

  const handleGoogleSignIN =  () => {
    console.log("clicked");
    signInWithGoogle()
    .then( result => {
      console.log(result.user);
      setUser(result.user)
      navigate("/")  
    })
    .catch(error =>{
           console.error(error);
         })

   }

  const handleSignUp = e =>{
    e.preventDefault();
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    // const accepted = e.target.terms.checked;
    console.log(name, email, password );
  //   if (password.length < 6) {
  //     setRegisterError('Password at least 6 characters');
  //     return;
  // }
  // else if(!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
  //     setRegisterError('Password must be have an uppercase or special letter')
  //     return;
  // }
  // else if(!accepted){
  //     setRegisterError('Please accept our terms & condition')
  //     return;
  // }

    setRegisterError('')
    setSuccess('');

    createUser( email, password )
    .then(result => {
        console.log(result.user);
        setUser(result.user)
        navigate("/")
      setSuccess(
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
      )

      })
    .catch(error => {
          console.error(error); 
      })
  }
    return (
        <div>
          <Navbar></Navbar>
            <div className="hero  min-h-screen bg-base-200" style={{backgroundImage: 'url(../../public/images/back6.jpg)'}}>
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold font-mooli">Sign Up now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full bg-base-100 max-w-lg shadow-2xl">
      <form className="card-body" onSubmit={handleSignUp}>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-itim">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className=" input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-itim">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-itim">Password</span>
          </label>
          <input type={show ? "text" :"password" } 
          name="password" placeholder="new password" 
          className="input input-bordered" required />
          <span className="btn" onClick={() => setShow(!show)}><BiShow></BiShow> Show</span>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <div className="mt-4">
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms"> Terms & Condition</label>
         </div>
        </div>
        <div className="form-control mt-6">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Sign up</span></button>
        </div>
        <div className="form-control mt-4 mx-12">
      <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-xm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2" onClick={handleGoogleSignIN}><svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
    <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
  </svg>
  Sign up with Google</button>
        </div>
        <div className="form-control mt-6">
         <p className=" font-itim text-xl">Already have account <button className="btn btn-link text-xl"><Link to={'/signIn'}>Sign In</Link></button></p>
        </div>
        {
        setRegisterError && <p>{registerError}</p>
        }
        {
        success && <p className="text-green-700">{success}</p>
        }
      </form>
      
       
    </div>

  </div>
</div>
<Footer></Footer>
        </div>
    );
};

export default SignUp;