// import React, { use, useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router";
// import { AuthContext } from "../../../provider/AuthProvider";
// import { IoHome } from "react-icons/io5";
// import { GrServices } from "react-icons/gr";
// import { MdContactMail } from "react-icons/md";
// import { CgProfile } from "react-icons/cg";
// import { toast } from "react-toastify";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { user, logOut } = use(AuthContext);
//   const navigate = useNavigate();
//   const menuRef = useRef();

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const closeMenu = () => setIsMenuOpen(false);

//   // 🔥 click outside close
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (menuRef.current && !menuRef.current.contains(e.target)) {
//         setIsMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleLogout = async () => {
//     await logOut()
//       .then(() => {
//         toast.success("Logout Successfully");
//         closeMenu();
//         navigate("/");
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <>
//       {/* ================= NAVBAR ================= */}
//       <div className="navbar  bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-sm sticky top-0 z-40">
//         {/* LEFT */}
//         <div className="navbar-start">
//           <Link to="/home" className="btn btn-ghost text-xl ml-2 lg:ml-10">
//             <img
//               src="/src/assets/logo.jpg"
//               className="w-10 h-10 rounded-full"
//               alt=""
//             />
//             Nikha
//           </Link>
//         </div>

//         {/* CENTER */}
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1 gap-6">
//             <li>
//               <Link to="/home">
//                 <img
//                   src="https://i.ibb.co.com/Xrh17QWF/house.png"
//                   alt="user icon"
//                   className="my-1.5 inline-block size-5"
//                 />{" "}
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/hero">
//                 <img
//                   src="https://i.ibb.co.com/rRgMDL02/service.png"
//                   alt="user icon"
//                   className="my-1.5 inline-block size-5"
//                 /> Services
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact">
//                 <img
//                   src="https://i.ibb.co.com/k63gmq5K/contact-information.png"
//                   alt="user icon"
//                   className="my-1.5 inline-block size-5"
//                 /> Contact
//               </Link>
//             </li>
//             {user && (
//               <li>
//                 <Link to="/myprofile">
//                   <img
//                   src="https://i.ibb.co.com/1ffbYskZ/user-1.png"
//                   alt="user icon"
//                   className="my-1.5 inline-block size-5"
//                 />Profile
//                 </Link>
//               </li>
//             )}
//           </ul>
//         </div>

//         {/* RIGHT */}
//         <div className="navbar-end mr-4 lg:mr-10 flex items-center gap-4">
//           {user ? (
//             <>
//               {/* Profile Pic */}
//               <img
//                 onClick={toggleMenu}
//                 className="w-11 h-11 rounded-full cursor-pointer border-2 border-blue-400"
//                 src={user.photoURL || "https://i.ibb.co/3C5xJ7R/user.png"}
//                 alt="profile"
//               />

//               {/* Desktop Logout */}
//               <button
//                 onClick={handleLogout}
//                 className="btn btn-primary hidden lg:flex"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               {/* Login */}
//               <Link to="/login" className="btn btn-primary hidden lg:flex">
//                 Login
//               </Link>

//               {/* Menu Icon */}
//               <button onClick={toggleMenu} className="btn btn-ghost lg:hidden">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-7 w-7"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h10m-10 6h16"
//                   />
//                 </svg>
//               </button>
//             </>
//           )}
//         </div>
//       </div>

//       {/* ================= SIDEBAR / DROPDOWN ================= */}
//       {isMenuOpen && (
//         <div ref={menuRef} className="fixed top-16 right-4 z-50">
//           <div className="w-[260px] sm:w-[280px] bg-white shadow-xl rounded-xl p-5 animate-slideInRight">
//             <h2 className="text-lg font-bold mb-4">Menu</h2>

//             <ul className="space-y-3 text-base">
//               <li>
//                 <Link to="/home" onClick={closeMenu}>
//                    Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/hero" onClick={closeMenu}>
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" onClick={closeMenu}>
//                   Contact
//                 </Link>
//               </li>

//               {user && (
//                 <li>
//                   <Link to="/myprofile" onClick={closeMenu}>
//                     My Profile
//                   </Link>
//                 </li>
//               )}
//               {user && (
//                 <li>
//                   <Link to="dashboard">Dashboard</Link>
//                 </li>
//               )}
//               {user ? (
//                 <li>
//                   <button onClick={handleLogout} className="text-red-500">
//                     Logout
//                   </button>
//                 </li>
//               ) : (
//                 <li>
//                   <Link to="/login" onClick={closeMenu}>
//                     Login
//                   </Link>
//                 </li>
//               )}
//             </ul>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

import React, { use, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../../provider/AuthProvider";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading/Loading";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();
  const menuRef = useRef();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // 🔥 SCROLL DETECT (MAIN FIX)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // click outside close
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

  // To get user information and use it to the navbar 
  const axiosSecure = useAxiosSecure();
  const { data: register = [], isLoading } = useQuery({
    queryKey: ["register", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const result = await axiosSecure.get(`Register/${user.email}`);
      return result.data.data;
    },
  });

  if (isLoading) return <Loading />;
  console.log(register);

  const handleLogout = async () => {
    await logOut()
      .then(() => {
        toast.success("Logout Successfully");
        closeMenu();
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <div
        className={`navbar sticky top-0 z-40 transition-all duration-300 border-b
        ${
          scrolled
            ? "bg-white/20 backdrop-blur-xl shadow-md border-white/20"
            : "bg-gradient-to-r from-slate-900 via-blue-900 to-blue-600 text-white "
        }`}
      >
        {/* LEFT */}
        <div className="navbar-start">
          <Link to="/home" className="flex gap-2 text-xl ml-2 lg:ml-10">
            <img
              src="/src/assets/logo.jpg"
              className="w-10 h-10 rounded-full"
              alt=""
            />
            <h3 className="pt-2">Nikha</h3>
          </Link>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            <li>
              <Link to="/home">
                <img
                  src="https://i.ibb.co.com/Xrh17QWF/house.png"
                  className="my-1.5 inline-block size-5"
                />{" "}
                Home
              </Link>
            </li>

            <li>
              <Link to="/hero">
                <img
                  src="https://i.ibb.co.com/rRgMDL02/service.png"
                  className="my-1.5 inline-block size-5"
                />{" "}
                Services
              </Link>
            </li>

            <li>
              <Link to="/contact">
                <img
                  src="https://i.ibb.co.com/k63gmq5K/contact-information.png"
                  className="my-1.5 inline-block size-5"
                />{" "}
                Contact
              </Link>
            </li>

            {user && (
              <li>
                <Link to="/myprofile">
                  <img
                    src="https://i.ibb.co.com/1ffbYskZ/user-1.png"
                    className="my-1.5 inline-block size-5"
                  />
                  Profile
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end mr-4 lg:mr-10 flex items-center gap-4">
          {user ? (
            <>
              {/* Profile */}
              <img
                onClick={toggleMenu}
                className="w-11 h-11 rounded-full cursor-pointer border-2 border-blue-400"
                src={register?.photourl || "https://i.ibb.co/3C5xJ7R/user.png"}
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
              <Link to="/login" className="btn btn-primary hidden lg:flex">
                Login
              </Link>

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

      {/* ================= MOBILE MENU ================= */}
      {isMenuOpen && (
        <div ref={menuRef} className="fixed top-16 right-4 z-50">
          <div className="w-[260px] sm:w-[280px] bg-white shadow-xl rounded-xl p-5">
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
                  <Link to="/dashboard">Dashboard</Link>
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
