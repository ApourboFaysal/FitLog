import Image from "next/image";
import React, { Suspense } from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import NavLinks from "@/components/shared/Nav-links";
import NavLinksFallback from "@/components/shared/NavLinksFallback";
import NavCounts from "@/components/shared/Nav-counts";

const Navber = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <Suspense fallback={<NavLinksFallback />}>
              <NavLinks />
            </Suspense>
          </ul>
        </div>
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="logo" className="h-6 w-auto" />
          <span className="text-xl font-bold">FITLOG</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-2">
          <Suspense fallback={<NavLinksFallback />}>
            <NavLinks />
          </Suspense>
        </ul>
      </div>
      <div className="navbar-end">
        <NavCounts />
      </div>
    </div>
  );
};

export default Navber;
