"use client";

import React, { useState, useEffect } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import light_mode from "../../../public/assests/light-mode.webp";
import dark_mode from "../../../public/assests/dark-mode-dark.webp";
import dark_mode_light from "../../../public/assests/dark-mode-light.webp";

const SliderComparison = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={light_mode.src}
            alt="Light mode image"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={isDarkMode ? dark_mode.src : dark_mode_light.src}
            alt="Dark mode image"
          />
        }
      />
      {/* <div className="flex items-center justify-center mt-4">
        <button onClick={toggleDarkMode} className="p-2">
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div> */}
    </>
  );
};

export default SliderComparison;
