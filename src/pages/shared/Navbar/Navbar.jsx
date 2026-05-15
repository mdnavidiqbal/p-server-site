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

// import React, { use, useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router";
// import { AuthContext } from "../../../provider/AuthProvider";
// import { toast } from "react-toastify";
// import useAxiosSecure from "../../../hooks/UseAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
// import Loading from "../../Loading/Loading";
// import { Link as ScrollLink } from "react-scroll";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const { user, logOut } = use(AuthContext);
//   const navigate = useNavigate();
//   const menuRef = useRef();

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const closeMenu = () => setIsMenuOpen(false);

//   // 🔥 SCROLL DETECT (MAIN FIX)
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   // click outside close
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

//   // To get user information and use it to the navbar
//   const axiosSecure = useAxiosSecure();
//   const { data: register = [], isLoading } = useQuery({
//     queryKey: ["register", user?.email],
//     enabled: !!user?.email,
//     queryFn: async () => {
//       const result = await axiosSecure.get(`Register/${user.email}`);
//       return result.data.data;
//     },
//   });

//   if (isLoading) return <Loading />;

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
//       <div
//         className={`navbar sticky top-0 z-40 transition-all duration-300 border-b
//         ${
//           scrolled
//             ? "bg-white/20 backdrop-blur-xl shadow-md border-white/20"
//             : "bg-gradient-to-r from-slate-900 via-blue-900 to-blue-600 text-white "
//         }`}
//       >
//         {/* LEFT */}
//         <div className="navbar-start">
//           <Link
//             to="/home"
//             className="flex justify-center items-center  gap-2 text-xl ml-2 lg:ml-10"
//           >
//             <img src="/src/assets/logo.jpg" className="w-15 h-10 " alt="" />
//             <div className="hidden md:flex flex-col border-l-2 border-green-500 pl-3 py-1 ml-2">
//               <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white leading-none whitespace-nowrap">
//                 NIKHA
//               </h1>
//               <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]  leading-none mt-1.5 whitespace-nowrap">
//                 Online <span className="text-emerald-600">Registration </span>
//               </p>
//             </div>
//           </Link>
//         </div>

//         {/* CENTER */}
//         {/* <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1 gap-6">
//             <li>
//               <Link to="/home">
//                 <img
//                   src="https://i.ibb.co.com/Xrh17QWF/house.png"
//                   className="my-1.5 inline-block size-5"
//                 />{" "}
//                 Home
//               </Link>
//             </li>

//             <li>
//               <Link to="/hero">
//                 <img
//                   src="https://i.ibb.co.com/rRgMDL02/service.png"
//                   className="my-1.5 inline-block size-5"
//                 />{" "}
//                 Services
//               </Link>
//             </li>

//             <li>
//               <Link to="/contact">
//                 <img
//                   src="https://i.ibb.co.com/k63gmq5K/contact-information.png"
//                   className="my-1.5 inline-block size-5"
//                 />{" "}
//                 Contact
//               </Link>
//             </li>

//             {user && (
//               <li>
//                 <Link to="/myprofile">
//                   <img
//                     src="https://i.ibb.co.com/1ffbYskZ/user-1.png"
//                     className="my-1.5 inline-block size-5"
//                   />
//                   Profile
//                 </Link>
//               </li>
//             )}
//           </ul>
//         </div> */}
//         {/* CENTER */}
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1 gap-6">
//             {/* Home */}
//             <li>
//               <ScrollLink
//                 to="home"
//                 smooth={true}
//                 duration={500}
//                 offset={-80}
//                 spy={true}
//                 activeClass="text-emerald-400"
//                 className="cursor-pointer flex items-center gap-1"
//               >
//                 <img
//                   src="https://i.ibb.co.com/Xrh17QWF/house.png"
//                   className="my-1.5 inline-block size-5"
//                 />
//                 Home
//               </ScrollLink>
//             </li>

