import React from "react";
import { FaUserAlt, FaSignOutAlt, FaWallet } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import { signout } from "../firebase";
import { useState } from "react";

import { useRouter } from "next/router";
import BookingLayout from "../components/layout/BookingLayout";
import ProviderCard from "../components/ProviderCard";

const OrdersSm = () => {
  const navigate = useRouter().push;

  const [go, setGo] = useState(false);

  const handlesignout = (e) => {
    e.preventDefault();
    signout();
    console.log("Sign out successful !! ");
    navigate("/");
  };

  const sidebar = () => {
    setGo(!go);
  };

  const handleBookings = (e) => {
    e.preventDefault();
    navigate("/Bookings");
  };

  return (
    <>
      <GiHamburgerMenu onClick={sidebar} />
      <div className="flex overflow-hidden">
        <div className={go ? "w-10 bg-gray-400 justify-center" : "hidden"}>
          <div
            onClick={handleBookings}
            className=" cursor-pointer flex my-5 w-10 align-center justify-center flex-wrap gap-2 text-sm hover:bg-gray-200"
          >
            <FaUserAlt className="m-auto mx-0" />
          </div>
          <div className=" flex my-5  w-10 align-center justify-center flex-wrap gap-2 text-sm hover:bg-gray-200">
            <AiFillSetting className="m-auto mx-0" />
          </div>
          <div className="flex my-5  w-10 align-center justify-center flex-wrap gap-2 text-sm hover:bg-gray-200">
            <FaWallet className="m-auto mx-0" />
          </div>
          <div
            onClick={handlesignout}
            className="cursor-pointer flex my-5  w-10 align-center justify-center flex-wrap gap-2 text-sm  hover:bg-gray-200"
          >
            <FaSignOutAlt className="m-auto mx-0 " />
          </div>
        </div>

        <div className="w-10/12 m-auto  grid grid-cols-1  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center">
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="Tanmaydeep"
            walletAddress="1234567890"
            location="here"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="Tanmaydeep"
            walletAddress="1234567890"
            location="here"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="Tanmaydeep"
            walletAddress="1234567890"
            location="here"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="Tanmaydeep"
            walletAddress="1234567890"
            location="here"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="Tanmaydeep"
            walletAddress="1234567890"
            location="here"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="Tanmaydeep"
            walletAddress="1234567890"
            location="here"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="Tanmaydeep"
            walletAddress="1234567890"
            location="here"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="Tanmaydeep"
            walletAddress="1234567890"
            location="here"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="Tanmaydeep"
            walletAddress="1234567890"
            location="here"
          />
        </div>
      </div>
    </>
  );
};

const OrdersLg = () => {
  const navigate = useRouter().push;
  const handlesignout = (e) => {
    e.preventDefault();
    signout();
    console.log("Sign out successful !! ");
    navigate("/");
  };

  const handleOrders = (e) => {
    e.preventDefault();
    navigate("/Bookings");
  };

  return (
    <>
      <div className="flex">
        <div className="px-6 fixed h-80vh bg-gray-500 rounded-tr-md rounded-br-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-l-0 border-gray-100 justify-center rounded-md ">
          {/* <div className="px-6 fixed h-80vh bg-white rounded-tr-md rounded-br-md border-l-0 border-gray-100 justify-center rounded-md "> */}
          <div
            onClick={handleOrders}
            className=" cursor-pointer flex m-5 align-center justify-center flex-wrap gap-2 text-lg hover:bg-gray-200"
          >
            <FaUserAlt className="m-auto mx-0" /> ORDERS
          </div>
          <div className=" flex my-5 align-center justify-center flex-wrap gap-2 text-lg hover:bg-gray-200">
            <AiFillSetting className="m-auto mx-0" /> PROVIDERS
          </div>
          <div className="flex my-5 align-center justify-center flex-wrap gap-2 text-lg hover:bg-gray-200">
            <FaWallet className="m-auto mx-0" /> WALLET
          </div>
          <div
            onClick={handlesignout}
            className="cursor-pointer flex my-5 align-center justify-center flex-wrap gap-2 text-lg  hover:bg-gray-200"
          >
            <FaSignOutAlt className="m-auto mx-0 " /> LOGOUT
          </div>
        </div>
        <div className="w-10/12 m-auto  grid grid-cols-1  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center">
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="Tanmaydeep"
            walletAddress="1234567890"
            location="here"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="Tanmaydeep"
            walletAddress="1234567890"
            location="here"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="Tanmaydeep"
            walletAddress="1234567890"
            location="here"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="Tanmaydeep"
            walletAddress="1234567890"
            location="here"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="Tanmaydeep"
            walletAddress="1234567890"
            location="here"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="Tanmaydeep"
            walletAddress="1234567890"
            location="here"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="Tanmaydeep"
            walletAddress="1234567890"
            location="here"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="Tanmaydeep"
            walletAddress="1234567890"
            location="here"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="Tanmaydeep"
            walletAddress="1234567890"
            location="here"
          />
        </div>
      </div>
    </>
  );
};

const Orders = () => {
  return (
    <>
      <div className="md:hidden">
        <OrdersSm />
      </div>
      <div className="hidden md:block">
        <OrdersLg />
      </div>
    </>
  );
};

export default BookingLayout(Orders);
