import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">Rasa Nusantara</h1>
          <p className=" text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum fugiat labore doloribus cumque dolorem. Deleniti?
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="#dishes"
            >
              Menu
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="#about"
            >
              About
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="#menu"
            >
              Best Seller
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="#review"
            >
              Reviews
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="#dishes"
            >
              Makanan
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="#dishes"
            >
              Minuman
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              RasaNusantara@email.com
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              +62 821 2313 5238
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Social media
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright developed by
            <span className=" text-brightColor"> azrieldwim</span> |
            All rights reserved
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;