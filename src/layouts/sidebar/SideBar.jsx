import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Account from "./Account";

const SideBar = () => {
  return (
    <div className="w-[275px]  min-h-screen px-2 flex flex-col sticky top-0 ">
      <div className="py-0.5">
        <Link
          to="/"
          className="w-[55px] h-[55px] rounded-full flex items-center justify-center hover:bg-[#eff3f41a] transition-colors"
        >
          <svg viewBox="0 0 24 24 " width={30} height={30}>
            <path
              fill="#fff"
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            />
          </svg>
        </Link>
      </div>
      <Menu />

      <Account />
    </div>
  );
};

export default SideBar;
