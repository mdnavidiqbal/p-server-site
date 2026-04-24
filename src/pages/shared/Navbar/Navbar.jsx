// import React, { use, useState } from "react";
// import { Link } from "react-router";
// import { AuthContext } from "../../../provider/AuthProvider";
// import { IoHome } from "react-icons/io5";
// import { GrServices } from "react-icons/gr";
// import { MdContactMail } from "react-icons/md";
// import { CgProfile } from "react-icons/cg";
// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { user, logOut } = use(AuthContext);
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };
//   const handleLogout = () => {
//     console.log("LogOut");
//     logOut()
//       .then(() => {
//         alert("Logout Successfully");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   return (
//     <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
//       {/* Logo - LEFT */}
//       <div className="navbar-start">
//         <Link to="/home" className="btn btn-ghost text-xl ml-2 lg:ml-10">
//         <img src="/src/assets/logo.jpg" className="w-10 h-10 rounded-3xl" alt="" />
//           Nikha
//         </Link>
//       </div>

//       {/* Desktop Menu - CENTER */}
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 gap-4">
//           <li>
//             <Link to="/home">
//               <IoHome className="text-xl" />
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/hero"><GrServices className="text-xl" />Our Services</Link>
//           </li>
//           <li>
//             <Link to="/contact"><MdContactMail className="text-xl" />Contact Us</Link>
//           </li>
//           <li>{user && <Link to="/myprofile"><CgProfile className="text-xl"/>My Profile</Link>}</li>
//         </ul>
//       </div>

//       {/* Desktop Create Bio-data Button & Mobile Menu - RIGHT */}
//       <div className="navbar-end mr-4 lg:mr-10">
//         {/* Desktop Create Bio-data Button */}

//         {user ? (
//           <>
//             <div className="flex gap-5">
//               <div className="h-11 w-11 rounded-4xl bg-blue-400">
//                 <img
//                   className="pt-2 h-11 w-11 rounded-4xl"
//                   src={user.photoURL || "https://i.ibb.co/3C5xJ7R/user.png"}
//                   alt="profile"

//                 />
//               </div>
//               <div>
//                 <Link
//                   onClick={handleLogout}
//                   className="btn btn-primary hidden lg:flex"
//                 >
//                   Logout
//                 </Link>
//               </div>
//             </div>
//           </>
//         ) : (
//           <>
//             <div>
//               <Link to="/login" className="btn btn-primary hidden lg:flex">
//                 Login
//               </Link>
//             </div>
//           </>
//         )}

//         {/* Mobile Dropdown Menu Button - DaisyUI Details Element Use */}
//         <div className="dropdown dropdown-end lg:hidden">
//           <div tabIndex={0} role="button" className="btn btn-ghost">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>

//           {/* Mobile Dropdown Menu */}
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//           >
//             <li>
//               <Link to="/" onClick={closeMenu}>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/myprofile" onClick={closeMenu}>
//                 My Profile
//               </Link>
//             </li>
//             <li>
//               <Link to="/hero" onClick={closeMenu}>
//                 Our Services
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact Us</Link>
//             </li>
//             <li>
//               <Link to="/login" onClick={closeMenu}>
//                 Login
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { use, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../../provider/AuthProvider";
import { IoHome } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { MdContactMail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();
  const menuRef = useRef();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // 🔥 click outside close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Logout Successfully");
        closeMenu();
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-40">
        {/* LEFT */}
        <div className="navbar-start">
          <Link to="/home" className="btn btn-ghost text-xl ml-2 lg:ml-10">
            <img
              src="/src/assets/logo.jpg"
              className="w-10 h-10 rounded-full"
              alt=""
            />
            Nikha
          </Link>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            <li>
              <Link to="/home">
                <IoHome className="text-2xl" /> Home
              </Link>
            </li>
            <li>
              <Link to="/hero">
                <GrServices className="text-2xl" /> Services
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <MdContactMail className="text-2xl" /> Contact
              </Link>
            </li>
            {user && (
              <li>
                <Link to="/myprofile">
                  <CgProfile className="text-2xl" /> Profile
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end mr-4 lg:mr-10 flex items-center gap-4">
          {user ? (
            <>
              {/* Profile Pic */}
              <img
                onClick={toggleMenu}
                className="w-11 h-11 rounded-full cursor-pointer border-2 border-blue-400"
                src={user.photoURL || "https://i.ibb.co/3C5xJ7R/user.png"}
                alt="profile"
              />

              {/* Desktop Logout */}
              <button
                onClick={handleLogout}
                className="btn btn-primary hidden lg:flex"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Login */}
              <Link to="/login" className="btn btn-primary hidden lg:flex">
                Login
              </Link>

              {/* Menu Icon */}
              <button onClick={toggleMenu} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h10m-10 6h16"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>

      {/* ================= SIDEBAR / DROPDOWN ================= */}
      {isMenuOpen && (
        <div ref={menuRef} className="fixed top-16 right-4 z-50">
          <div className="w-[260px] sm:w-[280px] bg-white shadow-xl rounded-xl p-5 animate-slideInRight">
            <h2 className="text-lg font-bold mb-4">Menu</h2>

            <ul className="space-y-3 text-base">
              <li>
                <Link to="/home" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/hero" onClick={closeMenu}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>

              {user && (
                <li>
                  <Link to="/myprofile" onClick={closeMenu}>
                    My Profile
                  </Link>
                </li>
              )}
              {user && (
                <li>
                  <Link to="dashboard">Dashboard</Link>
                </li>
              )}
              {user ? (
                <li>
                  <button onClick={handleLogout} className="text-red-500">
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <Link to="/login" onClick={closeMenu}>
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
