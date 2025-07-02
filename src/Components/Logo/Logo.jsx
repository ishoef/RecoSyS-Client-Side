import React from "react";
import { Link } from "react-router";

const Logo = () => {
    return (
      <Link to="/">
        <div>
          <div className="left flex items-center gap-2">
            <img
              className="w-9"
              src="https://i.ibb.co/HpNrKBZ6/logo.png"
              alt=""
            />
            <p className="hidden md:block lg:block text-2xl font-bold tracking-wide">
              Rec <span className="text-primary">SyS</span>
            </p>
          </div>
        </div>
      </Link>
    );
};

export default Logo;
