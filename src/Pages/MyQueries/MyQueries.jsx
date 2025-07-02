import React, { use, useEffect, useState } from "react";
import { responsive } from "../../Layouts/RootLayout";
import Title from "../../Components/Title/Title";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router";
import MyQueryCard from "../../Components/MyQueryCard/MyQueryCard";
import NoQueryText from "../../Components/NoQueryText/NoQueryText";
import { AuthContext } from "../../Context/AuthProvider";
import NormalLoader from "../../Components/Loader/NormalLoader";
import NoSeachResult from "../../Components/NoSearchResult/NoSeachResult";

const MyQueries = () => {
  const { user } = use(AuthContext);

  const [myQueries, setMyQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [isSearcing, setIsSearching] = useState(false);

  useEffect(() => {
    document.title = "My Queries | RecSyS";
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsSearching((searchText || "").trim() !== "");

        const url = searchText
          ? `https://reco-sys-server-side.vercel.app/queries?userEmail=${user?.email}&searchText=${searchText}`
          : `https://reco-sys-server-side.vercel.app/queries?userEmail=${user?.email}`;

        const token = user.accessToken;

        const res = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();

        setMyQueries(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch data", error);

        setMyQueries([]);
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, user?.email]);

  if (loading) {
    return <NormalLoader />;
  }

  return (
    <section className={`${responsive} mt-10`}>
      <div>
        <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-between items-center py-8 px-5 bg-primary rounded-2xl">
          <Title
            className={"text-white text-xl md:text-2xl"}
            title={`All Product Queries (${myQueries.length}) `}
          />
          <div className="flex flex-col md:flex-row items-center gap-3 ">
            {/* Search Fuction */}
            <label className="input w-70 ring-0 focus-within:ring-0 focus-within:ring-primary focus-within:outline-none">
              <div className="opacity-50">
                <IoIosSearch size={20} />
              </div>
              <input
                className="grow focus:outline-none focus:border-transparent"
                type="search"
                name="search"
                placeholder="Search Product"
                onChange={(e) => setSearchText(e.target.value)}
              />
            </label>

            <Link to={"/addquery"} className="btn bg-white text-primary px-8">
              <FaPlus />
              Add New Query
            </Link>
          </div>
        </div>

        {!myQueries || myQueries.length === 0 ? (
          isSearcing ? (
            <NoSeachResult searchText={searchText} />
          ) : (
            <NoQueryText />
          )
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
            {myQueries.map((query) => (
              <MyQueryCard
                searchText={searchText}
                key={query._id}
                setMyQueries={setMyQueries}
                myQueries={myQueries}
                query={query}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyQueries;
