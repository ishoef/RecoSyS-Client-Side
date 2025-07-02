import React from "react";

const ItemsLoader = () => {
  const item = (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md animate-pulse ">
      <div className="w-full">
        <div className="w-full rounded-t-xl bg-gray-300 dark:bg-gray-700 h-50 md:h-50 lg:h-60"></div>
      </div>
      <div className="p-4">
        <div className="w-full">
          <div className="w-full">
            <div className="bg-gray-300 dark:bg-gray-700 w-28 h-6 rounded mb-2"></div>
            <div className="bg-gray-300 dark:bg-gray-700 w-28 h-6 rounded mb-2"></div>
          </div>
          <div className="mb-2">
            <div className="bg-gray-300 dark:bg-gray-700 w-full h-6 rounded mb-2"></div>
            <div className="bg-gray-300 dark:bg-gray-700 w-full h-6 rounded mb-2"></div>
          </div>
          <div className="flex justify-between">
            <div className="bg-gray-300 dark:bg-gray-700 w-16 h-6 rounded mb-2"></div>
            <div className="bg-gray-300 dark:bg-gray-700 w-16 h-6 rounded mb-2"></div>
          </div>
        </div>
        <div className="bg-gray-300 dark:bg-gray-700 w-full h-8 rounded mb-2"></div>
      </div>
    </div>
  );

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-5 mt-10">
        {item} {item} {item}
        {item} {item} {item}
        {item} {item} {item}
      </div>
    </>
  );
};

export default ItemsLoader;
