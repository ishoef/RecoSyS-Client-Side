import React, { useRef, useState } from "react";
import { IoCreateOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import UpdateRecommendations from "../../UpdateRecommendations/UpdateRecommendations";
import Swal from "sweetalert2";

const QueryTableRow = ({ recomm, setMyRecomms }) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  
  const {
    queryTitle,
    queryCreatorName,
    creationDate,
    creationTime,
    recommendProductName,
    productImageURL,
    queryId,
    title,
    recommenderEmail,
  } = recomm;

  const handleDelete = (queryId, recommenderEmail) => {
    Swal.fire({
      timer: 5000,
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://reco-sys-server-side.vercel.app/queries/${queryId}/recommendation`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ recommenderEmail, title, creationTime }),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Deleted",
                text: "Your Recommendation has been deleted.",
                icon: "success",
                confirmButtonText: "Ok",
              });

              // ✅ Remove the deleted recommendation from UI
              setMyRecomms((prev) =>
                prev.filter(
                  (rec) =>
                    !(
                      rec.queryId === queryId &&
                      rec.recommenderEmail === recommenderEmail &&
                      rec.title === title &&
                      rec.creationTime === creationTime
                    )
                )
              );
            }
          });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to delete the Recommendation. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    });
  };

  return (
    <>
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
            {title || "No Recommendation"}
          </Link>
        </td>
        <td>
          <p>{queryTitle}</p>
          <p className="text-[14px] bg-gray-100 w-fit px-2 rounded-2xl mt-1">
            {queryCreatorName}
          </p>
        </td>
        <td>
          <div>
            <p>{creationDate}</p>
            <p>{creationTime}</p>
          </div>
        </td>
        <td className="space-y-3">
          <button
            onClick={() => setShowModal(true)}
            type="button"
            className="hover:scale-102 hover:shadow cursor-pointer bg-primary w-fit flex items-center justify-center p-2 rounded"
          >
            <IoCreateOutline color="white" />
          </button>

          <button
            onClick={() => handleDelete(queryId, recommenderEmail)}
            type="button"
            className="hover:scale-102 hover:shadow cursor-pointer bg-red-500 w-fit flex items-center justify-center p-2 rounded"
          >
            <MdDelete color="white" />
          </button>
        </td>
      </tr>

      {showModal && (
        <UpdateRecommendations
          recomm={recomm}
          showModal={showModal}
          setShowModal={setShowModal}
          modalRef={modalRef}
          setMyRecomms={setMyRecomms}
        />
      )}
    </>
  );
};

export default QueryTableRow;
