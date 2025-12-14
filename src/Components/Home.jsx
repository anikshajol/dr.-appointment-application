import React, { use } from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import Doctors from "./Doctors";
import { Outlet } from "react-router";

const Home = ({ doctorsDataPromise }) => {
  const doctors = use(doctorsDataPromise);
  console.log(doctors);
  return (
    <>
      <Banner />
      <Doctors doctors={doctors} />
      <Outlet />
    </>
  );
};

export default Home;
