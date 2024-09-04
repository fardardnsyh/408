import React from "react";
import { Link } from "react-router-dom";

const Tag = ({ name }) => {
  return (
    <>
      <Link to={`/search?query=${name}`} >
        <div className="flex gap-1 bg-[#f0f0f0] border px-2 items-center rounded-full hover:bg-[#e9e9e9] transition-all justify-center text-[#212121] font-light text-[20px] text-center text-base cursor-pointer">
          {name}
        </div>
      </Link>
    </>
  );
};

export default Tag;
