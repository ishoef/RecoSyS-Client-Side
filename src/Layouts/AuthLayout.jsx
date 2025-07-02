import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header/Header";

const AuthLayout = () => {
  return (
    <>
      <Header />
      <div className="w-full h-full bg-white">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default AuthLayout;