//             {/* Services */}
//             <li>
//               <ScrollLink
//                 to="services"
//                 smooth={true}
//                 duration={500}
//                 offset={-80}
//                 spy={true}
//                 activeClass="text-emerald-400"
//                 className="cursor-pointer flex items-center gap-1"
//               >
//                 <img
//                   src="https://i.ibb.co.com/rRgMDL02/service.png"
//                   className="my-1.5 inline-block size-5"
//                 />
//                 Services
//               </ScrollLink>
//             </li>
//             {/* Blog */}
//             <li>
//               <ScrollLink
//                 to="gallery"
//                 smooth={true}
//                 duration={500}
//                 offset={-80}
//                 spy={true}
//                 activeClass="text-emerald-400"
//                 className="cursor-pointer flex items-center gap-1"
//               >
//                 <img
//                   src="https://i.ibb.co.com/vCGKSKft/mentoring.png"
//                   className="my-1.5 inline-block size-5"
//                 />
//                 Blog
//               </ScrollLink>
//             </li>

//             {/* Contact */}
//             <li>
//               <ScrollLink
//                 to="contact"
//                 smooth={true}
//                 duration={500}
//                 offset={-80}
//                 spy={true}
//                 activeClass="text-emerald-400"
//                 className="cursor-pointer flex items-center gap-1"
//               >
//                 <img
//                   src="https://i.ibb.co.com/k63gmq5K/contact-information.png"
//                   className="my-1.5 inline-block size-5"
//                 />
//                 Contact
//               </ScrollLink>
//             </li>

//             {/* Profile */}
//             {/* {user && (
//               <li>
//                 <Link to="/myprofile">
//                   <img
//                     src="https://i.ibb.co.com/1ffbYskZ/user-1.png"
//                     className="my-1.5 inline-block size-5"
//                   />
//                   Profile
//                 </Link>
//               </li>
//             )} */}
//           </ul>
//         </div>

//         {/* RIGHT */}
//         <div className="navbar-end mr-4 lg:mr-10 flex items-center gap-4">
//           {user ? (
//             <>
//               {/* Profile */}
//               <img
//                 onClick={toggleMenu}
//                 className="w-11 h-11 rounded-full cursor-pointer border-2 border-blue-400"
//                 src={register?.photourl || "https://i.ibb.co/3C5xJ7R/user.png"}
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
//               <Link to="/login" className="btn btn-primary hidden lg:flex">
//                 Login
//               </Link>

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

//       {/* ================= MOBILE MENU ================= */}
//       {isMenuOpen && (
//         <div ref={menuRef} className="fixed top-16 right-4 z-50">
//           <div className="w-[260px] sm:w-[280px] bg-white shadow-xl rounded-xl p-5">
//             <ul className="space-y-3 text-base">
//               <li>
//                 <Link to="/home" onClick={closeMenu}>
//                   Home
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
//                   <Link to="/dashboard">Dashboard</Link>
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

import React, { useContext, useState, useEffect, useRef } from "react"; // 'use' ke 'useContext' kora hoyeche safety jonno
import { Link, useNavigate, useLocation } from "react-router";

