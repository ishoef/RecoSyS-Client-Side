import React from "react";
import Button from "../../../Components/Button/Button";
import { FaArrowRight } from "react-icons/fa";
import QueriesCards from "../../../Components/QueriesCards/QueriesCards";
import Title from "../../../Components/Title/Title";

const RecentQueries = () => {
  const btnText = (
    <div className="flex items-center justify-center gap-3">
      <p>View All</p>
      <FaArrowRight />
    </div>
  );

  const btnClass = " bg-transparent border border-gray-400 btn rounded-md";

  return (
    <section className="mt-10 md:mt-20">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <div className="flexeble">
          <Title title={"Recent Queries"}></Title>
          <Button to={"/queries"} className={btnClass} text={btnText}></Button>
        </div>
        <div>
          <QueriesCards sixCard={true} />
        </div>
      </div>
    </section>
  );
};

export default RecentQueries;
