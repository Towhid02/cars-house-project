/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Link, useNavigate } from "react-router-dom";



const SignIn = () => {

    const {signIn,  setUser} = useContext(AuthContext)

    const navigate = useNavigate()

    // const navigate = useNavigate()

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log( email, password );
        signIn( email, password )
        .then(result => {
            console.log(result.user);
            setUser(result.user)
            navigate("/")
        })
        .catch(error => {
            console.error(error);
          
           
        })
            }
    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Sign In now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSignIn}>
        <div className="form-control" >
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign In</button>
        </div>
      </form>
      <p>OR</p>
      <div className="form-control mt-6">
         <p>Don't have account <button className="btn btn-link"><Link to={'/register'}>Register</Link></button></p>
        </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignIn;