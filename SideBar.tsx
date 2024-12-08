"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const SideBar = () => {
  return (
    <aside className="col-span-1 p-4 bg-white rounded-3xl h-full lg:w-[400px] w-full sm:w-[80%] mx-auto">
      {/* Image Section */}
      <div className=" w-[70%] mx-auto relative top-[-8%] rounded-3xl flex items-center justify-center h-[200px] overflow-hidden">
        <Image
          src="/avatar.jpg"
          alt="Main Pic"
          height={250}
          width={250}
          className="object-cover"
        />
      </div>

      {/* Name & Role */}
      <div>
        <h1 className="font-heading text-[24px] lg:text-[29px] font-bold text-center mt-[-50px]">
          Muhammad Moosa
        </h1>
        <p className="font-body text-[#0B0909] opacity-50 text-center mt-3 lg:mt-5 text-sm lg:text-base">
          FullStack Developer
        </p>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-between w-[80%] mx-auto mt-5 lg:mt-10">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="h-[50px] w-[50px] bg-[#F2F7FC] text-[#1877F2] flex justify-center items-center cursor-pointer transition-all duration-300 hover:bg-gradient-to-r from-primaryColor to-secondaryColor hover:text-white hover:scale-75 hover:shadow-2xl lg:h-[60px] lg:w-[60px]">
              {link.icon}
            </div>
          </Link>
        ))}
      </div>

      {/* Contact Info */}
      <div className="bg-[#f2f5fa] rounded-3xl mt-6 lg:mt-10 min-h-[300px] px-6 lg:px-10 flex flex-col">
        {contactInfoData.map((info, index) => (
          <div
            key={index}
            className="border-b-2 flex gap-3 lg:gap-5 py-4 lg:py-6"
          >
            <div>
              <Image
                src={info.icon}
                alt={info.label.toLowerCase()}
                height={50}
                width={50}
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[#1A1003] opacity-50 font-body text-[12px] lg:text-[14px]">
                {info.label}
              </p>
              <a
                href={info.link}
                className="font-sans text-[12px] lg:text-[14px] font-semibold text-black"
              >
                {info.value}
              </a>
            </div>
          </div>
        ))}

        {/* Download Resume Button */}
        <Link
          href={
            "https://docs.google.com/document/d/1ct2-1yynrzHYVpUontQmbfSM3SGV76Gjxsk8Xm7_zZY/edit?usp=sharing"
          }
          className="bg-gradient-to-l mb-4 from-[#FF9C1A] to-[#ED250A] text-white font-semibold py-3 lg:py-4 px-6 lg:px-8 rounded-full shadow-lg flex items-center gap-2 transition duration-300 hover:scale-105 mt-6 lg:mt-10"
        >
          <FiDownload size={18} />
          Download Resume
        </Link>
      </div>
    </aside>
  );
};
const socialLinks = [
  {
    name: "Facebook",
    icon: <FaFacebookF size={20} />,
    url: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: <FaTwitter size={20} />,
    url: "https://twitter.com",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn size={20} />,
    url: "https://www.linkedin.com/in/moosa-khan-691a3528b/",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={20} />,
    url: "https://github.com/7779798365",
  },
];
const contactInfoData = [
  {
    icon: "/Phone.png", // Path to phone icon
    label: "Phone",
    value: "03332172037",
    link: "tel:03332172037", // Link for phone
  },
  {
    icon: "/Email.png", // Path to email icon
    label: "Email",
    value: "Muhammad Moosa", // Replace with actual email
    link: "mailto:moosanoob62@gmail.com", // Link for email
  },
  {
    icon: "/Location.png", // Path to location icon
    label: "Location",
    value: "123 Street Name, City, Country", // Replace with actual address
    link: "https://www.google.com/maps/search/?api=1&query=123+Street+Name,+City,+Country", // Link for location
  },
];
export default SideBar;