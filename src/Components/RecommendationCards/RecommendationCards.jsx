import React from "react";
import RecommsCard from "./RecommsCard/RecommsCard";
import NoRecommText from "../NoRecommText/NoRecommText";

const RecommendationCards = ({ myRecomms, setMyRecomms }) => {


    if (myRecomms.length === 0) {
      return <NoRecommText />;
    }

    return (
      <>
        {myRecomms.map((recomm, index) => (
          <RecommsCard
            myRecomms={myRecomms}
            key={index}
            recomm={recomm}
            setMyRecomms={setMyRecomms}
          ></RecommsCard>
        ))}
      </>
    );
};

export default RecommendationCards;
