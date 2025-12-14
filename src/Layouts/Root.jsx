import { Outlet } from "react-router";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <>
      <div className="bg-base-300 min-h-screen">
        <Nav />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
