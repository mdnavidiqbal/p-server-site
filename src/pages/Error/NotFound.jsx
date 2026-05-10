import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-gray-100 px-4">

      {/* Image */}
      <div className="animate-fade-in">
        <img
          src="https://i.ibb.co.com/7d7WCnDr/dao-ling-warning-8908707-1920-removebg-preview.png"
          alt="Not Found"
          className="w-72 md:w-[380px] drop-shadow-lg"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-6">
        404 - Page Not Found
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 mt-3 text-center max-w-md">
        The page you’re looking for is currently under construction
      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition duration-300"
      >
        Go Back Home
      </button>

    </div>
  );
};

export default NotFound;