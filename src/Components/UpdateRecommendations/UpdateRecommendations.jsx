import React, { use, useEffect } from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import { useParams } from "react-router";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const UpdateRecommendations = ({
  showModal,
  setShowModal,
  modalRef,
  recomm,
  setMyRecomms,
}) => {
  const { user } = use(AuthContext);

  const { id } = useParams();
  console.log(id);

  const {
    recommendProductName,
    recommendationReason,
    productImageURL,
    queryId,
    title,
  } = recomm;

  console.log(queryId);

  // close modal on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showModal, setShowModal, modalRef]);

  const handleUpdateRecomms = (e) => {
    e.preventDefault();

    const form = e.target;

    // get the time and Date
    const now = new Date();
    const currentDate = now.toLocaleDateString("en-US");
    const currentTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const recommData = {
      title: form.title.value,
      recommendProductName: form.recommendProductName.value,
      productImageURL: form.productImageURL.value,
      recommendationReason: form.recommendationReason.value,
      queryId: recomm.queryId,
      queryTitle: recomm.queryTitle,
      queryCreatorName: recomm.queryCreatorName,
      queryCreatorEmail: recomm.queryCreatorEmail,
      recommenderName: user?.displayName,
      recommenderEmail: user?.email,
      recommenderPhoto: user?.photoURL,
      creationDate: currentDate,
      creationTime: currentTime,
    };

    console.log(recommData);

    // Update the recommendation in the database  
    fetch(
      `https://reco-sys-server-side.vercel.app/queries/${recomm.queryId}/recommendation`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recommData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Update successful", data);
        if (data.modifiedCount > 0) {
          fetch(
            `https://reco-sys-server-side.vercel.app/given-recommendations?userEmail=${user?.email}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${user?.accessToken}`,
                "Content-Type": "application/json",
              },
            }
          )
            .then((res) => res.json())
            .then((data) => setMyRecomms(data));

          // Show success message
          Swal.fire({
            title: "Success!",
            text: "Recommendation Update Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              setShowModal(false);
            }
          });
        } else {
          Swal.fire({
            title: "No Changes Made",
            text: "Your Recommendation was not updated bacause no changes were detected.",
            icon: "info",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        console.log("Recommendation Update Failed", error);
        Swal.fire({
          title: "Update Failed!",
          text: "Recommendation Update Failed",
          icon: "error",
          confirmButtonText: "ok",
        });
      });
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#15315199] transition-opacity  ">
        <div
          ref={modalRef}
          className="lg:w-5/12 border border-gray-400 shadow-xl bg-white mx-auto rounded-2xl p-10 my-10 "
        >
          <form onSubmit={handleUpdateRecomms} className="flex flex-col gap-4">
            <div className="flex items-center justify-between border p-4 rounded-2xl shadow border-gray-400 mb-5">
              <h1 className="poppins-semibold text-2xl text-primary">
                Update Your Recommendation
              </h1>
              <FaRegCommentAlt size={32} color="#14b8a6" />
            </div>

            {/* Recommendation Title */}
            <label htmlFor="title" className="flex flex-col gap-2">
              <span className="poppins-regular">Recommendation Title</span>
              <input
                type="text"
                name="title"
                defaultValue={title}
                id=""
                className="input w-full focus-within:outline-none "
                placeholder="E.g., Google Pixel 7 Pro is a great alternative."
                required
              />
            </label>

            {/* Recommend Product Name */}
            <label
              htmlFor="recommendProductName"
              className="flex flex-col gap-2"
            >
              <span className="poppins-regular">Recommended Product Name</span>
              <input
                type="text"
                name="recommendProductName"
                defaultValue={recommendProductName}
                id=""
                className="input w-full focus-within:outline-none "
                placeholder="E.g., Google Pixel 7 Pro is a great alternative."
                required
              />
            </label>

            {/* Reocmmend Product Image URL */}
            <label htmlFor="productImageURL" className="flex flex-col gap-2">
              <span className="poppins-regular">
                Recommended Product Image URL
              </span>
              <input
                type="url"
                name="productImageURL"
                defaultValue={productImageURL}
                id=""
                className="input w-full focus-within:outline-none "
                placeholder="E.g., Google Pixel 7 Pro is a great alternative."
                required
              />
            </label>

            {/* Recommendation Reason */}
            <label htmlFor="recommendationReason">
              <span className="poppins-regular">Recommendation Reason</span>
              <textarea
                name="recommendationReason"
                defaultValue={recommendationReason}
                className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring mt-2"
                placeholder="Explain why this is a good alternative"
                required
              ></textarea>
            </label>
            <button className="btn btn-primary" type="submit">
              Update Recommendation
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateRecommendations;
