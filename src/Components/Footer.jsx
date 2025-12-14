import React from "react";
import logo from "/logo.png";
import { Link, NavLink } from "react-router";
const Footer = () => {
  const nav = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "md:border-b-2 md:rounded-b-none md:border-black" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "md:border-b-2 md:rounded-b-none md:border-black" : ""
          }
          to={"bookings"}
        >
          My Bookings
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "md:border-b-2 rounded-b-none border-black" : ""
          }
          to={"blogs"}
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "md:border-b-2 rounded-b-none border-black" : ""
          }
          to={"contact-us"}
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <footer className="footer footer-horizontal footer-center mt-9 p-10">
      <aside>
        <Link to={"/"} className="text-xl flex items-center gap-3">
          <span>
            <img className="object-contain" src={logo} alt="" />
          </span>{" "}
          <span className="font-bold text-2xl"> Phudu</span>
        </Link>
      </aside>
      <nav>
        <ul className="flex flex-wrap gap-4">{nav}</ul>
        <div className="border border-b border-gray-300 md:w-125 lg:w-225 my-7"></div>
        <div className="grid grid-flow-col gap-4">
          <Link to={"https://www.twitter.com"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </Link>
          <Link to={"https://www.youtube.com"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
