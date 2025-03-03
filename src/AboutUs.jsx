import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">About Us</h1>
        <p className="text-gray-600 text-lg text-center mb-6">
          Welcome to <span className="font-semibold text-blue-500">Our Store</span> – your one-stop shop for the latest and greatest products. 
          We are passionate about delivering high-quality items at the best prices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">🚀 Our Mission</h2>
            <p className="text-gray-600">
              We aim to provide **top-quality products** with excellent customer service. Your satisfaction is our priority!
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-green-700 mb-2">🌟 Why Choose Us?</h2>
            <p className="text-gray-600">
              - **Fast & Reliable Shipping** 📦  
              - **Premium Quality Products** ✅  
              - **24/7 Customer Support** ☎️  
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-700">Need Help? Contact us at</p>
          <p className="font-bold text-blue-600">Shopper@ourstore.com</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
