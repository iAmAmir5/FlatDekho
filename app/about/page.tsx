import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
<br />
        <title>About - Flat Dekho</title>

        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Flat Dekho</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center text-justify">
          <div className="md:w-full">
            <p className="text-lg text-gray-700 mb-4">
              Flat Dekho is a property listing marketplace dedicated to simplifying the process of finding and renting properties.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our platform provides landlords, tenants, and property seekers with a user-friendly interface to connect and
              communicate effectively. Whether you're searching for your dream apartment or looking to rent out your property,
              Flat Dekho offers the tools and resources to make the process seamless.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              At Flat Dekho, we value transparency, reliability, and customer satisfaction. Our team is committed to
              providing exceptional service and support to all our users.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              For any inquiries, partnership opportunities, or feedback, please contact us at:
            </p>
            <ul className="list-disc ml-8 mb-4 text-gray-700">
              <li>Email: <a href="mailto:contact@flatdekho.com" className="text-blue-600">contact@flatdekho.com</a></li>
              <li>Phone: <span className="text-green-600">+91 123456789</span></li>
              <li>Address: <span className="text-purple-600">BVEC, Karimganj, Assam ,India</span></li>
            </ul>
            <br />
            <p className="text-lg text-gray-700">
              Thank you for choosing Us. We look forward to helping you find your perfect home!
            </p>
          </div>
          <div>
            <div className=" bg-slate-700 rounded-lg p-4 shadow-lg">
              <h2 className="text-xl font-semibold mb-2 text-white">Why Choose Flat Dekho?</h2>
              <ul className="list-disc ml-8 text-gray-200">
                <li>User-friendly interface</li>
                <li>Comprehensive property listings</li>
                <li>Transparent and reliable service</li>
                <li>Exceptional customer support</li>
                <li>Seamless property search experience</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <br />
          <h2 className="text-2xl font-bold text-center text-gray-800">Meet Our Team</h2>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-4 shadow-xl">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Amir Ali</h3>
              <p className="text-gray-700">Amirshraddha85@gmail.com</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-xl">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Siddhant kaushik</h3>
              <p className="text-gray-700">siddkaushik@gmail.com</p>
            </div>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
