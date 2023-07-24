import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { app } from "../../firebase/firebase.config";
const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  const { signIn } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
        alert("login success");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen  rounded-xl">
      <div className="hero-content flex-col lg:flex-row">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl text-white ">
          <div className="card-body bg-lime-300 rounded-lg">
            <h1 className="text-3xl text-center font-bold">Login now!</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered bg-slate-200 text-black"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white ">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered bg-slate-200 text-black"
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-white">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn border-white bg-white text-yellow-600"
                  value="Login"
                />
              </div>
            </form>
            <div>
              {" "}
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-block mt-3 bg-white border-white text-yellow-600">
                <FaGoogle />
                With Google
              </button>
            </div>
            <p className="my-4 text-center text-gray-700">
              New to EduLE?{" "}
              <Link to="/signUp" className="text-yellow-700 font-bold">
                SignUp
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
