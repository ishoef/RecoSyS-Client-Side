import React from "react";
import Logo from "../Logo/Logo";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-10 text-white">
      <div className="flex flex-col w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
        <div className="flex flex-col gap-12 flex-1 md:flex-row justify-between items-start">
          {/* Left Content */}
          <div className="flex flex-col gap-4 basis-2/6">
            <Logo />
            <p className="text-[18px] poppins-regular">
              A community-driven platform for product recommendations. Find
              better alternatives to products and make informed purchasing
              decisions.
            </p>
            {/* Icons */}
            <div className="icons flex items-center gap-3 text-2xl">
              <FaFacebook />
              <FaYoutube />
              <FaLinkedin />
              <FaGithub />
              <FaInstagramSquare />
            </div>
          </div>

          {/* Middle content */}
          <div>
            <nav className=" ">
              <ul className="flex flex-col gap-5 poppins-semibold  ">
                <li className="text-primary border-b-2 w-fit ">Quick Links</li>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 bg-gray-700 text-primary px-4 pb-2 pt-1 rounded"
                        : "bg-none px-4 pb-2 pt-1 rounded hover:text-primary"
                    }
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/queries"
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 bg-gray-700 text-primary px-4 pb-2 pt-1 rounded"
                        : "bg-none px-4 pb-2 pt-1 rounded hover:text-primary"
                    }
                  >
                    Queries
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/recforme"
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 bg-gray-700 text-primary px-4 pb-2 pt-1 rounded"
                        : "bg-none px-4 pb-2 pt-1 rounded hover:text-primary"
                    }
                  >
                    Recomms For Me
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/myqueries"
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 bg-gray-700 text-primary px-4 pb-2 pt-1 rounded"
                        : "bg-none px-4 pb-2 pt-1 rounded hover:text-primary"
                    }
                  >
                    My Queries
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/myrecos"
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 bg-gray-700 text-primary px-4 pb-2 pt-1 rounded"
                        : "bg-none px-4 pb-2 pt-1 rounded hover:text-primary"
                    }
                  >
                    My Recommes
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right Content */}
          <div>
            <nav className="">
              <ul className="flex flex-col gap-5 poppins-semibold  ">
                <li className="text-primary border-b-2 w-fit ">Resources</li>
                <li>
                  <NavLink className="hover:border-b-2 hover:bg-gray-700 hover:text-primary px-4 pb-2 pt-1 rounded">
                    About Us
                  </NavLink>
                </li>

                <li>
                  <NavLink className="hover:border-b-2 hover:bg-gray-700 hover:text-primary px-4 pb-2 pt-1 rounded">
                    Privacy Policy
                  </NavLink>
                </li>

                <li>
                  <NavLink className="hover:border-b-2 hover:bg-gray-700 hover:text-primary px-4 pb-2 pt-1 rounded">
                    Terms of Service
                  </NavLink>
                </li>

                <li>
                  <NavLink className="hover:border-b-2 hover:bg-gray-700 hover:text-primary px-4 pb-2 pt-1 rounded">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <hr className="mt-10" />
        <div className="text-center pt-10">
          <p>
            Copyright © {new Date().getFullYear()} - Developed by{" "}
            <span className="poppins-semibold text-primary underline">
              <a
                href="https://portfolio-rose-two-uimck3sec9.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ismail Nayef
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;