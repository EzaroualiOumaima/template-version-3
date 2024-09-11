"use client";
import React, { useEffect, useState } from "react";
import { BiSolidToggleLeft } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import picture from "../../../public/assests/business-consulting.webp";
import picture2 from "../../../public/assests/conference.webp";
import picture3 from "../../../public/assests/corporate.webp";
import picture4 from "../../../public/assests/creative-agency.webp";
import picture5 from "../../../public/assests/coworking.webp";
import picture6 from "../../../public/assests/influencer.webp";
import picture7 from "../../../public/assests/insurance.webp";
// import picture8 from "../../../public/assests/";
// import picture9 from "../../../public/assests/";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { RiMenu4Fill } from "react-icons/ri";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isPagesDropDownVisible, setIsPagesDropDownVisible] = useState(false);
  const [accountDropDown, setAccountDropDown] = useState(false);
  const [portfolioDropDown, setPortfolioDropDown] = useState(false);
  const [shopDropDown, setShopDropDown] = useState(false);
  const [aboutDropDown, setAboutDropDown] = useState(false);
  const [blogDropDown, setBlogDropDown] = useState(false);
  const [servicesDropDown, setServicesDropDown] = useState(false);
  const [contactDropDown, setContactDropDown] = useState(false);
  const [specialityDropDown, setSpecialityDropDown] = useState(false);

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isLandingOpen, setIsLandingOpen] = useState(false);
  const [isPagesOpen, setIsPages] = useState(false);
  const [isAccount, setIsAccount] = useState(false);
  const [isPortofolioOpen, setIsPortfolioOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isContactOpen, setIsConatctOpen] = useState(false);
  const [isSpecialityOpen, setIsSpecialityOpen] = useState(false);
  const [isAutOpen, setIsAuthOpen] = useState(false);
  const [isAbout, setIsAbout] = useState(false);

  const [divImage, setDivImage] = useState(picture);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const resetImage = () => {
    setDropdownVisible(false);
    setDivImage(picture);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`fixed h-20 w-full justify-center items-center   dark:text-white z-50 
      ${
        isScrolled
          ? "bg-white dark:bg-[#121519]"
          : "bg-[#F6F9FC]dark:bg-[#191C20] "
      }`}
      >
        <div className="mx-auto flex px-3 lg:px-0 w-full justify-between lg:w-[85%] h-full">
          <div className="flex items-center gap-10">
            <div className="flex gap-2 items-center font-bold">
              <svg
                className="text-[#448C74]"
                width="35"
                height="32"
                viewBox="0 0 36 33"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M35.6,29c-1.1,3.4-5.4,4.4-7.9,1.9c-2.3-2.2-6.1-3.7-9.4-3.7c-3.1,0-7.5,1.8-10,4.1c-2.2,2-5.8,1.5-7.3-1.1c-1-1.8-1.2-4.1,0-6.2l0.6-1.1l0,0c0.6-0.7,4.4-5.2,12.5-5.7c0.5,1.8,2,3.1,3.9,3.1c2.2,0,4.1-1.9,4.1-4.2s-1.8-4.2-4.1-4.2c-2,0-3.6,1.4-4,3.3H7.7c-0.8,0-1.3-0.9-0.9-1.6l5.6-9.8c2.5-4.5,8.8-4.5,11.3,0L35.1,24C36,25.7,36.1,27.5,35.6,29z"
                ></path>
              </svg>{" "}
              <span className="text-[#434A57] text-[22px] dark:text-white">
                Around
              </span>
            </div>

            <div className=" hidden lg:flex gap-8 items-center font-normal font-sans h-full">
              <div
                className="Landing-link relative h-full flex items-center cursor-pointer"
                onMouseEnter={() => setDropdownVisible(true)}
                onMouseLeave={resetImage}
              >
                <ul className="nav-links text-[#448C74]" id="Landing">
                  Landings <MdKeyboardArrowDown className="h-5 w-5" />
                </ul>

                <AnimatePresence>
                  {isDropdownVisible && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.15 }}
                      className="landing-dropdown absolute bg-white dark:bg-[#121519] h-auto min-w-[700px] rounded-3xl shadow-lg top-14 -left-2 text-[14px] overflow-hidden"
                    >
                      <div className="flex">
                        <div className="flex flex-col items-start justify-center dark:text-white min-w-[35%] py-4 px-2">
                          <p
                            className="link-text"
                            onMouseEnter={() => setDivImage(picture)}
                          >
                            Template intro Page
                          </p>
                          <p
                            className="link-text"
                            onMouseEnter={() => setDivImage(picture2)}
                          >
                            Mobile App Showcase
                          </p>
                          <p
                            className="link-text"
                            onMouseEnter={() => setDivImage(picture3)}
                          >
                            Product Landing
                          </p>
                          <p
                            className="link-text"
                            onMouseEnter={() => setDivImage(picture4)}
                          >
                            Saas v1.
                          </p>
                          <p
                            className="link-text"
                            onMouseEnter={() => setDivImage(picture5)}
                          >
                            Saas v2.
                          </p>
                          <p
                            className="link-text"
                            onMouseEnter={() => setDivImage(picture6)}
                          >
                            Saas v3.
                          </p>
                          <p
                            className="link-text"
                            onMouseEnter={() => setDivImage(picture)}
                          >
                            Saas v4.
                          </p>
                          <p
                            className="link-text"
                            onMouseEnter={() => setDivImage(picture2)}
                          >
                            Shop HomePage v1.
                          </p>
                          <p
                            className="link-text"
                            onMouseEnter={() => setDivImage(picture3)}
                          >
                            Shop HomePage v2.{" "}
                            <span className="text-red-600 ml-2">New</span>
                          </p>
                          <p
                            className="link-text"
                            onMouseEnter={() => setDivImage(picture4)}
                          >
                            Marketing Agency
                          </p>
                        </div>
                        <div className="flex flex-col items-start justify-center dark:text-white  min-w-[35%] py-4 px-2">
                          <p
                            className="link-text"
                            onMouseEnter={() => setDivImage(picture5)}
                          >
                            Creative Agency{" "}
                          </p>
                          <p
                            className="link-text"
                            onMouseEnter={() => setDivImage(picture6)}
                          >
                            Conference (Event){" "}
                          </p>
                          <p
                            className="link-text"
                            onMouseEnter={() => setDivImage(picture)}
                          >
                            Web Studio{" "}
                          </p>
                          <p
                            className="link-text"
                            onMouseEnter={() => setDivImage(picture2)}
                          >
                            Corporate
                          </p>
                          <p
                            className="link-text"
                            onMouseEnter={() => setDivImage(picture3)}
                          >
                            Buisness Consulting
                          </p>
                          <p
                            className="link-text"
                            onMouseEnter={() => setDivImage(picture4)}
                          >
                            Coworking Space{" "}
                            <span className="text-red-600 ml-2">New</span>
                          </p>
                          <p
                            className="link-text"
                            onMouseEnter={() => setDivImage(picture5)}
                          >
                            Yoga Studio{" "}
                          </p>
                          <p
                            className="link-text"
                            onMouseEnter={() => setDivImage(picture6)}
                          >
                            Influencer{" "}
                          </p>
                          <p
                            className="link-text"
                            onMouseEnter={() => setDivImage(picture7)}
                          >
                            Blog HomePage{" "}
                          </p>
                          <p
                            className="link-text"
                            onMouseEnter={() => setDivImage(picture)}
                          >
                            Insurrance Company{" "}
                          </p>
                        </div>
                        <div className="min-w-[28%]">
                          <Image
                            src={divImage}
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div
                className="Pages-link relative h-full flex items-center cursor-pointer"
                onMouseEnter={() => setIsPagesDropDownVisible(true)}
                onMouseLeave={() => setIsPagesDropDownVisible(false)}
              >
                <ul className="nav-links" id="Pages">
                  Pages <MdKeyboardArrowDown className="h-5 w-5" />
                </ul>

                <AnimatePresence>
                  {isPagesDropDownVisible && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.15 }}
                      className="Pages-dropdown absolute bg-white dark:bg-[#121519] dark:text-white  h-auto w-[180px] rounded-3xl shadow-lg top-14 -left-2 text-[14px] py-3"
                    >
                      <div className="flex flex-col items-start justify-center ">
                        <div
                          className="relative flex items-center justify-between w-full py-1 px-5 "
                          onMouseEnter={() => setPortfolioDropDown(true)}
                          onMouseLeave={() => setPortfolioDropDown(false)}
                        >
                          <p className="hover:text-[#448c74]">Portfolio </p>
                          <MdKeyboardArrowRight className="w-5 h-5" />
                          <AnimatePresence>
                            {portfolioDropDown && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ duration: 0.15 }}
                                className="absolute z-50 bg-white dark:bg-[#121519] dark:text-white  h-auto w-[180px] rounded-3xl shadow-lg left-[170px] -top-4 text-[14px] overflow-hidden py-3"
                              >
                                <div className="py-1 px-5 hover:text-[#448c74]">
                                  <p>List View v1.</p>
                                </div>
                                <div className="py-1 px-5 hover:text-[#448c74]">
                                  <p>List View v2.</p>
                                </div>
                                <div className="py-1 px-5 hover:text-[#448c74]">
                                  <p>List View v3.</p>
                                </div>
                                <div className="py-1 px-5 hover:text-[#448c74]">
                                  <p>Grid View v1.</p>
                                </div>
                                <div className="py-1 px-5 hover:text-[#448c74]">
                                  <p>Grid View v2.</p>
                                </div>
                                <div className="py-1 px-5 hover:text-[#448c74]">
                                  <p>Grid View v3.</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div
                          className="relative flex items-center justify-between w-full py-1 px-5 hover:text-[#448c74]"
                          onMouseEnter={() => setShopDropDown(true)}
                          onMouseLeave={() => setShopDropDown(false)}
                        >
                          <p>Shop </p>
                          <MdKeyboardArrowRight className="w-5 h-5" />
                          <AnimatePresence>
                            {shopDropDown && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ duration: 0.15 }}
                                className="absolute z-50 bg-white dark:bg-[#121519]   h-[100px] w-[180px] rounded-3xl shadow-lg left-[170px] -top-4 text-[14px] overflow-hidden py-3"
                              >
                                <div className="py-1 px-5 text-black dark:text-white hover:text-[#448c74]">
                                  <p>List View v1.</p>
                                </div>
                                <div className="py-1 px-5 text-black dark:text-white hover:text-[#448c74]">
                                  <p>List View v2.</p>
                                </div>
                                <div className="py-1 px-5 text-black dark:text-white hover:text-[#448c74]">
                                  <p>List View v3.</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div
                          className="relative flex items-center justify-between w-full py-1 px-5 hover:text-[#448c74]"
                          onMouseEnter={() => setBlogDropDown(true)}
                          onMouseLeave={() => setBlogDropDown(false)}
                        >
                          <p>Blog </p>
                          <MdKeyboardArrowRight className="w-5 h-5" />
                          <AnimatePresence>
                            {blogDropDown && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ duration: 0.15 }}
                                className="absolute z-50 bg-white dark:bg-[#121519]  h-[230px] w-[180px] rounded-3xl shadow-lg left-[170px] -top-4 text-[14px] overflow-hidden py-3"
                              >
                                <div className="py-1 px-5 text-black dark:text-white  hover:text-[#448c74]">
                                  <p>List View v1.</p>
                                </div>
                                <div className="py-1 px-5 text-black dark:text-white  hover:text-[#448c74]">
                                  <p>List View v2.</p>
                                </div>
                                <div className="py-1 px-5 text-black dark:text-white  hover:text-[#448c74]">
                                  <p>List View v3.</p>
                                </div>
                                <div className="py-1 px-5 text-black  dark:text-white hover:text-[#448c74]">
                                  <p>List View v3.</p>
                                </div>
                                <div className="py-1 px-5 text-black dark:text-white  hover:text-[#448c74]">
                                  <p>List View v3.</p>
                                </div>
                                <div className="py-1 px-5 text-black dark:text-white  hover:text-[#448c74]">
                                  <p>List View v3.</p>
                                </div>
                                <div className="py-1 px-5 text-black dark:text-white  hover:text-[#448c74]">
                                  <p>List View v3.</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div
                          className="relative flex items-center justify-between w-full py-1 px-5 hover:text-[#448c74]"
                          onMouseEnter={() => setAboutDropDown(true)}
                          onMouseLeave={() => setAboutDropDown(false)}
                        >
                          <p>About </p>
                          <MdKeyboardArrowRight className="w-5 h-5" />
                          <AnimatePresence>
                            {aboutDropDown && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ duration: 0.15 }}
                                className="absolute z-50 bg-white dark:bg-[#121519]  h-[100px] w-[180px] rounded-3xl shadow-lg left-[170px] -top-4 text-[14px] overflow-hidden py-3"
                              >
                                <div className="py-1 px-5 text-black dark:text-white  hover:text-[#448c74]">
                                  <p>List View v3.</p>
                                </div>
                                <div className="py-1 px-5 text-black dark:text-white  hover:text-[#448c74]">
                                  <p>List View v3.</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div
                          className="relative flex items-center justify-between w-full py-1 px-5 hover:text-[#448c74]"
                          onMouseEnter={() => setServicesDropDown(true)}
                          onMouseLeave={() => setServicesDropDown(false)}
                        >
                          <p>Services </p>
                          <MdKeyboardArrowRight className="w-5 h-5" />
                          <AnimatePresence>
                            {servicesDropDown && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ duration: 0.15 }}
                                className="absolute z-50 bg-white dark:bg-[#121519] dark:text-white  h-[100px] w-[180px] rounded-3xl shadow-lg left-[170px] -top-4 text-[14px] overflow-hidden py-3"
                              >
                                <div className="py-1 px-5 text-black dark:text-white hover:text-[#448c74]">
                                  <p>Services v1.</p>
                                </div>
                                <div className="py-1 px-5 text-black dark:text-white hover:text-[#448c74]">
                                  <p>Services v2.</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="py-1 px-5 hover:text-[#448c74]">
                          <p>Pricing</p>
                        </div>

                        <div
                          className="relative flex items-center justify-between w-full py-1 px-5 hover:text-[#448c74]"
                          onMouseEnter={() => setContactDropDown(true)}
                          onMouseLeave={() => setContactDropDown(false)}
                        >
                          <p>Contact </p>
                          <MdKeyboardArrowRight className="w-5 h-5" />
                          <AnimatePresence>
                            {contactDropDown && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ duration: 0.15 }}
                                className="absolute z-50 bg-white  dark:bg-[#121519]  h-[100px] w-[180px] rounded-3xl shadow-lg left-[170px] -top-4 text-[14px] overflow-hidden py-3"
                              >
                                <div className="py-1 px-5 text-black dark:text-white hover:text-[#448c74]">
                                  <p>Contacts v1.</p>
                                </div>
                                <div className="py-1 px-5 text-black dark:text-white hover:text-[#448c74]">
                                  <p>Contacts v2.</p>
                                </div>
                                <div className="py-1 px-5 text-black dark:text-white  hover:text-[#448c74]">
                                  <p>Contacts v3.</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div
                          className="relative flex items-center justify-between w-full py-1 px-5 hover:text-[#448c74]"
                          onMouseEnter={() => setSpecialityDropDown(true)}
                          onMouseLeave={() => setSpecialityDropDown(false)}
                        >
                          <p>Speciality Page </p>
                          <MdKeyboardArrowRight className="w-5 h-5" />
                          <AnimatePresence>
                            {specialityDropDown && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ duration: 0.15 }}
                                className="absolute z-50 bg-white dark:bg-[#121519]  h-[100px] w-[180px] rounded-3xl shadow-lg left-[170px] -top-4 text-[14px] overflow-hidden py-3"
                              >
                                <div className="py-1 px-5 text-black dark:text-white hover:text-[#448c74]">
                                  <p>List View v3.</p>
                                </div>
                                <div className="py-1 px-5 text-black dark:text-white hover:text-[#448c74]">
                                  <p>List View v3.</p>
                                </div>
                                <div className="py-1 px-5 text-black dark:text-white hover:text-[#448c74]">
                                  <p>List View v3.</p>
                                </div>
                                <div className="py-1 px-5 text-black dark:text-white hover:text-[#448c74]">
                                  <p>Error v3.</p>
                                </div>
                                <div className="py-1 px-5 text-black dark:text-white hover:text-[#448c74]">
                                  <p>Error v3.</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div
                className="Pages-link relative h-full flex items-center  cursor-pointer"
                onMouseEnter={() => setAccountDropDown(true)}
                onMouseLeave={() => setAccountDropDown(false)}
              >
                <ul className="nav-links " id="Pages">
                  Account <MdKeyboardArrowDown className="h-5 w-5" />
                </ul>

                <AnimatePresence>
                  {accountDropDown && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.15 }}
                      className="absolute bg-white dark:bg-[#121519] dark:text-white  h-auto w-[180px] rounded-3xl shadow-lg top-14 -left-2 text-[14px] py-3"
                    >
                      <div className="flex flex-col items-start justify-center ">
                        <div
                          className="relative flex items-center justify-between w-full py-1 px-5"
                          onMouseEnter={() => setPortfolioDropDown(true)}
                          onMouseLeave={() => setPortfolioDropDown(false)}
                        >
                          <p>Auth Pages </p>
                          <MdKeyboardArrowRight className="w-5 h-5" />
                          <AnimatePresence>
                            {portfolioDropDown && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ duration: 0.15 }}
                                className="absolute z-50 bg-white dark:bg-[#121519] dark:text-white h-auto w-[180px] rounded-3xl shadow-lg left-[170px] -top-4 text-[14px] overflow-hidden py-3"
                              >
                                <div className="py-1 px-5 hover:text-[#448c74]">
                                  <p>Sign In</p>
                                </div>
                                <div className="py-1 px-5 hover:text-[#448c74]">
                                  <p>Sign Up</p>
                                </div>
                                <div className="py-1 px-5 hover:text-[#448c74]">
                                  <p>Sign In/Up</p>
                                </div>
                                <div className="py-1 px-5 hover:text-[#448c74]">
                                  <p>Password revovery</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="py-1 px-5 hover:text-[#448c74]">
                          <p>OverView</p>
                        </div>

                        <div className="py-1 px-5 hover:text-[#448c74]">
                          <p>Settings</p>
                        </div>

                        <div className="py-1 px-5 hover:text-[#448c74]">
                          <p>Billing</p>
                        </div>

                        <div className="py-1 px-5 hover:text-[#448c74]">
                          <p>Orders</p>
                        </div>

                        <div className="py-1 px-5 hover:text-[#448c74]">
                          <p>Earnings</p>
                        </div>

                        <div className="py-1 px-5 hover:text-[#448c74]">
                          <p>Chat (Messages)</p>
                        </div>

                        <div className="py-1 px-5 hover:text-[#448c74]">
                          <p>Favourites (WhishList)</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <ul className="nav-links">Ui Kit</ul>
              </div>
              <div>
                <ul className="nav-links">Docs </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center ">
              {/* <CiLight className="w-6 h-6 text-[#448C74] " /> */}
              <ThemeSwitcher />
              {/* <CiDark className="w-6 h-6 text-[#448C74] " /> */}
            </div>
            <div className="block lg:hidden">
              <div
                className="w-7 h-7 cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsOpenMenu(!isOpenMenu)}
              >
                {isOpenMenu ? (
                  <IoMdClose className="w-7 h-7" />
                ) : isHovered ? (
                  <IoMdMenu className="w-7 h-7" />
                ) : (
                  <RiMenu4Fill className="w-7 h-7" />
                )}
              </div>
            </div>

            {/* <BiSolidToggleLeft className="h-9 w-9 text-green-500 " /> */}
            <button className="text-white hidden   bg-[#448C74] py-[9.2px] px-[20px] rounded-xl lg:flex items-center gap-2 text-[14px] hover:bg-[#367762] ">
              <FiShoppingCart className="h-5 w-5" />
              Buy now
            </button>
          </div>
        </div>
      </nav>

      {isOpenMenu && (
        <>
          <div className="flex fixed w-full items-center justify-center top-20 z-30   ">
            <div className="bg-white dark:bg-[#191C20] border border-slate-200 w-[95%] rounded-3xl flex flex-col max-h-[80vh] overflow-hidden overflow-y-auto">
              <div className="px-5 py-2">
                <div className="px-5 py-1">
                  <ul
                    onClick={() => setIsLandingOpen(!isLandingOpen)}
                    className="nav-links mb-2 dark:text-[#448C74] dark:hover:text-[#448C74]   "
                    id="Landing"
                  >
                    Landings <MdKeyboardArrowDown className="h-5 w-5 " />
                  </ul>
                  {isLandingOpen && (
                    <div className="border border-r-0 border-b-0 border-t-0  border-l-slate-300 bg-white dark:bg-[#191C20] dark:text-white flex flex-col">
                      <p className="px-5 py-[6px]">Template Intro Page</p>
                      <p className="px-5 py-[6px]">Mobile app show case</p>
                      <p className="px-5 py-[6px]">Product Landing</p>
                      <p className="px-5 py-[6px]">Saas v.1</p>
                      <p className="px-5 py-[6px]">Saas v.1</p>
                      <p className="px-5 py-[6px]">Saas v.1</p>
                      <p className="px-5 py-[6px]">Saas v.1</p>
                      <p className="px-5 py-[6px]">Saas v.1</p>
                      <p className="px-5 py-[6px]">Template Intro Page</p>
                      <p className="px-5 py-[6px]">Mobile app show case</p>
                      <p className="px-5 py-[6px]">Product Landing</p>
                    </div>
                  )}
                </div>

                <div className="px-5 py-1">
                  <ul
                    onClick={() => setIsPages(!isPagesOpen)}
                    className="nav-links mb-2   dark:text-white dark:hover:text-[#448C74]"
                    id="Landing"
                  >
                    Pages <MdKeyboardArrowDown className="h-5 w-5" />
                  </ul>

                  {isPagesOpen && (
                    <div className="border border-r-0 border-b-0 border-t-0  dark:bg-[#191C20] dark:text-white border-l-slate-300 bg-white flex flex-col">
                      <div className="px-5 py-1">
                        <ul
                          onClick={() => setIsPortfolioOpen(!isPortofolioOpen)}
                          className="nav-links mb-2  hover:text-[#448C74] "
                          id="Landing"
                        >
                          Portfolio <MdKeyboardArrowDown className="h-5 w-5" />
                        </ul>
                        {isPortofolioOpen && (
                          <div className="border border-r-0 border-b-0 border-t-0  border-l-slate-300 dark:bg-[#191C20] dark:text-white bg-white flex flex-col">
                            <p className="px-5 py-[6px]">Template Intro Page</p>
                            <p className="px-5 py-[6px]">
                              Mobile app show case
                            </p>
                            <p className="px-5 py-[6px]">Product Landing</p>
                            <p className="px-5 py-[6px]">Saas v.1</p>
                          </div>
                        )}
                      </div>
                      <div className="px-5 py-1">
                        <ul
                          onClick={() => setIsShopOpen(!isShopOpen)}
                          className="nav-links mb-2  hover:text-[#448C74]"
                          id="Landing"
                        >
                          Shop <MdKeyboardArrowDown className="h-5 w-5" />
                        </ul>
                        {isShopOpen && (
                          <div className="border border-r-0 border-b-0 border-t-0 dark:bg-[#191C20] dark:text-white border-l-slate-300 bg-white flex flex-col">
                            <p className="px-5 py-[6px]">Template Intro Page</p>
                            <p className="px-5 py-[6px]">
                              Mobile app show case
                            </p>
                            <p className="px-5 py-[6px]">Product Landing</p>
                            <p className="px-5 py-[6px]">Saas v.1</p>
                          </div>
                        )}
                      </div>
                      <div className="px-5 py-1">
                        <ul
                          onClick={() => setIsBlogOpen(!isBlogOpen)}
                          className="nav-links mb-2  hover:text-[#448C74]"
                          id="Landing"
                        >
                          Blog <MdKeyboardArrowDown className="h-5 w-5" />
                        </ul>
                        {isBlogOpen && (
                          <div className="border border-r-0 border-b-0 border-t-0  dark:bg-[#191C20] dark:text-white border-l-slate-300 bg-white flex flex-col">
                            <p className="px-5 py-[6px]">Template Intro Page</p>
                            <p className="px-5 py-[6px]">
                              Mobile app show case
                            </p>
                            <p className="px-5 py-[6px]">Product Landing</p>
                            <p className="px-5 py-[6px]">Saas v.1</p>
                          </div>
                        )}
                      </div>
                      <div className="px-5 py-1">
                        <ul
                          onClick={() => setIsAbout(!isAbout)}
                          className="nav-links mb-2  hover:text-[#448C74]"
                          id="Landing"
                        >
                          About <MdKeyboardArrowDown className="h-5 w-5" />
                        </ul>
                        {isAbout && (
                          <div className="border border-r-0 border-b-0 border-t-0  border-l-slate-300 dark:bg-[#191C20] dark:text-white bg-white flex flex-col">
                            <p className="px-5 py-[6px]">About v.1</p>
                            <p className="px-5 py-[6px]">About v.2</p>
                          </div>
                        )}
                      </div>
                      <div className="px-5 py-1">
                        <ul
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="nav-links mb-2  hover:text-[#448C74]"
                          id="Landing"
                        >
                          Services <MdKeyboardArrowDown className="h-5 w-5" />
                        </ul>
                        {isServicesOpen && (
                          <div className="border border-r-0 border-b-0 border-t-0 dark:bg-[#191C20] dark:text-white  border-l-slate-300 bg-white flex flex-col">
                            <p className="px-5 py-[6px]">Template Intro Page</p>
                            <p className="px-5 py-[6px]">
                              Mobile app show case
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="px-5 py-1">
                        <ul
                          className="nav-links mb-2  dark:text-white  dark:hover:text-[#448C74]"
                          id="Landing"
                        >
                          Pricing
                        </ul>
                      </div>
                      <div className="px-5 py-1">
                        <ul
                          onClick={() => setIsConatctOpen(!isContactOpen)}
                          className="nav-links mb-2  dark:text-white  dark:hover:text-[#448C74]"
                          id="Landing"
                        >
                          Contacts <MdKeyboardArrowDown className="h-5 w-5" />
                        </ul>
                        {isContactOpen && (
                          <div className="border border-r-0 border-b-0 border-t-0 dark:bg-[#191C20] dark:text-white  border-l-slate-300 bg-white flex flex-col">
                            <p className="px-5 py-[6px]">Contacts v.1</p>
                            <p className="px-5 py-[6px]">Contacts v.2</p>
                            <p className="px-5 py-[6px]">Contacts v.3</p>
                          </div>
                        )}
                      </div>
                      <div className="px-5 py-1">
                        <ul
                          onClick={() => setIsSpecialityOpen(!isSpecialityOpen)}
                          className="nav-links mb-2 dark:text-white  dark:hover:text-[#448C74]"
                          id="Landing"
                        >
                          Speciality Pages{" "}
                          <MdKeyboardArrowDown className="h-5 w-5" />
                        </ul>
                        {isSpecialityOpen && (
                          <div className="border border-r-0 border-b-0 border-t-0  border-l-slate-300 dark:bg-[#191C20] dark:text-white bg-white flex flex-col">
                            <p className="px-5 py-[6px]">Template Intro Page</p>
                            <p className="px-5 py-[6px]">
                              Mobile app show case
                            </p>
                            <p className="px-5 py-[6px]">Product Landing</p>
                            <p className="px-5 py-[6px]">Saas v.1</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="px-5 py-1">
                  <ul
                    onClick={() => setIsAccount(!isAccount)}
                    className="nav-links mb-2 dark:text-white hover:text-[#448C74]"
                    id="Landing"
                  >
                    Account <MdKeyboardArrowDown className="h-5 w-5" />
                  </ul>
                  {isAccount && (
                    <div className="border border-r-0 border-b-0 border-t-0  dark:bg-[#191C20] dark:text-white border-l-slate-300 bg-white flex flex-col">
                      <div className="px-5 py-1">
                        <ul
                          onClick={() => setIsAuthOpen(!isAutOpen)}
                          className="nav-links mb-2 dark:text-white  dark:hover:text-[#448C74]"
                          id="Landing"
                        >
                          Auth Pages{" "}
                          <MdKeyboardArrowDown className="h-5 w-5 " />
                        </ul>
                        {isAutOpen && (
                          <div className="border border-r-0 border-b-0 border-t-0 dark:bg-[#191C20] dark:text-white border-l-slate-300 bg-white flex flex-col">
                            <p className="px-5 py-[6px]">Sign In</p>
                            <p className="px-5 py-[6px]">Sign Up</p>
                            <p className="px-5 py-[6px]">Sign In/Up</p>
                            <p className="px-5 py-[6px]">Password recovery</p>
                          </div>
                        )}
                      </div>
                      <p className="px-5 py-[6px]">Overview</p>
                      <p className="px-5 py-[6px]">Settings</p>
                      <p className="px-5 py-[6px]">Bulding</p>
                      <p className="px-5 py-[6px]">Saas v.1</p>
                      <p className="px-5 py-[6px]">Saas v.1</p>
                      <p className="px-5 py-[6px]">Saas v.1</p>
                      <p className="px-5 py-[6px]">Saas v.1</p>
                    </div>
                  )}
                </div>

                <div className="px-5 py-1">
                  <ul
                    className="nav-links mb-2 dark:text-white   dark:hover:text-[#448C74]"
                    id="Landing"
                  >
                    UI Kit
                  </ul>
                </div>

                <div className="px-5 py-1">
                  <ul
                    className="nav-links mb-2  dark:text-white   dark:hover:text-[#448C74]"
                    id="Landing"
                  >
                    Docs
                  </ul>
                </div>
              </div>
              {/* <IoMdClose
                className="w-10 h-10  absolute cursor-pointer top-5 right-4 text-white"
                onClick={() => setIsOpenMenu(false)}
              /> */}

              <div className="px-5 py-4 flex items-center justify-center ">
                <button className="bg-[#448C74] text-white text-lg  flex items-center py-3 px-28  rounded-xl   gap-2">
                  <FiShoppingCart className="h-5 w-5" />
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
