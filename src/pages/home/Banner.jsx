import React from "react";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse py-20 px-6 md:px-16 bg-gradient-to-r from-pink-100 via-white to-purple-100 rounded-3xl shadow-xl items-center gap-16 animate-fade-in">
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img
          src={bannerImg}
          alt="Sassy Book Collection"
          className="w-full max-w-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="md:w-1/2 w-full flex flex-col items-start">
        <h1 className="md:text-6xl text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600 drop-shadow-lg">
          Discover Your Next Obsession
        </h1>
        <p className="mb-8 text-lg text-gray-700">
          Dive into a curated collection of bold, brilliant reads that spark joy
          and ignite curiosity. Whether you crave witty fiction or crave-worthy
          non-fiction, our picks are hand-selected for the modern book lover.
        </p>
        <button className="bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:scale-105 hover:from-fuchsia-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2 group">
          <span>Get Started</span>
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Banner;
