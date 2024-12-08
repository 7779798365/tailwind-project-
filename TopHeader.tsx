import Link from "next/link";
import React from "react";
import { IoMoonOutline } from "react-icons/io5";

const TopHeader = () => {
  return (
    <header className="p-[20px] md:px-[24px] md:py-[44px] flex flex-col items-center sm:flex-row justify-between">
      <Link href={"/"}>
        <h1 className="text-[34px] font-logo capitalize text-center">
          Muhammad <span className="text-gradient">Moosa</span>{" "}
        </h1>
      </Link>
      <div className="w-[66px] h-[66px] bg-[#EBF2FA] shadow-[0px_0px_4px_rgba(0,0,0,0.4)] rounded-full flex items-center justify-center cursor-pointer transition ease-in-out duration-300 hover:bg-primaryColor hover:text-white hover:shadow-[0px_0px_10px_rgba(0,0,0,0.4)]">
        <IoMoonOutline size={24} />
      </div>
    </header>
  );
};

export default TopHeader;