import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="FitLog logo" className="h-5 w-auto" />
          <h2 className="font-bold text-white">FITLOG</h2>
        </div>

        <p className="text-sm text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
