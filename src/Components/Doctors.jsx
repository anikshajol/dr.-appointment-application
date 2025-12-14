import React, { useState } from "react";
import Doctor from "./Doctor";

const Doctors = ({ doctors }) => {
  //   console.log(doctors);
  const [visibleCount, setVisibleCount] = useState(6);
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
    // setVisibleCount(doctors.length);
  };
  const handleLess = () => {
    setVisibleCount((prev) => prev - 6);
  };

  return (
    <div>
      <div className="container bg-linear-to-t mx-auto flex flex-col items-center px-4 py-12 md:py-2 text-center md:pt-16 md:px-10 lg:px-32">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          Our Best Doctors
        </h1>
        <p className="my-6 text-gray-600 text-lg font-light">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-10 lg:px-28">
        {doctors.slice(0, visibleCount).map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor} />
        ))}
      </div>
      {visibleCount < doctors.length ? (
        <div className="flex justify-center mt-4">
          <button onClick={handleLoadMore} className="btn btn-primary">
            View All Doctors
          </button>
        </div>
      ) : (
        <div className="flex justify-center mt-4">
          <button onClick={handleLess} className="btn btn-primary">
            Less Doctors
          </button>
        </div>
      )}
    </div>
  );
};

export default Doctors;
