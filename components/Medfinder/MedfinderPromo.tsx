import React from "react";
import Image from "next/image";

const MedfinderPromo = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-orange-400 text-white px-6 md:px-16 py-12 w-11/12 mx-auto rounded-xl">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Enjoy 5% off your first monthly orders
        </h2>
        <p className="text-lg mb-6">
          Take advantage of a 5% discount on your initial monthly orders and
          discover unparalleled value in our premium products and services.
          This exclusive offer is designed to provide you with a seamless
          introduction to our commitment to quality, affordability, and
          exceptional customer care.
        </p>
        <button className="bg-white border border-gray-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Download Medfinder
        </button>
      </div>

      {/* Right Side - Mobile Image */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/Homepage 1.png" // Move the uploaded image to public/assets
          alt="Medfinder App"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default MedfinderPromo;
