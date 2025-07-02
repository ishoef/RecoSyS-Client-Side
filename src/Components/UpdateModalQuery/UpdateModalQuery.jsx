import React, { use } from "react";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider";

const UpdateModalQuery = ({ query, setShowModal, setMyQueries }) => {
  const { user } = use(AuthContext);

  const {
    _id,
    userName,
    createDate,
    createTime,
    queryTitle,
    productName,
    productBrand,
    productImageURL,
    boycottingReson,
  } = query;

  console.log(_id);

  // Update the Query
  const handleUpdateQuery = (e) => {
    e.preventDefault();

    const form = e.target;

    const now = new Date();
    const updateDate = now.toLocaleDateString("en-US");
    const updateTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const updatedData = {
      productName: form.productName.value,
      productBrand: form.productBrand.value,
      productImageURL: form.productImageURL.value,
      queryTitle: form.queryTitle.value,
      boycottingReson: form.boycottingReson.value,
      createDate: createDate,
      createTime: createTime,
      updateDate: updateDate,
      updateTime: updateTime,
      userName: userName,
      userEmail: user?.email || "",
      userPhotoURL: user?.photoURL || "",
    };

    // Send Update Data To the Server
    fetch(`https://reco-sys-server-side.vercel.app/queries/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after update", data);
        if (data.modifiedCount > 0) {
          fetch(
            `https://reco-sys-server-side.vercel.app/queries?userEmail=${user?.email}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${user?.accessToken}`,
                "Content-Type": "application/json",
              },
            }
          )
            .then((res) => res.json())
            .then((data) => setMyQueries(data));

          // Show success message
          Swal.fire({
            title: "Success!",
            text: "Query updated successfully",
            icon: "success",
            confirmButtonText: "Go to My Queries",
            showCancelButton: true,
            cancelButtonColor: "#b92ce3",
            cancelButtonText: "Update More",
          }).then((result) => {
            console.log(result);
            if (result.isConfirmed) {
              // Navigate to My Queries page
              setShowModal(false);
            } else {
              setShowModal(!false);
            }
          });
          form.reset();
        } else {
          Swal.fire({
            title: "No Changes Made",
            text: "Your query was not updated because no changes were detected.",
            icon: "info",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        console.error("Error updating query:", error);
        Swal.fire({
          title: "Error!",
          text: "There was an error updating your query. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <form onSubmit={handleUpdateQuery} className="flex flex-col gap-4">
      <div className="flex items-center justify-between border p-4 rounded-2xl shadow border-gray-400 mb-5">
        <h1 className="poppins-semibold text-2xl text-primary">
          Update Your Query
        </h1>
        <FaRegEdit size={32} color="#14b8a6" />
      </div>

      {/* Product Name */}
      <label htmlFor="title" className="flex flex-col gap-2">
        <span className="poppins-regular">
          Product Name <span className="text-red-500">*</span>
        </span>
        <input
          type="text"
          name="productName"
          defaultValue={productName}
          id=""
          className="input w-full focus-within:outline-none focus-within:border-primary"
          placeholder="E.g., Google Pixel 7 Pro is a great alternative."
          required
        />
      </label>

      {/* Product Brand */}
      <label htmlFor="title" className="flex flex-col gap-2">
        <span className="poppins-regular">
          Product Brand <span className="text-red-500">*</span>
        </span>
        <input
          type="text"
          name="productBrand"
          defaultValue={productBrand}
          id=""
          className="input w-full focus-within:outline-none focus-within:border-primary"
          placeholder="E.g., Google Pixel 7 Pro is a great alternative."
          required
        />
      </label>

      {/* Product Image */}
      <label
        htmlFor="title"
        className="flex flex-col gap-2 focus-within:border-primary"
      >
        <span className="poppins-regular">
          Product Image URL <span className="text-red-500">*</span>
        </span>
        <input
          type="url"
          name="productImageURL"
          defaultValue={productImageURL}
          id=""
          className="input w-full focus-within:outline-none focus-within:border-primary "
          placeholder="E.g., Google Pixel 7 Pro is a great alternative."
          required
        />
      </label>

      {/* Query Title */}
      <label htmlFor="title" className="flex flex-col gap-2">
        <span className="poppins-regular">
          Query Title <span className="text-red-500">*</span>
        </span>
        <input
          type="text"
          name="queryTitle"
          defaultValue={queryTitle}
          id=""
          className="input w-full focus-within:outline-none focus-within:border-primary"
          placeholder="E.g., Google Pixel 7 Pro is a great alternative."
          required
        />
      </label>

      {/* Boycotting Reason */}
      <label htmlFor="">
        <span className="poppins-regular">
          Boycotting Reason Detils <span className="text-red-500">*</span>
        </span>
        <textarea
          name="boycottingReson"
          defaultValue={boycottingReson}
          className="w-full h-32 p-3 border border-gray-300 rounded-md focus-within:border-primary focus:outline-none mt-2"
          placeholder="Explain why you're looking for alternativew to this product..."
          required
        ></textarea>
      </label>

      {/* Add Query Button */}
      <button className="btn btn-primary" type="submit">
        Update Query
      </button>
    </form>
  );
};

export default UpdateModalQuery;
