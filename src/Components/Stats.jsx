import React from "react";
import doctors from "../assets/success-doctor.png";
import patients from "../assets/success-patients.png";
import review from "../assets/success-review.png";
import staffs from "../assets/success-staffs.png";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <section className="pb-20">
      <div className="container  mx-auto flex flex-col items-center px-4 py-12 md:py-2 text-center md:pt-10 md:px-10 lg:px-32">
        <h2 className="text-2xl font-bold leading-none sm:text-4xl">
          We Provide Best Medical Services
        </h2>
        <p className="my-6 text-gray-600 text-lg font-light">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>

      {/* card */}
      <div className="flex justify-center items-center gap-10 px-32">
        {/* card -1 */}
        <div className="card bg-base-100 h-44 w-44 card-md shadow-sm">
          <div className="card-body">
            <img
              src={doctors}
              alt="logo"
              className="object-cover w-1/3 max-w-10"
            />
            <div>
              <h3 className="text-4xl font-bold pb-2">
                <CountUp end={199} duration={5} />+
              </h3>
              <span className="text-gray-600 ">Total Doctors</span>
            </div>
          </div>
        </div>
        {/* card -2 */}
        <div className="card bg-base-100 h-44 w-44 card-md shadow-sm">
          <div className="card-body">
            <img
              src={review}
              alt="logo"
              className="object-cover w-1/3 max-w-10"
            />
            <div>
              <h3 className="text-4xl font-bold pb-2">
                {" "}
                <CountUp end={487} duration={5} />+
              </h3>
              <span className="text-gray-600 ">Total Doctors</span>
            </div>
          </div>
        </div>
        {/* card -3 */}
        <div className="card bg-base-100 h-44 w-44 card-md shadow-sm">
          <div className="card-body">
            <img
              src={patients}
              alt="logo"
              className="object-cover w-1/3 max-w-10"
            />
            <div>
              <h3 className="text-4xl font-bold pb-2">
                {" "}
                <CountUp end={1900} duration={5} />+
              </h3>
              <span className="text-gray-600 ">Total Doctors</span>
            </div>
          </div>
        </div>
        {/* card -4 */}
        <div className="card bg-base-100 h-44 w-44 card-md shadow-sm">
          <div className="card-body">
            <img
              src={staffs}
              alt="logo"
              className="object-cover w-1/3 max-w-10"
            />
            <div>
              <h3 className="text-4xl font-bold pb-2">
                {" "}
                <CountUp end={300} duration={5} />+
              </h3>
              <span className="text-gray-600 ">Total Doctors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
