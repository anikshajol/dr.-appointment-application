import React from "react";
import banner from "../assets/banner-img-1.png";
import banner2 from "../assets/banner-img-1.png";
const Banner = () => {
  return (
    <section className="dark:bg-black px-6 mt-3 pb-6 dark:text-gray-800 ">
      <div className="container bg-linear-to-t from-white via-base-200 to-base-200 mx-auto flex flex-col border-2 shadow-sm  border-white rounded-3xl items-center px-4 py-16 text-center md:pb-32 md:pt-20 md:px-10 lg:px-32">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          Dependable Care, Backed by Trusted Professionals.
        </h1>
        <p className="mb-6 mt-3 text-lg">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
        {/* search input */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-6">
          <input
            type="text"
            placeholder="Search Any Doctor"
            className="input input-md w-80 rounded-3xl"
          />

          <a className="btn btn-primary rounded-3xl">Search Now</a>
        </div>
        {/* banner image */}
        <section className="flex gap-4 flex-col lg:flex-row justify-center">
          <img
            src={banner}
            className="max-w-96 w-full lg:max-w-125"
            alt="Doctors image"
          />

          <img
            src={banner2}
            className="max-w-96 w-full lg:max-w-125"
            alt="Doctors image"
          />
        </section>
      </div>
    </section>
  );
};

export default Banner;
