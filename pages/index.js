import React from "react";
import DefaultLayout from "../components/layout/DefaultLayout";
import ProviderCard from "../components/ProviderCard";

function Home() {
  return (
    <div>
      <div className=" h-547.2   bg-gradient-to-r from-cyan-500 to-blue-500">
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
  );
}

export default DefaultLayout(Home);
