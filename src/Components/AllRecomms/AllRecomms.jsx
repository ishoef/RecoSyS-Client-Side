import React from "react";
import { FaRegComment } from "react-icons/fa";
import RecommCard from "../RecommCard/RecommCard";
import NoRecommText from "../NoRecommText/NoRecommText";

const AllRecomms = ({ details }) => {

  return (
    <div className="lg:w-8/12 border border-gray-400 shadow-xl mx-auto rounded-2xl p-4 md:p-10 my-10 ">
      <div className="flex items-center gap-3 text-2xl poppins-semibold">
        <FaRegComment color="#14b8a6" />
        <h1 className="text-xl md:text-2xl">All Recommendations</h1>
        <span>({details?.recommendations?.length || 0})</span>
      </div>
      {!details?.recommendations || details.recommendations.length === 0 ? (
        <NoRecommText />
      ) : (
        details.recommendations.map((detail, index) => (
          <RecommCard key={index} details={detail} />
        ))
      )}
    </div>
  );
};

export default AllRecomms;
