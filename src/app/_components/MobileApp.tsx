"use client";
import React, { useEffect } from "react";
import MobileLight from "../../../public/assests/mobile-app-light.jpg";
import MobileDark from "../../../public/assests/mobile-app-dark.jpg";
import Image from "next/image";
import star from "../../../public/assests/star.jpg";
import Link from "next/link";
import appStore from "../../../public/assests/appStore.svg";
import { Separator } from "./ui/Seperator";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const MobileApp = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);
  return (
    <section className="w-full flex flex-col md:flex-row  dark:bg-[#121519] justify-around lg:px-4 lg:py-12 min-h-screen pt-40 overflow-hidden">
      <div data-aos="fade-up">
        <Image
          className="block  dark:hidden"
          src={MobileLight}
          width="636"
          alt="Mobile screens"
        />
        <Image
          className="hidden dark:block"
          src={MobileDark}
          width="636"
          alt="Mobile screens"
        />
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-col lg:justify-center gap-5 px-4 lg:px-8  "
      >
        <h1 className="font-semibold tracking-wide dark:text-white text-center md:text-start pb-4 text-3xl md:text-[40px] mb-1 text-[#121519]">
          Download our app <br /> for any devices
        </h1>
        <div className="flex gap-7 lg:gap-10 px-0 lg:px- 3 ">
          <div className="flex flex-col gap-2  lg:pr-4 ">
            <p className="text-[#858C97] text-[16px]  dark:text-slate-400">
              App Store
            </p>
            <div className="flex gap-1">
              <FaStar className="h-5 w-5 text-yellow-300" />
              <FaStar className="h-5 w-5 text-yellow-300" />
              <FaStar className="h-5 w-5 text-yellow-300" />
              <FaStar className="h-5 w-5 text-yellow-300" />
              <FaStar className="h-5 w-5 text-yellow-300" />
            </div>

            <h3 className=" text-xl md:text-[24px] font-semibold dark:text-white text-[#121519] ">
              Editor&apos;s Choice
            </h3>
            <p className="text-[16px] dark:text-slate-300 text-[#576071]">
              rating 4.7, 187K+ reviews
            </p>
            <Link href="#" className="cursor-pointer">
              <Image src={appStore} alt="" className="w-48 -mt-6" />
            </Link>
          </div>
          <div className="min-h-[240px] h-[80%] w-[0.5px] bg-slate-300 dark:bg-slate-500"></div>
          {/* <Separator orientation="vertical"  className="bg-slate-300"/> */}
          <div className="flex flex-col gap-2 lg:pl-4 ">
            <p className="text-[#858C97] text-[16px]  dark:text-slate-400 ">
              Google Play
            </p>

            <div className="flex gap-1">
              <FaStar className="h-5 w-5 text-yellow-300" />
              <FaStar className="h-5 w-5 text-yellow-300" />
              <FaStar className="h-5 w-5 text-yellow-300" />
              <FaStar className="h-5 w-5 text-yellow-300" />
              <FaStar className="h-5 w-5 text-yellow-300" />
            </div>
            <h3 className="text-xl  dark:text-white md:text-[24px] font-semibold text-[#121519] ">
              Editor&apos;s Choice
            </h3>
            <p className="text-[16px] dark:text-slate-300 text-[#576071]">
              rating 4.7, 187K+ reviews
            </p>
            <Link href="#" className="cursor-pointer ">
              <Image src={appStore} alt="" className="w-48 -mt-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
