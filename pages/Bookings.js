import React from "react";
import { FaUserAlt, FaSignOutAlt, FaWallet } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import { signout } from "../firebase";
import { useState } from "react";

import { useRouter } from "next/router";
import BookingLayout from "../components/layout/BookingLayout";

const BookingsSm = () => {
  
  const [id,setId] = useState('ak_dArxCkAsk1mZB1L9CX3cdz1GDN4hN84L3Q8dMLHN4v8cU85TF');
  
  const walletConnect = async(e) =>{
    e.preventDefault();

    console.log("clicked");
    const resp = await fetch('https://mainnet.aeternity.io/v3/key-blocks/current');
    const result = await resp.json();
    console.log(result.beneficiary)
    setId(result.beneficiary);
    alert(id);
    
  }
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

  const handleOrders = (e) => {
    e.preventDefault();
    navigate("/Orders");
  };

  return (
    <>
      <GiHamburgerMenu onClick={sidebar} />
      <div className="flex overflow-hidden">
        <div className={go ? "w-10 bg-gray-400 justify-center" : "hidden"}>
          <div
            
            className=" flex my-5 w-10 align-center justify-center flex-wrap gap-2 text-sm hover:bg-gray-200"
          >
            <FaUserAlt className="m-auto mx-0" />
          </div>
          <div onClick={handleOrders} className="flex my-5 cursor-pointer w-10 align-center justify-center flex-wrap gap-2 text-sm hover:bg-gray-200">
            <AiFillSetting className="m-auto mx-0" />
          </div>
          <div className="flex my-5  w-10 align-center justify-center flex-wrap gap-2 text-sm hover:bg-gray-200" onClick={walletConnect}>
            <FaWallet className="m-auto mx-0" />
          </div>
          <div
            onClick={handlesignout}
            className="cursor-pointer flex my-5  w-10 align-center justify-center flex-wrap gap-2 text-sm  hover:bg-gray-200"
          >
            <FaSignOutAlt className="m-auto mx-0 " />
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="font-semibold tracking-normal text-lg">
            PAST BOOKINGS
          </h3>
          <div className="flex border flex-col border-black p-4 gap-3 rounded-md m-4">
            <div className="flex w-1/3 flex-col gap-1">
              <img
                src=""
                alt="LOGO"
                className="w-40 h-40 aspect-ratio: 1 / 1 drop-shadow-md border bg-gray-200 border-gray-300"
              />
            </div>
            <div className="flex justify-center flex-col gap-1">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">Location_Name</h3>
              </div>
              <h5>Address : abcd </h5>
              <p>Booking ID : 01ss1938912jh1i2j12</p>
              <p>Booking ID : 01ss1938912jh1i2j12</p>

              <button
                type="button"
                className="text-white bg-blue-600  focus:ring-blue-300 font-medium rounded-md text-xs px-5 py-2.5 text-center mr-0 md:mr-0 w-1/2"
              >
                Book Again
              </button>
            </div>
          </div>
          <div className="flex border border-black p-4 gap-3 rounded-md m-4">
            <div className="flex w-1/3 flex-col gap-1">
              <img
                src=""
                alt="LOGO"
                className="w-40 h-40 aspect-ratio: 1 / 1  drop-shadow-md border bg-gray-200 border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">Location_Name</h3>
              </div>
              <h5>Address : abcd </h5>
              <p>Booking ID : 01ss1938912jh1i2j12</p>
              <p>Booking ID : 01ss1938912jh1i2j12</p>

              <button
                type="button"
                className="text-white bg-blue-600  focus:ring-blue-300 font-medium rounded-md text-xs px-5 py-2.5 text-center mr-0 md:mr-0 w-1/2"
              >
                Book Again
              </button>
            </div>
          </div>
          <div className="flex border border-black p-4 gap-3 rounded-md m-4">
            <div className="flex w-1/3 flex-col gap-1">
              <img
                src=""
                alt="LOGO"
                className="w-40 h-40 aspect-ratio: 1 / 1  drop-shadow-md border bg-gray-200 border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">Location_Name</h3>
              </div>
              <h5>Address : abcd </h5>
              <p>Booking ID : 01ss1938912jh1i2j12</p>
              <p>Booking ID : 01ss1938912jh1i2j12</p>

              <button
                type="button"
                className="text-white bg-blue-600  focus:ring-blue-300 font-medium rounded-md text-xs px-5 py-2.5 text-center mr-0 md:mr-0 w-1/2"
              >
                Book Again
              </button>
            </div>
          </div>
          <div className="flex border border-black p-4 gap-3 rounded-md m-4">
            <div className="flex w-1/3 flex-col gap-1">
              <img
                src=""
                alt="LOGO"
                className="w-40 h-40 aspect-ratio: 1 / 1  drop-shadow-md border bg-gray-200 border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">Location_Name</h3>
              </div>
              <h5>Address : abcd </h5>
              <p>Booking ID : 01ss1938912jh1i2j12</p>
              <p>Booking ID : 01ss1938912jh1i2j12</p>

              <button
                type="button"
                className="text-white bg-blue-600  focus:ring-blue-300 font-medium rounded-md text-xs px-5 py-2.5 text-center mr-0 md:mr-0 w-1/2"
              >
                Book Again
              </button>
            </div>
          </div>
          <div className="flex border border-black p-4 gap-3 rounded-md m-4">
            <div className="flex w-1/3 flex-col gap-1">
              <img
                src=""
                alt="LOGO"
                className="w-40 h-40 aspect-ratio: 1 / 1 drop-shadow-md border bg-gray-200 border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">Location_Name</h3>
              </div>
              <h5>Address : abcd </h5>
              <p>Booking ID : 01ss1938912jh1i2j12</p>
              <p>Booking ID : 01ss1938912jh1i2j12</p>

              <button
                type="button"
                className="text-white bg-blue-600  focus:ring-blue-300 font-medium rounded-md text-xs px-5 py-2.5 text-center mr-0 md:mr-0 w-1/2"
              >
                Book Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const BookingsLg = () => {
  const navigate = useRouter().push;
  const handlesignout = (e) => {
    e.preventDefault();
    signout();
    console.log("Sign out successful !! ");
    navigate("/");
  };
  
  const [id,setId] = useState('ak_dArxCkAsk1mZB1L9CX3cdz1GDN4hN84L3Q8dMLHN4v8cU85TF');
  
  const walletConnect = async(e) =>{
    e.preventDefault();

    console.log("clicked");
    const resp = await fetch('https://mainnet.aeternity.io/v3/key-blocks/current');
    const result = await resp.json();
    console.log(result.beneficiary)
    setId(result.beneficiary);
    alert(id);
  }

  const handleOrders = (e) => {
    e.preventDefault();
    navigate("/Orders");
  };

  return (
    <>
      <div className="flex">
        <div className="px-6 fixed h-80vh bg-gray-500 rounded-tr-md rounded-br-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-l-0 border-gray-100 justify-center rounded-md ">
          {/* <div className="px-6 fixed h-80vh bg-white rounded-tr-md rounded-br-md border-l-0 border-gray-100 justify-center rounded-md "> */}
          <div
           
            className="  flex m-5 align-center justify-center flex-wrap gap-2 text-lg hover:bg-gray-200"
          >
            <FaUserAlt className="m-auto mx-0" /> ORDERS
          </div>
          <div  onClick={handleOrders} className=" cursor-pointer flex my-5 align-center justify-center flex-wrap gap-2 text-lg hover:bg-gray-200">
            <AiFillSetting className="m-auto mx-0" /> PROVIDERS
          </div>
          <div className="flex my-5 align-center justify-center flex-wrap gap-2 text-lg hover:bg-gray-200" onClick={walletConnect}>
            <FaWallet className="m-auto mx-0" /> WALLET
          </div>
          <div
            onClick={handlesignout}
            className="cursor-pointer flex my-5 align-center justify-center flex-wrap gap-2 text-lg  hover:bg-gray-200"
          >
            <FaSignOutAlt className="m-auto mx-0 " /> LOGOUT
          </div>
        </div>

        <div className="flex flex-col m-4 p-4 w-2/3  text-white justify-self-center mx-auto ">
          <h3 className="font-semibold tracking-normal text-lg">
            PAST BOOKINGS
          </h3>
          <div className="flex border border-black p-4 rounded-md m-4">
            <div className="flex w-1/3 flex-col gap-1">
              <img
                src=""
                alt="LOGO"
                className="w-40 h-40 aspect-ratio: 1 / 1 drop-shadow-md border bg-gray-200 border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">Location_Name</h3>
              </div>
              <h5>Address : abcd </h5>
              <p>Booking ID : 01ss1938912jh1i2j12</p>
              <p>Booking ID : 01ss1938912jh1i2j12</p>

              <button
                type="button"
                className="text-white bg-blue-600  focus:ring-blue-300 font-medium rounded-md text-xs px-5 py-2.5 text-center mr-0 md:mr-0 w-1/2"
              >
                Book Again
              </button>
            </div>
          </div>
          <div className="flex border border-black p-4 rounded-md m-4">
            <div className="flex w-1/3 flex-col gap-1">
              <img
                src=""
                alt="LOGO"
                className="w-40 h-40 aspect-ratio: 1 / 1  drop-shadow-md border bg-gray-200 border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">Location_Name</h3>
              </div>
              <h5>Address : abcd </h5>
              <p>Booking ID : 01ss1938912jh1i2j12</p>
              <p>Booking ID : 01ss1938912jh1i2j12</p>

              <button
                type="button"
                className="text-white bg-blue-600  focus:ring-blue-300 font-medium rounded-md text-xs px-5 py-2.5 text-center mr-0 md:mr-0 w-1/2"
              >
                Book Again
              </button>
            </div>
          </div>
          <div className="flex border border-black p-4 rounded-md m-4">
            <div className="flex w-1/3 flex-col gap-1">
              <img
                src=""
                alt="LOGO"
                className="w-40 h-40 aspect-ratio: 1 / 1  drop-shadow-md border bg-gray-200 border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">Location_Name</h3>
              </div>
              <h5>Address : abcd </h5>
              <p>Booking ID : 01ss1938912jh1i2j12</p>
              <p>Booking ID : 01ss1938912jh1i2j12</p>

              <button
                type="button"
                className="text-white bg-blue-600  focus:ring-blue-300 font-medium rounded-md text-xs px-5 py-2.5 text-center mr-0 md:mr-0 w-1/2 "
              >
                Book Again
              </button>
            </div>
          </div>
          <div className="flex border border-black p-4 rounded-md m-4">
            <div className="flex w-1/3 flex-col gap-1">
              <img
                src=""
                alt="LOGO"
                className="w-40 h-40 aspect-ratio: 1 / 1  drop-shadow-md border bg-gray-200 border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">Location_Name</h3>
              </div>
              <h5>Address : abcd </h5>
              <p>Booking ID : 01ss1938912jh1i2j12</p>
              <p>Booking ID : 01ss1938912jh1i2j12</p>

              <button
                type="button"
                className="text-white bg-blue-600  focus:ring-blue-300 font-medium rounded-md text-xs px-5 py-2.5 text-center mr-0 md:mr-0 w-1/2"
              >
                Book Again
              </button>
            </div>
          </div>
          <div className="flex border border-black p-4  rounded-md m-4">
            <div className="flex w-1/3 flex-col gap-1">
              <img
                src=""
                alt="LOGO"
                className="w-40 h-40 aspect-ratio: 1 / 1 drop-shadow-md border bg-gray-200 border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">Location_Name</h3>
              </div>
              <h5>Address : abcd </h5>
              <p>Booking ID : 01ss1938912jh1i2j12</p>
              <p>Booking ID : 01ss1938912jh1i2j12</p>

              <button
                type="button"
                className="text-white bg-blue-600  focus:ring-blue-300 font-medium rounded-md text-xs px-5 py-2.5 text-center mr-0 md:mr-0 w-1/2"
              >
                Book Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Bookings = () => {
  return (
    <>
      <div className="md:hidden">
        <BookingsSm />
      </div>
      <div className="hidden md:block">
        <BookingsLg />
      </div>
    </>
  );
};

export default BookingLayout(Bookings);
