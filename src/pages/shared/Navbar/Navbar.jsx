
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

