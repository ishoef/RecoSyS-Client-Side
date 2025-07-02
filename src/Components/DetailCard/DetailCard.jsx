import React from "react";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import { MdOutlineDateRange } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";

const DetailCard = ({ details }) => {

  console.log(details);


  const {
    createDate,
    queryTitle,
    productName,
    productImageURL,
    productBrand,
    boycottingReson,
    userName,
    userPhotoURL,
  } = details;


  console.log(details);
  return (
    <div className="lg:w-6/12 border border-gray-400 shadow-xl mx-auto rounded-2xl p-4 md:p-10">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-4 border p-3 rounded-2xl border-gray-400 shadow">
          <div>
            <ProfilePhoto proPic={userPhotoURL} />
          </div>
          <div>
            <h1 className="poppins-semibold">{userName}</h1>
            <div>
              <p className="flex items-center gap-2 poppins-regular">
                {" "}
                <MdOutlineDateRange size={18} />
                {createDate}
              </p>
            </div>
          </div>
        </div>
        <h1 className="poppins-semibold text-primary text-2xl">{queryTitle}</h1>
        
        <div className="flex flex-col md:flex-row justify-between gap-5 h-full flex-1">
          <div className="basis-1/3 ">
            <img
              className="rounded-xl w-full h-50"
              src={productImageURL}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between gap-5 basis-2/3 ">
            <div className="flex items-center gap-4">
              <h1 className="text-xl poppins-semibold">{productName}</h1>
              <p className="bg-gray-200 px-2 rounded-2xl font-semibold">
                {productBrand}
              </p>
            </div>
            <div className="space-y-2">
              <p className="poppins-regular">Boycotting Reason:</p>
              <p>{boycottingReson}</p>
            </div>
            <div className="flex items-center gap-2 text-primary text-[18px] poppins-regular">
              {" "}
              <AiOutlineLike size={24} color="#14b8a6" />
              {details?.recommendations?.length || 0} Recommendations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
