import React from "react";
import Search from "./Search";
import Premium from "./Premium";
import Topics from "./Topics";

const RightBar = () => {
  return (
    <div className="w-[350px] mr-2.5">
      <Search />
      <Premium />
      <Topics />
    </div>
  );
};

export default RightBar;
