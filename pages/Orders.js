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
            name="prabhas"
            walletAddress="1233267890"
            location="G6G4+9MP, Block D, Saket, New Delhi, Delhi 110017"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="Tanmaydeep"
            walletAddress="1123872913"
            location="G6G4+XHV, Press Enclave Marg, Hauz Rani, Malviya Nagar, New Delhi, Delhi 110017"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="rahul"
            walletAddress="1200567890"
            location="J-287, Saket Rd, Block J, Saket, New Delhi, Delhi 110017"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="shivansh grover"
            walletAddress="1282567890"
            location="J4PW+CHQ, Krishi Kunj, Inder Puri, New Delhi, Delhi 110012"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="virat singh"
            walletAddress="1223267890"
            location="Community Center, Goswami Girdhari Lal Marg, Industrial Area Phase I, Block B, Naraina Industrial Area Phase 1, Naraina, New Delhi, Delhi 110028"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="bhavika"
            walletAddress="23231321241"
            location="E-195, E Block Rd, Block E, Naraina Vihar, Naraina, New Delhi, Delhi 110028"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="chirag muji"
            walletAddress="12342367890"
            location="Shop No.9A, 50 Futa Road, Nihal Vihar, Nangloi, Delhi, 110041"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="birji lala"
            walletAddress="123567890"
            location="RZ B-4, Nala Rd, Nihal Vihar, Nangloi, New Delhi, Delhi 110041"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="Unnat Das"
            walletAddress="123923767890"
            location="Kanshi Ram Shah Marg, opposite Bhatia Global Hospital, GH-9 Block, Paschim Vihar, New Delhi, Delhi 110087"
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
            name="prabhas"
            walletAddress="1654567890"
            location="G6G4+9MP, Block D, Saket, New Delhi, Delhi 110017"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="Tanmaydeep"
            walletAddress="123456567890"
            location="G6G4+XHV, Press Enclave Marg, Hauz Rani, Malviya Nagar, New Delhi, Delhi 110017"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="rahul"
            walletAddress="1234923567890"
            location="J-287, Saket Rd, Block J, Saket, New Delhi, Delhi 110017"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="virat singh"
            walletAddress="123982567890"
            location="Community Center, Goswami Girdhari Lal Marg, Industrial Area Phase I, Block B, Naraina Industrial Area Phase 1, Naraina, New Delhi, Delhi 110028"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="bhavika"
            walletAddress="181234567890"
            location="E-195, E Block Rd, Block E, Naraina Vihar, Naraina, New Delhi, Delhi 110028"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="shivansh grover"
            walletAddress="1289234567890"
            location="J4PW+CHQ, Krishi Kunj, Inder Puri, New Delhi, Delhi 110012"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="chirag muji"
            walletAddress="1234567890"
            location="Shop No.9A, 50 Futa Road, Nihal Vihar, Nangloi, Delhi, 110041"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="Tanmaydeep"
            walletAddress="1234567890"
            location="here"
          />
          <ProviderCard
            img="https://picsum.photos/200/300"
            name="birji lala"
            walletAddress="1234567890"
            location="RZ B-4, Nala Rd, Nihal Vihar, Nangloi, New Delhi, Delhi 110041"
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
