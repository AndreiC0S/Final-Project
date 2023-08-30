import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  const [flag, setFlag] = useState(false);
  const [user, setUser] = useState(false);

  const path = location.pathname;
  console.log("🚀 ~ file: NavBar.js:11 ~ NavBar ~ path:", path);

  const activePageLink = (page) => {
    if (page === path) {
      return "text-amber-300";
    } else {
      return;
    }
  };

  //     //-------------------------------------------------------------------------

  return (
    <>
      <header class="w-full text-white shadow-sm body-font bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 ">
        <div class="container flex flex-col items-start justify-between p-6 mx-auto md:flex-row ">
          <a class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
            LOGO
          </a>
          <nav class="flex flex-wrap items-center justify-center pl-24 text-base  md:ml-auto md:mr-auto hidden md:block">
            <Link to="/">
              {" "}
              <span
                className={`mr-5 font-medium hover:text-amber-300 ${activePageLink(
                  "/"
                )}`}
              >
                Home
              </span>
            </Link>
            <Link to="/product-list">
              {" "}
              <span
                className={`mr-5 font-medium hover:text-amber-300 ${activePageLink(
                  "/product-list"
                )}`}
              >
                Products
              </span>
            </Link>
            <Link to="/about">
              {" "}
              <span
                className={`mr-5 font-medium hover:text-amber-300 ${activePageLink(
                  "/about"
                )}`}
              >
                About
              </span>
            </Link>
            <Link to="/contact">
              {" "}
              <span
                className={`mr-5 font-medium hover:text-amber-300 ${activePageLink(
                  "/contact"
                )}`}
              >
                Contact
              </span>
            </Link>
          </nav>
          <div class="items-center h-full hidden md:block">
            <a href="#_" class="mr-5 font-medium hover:text-amber-300">
              Login
            </a>
            {!user && (
              <a
                href="#_"
                class="px-4 py-2 text-xs font-bold text-black uppercase transition-all duration-150 bg-amber-300 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
              >
                Sign Up
              </a>
            )}
          </div>
          <section className="MOBILE-MENU flex md:hidden" >
            <div
              className="HAMBURGER-ICON space-y-2 absolute right-4 top-8 "
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 bg-amber-200"></span>
              <span className="block h-0.5 w-8 bg-amber-200"></span>
              <span className="block h-0.5 w-8 bg-amber-200"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              {" "}
              <div class="items-center">
                <a href="#_" class="mr-5 font-medium hover:text-amber-300">
                  Login
                </a>
                {!user && (
                  <a
                    href="#_"
                    class="px-4 py-2 text-xs font-bold text-black uppercase transition-all duration-150 bg-amber-300 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
                  >
                    {" "}
                    Sign Up{" "}
                  </a>
                )}
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between">
                <li>
                  <Link to="/">
                    {" "}
                    <span
                      className={`mr-5 font-medium hover:text-amber-300 ${activePageLink(
                        "/"
                      )}`}
                    >
                      {" "}
                      Home{" "}
                    </span>
                  </Link>
                </li>

                <li>
                  <Link to="/product-list">
                    {" "}
                    <span
                      className={`mr-5 font-medium hover:text-amber-300 ${activePageLink(
                        "/product-list"
                      )}`}
                    >
                      {" "}
                      Products{" "}
                    </span>
                  </Link>
                </li>

                <li>
                  <Link to="/about">
                    {" "}
                    <span
                      className={`mr-5 font-medium hover:text-amber-300 ${activePageLink(
                        "/about"
                      )}`}
                    >
                      {" "}
                      About{" "}
                    </span>
                  </Link>
                </li>

                <li>
                  <Link to="/contact">
                    {" "}
                    <span
                      className={`mr-5 font-medium hover:text-amber-300 ${activePageLink(
                        "/contact"
                      )}`}
                    >
                      {" "}
                      Contact{" "}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </header>
    </>
  );
}