import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { Link as ScrollLink } from "react-scroll";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation(); // Page location track korar jonno
  const menuRef = useRef();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // 🔥 SCROLL DETECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click Outside Close logic optimization
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const axiosSecure = useAxiosSecure();
  const { data: register, isLoading } = useQuery({
    queryKey: ["register", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const result = await axiosSecure.get(`Register/${user.email}`);
      return result.data.data;
    },
  });

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Logged out successfully");
      closeMenu();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  // Helper function to handle link clicks (Home page e thakle scroll korbe, onno page e thakle navigate korbe)
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  const renderNavLink = (to, label, icon) => {
    if (isHomePage) {
      return (
        <ScrollLink
          to={to}
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          activeClass="text-emerald-400 font-bold"
          className="cursor-pointer flex items-center gap-2 hover:opacity-80"
          onClick={closeMenu}
        >
          {icon && <img src={icon} className="size-5" alt="" />}
          {label}
        </ScrollLink>
      );
    }
    return (
      <Link to="/home" className="flex items-center gap-2" onClick={closeMenu}>
        {icon && <img src={icon} className="size-5" alt="" />}
        {label}
      </Link>
    );
  };

  return (
    <>
      <nav
        className={`navbar sticky top-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg border-zinc-200 text-black py-2"
            : "bg-gradient-to-r from-slate-900 via-blue-900 to-blue-600 text-white py-4 border-transparent"
        }`}
      >
        <div className="navbar-start">
          <Link to="/home" className="flex items-center gap-2 ml-2 lg:ml-10">
            <img
              src="/src/assets/logo.jpg"
              className="w-12 h-12 rounded-lg"
              alt="Logo"
            />
            <div
              className={`hidden md:flex flex-col border-l-2 pl-3 ${scrolled ? "border-emerald-500" : "border-white"}`}
            >
              <h1 className="text-xl font-black tracking-tighter leading-none">
                NIKHA
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] mt-1">
                Online <span className="text-emerald-500">Registration</span>
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 text-sm font-medium">
            <li>
              {renderNavLink(
                "home",
                "Home",
                "https://i.ibb.co.com/Xrh17QWF/house.png",
              )}
            </li>
            <li>
              {renderNavLink(
                "services",
                "Services",
                "https://i.ibb.co.com/rRgMDL02/service.png",
              )}
            </li>
            <li>
              {renderNavLink(
                "gallery",
                "Blog",
                "https://i.ibb.co.com/vCGKSKft/mentoring.png",
              )}
            </li>
            <li>
              {renderNavLink(
                "contact",
                "Contact",
                "https://i.ibb.co.com/k63gmq5K/contact-information.png",
              )}
            </li>
            <li>
              {renderNavLink(
                "about",
                "About",
                "https://i.ibb.co.com/h1d144qx/icons8-about-94.png",
              )}
            </li>
            <li>
              {renderNavLink(
                "faq",
                "FAQ",
                "https://i.ibb.co.com/qLsYsJ5b/icons8-faq-94.png",
              )}
            </li>
          </ul>
        </div>

        <div className="navbar-end mr-4 lg:mr-10 flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              {isLoading ? (
                <div className="w-10 h-10 rounded-full bg-zinc-200 animate-pulse" />
              ) : (
                <img
                  onClick={toggleMenu}
                  className="w-10 h-10 rounded-full cursor-pointer border-2 border-emerald-400 object-cover"
                  src={
                    register?.photourl || "https://i.ibb.co/3C5xJ7R/user.png"
                  }
                  alt="profile"
                />
              )}
              <button
                onClick={handleLogout}
                className="btn btn-sm btn-outline btn-error hidden lg:flex"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className={`btn btn-sm ${scrolled ? "btn-primary" : "btn-outline text-white border-white"}`}
            >
              Login
            </Link>
          )}

          <button onClick={toggleMenu} className="btn btn-ghost lg:hidden p-1">
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
        </div>
      </nav>

      {/* Mobile Sidebar (Improved) */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[60] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <button onClick={closeMenu} className="self-end p-2 text-zinc-500">
            ✕
          </button>
          <ul className="mt-8 space-y-6 text-lg font-medium text-zinc-800">
            <li>{renderNavLink("home", "Home")}</li>
            <li>{renderNavLink("about", "About")}</li>
            <li>{renderNavLink("services", "Services")}</li>
            <li>{renderNavLink("gallery", "Blog")}</li>
            <li>{renderNavLink("contact", "Contact")}</li>
            {user && (
              <>
                <li className="border-t pt-6">
                  <Link to="/myprofile" onClick={closeMenu}>
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" onClick={closeMenu}>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="text-red-500">
                    Logout
                  </button>
                </li>
              </>
            )}
            {!user && (
              <li className="border-t pt-6">
                <Link to="/login" onClick={closeMenu}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/50 z-[55] lg:hidden"
        />
      )}
    </>
  );
};

