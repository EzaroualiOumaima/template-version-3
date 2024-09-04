import React from "react";
import appstore from "../../../public/assests/appStore.svg";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full  mx-auto flex flex-col  overflow-hidden dark:bg-[#121519] ">
      <div className=" flex  flex-col md:flex-col lg:flex-row items-center justify-center md:justify-between md:gap-12 lg:gap-20 px-28 py-10 lg:py-8 lg:mb-16">
        <div className="flex flex-col  gap-7">
          <h1 className="text-[20px] md:text-2xl text-center md:text-start text-[#121519] font-semibold dark:text-white">
            If you have questions email us at
          </h1>
          <Link
            href="mailto:email@example.com"
            className="font-bold text-4xl text-[#448C74] underline text-center md:text-center lg:text-start"
          >
            email@example.com
          </Link>
        </div>
        <div className="flex items-center justify-center gap-7  w-full md:w-fit">
          <Image
            className="object-cover w-[180px]"
            src={appstore}
            alt="App Store"
          />
          <Image className="w-[180px]" src={appstore} alt="Google Play" />
        </div>
      </div>
      <div className=" flex flex-wrap-reverse md:flex-nowrap justify-between md:flex-row py-10 border-t border-slate-300 dark:border-slate-700 gap-8  lg:gap-20 px-6 md:px-5  ">
        <div className="flex gap-7 flex-wrap md:flex-nowrap items-center justify-center  ">
          <p className="font-normal text-[16px] text-slate-400">
            &copy; All rights reserved
          </p>
          <Link
            href="#"
            className="font-normal text-[16px] cursor-pointer hover:text-[#448C74] dark:text-slate-200"
          >
            Terms &amp; Conditions
          </Link>
          <Link
            href="#"
            className="font-normal text-[16px] cursor-pointer hover:text-[#448C74] dark:text-slate-300"
          >
            Privacy Policy
          </Link>
        </div>

        <div className="flex gap-5 items-center justify-center  w-full md:w-fit ">
          <Link href="#" target="_blank">
            <div className="rounded-full text-slate-700 dark:text-slate-100 bg-slate-100 p-3 dark:bg-[#191C20] cursor-pointer hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white">
              <FaFacebookF className="h-4 w-4" />
            </div>
          </Link>
          <Link href="#" target="_blank">
            <div className="rounded-full text-slate-700 dark:text-slate-100 bg-slate-100 dark:bg-[#191C20] p-3 cursor-pointer hover:bg-blue-800 dark:hover:bg-blue-800 hover:text-white">
              <FaLinkedin className="h-4 w-4" />
            </div>
          </Link>
          <Link href="#" target="_blank">
            <div className="rounded-full text-slate-700 dark:text-slate-100 bg-slate-100 dark:bg-[#191C20] p-3 cursor-pointer hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white">
              <FaTelegramPlane className="h-4 w-4" />
            </div>
          </Link>
          <Link href="#" target="_blank">
            <div className="rounded-full text-slate-700 dark:text-slate-100 bg-slate-100 dark:bg-[#191C20] p-3 cursor-pointer hover:bg-red-600 dark:hover:bg-red-600  hover:text-white">
              <FaYoutube className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
