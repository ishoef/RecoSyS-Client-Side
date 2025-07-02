import React from "react";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import Button from "../Button/Button";
import { FaRegCommentAlt } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router";

const Cards = ({ queiry }) => {
  const {
    productImageURL,
    userName,
    createdAt,
    productName,
    queryTitle,
    boycottingReson,
    _id,
    userPhotoURL,
  } = queiry;

  return (
    <div className="transformation hover:scale-102 duration-300 border border-gray-400 rounded-xl flex flex-col h-full cursor-pointer shadow-sm">
      {/* Card Image */}
      <div className="image">
        <img
          className="w-full h-60 md:h-120 lg:h-70 rounded-t-xl"
          src={productImageURL}
          alt=""
        />
      </div>

      {/* Card Content */}

      {/* Frofile Info */}
      <div className="flex flex-col justify-between flex-1 p-6 gap-4">
        <div className="profle-details flex items-center gap-4">
          <ProfilePhoto proPic={userPhotoURL} tooltip={false}></ProfilePhoto>
          <div>
            <h1 className="poppins-semibold">{userName || "John Doe"}</h1>
            <p className="poppins-regular flex items-center gap-2">
              {" "}
              <MdOutlineDateRange size={18} />
              {createdAt || "01 Jan 2023"}
            </p>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-2">
          <p className="text-2xl poppins-semibold text-primary">
            {productName || "Product Name"}
          </p>
          <p className="poppins-regular text-[18px] md:text-[22px]">
            {queryTitle || "Recommendation Title"}
          </p>
          <p className="poppins text-gray-500 line-clamp-2">
            {boycottingReson || "No specific reason provided"}
          </p>
          {boycottingReson && boycottingReson.length > 120 && (
            <Link
              to={`/details/${_id}`}
              className="text-primary hover:underline text-sm"
            >
              See more
            </Link>
          )}
        </div>

        {/* Always at Bottom */}
        <div className="flex justify-between items-center mt-auto pt-4  border-t border-t-gray-300">
          <p className="flex items-center gap-2 text-[18px]">
            <FaRegCommentAlt />
            {queiry?.recommendations?.length || 0}
            <span className="hidden md:block">Recommendations</span>
          </p>
          <Button to={`/details/${_id}`} text={"View Recommendations"} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