export default Navbar;

// import React, { use, useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router";
// import { AuthContext } from "../../../provider/AuthProvider";
// import { toast } from "react-toastify";
// import useAxiosSecure from "../../../hooks/UseAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
// import Loading from "../../Loading/Loading";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("home"); // 🔥 ACTIVE SECTION

//   const { user, logOut } = use(AuthContext);
//   const navigate = useNavigate();
//   const menuRef = useRef();

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const closeMenu = () => setIsMenuOpen(false);

//   // ================= SCROLL TO SECTION =================
//   const handleNavigateScroll = (sectionId) => {
//     closeMenu();

//     navigate("/home", {
//       state: {
//         scrollTo: sectionId,
//       },
//     });
//   };

//   // ================= ACTIVE SECTION DETECTION =================
//   useEffect(() => {
//     const sections = document.querySelectorAll("section");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       {
//         threshold: 0.6,
//       }
//     );

//     sections.forEach((section) => observer.observe(section));

//     return () => observer.disconnect();
//   }, []);

//   // ================= NAVBAR SCROLL EFFECT =================
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ================= CLICK OUTSIDE =================
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (menuRef.current && !menuRef.current.contains(e.target)) {
//         setIsMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // ================= USER DATA =================
//   const axiosSecure = useAxiosSecure();

//   const { data: register = [], isLoading } = useQuery({
//     queryKey: ["register", user?.email],
//     enabled: !!user?.email,
//     queryFn: async () => {
//       const result = await axiosSecure.get(`Register/${user.email}`);
//       return result.data.data;
//     },
//   });

//   if (isLoading) return <Loading />;

//   // ================= LOGOUT =================
//   const handleLogout = async () => {
//     await logOut()
//       .then(() => {
//         toast.success("Logout Successfully");
//         closeMenu();
//         navigate("/");
//       })
//       .catch((error) => console.log(error));
//   };

//   // ================= ACTIVE CLASS =================
//   const navClass = (id) =>
//     `cursor-pointer flex items-center gap-1 pb-1 border-b-2 transition-all duration-300 ${
//       activeSection === id
//         ? "border-emerald-400 text-emerald-400"
//         : "border-transparent"
//     }`;

//   return (
//     <>
//       {/* ================= NAVBAR ================= */}
//       <div
//         className={`navbar sticky top-0 z-40 transition-all duration-300 border-b ${
//           scrolled
//             ? "bg-white/20 backdrop-blur-xl shadow-md border-white/20"
//             : "bg-gradient-to-r from-slate-900 via-blue-900 to-blue-600 text-white"
//         }`}
//       >
//         {/* LEFT */}
//         <div className="navbar-start">
//           <Link
//             to="/home"
//             onClick={() => window.scrollTo(0, 0)}
//             className="flex justify-center items-center gap-2 text-xl ml-2 lg:ml-10"
//           >
//             <img src="/src/assets/logo.jpg" className="w-15 h-10" alt="" />

//             <div className="hidden md:flex flex-col border-l-2 border-green-500 pl-3 py-1 ml-2">
//               <h1 className="text-xl md:text-2xl font-black text-white">
//                 NIKHA
//               </h1>
//               <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest">
//                 Online <span className="text-emerald-600">Registration</span>
//               </p>
//             </div>
//           </Link>
//         </div>

//         {/* CENTER */}
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1 gap-6">

//             <li>
//               <button
//                 onClick={() => handleNavigateScroll("home")}
//                 className={navClass("home")}
//               >
//                 Home
//               </button>
//             </li>

//             <li>
//               <button
//                 onClick={() => handleNavigateScroll("services")}
//                 className={navClass("services")}
//               >
//                 Services
//               </button>
//             </li>

//             <li>
//               <button
//                 onClick={() => handleNavigateScroll("gallery")}
//                 className={navClass("gallery")}
//               >
//                 Blog
//               </button>
//             </li>

//             <li>
//               <button
//                 onClick={() => handleNavigateScroll("contact")}
//                 className={navClass("contact")}
//               >
//                 Contact
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => handleNavigateScroll("about")}
//                 className={navClass("about")}
//               >
//                 About
//               </button>
//             </li>

