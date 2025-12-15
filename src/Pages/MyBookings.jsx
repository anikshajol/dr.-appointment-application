import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import {
  deleteFromLocalStorage,
  getFromLocalStorage,
} from "../Utilities/localstorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import Appoinment from "../Components/Appoinment";
import EmptyBooking from "../Components/EmptyBooking";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `
    M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z
  `;
};
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const MyBookings = () => {
  const doctors = useLoaderData();
  // console.log(doctors);
  const [appointment, setAppointment] = useState([]);
  useEffect(() => {
    const stored = getFromLocalStorage();
    const bookings = doctors.filter((doctor) => stored.includes(doctor.id));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAppointment(bookings);
  }, [doctors]);
  // console.log(appointment);
  // cancel booking
  const handleCancelBooking = (id) => {
    // console.log(id, "cancel");
    deleteFromLocalStorage(id);
    const stored = getFromLocalStorage();
    const bookings = doctors.filter((doctor) => stored.includes(doctor.id));
    setAppointment(bookings);
  };
  return (
    <div>
      {/* chart */}
      {appointment.length === 0 ? (
        <EmptyBooking />
      ) : (
        <>
          {" "}
          <BarChart
            style={{
              width: "100%",
              maxWidth: "700px",
              maxHeight: "70vh",
              aspectRatio: 1.618,
              margin: "auto",
            }}
            responsive
            data={appointment}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis width="auto" />
            <Bar
              dataKey="fee"
              fill="#8884d8"
              shape={TriangleBar}
              label={{ position: "top" }}
            >
              {appointment.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
          {/* appointment list */}
          <section className="grid grid-cols-1 gap-4 px-34 mt-10">
            {appointment.map((booking) => (
              <Appoinment
                key={booking.id}
                booking={booking}
                handleCancelBooking={handleCancelBooking}
              />
            ))}
          </section>
        </>
      )}
    </div>
  );
};

export default MyBookings;
