import React, { use } from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import Doctors from "./Doctors";
import { Outlet, useNavigation } from "react-router";
import Stats from "./Stats";
import Loader from "./Loader";

const Home = ({ doctorsDataPromise }) => {
  const doctors = use(doctorsDataPromise);
  console.log(doctors);
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <>
      <Banner />
      <Doctors doctors={doctors} />
      <Stats />
      {isNavigating && <Loader />}
      <Outlet />
    </>
  );
};

export default Home;
