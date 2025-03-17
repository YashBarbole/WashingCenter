import React from "react";
import washingImage from "../assets/e9a6fd888b53e0b988cb1ad21cf54cc0.jpg"; // Ensure the image exists
import beforeWashImage1 from "../assets/IMG-20250316-WA0334.jpg";
import afterWashImage1 from "../assets/IMG-20250316-WA0335.jpg";
import beforeWashImage2 from "../assets/IMG-20250316-WA0336.jpg";
import afterWashImage2 from "../assets/IMG-20250316-WA0337.jpg";
import beforeWashImage3 from "../assets/IMG-20250316-WA0338.jpg";
import afterWashImage3 from "../assets/IMG-20250316-WA0340.jpg";

const Home = () => {
  return (
    <>
      {/* Main Section - Two Divs (Text & Image) */}
      <div className="h-screen pb-20 flex items-center justify-center bg-amber-300">
        <div className="flex items-center justify-between p-10 h-[90vh] rounded-lg w-full max-w-7xl gap-x-10">
          {/* Left Section - Text */}
          <div className="w-1/2 p-8">
            <h2 className="text-7xl font-extrabold text-black leading-tight">
              B.D.R Washing Center
            </h2>
            <h1 className="text-4xl font-bold text-black mt-2">
              Drive Clean, Shine Bright!
            </h1>
            <p className="text-2xl font-medium text-black mt-4">
              Experience the best car washing services with our state-of-the-art facilities and expert technicians.
            </p>
          
          </div>

          {/* Right Section - Image */}
          <div className="w-1/2 h-full flex justify-center mt-40">
            <img
              src={washingImage}
              alt="Washing Center"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section with White Background */}
      <div className="mx-auto bg-black w-screen pt-10 pb-10 px-16">
        <h2 className="text-6xl font-bold text-white">Why Choose Us?</h2>
        <ul className="list-disc text-3xl text-amber-300 font-medium mt-4 ml-7 space-y-2 text-left">
          <li>Best Quality Services</li>
          <li>Most Affordable Price</li>
          <li>Authorized Products</li>
        </ul>
      </div>

      {/* Before & After Images Section */}
      <div className="text-center pt-2 bg-amber-300 pb-2">
        <h2 className="text-4xl font-bold text-black mb-6">See the Difference!</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Before & After Pair 1 */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-black mb-2">Before Wash</h3>
            <img src={beforeWashImage1} alt="Before Wash" className="w-80 h-100 rounded-lg shadow-lg" />
            <h3 className="text-2xl font-bold text-black mt-4 mb-2">After Wash</h3>
            <img src={afterWashImage1} alt="After Wash" className="w-80 h-100 rounded-lg shadow-lg" />
          </div>

          {/* Before & After Pair 2 */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-black mb-2">Before Wash</h3>
            <img src={beforeWashImage2} alt="Before Wash" className="w-80 h-100 rounded-lg shadow-lg" />
            <h3 className="text-2xl font-bold text-black mt-4 mb-2">After Wash</h3>
            <img src={afterWashImage2} alt="After Wash" className="w-80 h-100 rounded-lg shadow-lg" />
          </div>

          {/* Before & After Pair 3 */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-black mb-2">Before Wash</h3>
            <img src={beforeWashImage3} alt="Before Wash" className="w-80 h-100 rounded-lg shadow-lg" />
            <h3 className="text-2xl font-bold text-black mt-4 mb-2">After Wash</h3>
            <img src={afterWashImage3} alt="After Wash" className="w-80 h-100 rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-black text-white text-center p-10 ">
        <h2 className="text-4xl font-bold mb-4">Get Started Today!</h2>
        
      </div>
    </>
  );
};

export default Home;
