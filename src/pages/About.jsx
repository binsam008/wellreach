import React from "react";
import Footer from "../sections/Footer";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">

      {/* About Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
        {/* Text Left */}
        <div>
          <h2 className="text-xl font-semibold text-purple-400 mb-4">About us</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            vestibulum tempor suscipit. Suspendisse id lacus ac dolor gravida
            maximus. Ut pulvinar quis mi sed facilisis. Cras non dolor nec mi
            egestas aliquam. Nulla facilisi. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Nullam porttitor ligula vitae justo eleifend luctus. Sed nec magna
            eu ipsum sollicitudin aliquam.
            <br /><br />
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Vivamus euismod, massa quis pretium
            consectetur, dui dui suscipit risus, nec aliquet nulla mi eget
            dolor. Donec hendrerit nibh at augue auctor imperdiet.
          </p>
        </div>

        {/* Image Right */}
        <div>
          <img
            src="/assets/about-image.jpg"
            alt="Container Port"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <h2 className="text-xl font-semibold text-purple-400">Vision & Mission</h2>

        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          vestibulum tempor suscipit. Suspendisse id lacus ac dolor gravida
          maximus. Ut pulvinar quis mi sed facilisis. Cras non dolor nec mi
          egestas aliquam. Nulla facilisi. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas. 
          Nullam porttitor ligula vitae justo eleifend luctus. Sed nec magna 
          eu ipsum sollicitudin aliquam.
          <br /><br />
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Vivamus euismod, massa quis pretium
          consectetur, dui dui suscipit risus, nec aliquet nulla mi eget dolor.
        </p>
      </div>

      {/* Our Leadership */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-purple-400">Our Leadership</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
        <div className="w-40 h-40 bg-gray-500 rounded-md"></div>
        <div className="w-40 h-40 bg-gray-500 rounded-md"></div>
        <div className="w-40 h-40 bg-gray-500 rounded-md"></div>
      </div>
      
    </div>
    
  );
  <Footer />
}
