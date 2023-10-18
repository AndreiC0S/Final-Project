import React, { useState,useEffect,useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext";



export default function NavBar() {

  const {authenticated} = useContext(AuthContext)
  
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  const [user, setUser]= useState(false)

  const path = location.pathname;
  // console.log("🚀 ~ file: NavBar.js:11 ~ NavBar ~ path:", path);

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
      <header class="flex w-full text-white shadow-sm body-font bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 ">
        <div class="container flex flex-col items-start justify-between p-6 mx-auto md:flex-row ">
          <a class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
            LOGO
          </a>
          <nav class="flex absolute flex-wrap items-center justify-center left-[30%] text-base  md:ml-auto md:mr-auto hidden md:block">
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

            {authenticated && (
              <>
            <Link to="/products">
              {" "}
              <span
                className={`mr-5 font-medium hover:text-amber-300 ${activePageLink(
                  "/products"
                )}`}
              >
                Products
              </span>
            </Link>
            <Link to="/users">
              {" "}
              <span
                className={`mr-5 font-medium hover:text-amber-300 ${activePageLink(
                  "/users"
                )}`}
              >
                Users
              </span>
            </Link>
            <Link to="/admins">
              {" "}
              <span
                className={`mr-5 font-medium hover:text-amber-300 ${activePageLink(
                  "/admins"
                )}`}
              >
                Admins
              </span>
            </Link>
              </>
              
            )}
          </nav>
        </div>
      </header>
      
    </>
  );
}
