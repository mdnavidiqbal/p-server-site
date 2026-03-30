import React from "react";

const Contact = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Header Section */}
      <div className="flex items-center justify-center min-h-[150px] sm:min-h-[200px] px-4 mt-6 sm:mt-8 md:mt-10">
        <div className="relative text-center max-w-[90%] sm:max-w-[80%] md:max-w-full">
          <h1 className="font-bold text-green-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-6 sm:pt-8 md:pt-10 px-4">
            We are here to assist you.
          </h1>
          
          {/* Responsive Image Container */}
          <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-8 md:-right-12 lg:-right-16 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px]">
            <img
              src="https://i.ibb.co.com/2fFsv8V/love.png"
              alt="Decorative love icon"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain absolute top-0 left-0"
            />
          </div>
        </div>
      </div>

      {/* Cards Grid Section */}
      <div className="flex items-center justify-center px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
          
          {/* Dhaka Branch */}
          <div className="bg-green-200 w-full max-w-sm mx-auto p-4 sm:p-5 md:p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 mb-2 sm:mb-3 text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.875 1.25 3.875 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z"
              />
            </svg>
            <h5 className="mb-2 text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
              Dhaka - Branch Office
              <hr className="mt-1 sm:mt-2" />
            </h5>
            <p className="mb-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              Way To Nikah, Third Floor <br /> 
              Noble Building, Above Gramin Bank, Bashundhara <br /> 
              Madani Road, Bashundhara, Dhaka, Bangladesh <br /> 
              Call: 7025115588 <br className="hidden sm:block" />
              Mob: 01702541166
            </p>
          </div>

          {/* Mymensingh Branch */}
          <div className="bg-green-200 w-full max-w-sm mx-auto p-4 sm:p-5 md:p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 mb-2 sm:mb-3 text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.875 1.25 3.875 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z"
              />
            </svg>
            <h5 className="mb-2 text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
              Mymensingh - Branch Office
              <hr className="mt-1 sm:mt-2" />
            </h5>
            <p className="mb-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              Way To Nikah, Third Floor <br /> 
              Mufizuddin Building, Above Shawpna, Noumuhol <br /> 
              A/B Guho Road, Mymensingh Sadar, Mymensingh, Bangladesh <br /> 
              Call: 7025115588 <br className="hidden sm:block" />
              Mob: 01702544166
            </p>
          </div>

          {/* Chattagram Branch */}
          <div className="bg-green-200 w-full max-w-sm mx-auto p-4 sm:p-5 md:p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 mb-2 sm:mb-3 text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.875 1.25 3.875 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z"
              />
            </svg>
            <h5 className="mb-2 text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
              Chattagram - Branch Office
              <hr className="mt-1 sm:mt-2" />
            </h5>
            <p className="mb-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              Way To Nikah, Third Floor <br /> 
              Noble Building, Above Gramin Bank, Bashundhara <br /> 
              Madani Road, Bashundhara, Dhaka, Bangladesh <br /> 
              Call: 7025115588 <br className="hidden sm:block" />
              Mob: 01702544116
            </p>
          </div>

          {/* Rajshahi Branch */}
          <div className="bg-green-200 w-full max-w-sm mx-auto p-4 sm:p-5 md:p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 mb-2 sm:mb-3 text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.875 1.25 3.875 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z"
              />
            </svg>
            <h5 className="mb-2 text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
              Rajshahi - Branch Office
              <hr className="mt-1 sm:mt-2" />
            </h5>
            <p className="mb-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              Way To Nikah, Third Floor <br /> 
              Noble Building, Above Gramin Bank, Bashundhara <br /> 
              Madani Road, Bashundhara, Dhaka, Bangladesh <br /> 
              Call: 7025115588 <br className="hidden sm:block" />
              Mob: 01702441166
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;