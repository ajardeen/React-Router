import React from "react";

function AboutPage() {
  return (
    <div className="sm:flex items-center max-w-screen-xl">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img src="https://i.imgur.com/WbQnbas.png" alt="About Us" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
            About us
          </span>
          <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
            About <span className="text-indigo-600">E-commerce</span>
          </h2>
          <p className="text-gray-700">
          Our e-commerce website is more than just a digital storefront; it's your partner for the future. We're dedicated to empowering our customers by providing exceptional products and services. We strive to elevate your shopping experience, offering a seamless journey from browsing to checkout. With our innovative approach, we're committed to shaping a brighter future, one purchase at a time.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutPage;
