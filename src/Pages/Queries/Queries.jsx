import React, { useEffect, useState } from "react";
import QueriesCards from "../../Components/QueriesCards/QueriesCards";
import { responsive } from "../../Layouts/RootLayout";
import Title from "../../Components/Title/Title";
import { FaList } from "react-icons/fa";
import { LuLayoutGrid } from "react-icons/lu";
import { CiGrid2H } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { NavLink } from "react-router";


const Queries = () => {
  const [view, setView] = useState("grid3Col");
  const [searchText, setSearchText] = useState("");
  const [queriesCount, setQueriesCount] = useState(0);

  useEffect(() => {
      document.title = "Queries | RecSyS";
    }, []);

  return (
    <section className={`${responsive} mt-10`}>
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row gap-3 md:gap-8 lg:gap-0 justify-between items-center py-8 px-5 bg-primary/10 border border-primary/60 rounded-2xl">
          <Title title={`All Product Queries (${queriesCount})`} />
          <div className="flex flex-col md:flex-row items-center gap-3 ">
            {/* Search Option */}
            <label className="input md:w-100 ring-0 focus-within:ring-0 focus-within:outline-none">
              <div className="opacity-50">
                <IoIosSearch size={20} />
              </div>
              <input
                className="grow focus:outline-none focus:border-transparent"
                type="search"
                name="search"
                placeholder="Search Product"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </label>

            <div className="hidden lg:block">
              <div className="flex gap-2">
                <NavLink
                  onClick={() => setView("grid3Col")}
                  className="border hover:text-primary border-gray-400 p-[10px] rounded"
                >
                  <LuLayoutGrid />
                </NavLink>
                <NavLink
                  onClick={() => setView("grid2Col")}
                  className="border hover:text-primary border-gray-400 p-[10px] rounded"
                >
                  <FaList />
                </NavLink>
                
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-5 border border-gray-300" />
        <QueriesCards
          setQueriesCount={setQueriesCount}
          searchText={searchText}
          view={view}
        />
      </div>
    </section>
  );
};

export default Queries;
