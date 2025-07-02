import React, { use, useEffect, useState } from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import Title from "../../Components/Title/Title";
import { responsive } from "../../Layouts/RootLayout";
import { AuthContext } from "../../Context/AuthProvider";
import RecommsForMeTable from "../../Components/RecommsForMeTable/RecommsForMeTable";
import RecForMeCards from "../../Components/RecFormeCards/RecForMeCards";

const RecForme = () => {
  const [recForMe, setRecForMe] = useState([]);

  const { user } = use(AuthContext);

  const headerText = [
    "Recommended Product",
    "For Query",
    "Recommender",
    "Date",
    "Actions",
  ];

  useEffect(() => {
    document.title = "Recommendation for Me | RecSyS";
  }, []);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://reco-sys-server-side.vercel.app/recommendations-for-me?userEmail=${user.email}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${user?.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("Receiving data", data);
          setRecForMe(data);
        })
        .catch((error) => {
          console.log("Error fetching received recommendations:", error);
        });
    }
  }, [user?.email, user?.accessToken]);

  return (
    <section className={`${responsive} mt-10`}>
      {/* Title Box */}
      <div className="flex justify-between items-center py-8 px-5 md:px-10 bg-primary backdrop-blur-3xl rounded-2xl">
        <Title
          className={"text-white"}
          title={`Recommendations For My Queries`}
        />

        <span className="hidden md:block text-5xl text-white">
          <FaRegCommentAlt />
        </span>
      </div>

      {/* Recommendations Table */}

      <div className="my-10 hidden lg:block">
        <RecommsForMeTable headers={headerText} recomms={recForMe} />
      </div>

      <div className="lg:hidden my-10 border border-gray-300 rounded-2xl shadow p-5 space-y-8 md:p-10 ">
        {recForMe.map((recomm, index) => (
          <RecForMeCards key={index} recomm={recomm} />
        ))}
      </div>
    </section>
  );
};

export default RecForme;
