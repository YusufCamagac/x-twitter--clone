import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { setCurrentAccount } from "../../redux/slices/authSlice";

const AccountBar = ({ close }) => {
  const accounts = useSelector((state) => state.auth.accounts);
  const accounttt = useSelector((state) => state.auth.currentAccount);
  const setAccount = (data) => store.dispatch(setCurrentAccount(data));

  return (
    <div>
      {accounts.map((account) => (
        <button
          type="button"
          disabled={accounttt.id === account.id}
          onClick={() => {
            setAccount(account);
            close();
          }}
          className={classNames(
            "py-3 px-4 flex text-left items-center  w-full transition-colors",
            {
              "hover:bg-[#eff3f41a]": accounttt.id !== account.id,
            }
          )}
        >
          <img
            className="w-10 h-10 rounded-full"
            src={account.avatar}
            alt={account.username}
          />
          <div className="mx-3 flex-1 text-[15px]">
            <h6 className="font-bold">{account.fullname}</h6>
            <div className=" text-[#71767b]">@{account.username}</div>
          </div>
          {accounttt.id === account.id && (
            <svg
              viewBox="0 0 24 24"
              className="mr-2 ml-3"
              width={18.75}
              height={18.75}
              fill="#00ba7c"
            >
              <path d="M12 1.75C6.34 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5-47 1.62 1.18-5-21 7.15z" />
            </svg>
          )}
        </button>
      ))}
      <div className="h-px bg-[#2f3336] my-3"></div>
      <button className="py-3 px-4 text-left transition-colors w-full hover:bg-[#eff3f41a] text-[15px] font-bold leading-[20px]">
        Var Olan Bir Hesap Ekle
      </button>
      <button className="py-3 px-4 text-left transition-colors w-full hover:bg-[#eff3f41a] text-[15px] font-bold leading-[20px]">
        Hesapları Yönet
      </button>
      <button className="py-3 px-4 text-left transition-colors w-full hover:bg-[#eff3f41a] text-[15px] font-bold leading-[20px]">
        <div className="max-w-[228px] ">Hesabından çıkış yap</div>
      </button>
    </div>
  );
};

export default AccountBar;
