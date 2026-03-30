import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 px-4 bg-gradient-to-r from-[#1c92d2] to-[#f2fcfe]">
      
      {/* Left Text */}
      <div className="text-center lg:text-left max-w-md order-1">
        <h1 className="font-bold text-3xl sm:text-4xl">
          Register Now <br className="hidden sm:block" /> For Free
        </h1>

        <p className="pt-4 text-sm sm:text-base">
          Find your special someone from lakhs <br className="hidden sm:block" />
          of verified profiles
        </p>
      </div>

      {/* Right Form */}
      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-md order-2">
        <form className="w-full">
          
          <h1 className="text-center font-bold text-2xl sm:text-3xl">
            Create Account
          </h1>

          <div className="pt-6">

            {/* Full Name */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                id="name"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-400 focus:outline-none focus:ring-0 focus:border-purple-500 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-purple-500"
              >
                Enter Your Full Name
              </label>
            </div>

            {/* Email */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-400 focus:outline-none focus:ring-0 focus:border-purple-500 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-purple-500"
              >
                Email Address
              </label>
            </div>

            {/* Password */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                id="password"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-400 focus:outline-none focus:ring-0 focus:border-purple-500 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="password"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-purple-500"
              >
                Password
              </label>
            </div>

            {/* Register Button */}
            <button
              type="button"
              className="w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-6 py-2.5"
            >
              Register Now
            </button>

            {/* Google Button */}
            <button className="mt-3 w-full flex items-center justify-center gap-2 bg-white text-black border border-gray-300 font-medium rounded-lg text-sm px-6 py-2.5">
              <svg width="16" height="16" viewBox="0 0 512 512">
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"/>
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"/>
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"/>
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"/>
              </svg>
              Continue with Google
            </button>

            {/* Login Link */}
            <p className="text-sm text-center pt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
