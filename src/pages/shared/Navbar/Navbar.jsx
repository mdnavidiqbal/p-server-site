import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = use(AuthContext);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const handleLogout = () => {
    console.log("LogOut");
    logOut()
      .then(() => {
        alert("Logout Successfully")
      })
      .catch((error) => {
        console.log(error)
      });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      {/* Logo - LEFT */}
      <div className="navbar-start">
        <Link to="/home" className="btn btn-ghost text-xl ml-2 lg:ml-10">
          Nikha
        </Link>
      </div>

      {/* Desktop Menu - CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/hero">Our Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>{user && <Link to="/myprofile">My Profile</Link>}</li>
        </ul>
      </div>

      {/* Desktop Create Bio-data Button & Mobile Menu - RIGHT */}
      <div className="navbar-end mr-4 lg:mr-10">
        {/* Desktop Create Bio-data Button */}

        {user ? (
          <>
            <div className="flex gap-5">
              <div className="h-11 w-11 rounded-4xl bg-blue-400">
                <img
                  className="pt-2 h-11 w-11 rounded-4xl"
                  src={user.photoURL || "https://i.ibb.co/3C5xJ7R/user.png"}
                  alt="profile"
                />
              </div>
              <div>
                <Link
                  onClick={handleLogout}
                  className="btn btn-primary hidden lg:flex"
                >
                  Logout
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <Link to="/login" className="btn btn-primary hidden lg:flex">
                Login
              </Link>
            </div>
          </>
        )}

        {/* Mobile Dropdown Menu Button - DaisyUI Details Element Use */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* Mobile Dropdown Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/myprofile" onClick={closeMenu}>
                My Profile
              </Link>
            </li>
            <li>
              <Link to="/hero" onClick={closeMenu}>
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/login" onClick={closeMenu}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
