import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "../../utils/const";
import Button from "../../components/Button";
import More from "./More";
import { store } from "../../redux/store";
import { useSelector } from "react-redux";

const Menu = () => {
  const account = useSelector((state) => state.auth.currentAccount);
  return (
    <nav className="mt-0.5 mb-1" key={account.id}>
      {mainMenu.map((menu, index) => (
        <NavLink
          key={index}
          to={typeof menu.path === "function" ? menu.path() : menu.path}
          className="py-1 block group"
        >
          {({ isActive }) => (
            <div
              className={classNames(
                "p-3 rounded-full inline-flex  items-center gap-5  group-hover:bg-[#eff3f41a]",
                { "font-bold": isActive }
              )}
            >
              <div className="w-[26.75px] h-[26.75px] relative">
                {menu.notification && (
                  <span className="w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]">
                    {menu?.notification}
                  </span>
                )}
                {!isActive && menu.icon.inactive}
                {isActive && menu.icon.active}
              </div>

              <div className="pr-4 text-xl">{menu.title}</div>
            </div>
          )}
        </NavLink>
      ))}
      <More />

      <div className="py-4 w-[90%]">
        <Button large={true}>Gönder</Button>
      </div>
    </nav>
  );
};

export default Menu;
