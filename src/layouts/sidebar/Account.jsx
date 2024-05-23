import React from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useSelector } from "react-redux";
import AccountBar from "./AccountBar";

const Account = () => {
  const account = useSelector((state) => state.auth.currentAccount);

  return (
    <div className="mt-auto">
      <Popover className="relative">
        <PopoverButton className="my-3 p-3 rounded-full  group-hover:bg-[#eff3f41a] w-full flex text-left outline-none">
          <img
            className="w-10 h-10 rounded-full"
            src={account.avatar}
            alt={account.username}
          />
          <div className="mx-3 text-[15px]">
            <h6 className="font-bold">{account.fullname}</h6>
            <div className=" text-[#71767b]">@{account.username}</div>
          </div>
          <svg
            viewBox="0 0 24 24"
            className="text-[#e7e9ea] ml-auto my-auto"
            width={18.75}
          >
            <path
              fill="currentColor"
              d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            />
          </svg>
        </PopoverButton>
        <PopoverPanel className="absolute bottom-full py-3 w-[300px] overflow-hidden left1/2 - translate-x-1 bg-black shadow-box rounded-2xl">
          {({ close }) => <AccountBar close={close} />}
        </PopoverPanel>
      </Popover>
    </div>
  );
};

export default Account;
