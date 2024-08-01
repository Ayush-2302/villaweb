import React from "react";
import { Link } from "react-router-dom";

const VillaCard = ({ name, description, image, price, rating, id }) => {
  return (
    <>
      <div className=" mx-auto  overflow-hidden shadow-lg rounded-md bg-white">
        <img className="w-full h-80" src={image} alt={name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="px-6 pt-4 pb-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              ${price} per night
            </span>
            <span className="inline-block bg-yellow-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              Rating: {rating}
            </span>
          </div>
          <Link
            className="mx-6 inline-block text-white rounded-full px-3 py-2 text-sm font-semibold bg-gray-700 "
            to={`/villadetails/${id}`}
          >
            Get Info
          </Link>
        </div>
      </div>
    </>
  );
};

export default VillaCard;
