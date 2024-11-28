import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center md:flex-row md:items-center md:justify-between">
        <span className="text-sm text-gray-500 text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Movievrese
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-col items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 md:flex-row md:mt-0">
          <li className="mb-2 md:mb-0 md:mr-6 animate-fade-in delay-100">
            <NavLink to="https://www.instagram.com/rahulpariharr_/" className="hover:underline">
              Instagram
            </NavLink>
          </li>
          <li className="mb-2 md:mb-0 md:mr-6 animate-fade-in delay-300">
            <NavLink to="https://www.linkedin.com/in/rahulpariharr/" className="hover:underline">
              LinkedIn
            </NavLink>
          </li>
          <li className="animate-fade-in delay-500">
            <NavLink to="https://x.com/rahulsinghr_" className="hover:underline">
              Twitter
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
