import React from "react";

const Button = ({ children, classnames, px, large, onclick }) => {
  const sizeValue = large ? "h-[52px] w-full text-[17px]" : "h-8";

  const classes = `bg-[#1d9bf0] rounded-full flex items-center text-white justify-center font-bold hover:bg-[#1a8cd8] transition-colors px-4 ${sizeValue}  ${
    classnames || ""
  }`;

  return (
    <button onClick={onclick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
