import React from "react";

const Appoinment = ({ booking, handleCancelBooking }) => {
  return (
    <section className=" w-full rounded-3xl bg-base-100 card-sm shadow-sm">
      <div className="card-body">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h2 className="card-title">{booking?.name}</h2>
            <p>
              <small>{booking?.speciality}</small>
            </p>
          </div>

          <div>
            <p>Appointment Fee: {booking?.fee} Taka+ Vat</p>
          </div>
        </div>
        <button
          onClick={() => handleCancelBooking(booking?.id)}
          className="btn text-error border-error rounded-3xl"
        >
          Cancel Booking
        </button>
      </div>
    </section>
  );
};

export default Appoinment;
