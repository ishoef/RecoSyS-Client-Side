import React from "react";
import { IoCreateOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router"; // Corrected import
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
// import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";

const RecForMeCards = ({ recomm }) => {
  const {
    queryTitle,
    recommenderName,
    recommenderPhoto,
    creationDate,
    creationTime,
    recommendProductName,
    productImageURL,
    queryId,
  } = recomm;
  return (
    <div className="border overflow-hidden border-gray-300 shadow rounded-lg p-4 hover:shadow-md transition-all bg-white">
      {/* Top Section */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <img
            className="w-12 h-12 object-cover rounded-md"
            src={
              productImageURL ||
              "https://images.unsplash.com/photo-1620987278429-ab178d6eb547?w=300&auto=format&fit=crop&q=60"
            }
            alt="Product"
          />
          <div>
            <h2 className="font-semibold text-lg">{recommendProductName}</h2>
            <p className="text-xs text-gray-500">
              {creationDate} • {creationTime}
            </p>
          </div>
        </div>
        {/* Action Icons */}
        <div className="flex gap-3 text-gray-500 text-xl">
          <Link to={`/details/${queryId}`} className="hover:text-blue-600">
            <IoCreateOutline />
          </Link>
        </div>
      </div>

      {/* Recommendation Text */}
      <div className="mb-2">
        <p className="font-semibold text-sm text-gray-800">Recommendation</p>
        <p className="text-gray-700">
          {recommendProductName} is a great alternative
        </p>
      </div>

      {/* Query Info */}
      <div className="mb-1">
        <p className="font-semibold text-sm text-gray-800">Query</p>
        <Link
          to={`/recommDetails/${queryId}`}
          className="text-blue-600 hover:underline block truncate"
        >
          {queryTitle || "No Recommendation"}
        </Link>
      </div>

      {/* Recommender Info */}
      <div className="mt-1">
        <button
          to="#"
          className="text-sm text-blue-600 hover:underline flex items-center gap-2"
        >
          <ProfilePhoto proPic={recommenderPhoto} />
          By {recommenderName}
        </button>
      </div>
    </div>
  );
};

export default RecForMeCards;