//           </ul>
//         </div>

//         {/* RIGHT */}
//         <div className="navbar-end mr-4 lg:mr-10 flex items-center gap-4">
//           {user ? (
//             <>
//               <img
//                 onClick={toggleMenu}
//                 className="w-11 h-11 rounded-full cursor-pointer border-2 border-blue-400"
//                 src={register?.photourl || "https://i.ibb.co/3C5xJ7R/user.png"}
//                 alt="profile"
//               />

//               <button
//                 onClick={handleLogout}
//                 className="btn btn-primary hidden lg:flex"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" className="btn btn-primary hidden lg:flex">
//                 Login
//               </Link>

//               <button onClick={toggleMenu} className="btn btn-ghost lg:hidden">
//                 ☰
//               </button>
//             </>
//           )}
//         </div>
//       </div>

//       {/* ================= MOBILE MENU ================= */}
//       {isMenuOpen && (
//         <div ref={menuRef} className="fixed top-16 right-4 z-50">
//           <div className="w-[260px] sm:w-[280px] bg-white shadow-xl rounded-xl p-5">
//             <ul className="space-y-3 text-base">
//               <li>
//                 <Link to="/home" onClick={closeMenu}>
//                   Home
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
//                   <Link to="/dashboard">Dashboard</Link>
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

// import React, { use, useState, useEffect, useRef } from "react";
// import { Link, useNavigate, useLocation } from "react-router";
// import { AuthContext } from "../../../provider/AuthProvider";
// import { toast } from "react-toastify";
// import useAxiosSecure from "../../../hooks/UseAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
// import Loading from "../../Loading/Loading";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   const { user, logOut } = use(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const menuRef = useRef();

//   const axiosSecure = useAxiosSecure();

//   // ================= PROFILE =================
//   const { data: register = [], isLoading } = useQuery({
//     queryKey: ["register", user?.email],
//     enabled: !!user?.email,
//     queryFn: async () => {
//       const res = await axiosSecure.get(`Register/${user.email}`);
//       return res.data.data;
//     },
//   });

//   // ================= MENU =================
//   const toggleMenu = () => setIsMenuOpen((p) => !p);
//   const closeMenu = () => setIsMenuOpen(false);

//   // ================= NAVIGATION =================
//   const handleNavigateScroll = (sectionId) => {
//     closeMenu();

//     navigate("/home", {
//       state: { scrollTo: sectionId },
//     });
//   };

//   // ================= SCROLL TO SECTION AFTER ROUTE CHANGE =================
//   useEffect(() => {
//     if (location.state?.scrollTo) {
//       const id = location.state.scrollTo;

//       setTimeout(() => {
//         const el = document.getElementById(id);
//         if (el) {
//           el.scrollIntoView({ behavior: "smooth", block: "start" });
//         }
//       }, 200);
//     }
//   }, [location]);

//   // ================= ACTIVE SECTION (PRODUCTION SCROLL SPY) =================
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll("section");

//       let current = "home";

//       sections.forEach((section) => {
//         const rect = section.getBoundingClientRect();

//         if (rect.top <= 140 && rect.bottom >= 140) {
//           current = section.id;
//         }
//       });

