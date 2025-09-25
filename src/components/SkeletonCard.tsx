import React from "react";

const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col animate-pulse">
      <div className="bg-gray-300 w-full h-48 rounded-md mb-4" />
      <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded mb-1 w-1/2"></div>
      <div className="h-5 bg-gray-300 rounded w-1/4"></div>
    </div>
  );
};

export default SkeletonCard;
