import React from "react";

// assets
import Logo from "../../assets/images/logo.jpeg";

const MobileNav = () => {
  return (
    <div className="flex w-full items-center justify-between lg:hidden">
      <div className="w-28">
        <img
          src="https://res.cloudinary.com/dkfzsyen9/image/upload/v1667712474/logo_vtoaqm.jpg"
          alt="Logo"
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center gap-3 relative">
        <button className="bg-parkit-200 text-white py-2 px-3 rounded-full">
          Park it
        </button>
      </div>
    </div>
  );
};
const LargeNav = () => {
  return (
    <div className="w-full items-center justify-between hidden lg:flex px-14">
      <div className="gap-4 items-center justify-around flex">
        <div className="w-20">
          <img
            src="https://res.cloudinary.com/dkfzsyen9/image/upload/v1667712474/logo_vtoaqm.jpg"
            alt="Logo"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="p-4 lg:py-2 flex bg-white shadow-md lg:border-b-2 border-gray-200 w-full items-center">
        <MobileNav />
        <LargeNav />
      </nav>
    </>
  );
};

export default Navbar;
