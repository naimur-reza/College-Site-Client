import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsBook } from "react-icons/bs";
import { AuthContext } from "../../provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/colleges">Colleges</Link>
      </li>
      <li>
        <Link to="/admission">Admission</Link>
      </li>
      <li>
        <Link to="/myColleges">My Colleges</Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar text-white font-serif bg-black/40 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu text-lime-500 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItem}
          </ul>
        </div>
        <a className="text-5xl font-medium mx-8">
          <BsBook className="text-5xl mb-2 text-lime-600 inline-block "></BsBook>
          Edu<span className="text-lime-600">YE</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-lime-500 text-lg menu-horizontal px-1 font-mono">
          {navItem}
        </ul>
      </div>
      {user ? (
        <div>
          <div>
            <h2 className="ps-3">{user.displayName}</h2>
          </div>
          <button
            onClick={handleLogOut}
            className="btn border-0 bg-gradient-to-r from-lime-500 to-lime-600 text-white">
            LogOut
          </button>
        </div>
      ) : (
        <div className="navbar-end">
          <Link to="/login">
            <button className="btn border-0 bg-gradient-to-r from-lime-500 to-lime-600 text-white">
              Login
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
