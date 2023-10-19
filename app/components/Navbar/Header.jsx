"use client";
import React, { useState, useEffect } from "react";
// import data
import { header } from "../../data";
// import icons
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi";
// import components
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { Link } from "react-scroll";

const Header = () => {
  // mobile nav state
  const [mobileNav, setMobileNav] = useState(false);
  // header state
  const [isActive, setIsActive] = useState(false);
  // destructure header data
  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "lg:top-0  shadow-2xl" : "lg:top-[0px]"
      } py-6 lg:py-6 bg-blue-200 fixed top-0 w-full hover:bg-blue-300 transition-all z-20`}>
      <div className="container sticky top-0 mx-auto flex justify-between items-center">
        {/* logo */}
        <h1 className="text-2xl font-libre " >Av. Elif Nur ÇALIŞAN</h1>
        {/* nav - initially hidden - show on desktop mode */}
        <div className="hidden text-md ml-14 text-gray-900 w-3/5 lg:flex">
          <Nav />
        </div>
        <Link to="contact">
          <button
            type="button"
            className="text-black bg-mainblue hover:bg-gradient-to-br   focus:ring-green-300 dark:focus:ring-green-900 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 rounded-lg text-md px-8 py-3 hidden lg:flex text-center  mb-4">
            Bize Ulaşın
          </button>
        </Link>
        {/* cta button - initially hidden - show on desktop mode */}

        {/* mobile nav trigger btn - hidden on desktop */}
        <button className="lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <HiOutlineX className="text-3xl text-white" />
          ) : (
            <HiMenuAlt4 className="text-3xl text-white" />
          )}
        </button>
        {/* mobile nav - hidden on desktop */}
        <div
          className={`${
            mobileNav ? "left-0" : "-left-full"
          }  fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all`}>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
