import React from "react";

function Pricing() {
  return (
    <div className="p-12">
      <div className="flex items-center w-full h-screen justify-evenly gap-12">
        <div className="flex flex-col items-center justify-evenly w-1/2 bg-gray-200 h-1/2 p-3 rounded-md bg-orange-100 ">
          <h2 className="text-2xl">Free</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
          </p>
          <button className="px-4 py-2 mt-4 text-white bg-orange-500 rounded-lg hover:bg-orange-600">
            Get Started
          </button>
        </div>
        <div className="flex flex-col items-center justify-evenly w-1/2 bg-gray-200 h-1/2 p-3 rounded-md bg-orange-100 ">
          <h2 className="text-2xl">Premium</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
          </p>
          <button className="px-4 py-2 mt-4 text-white bg-orange-500 rounded-lg hover:bg-orange-600">
            Get Started
          </button>
        </div>
        <div className="flex flex-col items-center justify-evenly w-1/2 bg-gray-200 h-1/2 p-3 rounded-md bg-orange-100 ">
          <h2 className="text-2xl">Enterprise</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
          </p>
          <button className="px-4 py-2 mt-4 text-white bg-orange-500 rounded-lg hover:bg-orange-600">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
