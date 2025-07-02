import React from 'react';
import RecommsTableRow from './RecommsTableRow/RecommsTableRow';
import NoRecommText from '../NoRecommText/NoRecommText';

const RecommsForMeTable = ({ headers, recomms }) => {

  

  if (recomms.length === 0) {
    return <NoRecommText btnText={"See Queries and Add Recommendation"} />
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
            <RecommsTableRow
              key={index}
              recomms={recomms}
              recomm={recomm}
            ></RecommsTableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecommsForMeTable;