import React from "react";
import { Link } from "react-router";
import { RxCross2 } from "react-icons/rx";


const OfferModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-[#15315199]  bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-6 relative max-w-[60%] shadow-xl">
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-2 right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
        >
          <RxCross2 />
        </button>

        <a
          href="https://portfolio-rose-two-uimck3sec9.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-xl font-bold mb-2 text-center">
            🎉 স্পেশাল অফার!
          </h2>
          <p className="text-gray-700 text-center">
            এখনই এনরোল করুন এবং{" "}
            <span className="text-green-600 font-semibold">৫০% ছাড়</span> পান!
          </p>
          <img
            src="https://i.ibb.co/GQjdCWNb/image.png"
            alt="Course Offer"
            className="rounded-lg w-full mb-4"
          />
        </a>
      </div>
    </div>
  );
};

export default OfferModal;
