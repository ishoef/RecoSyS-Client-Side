import React, { useEffect, useState, useContext } from "react";
import Cards from "../Cards/Cards";
import NoQueryText from "../NoQueryText/NoQueryText";
import ItemsLoader from "../Loader/ItemsLoader";
import { AuthContext } from "../../Context/AuthProvider";
import NoSeachResult from "../NoSearchResult/NoSeachResult";

const QueriesCards = ({ sixCard, view, searchText, setQueriesCount }) => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsSearching((searchText || "").trim() !== "");
        const url = searchText
          ? `https://reco-sys-server-side.vercel.app/queries?searchText=${searchText}`
          : `https://reco-sys-server-side.vercel.app/queries`;

        const res = await fetch(url);
        const data = await res.json();
        setQueries(data);
        if (setQueriesCount) setQueriesCount(data.length);
        setLoading(false);

      } catch (error) {
        console.error("Failed to fetch data", error);
        setQueries([]);
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, user?.email]);

  const sixCards = [...queries]
    .sort((a, b) => {
      const dateA = new Date(`${a?.createDate} ${a?.createTime}`);
      const dateB = new Date(`${b?.createDate} ${b?.createTime}`);
      return dateB - dateA;
    })
    .slice(0, 6);

  if (loading) {
    return <ItemsLoader />;
  }

  if (queries.length === 0) {
    return isSearching ? (
      <NoSeachResult searchText={searchText} />
    ) : (
      <NoQueryText />
    );
  }

  return (
    <div
      className={
        view === "grid2Col"
          ? "grid lg:grid-cols-2 w-full gap-5 md:gap-10 my-10"
          : "grid lg:grid-cols-3 w-full gap-5 md:gap-10 my-10"
      }
    >
      {(sixCard ? sixCards : queries).map((query) => (
        <Cards key={query._id} queiry={query} />
      ))}
    </div>
  );
};

export default QueriesCards;
