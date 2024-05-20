import React from "react";
import SideBar from "./sidebar/SideBar";
import RightBar from "./rightbar/RightBar";

const MainLayout = ({ children }) => {
  return (
    <div className="w-[1265px] mx-auto flex">
      <SideBar />
      <main className="flex-1 flex gap-[30px]">
        <div className="flex-1 max-w-[600px] border-x border-[#2f3336]">
          {children}
        </div>
        <RightBar />
      </main>
    </div>
  );
};

export default MainLayout;
