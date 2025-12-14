import React from "react";
import drImage from "../assets/doctor-sample.png";
import { RiRegisteredLine } from "react-icons/ri";

const Doctor = ({ doctor }) => {
  console.log(doctor);
  const {
    id,
    name,
    image,
    education,
    speciality,
    experience,
    registration,
    designation,
    workplace,
    fee,
    availability,
  } = doctor;

  return (
    <div
      className="rounded-xl shadow-xl bg-white dark:bg-gray-50 dark:text-gray-800"
      bis_skin_checked="1"
    >
      <figure className="px-10 pt-6">
        <img
          src={image}
          alt="dr image"
          className="rounded-xl h-72 m-auto w-full"
        />
      </figure>
      {/* availability and experiences */}
      <div className="pt-6 px-6">
        {availability.length !== 0 ? (
          <button className="btn text-success rounded-3xl">Available</button>
        ) : (
          <button>Not Available</button>
        )}
        <button className="btn ml-3 text-info rounded-3xl">
          {parseInt(experience)} + Years Experience
        </button>
      </div>
      <div
        className="flex flex-col justify-between p-6 space-y-4"
        bis_skin_checked="1"
      >
        <div className="space-y-2" bis_skin_checked="1">
          <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
          <p className="dark:text-gray-800 text-gray-500 font-light">
            {education}
          </p>
        </div>

        {/* border */}
        <div className="border-b-2 border-gray-300 border-dashed"></div>

        {/* registration */}
        <div
          className="flex items-center dark:text-gray-800 text-gray-500 font-light"
          bis_skin_checked="1"
        >
          <span>
            <RiRegisteredLine />
          </span>
          <span>
            <p className="ml-2">Reg No: {registration}</p>
          </span>
        </div>
        <button className="btn text-primary rounded-3xl">View Details</button>
      </div>
    </div>
  );
};

export default Doctor;
