import React from "react";
import Bookings from "./Bookings";

import DefaultLayout from "../components/layout/DefaultLayout";
import { useAuth } from "../firebase";

const Signin = () => {
  const currUser = useAuth();
  return <>{currUser ? <Bookings /> : null}</>;
};

export default Signin;
