/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";



const SignIn = () => {

    const {signIn,  setUser, signInWithGoogle} = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('')

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

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log( email, password );
        if (password.length < 6) {
          setRegisterError('Password at least 6 characters');
          return;
      }
      else if(!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
          setRegisterError('Password must be have an uppercase or special letter')
          return;
          
      }
        signIn( email, password )
        .then(result => {
            console.log(result.user);
            setRegisterError('')
          setSuccess('');

          setUser(result.user)
          navigate("/")
          
          

        })
        .catch(error => {
            console.error(error);
          
           
        })
            }
    return (
        <div>
          <Navbar></Navbar>
             <div className="hero min-h-screen bg-base-200 p-10" style={{backgroundImage: 'url(../assets/back6.jpg)'}}>
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold font-mooli">Sign In now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSignIn}>
        <div className="form-control" >
          <label className="label">
            <span className="label-text font-itim">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-itim">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign In</button>
        </div>
        <div className="form-control mt-4 mx-12">
      <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-xm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2" onClick={handleGoogleSignIN}><svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
    <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
  </svg>
  Sign up with Google</button>
        </div>
      </form>
      <div className="form-control mt-6">
         <p className="font-itim">Don't have account <button className="btn btn-link"><Link to={'/signUp'}>Sign Up</Link></button></p>
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

export default SignIn;