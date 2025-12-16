import React, { use, useState } from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import Doctors from "./Doctors";
import { Outlet, useNavigation } from "react-router";
import Stats from "./Stats";
import Loader from "./Loader";
import { Helmet } from "react-helmet";
const Home = ({ doctorsDataPromise }) => {
  const doctors = use(doctorsDataPromise);
  // console.log(doctors);
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  const [search, setSearch] = useState("");
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner search={search} setSearch={setSearch} />
      <Doctors search={search} doctors={doctors} />
      <Stats />
      {isNavigating && <Loader />}
      <Outlet />
    </>
  );
};

export default Home;
