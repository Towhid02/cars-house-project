/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";



const SignIn = () => {

    const {signIn,  setUser} = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('')

    const navigate = useNavigate()

    // const navigate = useNavigate()

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const accepted = e.target.terms.checked;
        console.log( email, password );
        signIn( email, password )
        .then(result => {
            console.log(result.user);
            if (password.length < 6) {
              setRegisterError('Password at least 6 characters');
              return;
          }
          else if(!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
              setRegisterError('Password must be have an uppercase or special letter')
              return;
          }
          else if(!accepted){
              setRegisterError('Please accept our terms & condition')
              return;
          }
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
             <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold font-mooli">Sign In now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
      </form>
      <p>OR</p>
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