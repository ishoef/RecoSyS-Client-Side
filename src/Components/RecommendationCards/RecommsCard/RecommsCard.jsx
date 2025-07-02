import React, { useRef, useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import ProfilePhoto from "../../ProfilePhoto/ProfilePhoto";
import { Link } from "react-router";
import Swal from "sweetalert2";
import UpdateRecommendations from "../../UpdateRecommendations/UpdateRecommendations";

const RecommsCard = ({ recomm, setMyRecomms }) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const {
    queryTitle,
    creationDate,
    creationTime,
    recommendProductName,
    productImageURL,
    queryId,
    title,
    recommenderEmail,
    recommenderPhoto,
    recommenderName,
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
      <div className="border overflow-hidden border-gray-300 shadow rounded-lg p-4 hover:shadow-md transition-all bg-white">
        {/* Top Section */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12 object-cover rounded-md"
              src={
                productImageURL ||
                "https://images.unsplash.com/photo-1620987278429-ab178d6eb547?w=300&auto=format&fit=crop&q=60"
              }
              alt="Product"
            />
            <div>
              <h2 className="font-semibold text-lg">{recommendProductName}</h2>
              <p className="text-xs text-gray-500">{creationDate}</p>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex gap-3 text-gray-500 text-xl">
            <Link
              onClick={() => setShowModal(true)}
              className="hover:text-primary hover:bg-transparent hover:border border border-primary hover:border-primary transition-all duration-300 ease-in-out bg-primary p-1 md:p-3 text-white rounded-md"
            >
              <IoCreateOutline />
            </Link>
            <button
              onClick={() => handleDelete(queryId, recommenderEmail)}
              className="hover:text-red-600 hover:bg-transparent hover:border border border-red-500 hover:border-red-500 transition-all duration-300 ease-in-out bg-red-500 p-1 md:p-3 text-white rounded-md"
            >
              <MdDelete />
            </button>
          </div>
        </div>

        {/* Recommendation Text */}
        <div className="mb-2">
          <p className="font-semibold text-sm text-gray-800">Recommendation</p>
          <p className="text-gray-700">
            {recommendProductName} is a great alternative
          </p>
        </div>

        {/* Query Info */}
        <div className="mb-1">
          <p className="font-semibold text-sm text-gray-800">Query</p>
          <p className="text-gray-700 truncate">{queryTitle}</p>
        </div>

        {/* Recommender Info */}
        <div className="mt-1">
          <button
            to="#"
            className="text-sm text-blue-600 hover:underline flex items-center gap-2"
          >
            <ProfilePhoto proPic={recommenderPhoto} />
            By {recommenderName}
          </button>
        </div>
      </div>

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

export default RecommsCard;
