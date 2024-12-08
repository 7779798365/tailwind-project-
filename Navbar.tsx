
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Correct hook for App Router
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFileEarmarkText } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { MdWork } from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname(); // Use usePathname instead of useRouter

  const navItems = [
    { name: "Home", path: "/", icon: <HiHome /> },
    { name: "Resume", path: "/resume", icon: <BsFileEarmarkText /> },
    { name: "Work", path: "/work", icon: <MdWork /> },

    { name: "Contact", path: "/contact", icon: <AiOutlineMail /> },
  ];

  return (
    <div className="hidden p-4 text-white md:flex justify-end">
      <nav className="w-[500px] p-4 flex rounded-3xl shadow-lg h-[120px] gap-5">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`flex-1 flex flex-col justify-center items-center text-[18px] cursor-pointer rounded-3xl transition-all duration-300 ${
              pathname === item.path
                ? "bg-gradient-to-r from-primaryColor to-secondaryColor text-white" // Active state
                : "bg-[#c7c5db] text-[#1A1003]" // Default state
            }`}
          >
            <div
              className={`flex justify-center items-center flex-col text-[18px] ${
                pathname === item.path ? "" : "opacity-50"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
