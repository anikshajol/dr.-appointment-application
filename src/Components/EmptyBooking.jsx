import React from "react";
import { Link } from "react-router";

const EmptyBooking = () => {
  return (
    <div className="flex flex-col mt-10 text-center justify-center items-center space-y-3">
      <h2 className="text-5xl font-bold">
        You Have not Booked any appointment yet
      </h2>
      <p className="text-gray-500">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.
      </p>
      <Link to="/" className="btn btn-primary">
        Book An Appointment
      </Link>
    </div>
  );
};

export default EmptyBooking;
