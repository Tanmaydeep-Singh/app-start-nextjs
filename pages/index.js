
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import DefaultLayout from "../components/layout/DefaultLayout";
import ProviderCard from "../components/ProviderCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function Home() {
  return (
    <div>
      <div className=" h-60vh w-60vh  ">
        <Swiper 
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper w-4/5 justify-center justify-items-center "
        >
          <SwiperSlide>
            {" "}
            <ProviderCard
              img="https://picsum.photos/200/300"
              name="Tanmaydeep"
              walletAddress="1234567890"
              location="here"
            />
          </SwiperSlide>
           <SwiperSlide>
            {" "}
            <ProviderCard
              img="https://picsum.photos/200/300"
              name="Tanmaydeep"
              walletAddress="1234567890"
              location="here"
            />
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <ProviderCard
              img="https://picsum.photos/200/300"
              name="Tanmaydeep"
              walletAddress="1234567890"
              location="here"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ProviderCard
              img="https://picsum.photos/200/300"
              name="Tanmaydeep"
              walletAddress="1234567890"
              location="here"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ProviderCard
              img="https://picsum.photos/200/300"
              name="Tanmaydeep"
              walletAddress="1234567890"
              location="here"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ProviderCard
              img="https://picsum.photos/200/300"
              name="Tanmaydeep"
              walletAddress="1234567890"
              location="here"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ProviderCard
              img="https://picsum.photos/200/300"
              name="Tanmaydeep"
              walletAddress="1234567890"
              location="here"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ProviderCard
              img="https://picsum.photos/200/300"
              name="Tanmaydeep"
              walletAddress="1234567890"
              location="here"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* <div className="w-10/12 m-auto  grid grid-cols-1  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center">
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
      </div> */}
    </div>
  );
}

export default DefaultLayout(Home);
