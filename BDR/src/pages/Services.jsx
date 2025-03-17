import React from "react";
import standardWashImage from "../assets/standard-wash.avif";
import interiorCleaningImage from "../assets/interior-cleaning.jpeg";
import waxPolishImage from "../assets/wax-polish.avif";

const Services = () => {
  return (
    <div className="text-center bg-amber-300 p-20">
      <h2 className="text-4xl font-bold text-black mb-6">Our Services</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Standard Car Wash Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3">
          <h3 className="text-2xl font-bold text-black mb-4">Standard Car Wash</h3>
          <img src={standardWashImage} alt="Standard Wash" className="w-full h-64 object-cover rounded-lg mb-4" />
          <p className="text-lg font-medium text-black mt-4">
            Our standard car wash includes a thorough exterior cleaning with soap and water, followed by a rinse and dry.
          </p>
         
        </div>

        {/* Interior Cleaning Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3">
          <h3 className="text-2xl font-bold text-black mb-4">Interior Cleaning</h3>
          <img src={interiorCleaningImage} alt="Interior Cleaning" className="w-full h-64 object-cover rounded-lg mb-4" />
          <p className="text-lg font-medium text-black mt-4">
            Our interior cleaning service includes vacuuming, wiping down surfaces, and sanitizing high-touch areas.
          </p>
      
        </div>

        {/* Wax and Polish Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3">
          <h3 className="text-2xl font-bold text-black mb-4">Wax and Polish</h3>
          <img src={waxPolishImage} alt="Wax and Polish" className="w-full h-64 object-cover rounded-lg mb-4" />
          <p className="text-lg font-medium text-black mt-4">
            Protect your car's paint with our premium wax and polish service, enhancing its shine and durability.
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Services;
