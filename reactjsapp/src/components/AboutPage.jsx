import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl mx-auto my-10">
        <h1 className="text-5xl font-bold mb-6 text-center text-gray-800">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img
            src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Hotel"
            className="rounded-lg shadow-md mb-6 md:mb-0 md:mr-6"
          />
          <p className="text-lg text-gray-700">
            Welcome to our Hotel Review Platform! We are dedicated to providing
            you with comprehensive and honest reviews of hotels from around the
            world. Our platform is designed to help travelers make informed
            decisions by offering insights into the quality, amenities, and
            overall experience of each hotel.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center mb-8">
          <p className="text-lg text-gray-700 mb-6 md:mb-0 md:mr-6">
            Our team is passionate about travel and hospitality, and we strive
            to create a community where users can share their experiences and
            help each other find the best accommodations. Whether you're looking
            for a luxury resort, a cozy bed and breakfast, or a budget-friendly
            hotel, our reviews cover a wide range of options to suit every
            traveler's needs.
          </p>
          <img
            src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Team"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img
            src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Travel"
            className="rounded-lg shadow-md mb-6 md:mb-0 md:mr-6"
          />
          <p className="text-lg text-gray-700">
            We believe that every traveler deserves a great stay, and we are
            here to make that happen. Thank you for visiting our platform, and
            we hope you find the perfect hotel for your next adventure!
          </p>
        </div>
        <p className="text-lg text-gray-700 mb-4 text-center">Happy travels!</p>
        <p className="text-lg text-gray-700 text-right">
          - The Hotel Review Team
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