//       setActiveSection(current);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ================= NAVBAR SCROLL EFFECT =================
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // ================= OUTSIDE CLICK =================
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (menuRef.current && !menuRef.current.contains(e.target)) {
//         setIsMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // ================= LOGOUT =================
//   const handleLogout = async () => {
//     try {
//       await logOut();
//       toast.success("Logout Successful");
//       closeMenu();
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // ================= ACTIVE STYLE =================
//   const navClass = (id) =>
//     `pb-1 border-b-2 transition-all duration-300 ${
//       activeSection === id
//         ? "border-emerald-400 text-emerald-400"
//         : "border-transparent"
//     }`;

//   if (isLoading) return <Loading />;

//   return (
//     <>
//       {/* ================= NAVBAR ================= */}
//       <div
//         className={`navbar sticky top-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? "bg-white/20 backdrop-blur-xl shadow-md border-b border-white/20"
//             : "bg-gradient-to-r from-slate-900 via-blue-900 to-blue-600 text-white border-b border-transparent"
//         }`}
//       >
//         {/* LEFT */}
//         <div className="navbar-start">
//           <button onClick={() => handleNavigateScroll("home")} className={navClass("home")} className="flex items-center gap-2 ml-3 lg:ml-10">
//             <img src="/src/assets/logo.jpg" className="w-12 h-10" />

//             <div className="hidden md:flex flex-col border-l-2 border-green-500 pl-3">
//               <h1 className="text-xl font-black">NIKHA</h1>
//               <p className="text-xs uppercase">
//                 Online <span className="text-emerald-400">Registration</span>
//               </p>
//             </div>
//           </button>
//         </div>

//         {/* CENTER (DESKTOP) */}
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal gap-6">
//             <li>
//               <button onClick={() => handleNavigateScroll("home")} className={navClass("home")}>
//                 Home
//               </button>
//             </li>

//             <li>
//               <button onClick={() => handleNavigateScroll("services")} className={navClass("services")}>
//                 Services
//               </button>
//             </li>

//             <li>
//               <button onClick={() => handleNavigateScroll("gallery")} className={navClass("gallery")}>
//                 Blog
//               </button>
//             </li>

//             <li>
//               <button onClick={() => handleNavigateScroll("contact")} className={navClass("contact")}>
//                 Contact
//               </button>
//             </li>
//           </ul>
//         </div>
//         {/* RIGHT */}
//         <div className="navbar-end mr-4 lg:mr-10 flex items-center gap-3">
//           {user ? (
//             <>
//               <img
//                 onClick={toggleMenu}
//                 className="w-10 h-10 rounded-full border-2 border-blue-400 cursor-pointer"
//                 src={register?.photourl || "https://i.ibb.co/3C5xJ7R/user.png"}
//               />

//               <button
//                 onClick={handleLogout}
//                 className="btn btn-primary hidden lg:flex"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" className="btn btn-primary hidden lg:flex">
//                 Login
//               </Link>

//               <button onClick={toggleMenu} className="btn btn-ghost lg:hidden">
//                 ☰
//               </button>
//             </>
//           )}
//         </div>
//       </div>

//       {/* ================= MOBILE MENU ================= */}
//       {isMenuOpen && (
//         <div ref={menuRef} className="fixed top-16 right-4 z-50">
//           <div className="w-[270px] bg-white shadow-xl rounded-xl p-5">
//             <ul className="space-y-3 text-base">
//               {/* NAV LINKS */}
//               <li>
//                 <button onClick={() => handleNavigateScroll("home")}>
//                   Home
//                 </button>
//               </li>

//               <li>
//                 <button onClick={() => handleNavigateScroll("services")}>
//                   Services
//                 </button>
//               </li>

//               <li>
//                 <button onClick={() => handleNavigateScroll("gallery")}>
//                   Blog
//                 </button>
//               </li>

//               <li>
//                 <button onClick={() => handleNavigateScroll("contact")}>
//                   Contact
//                 </button>
//               </li>

//               {/* USER SECTION */}
//               {user && (
//                 <>
//                   <li>
//                     <Link to="/myprofile" onClick={closeMenu}>
//                       My Profile
//                     </Link>
//                   </li>

//                   <li>
//                     <Link to="/dashboard" onClick={closeMenu}>
//                       Dashboard
//                     </Link>
//                   </li>

//                   <li>
//                     <button onClick={handleLogout} className="text-red-500">
//                       Logout
//                     </button>
//                   </li>
//                 </>
//               )}

//               {!user && (
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
