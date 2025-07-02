import React from "react";
import { IoCreateOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import ProfilePhoto from "../../ProfilePhoto/ProfilePhoto";

const RecommsTableRow = ({ recomm }) => {
  const {
    queryTitle,
    recommenderName,
    recommenderPhoto,
    creationDate,
    creationTime,
    recommendProductName,
    productImageURL,
    queryId,
  } = recomm;

  return (
    <tr>
      <td>
        <Link to={"/"} className="flex items-center gap-3">
          <img
            className="w-20 h-18 rounded-xl"
            src={
              productImageURL ||
              "https://images.unsplash.com/photo-1620987278429-ab178d6eb547?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
            }
            alt="Procut Image"
          />
          <h1 className="text-xl poppins hover:text-green-500 transition-normal">
            {recommendProductName}
          </h1>
        </Link>
      </td>
      <td>
        <Link to={`/recommDetails/${queryId}`}>
          {queryTitle || "No Recommendation"}
        </Link>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <ProfilePhoto proPic={recommenderPhoto} />
          <p>{recommenderName}</p>
        </div>
      </td>
      <td>
        <div>
          <p>{creationDate}</p>
          <p>{creationTime}</p>
        </div>
      </td>
      <td className="space-y-3">
        <Link
          to={`/details/${queryId}`}
          type="button"
          className="btn border border-gray-400 hover:scale-102 hover:bg-primary hover:text-white hover:shadow cursor-pointer bg-transparent w-fit flex items-center justify-center p-2 rounded"
        >
          <p className="poppins">View Detials</p>
        </Link>
      </td>
    </tr>
  );
};

export default RecommsTableRow;
