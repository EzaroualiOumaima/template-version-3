"use client";
import React, { useEffect, useRef } from "react";
import Parallax from "parallax-js";
import first_light from "../../../public/assests/01-light.png";
import first_dark from "../../../public/assests/01-dark.png";
import second_light from "../../../public/assests/02-light.png";
import second_dark from "../../../public/assests/02-dark.webp";
import third_light from "../../../public/assests/03-light.png";
// import third_dark from "../../../public/assests/03-dark.png";
import fourth_light from "../../../public/assests/04-light.png";
// import fourth_dark from "../../../public/assests/04-dark.png";
import Image from "next/image";

export default function Section1() {
  const sceneRef = useRef(null);

  useEffect(() => {
    if (sceneRef.current) {
      const parallaxInstance = new Parallax(sceneRef.current);
      return () => parallaxInstance.destroy(); // Clean up the parallax instance on unmount
    }
  }, []);

  return (
    <div className="container-fluid w-full px-4 mx-auto mt-4 pt-3 pt-sm-4 pb-sm-2 pb-md-3 py-lg-4 py-xl-5 overflow-hidden">
      <div ref={sceneRef} className="relative mx-auto max-w-[1440px]">
        <div data-depth="0.1">
          <Image className="block dark:hidden" src={first_light} alt="Layer" />
          <Image className="hidden dark:block" src={first_dark} alt="Layer" />
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full z-2"
          data-depth="0.25"
        >
          <div className="relative w-full h-full">
            <Image
              className="block dark:hidden absolute top-0 left-0"
              src={second_light}
              alt="Layer"
            />
            <Image
              className="hidden dark:block absolute top-0 left-44"
              src={second_dark}
              alt="Layer"
            />
          </div>
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full z-1"
          data-depth="0.35"
        >
          <Image className="block" src={third_light} alt="Layer" />
          {/* <Image className="hidden dark:block" src={third_dark} alt="Layer" /> */}
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full z-1"
          data-depth="0.45"
        >
          <Image className="block" src={fourth_light} alt="Layer" />
          {/* <Image className="hidden dark:block" src={fourth_dark} alt="Layer" /> */}
        </div>
      </div>
    </div>
  );
}
