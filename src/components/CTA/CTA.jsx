import React from "react";
import ButtonV5 from "../pixaui/buttonv5";
import AnubhavIcon from "../../assets/AnubhavIcon";

const CTA = () => {
  return (
    <div className="mb-12 flex w-[90%] max-w-7xl items-start justify-between rounded-2xl border border-[#d2d2d6] bg-[#fafafa] p-16 shadow-lg sm:flex-wrap-reverse md:gap-4 md:p-8">
      <div className="flex flex-col items-start justify-center gap-8 text-center">
        <h2 className="text-left text-[2.6rem] font-[500] leading-10 text-[#212121] x-sm:text-4xl">
          Discover Our <br /> Latest Insights
        </h2>
        <p className="mb-6 w-3/4 text-left text-gray-600 md:w-full">
          Dive into our blog to explore a variety of topics, from industry
          trends to practical tips. Whether you’re looking for inspiration or
          knowledge, we’ve got something for everyone.{" "}
          <span className="font-semibold">Explore now</span> and stay updated
          with our latest posts.
        </p>
        <ButtonV5 icon={false}>
          <div className="flex items-center justify-center gap-1">
            <h5 className="flex gap-1 font-[300] -tracking-[0.2px]">
              Start Reading
            </h5>
            <div className="flex w-5 items-center justify-end overflow-hidden">
              <div className="w-5">
                <svg
                  className={`translate-x-[0%] text-[#ffffff80] opacity-0 transition-all duration-0 group-hover:translate-x-[100%] group-hover:text-[#ffffff] group-hover:opacity-100 group-hover:duration-300`}
                  width="19"
                  height="19"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.42999 4L15.5 10.07L9.42999 16.14"
                    stroke="#f0f0f0"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M4 10.0699L15 10.0699"
                    stroke="#f0f0f0"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="w-5">
                <svg
                  className={`translate-x-[0%] text-[#ffffff80] opacity-100 transition-all duration-0 group-hover:translate-x-[100%] group-hover:text-[#ffffff] group-hover:opacity-0 group-hover:duration-300`}
                  width="19"
                  height="19"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.42999 4L15.5 10.07L9.42999 16.14"
                    stroke="#f0f0f0"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M4 10.0699L15 10.0699"
                    stroke="#f0f0f0"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </ButtonV5>
      </div>
      <AnubhavIcon />
    </div>
  );
};

export default CTA;
