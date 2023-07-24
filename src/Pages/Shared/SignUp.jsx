import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase/firebase.config";

const SignUp = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen  rounded-xl">
      <div className="hero-content flex-col lg:flex-row">
        <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl text-white ">
          <div className="card-body bg-lime-300 rounded-lg">
            <h1 className="text-3xl text-center font-bold">SignUp now!</h1>
            <form onSubmit={handleSignUp}>
              <div className="flex gap-3">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered bg-slate-200 text-black"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered bg-slate-200 text-black"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white"> Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered bg-slate-200 text-black"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="PhotoUrl"
                  className="input input-bordered bg-slate-200 text-black"
                />
              </div>
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-white">
                  Forgot password?
                </a>
              </label>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn border-white bg-white text-yellow-600"
                  value="SignUp"
                />
              </div>
            </form>
            <div>
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-block mt-3 bg-white border-white text-yellow-600">
                <FaGoogle />
                With Google
              </button>
            </div>
            <p className="my-4 text-center text-gray-700">
              Have an account?{" "}
              <Link to="/login" className="text-yellow-900 font-bold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
