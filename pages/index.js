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
              name="prabhas"
              walletAddress="1654567890"
              location="G6G4+9MP, Block D, Saket, New Delhi, Delhi 110017"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ProviderCard
              img="https://picsum.photos/200/300"
              name="Tanmaydeep"
              walletAddress="123456567890"
              location="G6G4+XHV, Press Enclave Marg, Hauz Rani, Malviya Nagar, New Delhi, Delhi 110017"
            />
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <ProviderCard
              img="https://picsum.photos/200/300"
              name="rahul"
              walletAddress="1234923567890"
              location="J-287, Saket Rd, Block J, Saket, New Delhi, Delhi 110017"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ProviderCard
              img="https://picsum.photos/200/300"
              name="virat singh"
              walletAddress="123982567890"
              location="Community Center, Goswami Girdhari Lal Marg, Industrial Area Phase I, Block B, Naraina Industrial Area Phase 1, Naraina, New Delhi, Delhi 110028"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ProviderCard
              img="https://picsum.photos/200/300"
              name="shivansh grover"
              walletAddress="1289234567890"
              location="J4PW+CHQ, Krishi Kunj, Inder Puri, New Delhi, Delhi 110012"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ProviderCard
              img="https://picsum.photos/200/300"
              name="bhavika"
              walletAddress="181234567890"
              location="E-195, E Block Rd, Block E, Naraina Vihar, Naraina, New Delhi, Delhi 110028"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ProviderCard
              img="https://picsum.photos/200/300"
              name="chirag muji"
              walletAddress="1234567890"
              location="Shop No.9A, 50 Futa Road, Nihal Vihar, Nangloi, Delhi, 110041"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ProviderCard
              img="https://picsum.photos/200/300"
              name="birji lala"
              walletAddress="1234567890"
              location="RZ B-4, Nala Rd, Nihal Vihar, Nangloi, New Delhi, Delhi 110041"
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
