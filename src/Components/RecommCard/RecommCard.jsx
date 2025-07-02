import React from 'react';
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';
import { MdAccessTime, MdOutlineDateRange } from 'react-icons/md';

const RecommCard = ({ details }) => {
  console.log(details);

  const {
    recommenderName,
    creationDate,
    creationTime,
    recommendProductName,
    title,
    productImageURL,
    recommendationReason,
    recommenderPhoto,
  } = details;

  console.log(details);

  return (
    <div className=" border border-gray-400 shadow-xl rounded-2xl px-8 py-8 flex flex-col gap-3 mt-10">
      {/* Profiel Information */}
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <div>
          <ProfilePhoto proPic={recommenderPhoto} />
        </div>
        <div>
          <h1 className="poppins-semibold text-center text-2xl lg:text-start">{recommenderName}</h1>
          <div>
            <div className="flex items-center gap-4 poppins">
              <div className="flex gap-2 justify-center">
                <MdOutlineDateRange size={20} />
                <p>{creationDate}</p>
              </div>
              <div className="flex gap-2 justify-center">
                <MdAccessTime size={20} />
                <p>{creationTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="poppins-regular text-xl text-center lg:text-start ">
        {title || "No Title"}
      </h1>
      <div className="flex flex-col lg:flex-row gap-5 ">
        <div>
          <img
            className="w-full h-30 md:h-70 lg:h-30 rounded-2xl"
            src={
              productImageURL ||
              "https://images.unsplash.com/photo-1620987278429-ab178d6eb547?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
            }
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="poppins-semibold">
            Recommended:{" "}
            <span className="text-primary">
              {recommendProductName || "Nor Recommended Prodcut Name"}
            </span>
          </p>
          <p>{recommendationReason || "Not Given Any Reson"}</p>
        </div>
      </div>
    </div>
  );
};

export default RecommCard;