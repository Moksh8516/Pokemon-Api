import React from "react";

function Loader() {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="relative w-16 h-16">
        {/* Spinning Outer Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-teal-400 animate-spin"></div>

        {/* Conic Gradient Circle */}
        <div className="absolute inset-0 rounded-full bg-[conic-gradient(#2dd4bf_0deg,#10b981_0deg,transparent_80deg)] animate-spin-slow"></div>

        {/* Inner Circle */}
        <div className="absolute inset-2 bg-gray-900 rounded-full"></div>
      </div>
    </div>
  );
}

export default Loader;
