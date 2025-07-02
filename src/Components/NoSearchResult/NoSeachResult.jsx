import React from "react";
import { VscSearchStop } from "react-icons/vsc";

const NoSeachResult = ({ searchText }) => {
  return (
    <div className="w-full py-10 px-5 my-10 rounded-2xl bg-primary/10 border-primary min-h-[calc(100vh-550px)] border flex justify-center">
      <div className="flex flex-col items-center justify-center gap-5">
        <p className="text-red-500">
          <VscSearchStop size={66} />
        </p>
        <p className="md:text-3xl text-center poppins">
          No Results Found for Your Search with This Keyword
        </p>
        <span className="border border-primary bg-primary/20 p-5 rounded-2xl text-2xl font-semibold">
          "{searchText}"
        </span>
      </div>
    </div>
  );
};

export default NoSeachResult;
