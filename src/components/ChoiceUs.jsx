import React, { Component } from "react";

class ChoicenUs extends Component {
  render() {
    return (
      <div className="max-w-[1240px] mx-auto pt-20 my-20 pb-26  bg-gradient-to-r from-[#003d4d] to-[#00c996] rounded-lg">
        <div className="flex gap-20 items-center justify-center">
          <div  className="w-[300px] sm:w-[400px] rounded-lg overflow-hidden shadow-lg 
            bg-gradient-to-r from-[#00c996] to-[#003d4d] p-2">
            <img
              className="w-100 h-80 rounded-2xl"
              src="https://i.ibb.co.com/b5m3R32d/vecteezy-wear-a-ring-4914658.jpg"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black">Why Choose Way To Us?</h1>
            <p className="pt-4 text-white">
              People will use our online marriage registration site for a fast, <br />
              convenient, and secure way to register their marriages. It saves
              time, <br /> avoids long queues, ensures accurate documentation, and
              allows couples to <br /> complete the process from anywhere easily.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ChoicenUs;
