import React from 'react'

const Banner = () => {
  return (
    <div className="relative h-50 sm:h-80 lg:h-96 rounded-lg overflow-hidden mt-">
      <img
        src="https://www.statesman.com/gcdn/presto/2020/12/22/NAAS/8247c5b3-15b4-451d-86bf-d7b27374af73-Skyline.JPG?crop=4999,2812,x0,y189&width=3200&height=1801&format=pjpg&auto=webp"
        alt="Banner Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
       <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white">Find Your Perfect Home Rental Today</h1>
        </div>
      </div>
      {/* Black opacity overlay */}
     
    </div>
  );
};

export default Banner;
