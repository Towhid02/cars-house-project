/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaGoogle} from 'react-icons/fa';
import {  BiShow } from 'react-icons/bi';


const SignUp = () => {

  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('')
    const [show, setShow] = useState('')

  const { createUser, setUser } = useContext(AuthContext)
  
  const navigate = useNavigate()

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

    createUser( name, email, password )
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
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSignUp}>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-itim">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
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
          <button className="btn btn-primary">Sign up</button>
        </div>
      </form>
      <p className=" font-itim">OR</p>
      <div className="form-control mt-6">
          <button className="btn btn-primary"><FaGoogle></FaGoogle>Google</button>
        </div>
        <div className="form-control mt-6">
         <p className=" font-itim">Don't have account <button className="btn btn-link"><Link to={'/signIn'}>Sign In</Link></button></p>
        </div>
        {
        setRegisterError && <p>{registerError}</p>
        }
        {
        success && <p className="text-green-700">{success}</p>
        }
    </div>
    
  </div>
</div>
<Footer></Footer>
        </div>
    );
};

export default SignUp;