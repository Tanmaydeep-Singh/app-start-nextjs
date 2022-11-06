import React from "react";

// components
import Footer from "../Footer";
import Navbar from "../Navbar/booking_navbar";

const bookingLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <Navbar />
        <Component {...props} />
        <Footer />
      </>
    );
  };

export default bookingLayout;
