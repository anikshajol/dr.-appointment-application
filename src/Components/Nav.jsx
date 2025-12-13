import React from "react";
import { IoMdMenu } from "react-icons/io";
import { Link, NavLink } from "react-router";
import logo from "/logo.png";
const Nav = () => {
  const nav = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"bookings"}>My Bookings</NavLink>
      </li>
      <li>
        <NavLink to={"blogs"}>Blogs</NavLink>
      </li>
      <li>
        <NavLink to={"contact-us"}>Contact Us</NavLink>
      </li>
    </>
  );
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
      </div>
    </div>
  );
};

export default Nav;
