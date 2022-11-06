import React from "react";
import DefaultLayout from "../components/layout/DefaultLayout";
import ProviderCard from "../components/ProviderCard";
import Slider from "react-slick";
import Image from "next/image";

function Home() {
  
  const images = [
    "https://res.cloudinary.com/dkfzsyen9/image/upload/v1667712474/logo_vtoaqm.jpg",
    "https://res.cloudinary.com/dkfzsyen9/image/upload/v1667712474/logo_vtoaqm.jpg",
    "https://res.cloudinary.com/dkfzsyen9/image/upload/v1667712474/logo_vtoaqm.jpg",
    "https://res.cloudinary.com/dkfzsyen9/image/upload/v1667712474/logo_vtoaqm.jpg",
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {images.map((image) => (
          <>
            <Image src={image} width={100} height={100} />
          </>
        ))}
      </Slider>

      
    </div>
  );
}

export default DefaultLayout(Home);
