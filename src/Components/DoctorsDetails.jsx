import React from "react";
import { IoIosClock } from "react-icons/io";
import { RiRegisteredLine } from "react-icons/ri";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { addToLocalStorage } from "../Utilities/localstorage";

const DoctorsDetails = () => {
  const details = useLoaderData();
  const { id } = useParams();
  //   console.log(id, details);

  const doctorsDetails = details.find((data) => data.id === id);
  //   console.log(doctorsDetails);

  const {
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
  } = doctorsDetails;

  const today = new Date()
    .toLocaleDateString("en-US", { weekday: "long" })
    .toLowerCase();
  const isAvailableToday = availability
    .map((day) => day.toLowerCase())
    .includes(today);

  const navigate = useNavigate();

  const handleBookingAppointment = (id) => {
    const isNewBooking = addToLocalStorage(id);
    if (isNewBooking) {
      navigate("/bookings");
    }
  };

  return (
    <div className="px-24 py-8 ">
      <div className="card bg-base-100 card-sm shadow-sm pb-4">
        <div className="card-body text-center">
          <h2 className="text-3xl font-semibold text-center">
            Doctor's Profile Details
          </h2>
          <p>Here is our best doctors profile you can see</p>
        </div>
      </div>

      {/* profiles */}
      <div className="card flex-col lg:flex-row card-side bg-base-100 h-137 my-6 p-4">
        <figure className="w-1/3 mr-4">
          <img src={image} className="rounded-3xl" alt="doctors " />
        </figure>
        <div className="">
          <h1 className="text-5xl font-bold">{name}</h1>
          <span className="text-gray-500">{education}</span> <br />
          <span className="text-gray-500">{speciality}</span> <br />
          <p className="text-gray-500 pt-4">Working At</p>
          <p className="pt-1 font-bold text-[18px]">{workplace}</p>
          {/* border */}
          <div className="border-b-2 pt-2 border-gray-300 border-dashed"></div>
          {/* registration */}
          <div
            className="flex pt-3 items-center dark:text-gray-800 text-gray-500 font-light"
            bis_skin_checked="1"
          >
            <span>
              <RiRegisteredLine />
            </span>
            <span>
              <p className="ml-2">Reg No: {registration}</p>
            </span>
          </div>
          {/* border */}
          <div className="border-b-2 pt-2  border-gray-300 border-dashed"></div>
          {/* availability */}
          <div className="pt-4">
            <span className="font-semibold ">Availability</span>{" "}
            {availability.map((data) => (
              <button className="text-warning btn mr-2.5 rounded-3xl">
                {data}
              </button>
            ))}
          </div>
          {/* consultation fee */}
          <div className="pt-3">
            <span className="font-semibold">Consultation Fee: </span>
            <span className="text-primary font-semibold ml-1.5">
              Taka : {fee}{" "}
              <span className="text-gray-500 mr-1">(inc. vat)</span>
              Per consultation
            </span>
          </div>
        </div>
      </div>

      {/* booking appointment */}

      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Book Appointment</h2>
          <div className="border-b-2 pt-2 border-gray-300 border-dashed"></div>
          {/* availability */}
          <div className="flex justify-between">
            <span>Availability</span>
            <button className="btn text-success rounded-3xl">
              {isAvailableToday
                ? "Doctor available today"
                : "Doctor not available today"}
            </button>
          </div>
          {/* warning */}

          <button className="md:btn text-warning rounded-3xl flex items-center justify-center">
            <span className="hidden">
              <IoIosClock />
            </span>
            <span>
              Due to high patient volume, we are currently accepting
              appointments for today only. We appreciate your understanding and
              cooperation.
            </span>
          </button>
          {/* booking button */}
          <button
            onClick={() => handleBookingAppointment(id)}
            className="btn btn-primary rounded-3xl"
          >
            Book Appointment Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorsDetails;
