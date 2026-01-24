import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm mx-auto">

      {/* LEFT */}
      <div className="navbar-start ml-[70px]">
     <Link to="/" className="btn btn-ghost text-xl">
          Nikha
        </Link>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/applymarriage">Apply Marriage</Link>
          </li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end mr-[70px]">
        <Link to="/createbiodata" className="btn btn-ghost text-xl">
          Create Bio-data
        </Link>
      </div>

    </div>
  );
};

export default Navbar;
