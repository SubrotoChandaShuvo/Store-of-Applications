import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#e39b2e] underline underline-offset-4" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive ? "text-[#e39b2e] underline underline-offset-4" : ""
                }
              >
                Apps
              </NavLink>
            </li>
            <li className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive ? "text-[#e39b2e] underline underline-offset-4" : ""
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl ">
          <img src="/src/assets/logo.png" className="h-7 w-7"></img>
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            HERO.IO
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#e39b2e] underline underline-offset-4" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            <NavLink
              to="/AllApps"
              className={({ isActive }) =>
                isActive ? "text-[#e39b2e] underline underline-offset-4" : ""
              }
            >
              Apps
            </NavLink>
          </li>
          <li className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive ? "text-[#e39b2e] underline underline-offset-4" : ""
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <a
          href="https://github.com/SubrotoChandaShuvo"
          target="_blank"
          className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
        >
          <img
            src="/src/assets/github.png"
            className="h-5 w-5 bg-white rounded-4xl"
          ></img>{" "}
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
