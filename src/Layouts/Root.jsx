import { Outlet } from "react-router";
import Nav from "../Components/Nav";

const Root = () => {
  return (
    <div className="bg-[#EFEFEF]">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Root;
