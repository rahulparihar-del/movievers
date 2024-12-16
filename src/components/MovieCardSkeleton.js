import React from "react";

const MovieCardSkeleton = () => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 animate-pulse">
      <div className="rounded-t-lg bg-gray-300 dark:bg-gray-700 h-64"></div>
      <div className="p-5">
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mb-4"></div>
      </div>
      <div className="flex items-center my-4 space-x-2">
        <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
        <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
        <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
      </div>
      <div className="flex justify-between items-center">
        <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
        <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
      </div>
    </div>
  );
};

const MovieSkeletonGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto py-6">
      {Array(15)
        .fill(null)
        .map((_, index) => (
          <MovieCardSkeleton key={index} />
        ))}
    </div>
  );
};

export default MovieSkeletonGrid;
