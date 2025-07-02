import React from "react";
import QueryTableRow from "./QueryTableRow/QueryTableRow";
import NoRecommText from "../NoRecommText/NoRecommText";

const RecommendatinTable = ({
  recomms,
  headers,
  dlt,
  setMyRecomms,
  myRecomms,
}) => {


  if (myRecomms.length === 0) {
    return <NoRecommText/>
  }

  return (
    <div className="overflow-x-auto min-h-[calc(100vh-438px)]">
      <table className="table table-lg border border-primary ">
        <thead>
          <tr className="bg-primary dark:bg-gray-800 text-white text-[18px]">
            {headers.map((head, index) => (
              <th key={index}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {recomms.map((recomm, index) => (
            <QueryTableRow
              myRecomms={myRecomms}
              dlt={dlt}
              recomms={recomms}
              key={index}
              recomm={recomm}
              setMyRecomms={setMyRecomms}
            ></QueryTableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecommendatinTable;
