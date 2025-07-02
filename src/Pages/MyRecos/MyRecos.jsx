import React, { use, useEffect, useState } from "react";
import { responsive } from "../../Layouts/RootLayout";
import { FaRegCommentAlt } from "react-icons/fa";
import Title from "../../Components/Title/Title";
import RecommendatinTable from "../../Components/RecommendatinTable/RecommendatinTable";
import { AuthContext } from "../../Context/AuthProvider";
import RecommendationCards from "../../Components/RecommendationCards/RecommendationCards";

const MyRecos = () => {
  const { user } = use(AuthContext);

  const [myRecomms, setMyRecomms] = useState([]);

  useEffect(() => {
    document.title = "My Recommendations | RecSyS";
  }, []);

  useEffect(() => {
    fetch(
      `https://reco-sys-server-side.vercel.app/given-recommendations?userEmail=${user.email}`,
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
        console.log("Catching the All Recommendation i created", data);
        setMyRecomms(data);
      })
      .catch((err) => {
        console.log("Error Fetching Recommendations:", err);
      });
  }, [user?.email, user?.accessToken]);

  const tableHeaderText = [
    "Product",
    "Recommendation",
    "Query",
    "Date",
    "Actions",
  ];

  return (
    <section className={`${responsive} mt-10`}>
      {/* Title Box */}
      <div className="flex justify-between items-center py-8 px-5 text-center md:px-10 bg-primary  rounded-2xl">
        <Title
          className={"text-white"}
          title={`My Recommendations (${myRecomms.length})`}
        />

        <span className="text-5xl hidden md:block text-white">
          <FaRegCommentAlt />
        </span>
      </div>

      {/* Recommendations Table */}

      <div className="my-10 hidden lg:block">
        <RecommendatinTable
          myRecomms={myRecomms}
          dlt={true}
          headers={tableHeaderText}
          recomms={myRecomms}
          setMyRecomms={setMyRecomms}
        />
      </div>

      <div className="lg:hidden my-10 border border-gray-300 rounded-2xl shadow p-5 md:p-10 ">
        <RecommendationCards
          myRecomms={myRecomms}
          setMyRecomms={setMyRecomms}
        />
      </div>
    </section>
  );
};

export default MyRecos;
