import React from "react";
import Skeleton from "react-loading-skeleton";

const LoadingSkeleton = () => {
  return (
    <div>
      <Skeleton height={200} width={400} />
      <Skeleton count={4} />
    </div>
  );
};

export default LoadingSkeleton;
