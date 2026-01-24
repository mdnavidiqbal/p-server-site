import React from "react";

const Banner = () => {
  return (
    <div className="w-[1140px] mx-auto pt-20">
      <div className="flex gap-20">
        <div className="pt-5 pb-15">
          <h1 className="font-bold text-[50px]">Online Nikha site</h1>
          <p>
            Begin your forever journey with us Online NIkah Service brings
            couples <br />
            together, We aim to provide quick and affordable Nikah services to
            couples. <br /> Our Islamic Nikah service allows to perform your
            Nikah ceremony from the comfort of your home and we ensure <br /> an
            easy and affordable solution for your e-Nikah.Please contact on
            WhatsApp before booking the Nikah. <br /> Click on the ” contact us”
            button for more details and communication.
          </p>
          <div className="flex gap-10 pt-10">
        <div >
          <button
            type="button"
            class=" rounded-lg text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
          >
            Purple to Blue
          </button>
        </div>
        <div><button
            type="button"
            class="rounded-lg text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
          >
            Purple to Blue
          </button></div>
      </div>
        </div>
        <div>
          <img
            className="w-[600px] h-[300px] rounded-xl"
            src="https://i.ibb.co.com/JFWF9mVx/back-view-islamic-couple-spending-time-together.jpg"
            alt=""
          />
        </div>
      </div>
      
    </div>
  );
};

export default Banner;
