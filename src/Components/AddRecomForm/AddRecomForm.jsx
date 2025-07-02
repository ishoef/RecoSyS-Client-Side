import React, { use } from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import AllRecomms from "../AllRecomms/AllRecomms";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const AddRecomForm = ({ details, setDetails }) => {
  const { user } = use(AuthContext);

  const handleAddRecomm = (e) => {
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
      queryId: details._id,
      queryTitle: details.queryTitle,
      queryCreatorName: details.userName,
      queryCreatorEmail: details.userEmail,
      recommenderName: user?.displayName,
      recommenderEmail: user?.email,
      recommenderPhoto: user?.photoURL,
      creationDate: currentDate,
      creationTime: currentTime,
    };

    console.log(recommData);

    fetch(
      `https://reco-sys-server-side.vercel.app/queries/${details._id}/recommendations?userEmail=${user?.email}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(recommData),
      }
    ).then(() => {
      // Re-fetch updated query
      fetch(
        `https://reco-sys-server-side.vercel.app/queries/${details._id}?userEmail=${user?.email}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${user?.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((updatedData) => {
          setDetails(updatedData); // set updated query including new recommendations

          Swal.fire({
            title: "Success!",
            text: "Query created successfully",
            icon: "success",
            confirmButtonText: "Add Another Recommendation",
          });
          form.reset(); // Optional: Clear the form
        });
    });
  };

  return (
    <>
      <div className="lg:w-8/12 border border-gray-400 shadow-xl mx-auto rounded-2xl p-4 md:p-10 my-10 ">
        <form onSubmit={handleAddRecomm} className="flex flex-col gap-4">
          <div className="flex items-center justify-between border p-4 rounded-2xl shadow border-gray-400 mb-5">
            <h1 className="poppins-semibold text-xl md:text-2xl text-primary ">
              Add Your Recommendation
            </h1>
            <FaRegCommentAlt size={32} color="#14b8a6" />
          </div>
          <label htmlFor="title" className="flex flex-col gap-2">
            <span className="poppins-regular">
              Recommendation Title <span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              name="title"
              id=""
              className="input w-full focus-within:outline-none "
              placeholder="E.g., Google Pixel 7 Pro is a great alternative."
              required
            />
          </label>

          <label htmlFor="recommendProductName" className="flex flex-col gap-2">
            <span className="poppins-regular">
              Recommended Product Name <span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              name="recommendProductName"
              id=""
              className="input w-full focus-within:outline-none "
              placeholder="E.g., Google Pixel 7 Pro is a great alternative."
              required
            />
          </label>

          <label htmlFor="productImageURL" className="flex flex-col gap-2">
            <span className="poppins-regular">
              Recommended Product Image URL{" "}
              <span className="text-red-500">*</span>
            </span>
            <input
              type="url"
              name="productImageURL"
              id=""
              className="input w-full focus-within:outline-none "
              placeholder="E.g., Google Pixel 7 Pro is a great alternative."
              required
            />
          </label>

          <label htmlFor="recommendationReason">
            <span className="poppins-regular">
              Recommendation Reason <span className="text-red-500">*</span>
            </span>
            <textarea
              name="recommendationReason"
              className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring mt-2"
              placeholder="Explain why this is a good alternative"
              required
            ></textarea>
          </label>
          <button className="btn btn-primary" type="submit">
            Add Recommendation
          </button>
        </form>
      </div>

      <AllRecomms details={details} />
    </>
  );
};

export default AddRecomForm;
