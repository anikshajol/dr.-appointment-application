import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link, NavLink } from "react-router";
import logo from "/logo.png";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";

const Nav = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
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

  const handleAddToTheme = () => {
    setTheme((prev) => (prev === "light" ? "synthwave" : "light"));
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  console.log(theme);

  return (
    <div className="navbar md:px-24">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoMdMenu size={30} />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {nav}
          </ul>
        </div>
        <Link to={"/"} className="text-xl flex items-center gap-3">
          <span>
            <img className="object-contain" src={logo} alt="" />
          </span>{" "}
          <span className="font-bold text-2xl"> Phudu</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary rounded-3xl">Emergency</a>
        <div onClick={handleAddToTheme} className="cursor-pointer ml-4">
          {theme === "synthwave" ? (
            <FaToggleOn size={34} />
          ) : (
            <FaToggleOff size={34} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
