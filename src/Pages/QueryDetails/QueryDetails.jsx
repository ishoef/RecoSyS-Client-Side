import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailCard from "../../Components/DetailCard/DetailCard";
import AddRecomForm from "../../Components/AddRecomForm/AddRecomForm";
import NormalLoader from "../../Components/Loader/NormalLoader";
import { AuthContext } from "../../Context/AuthProvider";

const QueryDetails = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);

  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    document.title = "Query Details | RecSyS";
  }, []);

  useEffect(() => {
    fetch(
      `https://reco-sys-server-side.vercel.app/queries/${params.id}?userEmail=${user?.email}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("faild to fetch Data", error);
        setDetails([]);
      });
  }, [params.id, user]);

  if (loading) {
    return <NormalLoader />;
  }

  return (
    <section className="mt-10">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <DetailCard details={details} />
        <AddRecomForm details={details} setDetails={setDetails} />
      </div>
    </section>
  );
};

export default QueryDetails;
