import React from "react";
import { Atom } from "react-loading-indicators";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-center">
      {/* Here we use react loaginh indicators for loading animation */}
      <Atom
        color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]}
        size="large"
        text="Loading..."
      />
    </div>
  );
};

export default Loading;
