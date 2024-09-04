
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="fixed h-20 w-full flex justify-between items-center bg-[#F6F9FC] dark:bg-[#191C20] pt-8 z-50">
      <div className="container mx-auto flex justify-between items-center px-24">
        <div className="flex items-center gap-5">
          <div className="flex gap-2 items-center font-bold">
            <span className="text-[#434A57] dark:text-white text-[22px]">
              Around
            </span>
          </div>
          <div className="hidden md:flex gap-11 items-center text-[16px] text-[#434A57] dark:text-white ml-10">
            <Link
              href="#"
              className="hover:text-[#448C74] dark:hover:text-[#90EE90]"
            >
              Landings
            </Link>
            <div className="nav-item group relative flex items-center gap-1">
              <Link
                href="#"
                className="nav-link dropdown-toggle cursor-pointer hover:text-[#448C74] dark:hover:text-[#90EE90]"
              >
                Pages
              </Link>
              <MdKeyboardArrowDown className="cursor-pointer hover:text-[#448C74] dark:hover:text-[#90EE90] h-5 w-5 text-[#434A57] dark:text-white" />
              <ul className="dropdown-menu hidden group-hover:block absolute bg-white dark:bg-gray-700 shadow-lg rounded-md z-10">
                <li>
                  <Link
                    href="#"
                    className="dropdown-item hover:text-[#448C74] dark:hover:text-[#90EE90]"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="dropdown-item hover:text-[#448C74] dark:hover:text-[#90EE90]"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="dropdown-item hover:text-[#448C74] dark:hover:text-[#90EE90]"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="dropdown-item hover:text-[#448C74] dark:hover:text-[#90EE90]"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="dropdown-item hover:text-[#448C74] dark:hover:text-[#90EE90]"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="dropdown-item hover:text-[#448C74] dark:hover:text-[#90EE90]"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="dropdown-item hover:text-[#448C74] dark:hover:text-[#90EE90]"
                  >
                    Contact
                  </Link>
                </li>
                <li className="relative group">
                  <Link
                    href="#"
                    className="dropdown-item dropdown-toggle cursor-pointer hover:text-[#448C74] dark:hover:text-[#90EE90]"
                  >
                    Specialty Pages
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-item group relative flex items-center gap-1">
              <Link
                href="#"
                className="nav-link absolute dropdown-toggle cursor-pointer hover:text-[#448C74] dark:hover:text-[#90EE90]"
              >
                Account
              </Link>
              <MdKeyboardArrowDown className="cursor-pointer hover:text-[#448C74] dark:hover:text-[#90EE90] h-5 w-5 text-[#434A57] dark:text-white" />
              <ul className="dropdown-menu hidden group-hover:block absolute bg-white dark:bg-gray-700 shadow-lg rounded-md z-10">
                <li className="relative group flex items-center">
                  <Link
                    href="#"
                    className="dropdown-item dropdown-toggle cursor-pointer hover:text-[#448C74] dark:hover:text-[#90EE90]"
                  >
                    Auth pages
                  </Link>
                  <IoIosArrowForward className="cursor-pointer hover:text-[#448C74] dark:hover:text-[#90EE90] h-5 w-5 text-[#434A57] dark:text-white" />
                  <ul className="dropdown-menu hidden group-hover:block absolute left-full top-0 mt-2 bg-white dark:bg-gray-700 shadow-lg rounded-md z-10">
                    <li>
                      <Link
                        href="account-signin.html"
                        className="dropdown-item hover:text-[#448C74] dark:hover:text-[#90EE90]"
                      >
                        Sign In
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="account-signup.html"
                        className="dropdown-item hover:text-[#448C74] dark:hover:text-[#90EE90]"
                      >
                        Sign Up
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="account-signinup.html"
                        className="dropdown-item hover:text-[#448C74] dark:hover:text-[#90EE90]"
                      >
                        Sign In / Up
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="account-password-recovery.html"
                        className="dropdown-item hover:text-[#448C74] dark:hover:text-[#90EE90]"
                      >
                        Password Recovery
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    href="account-overview.html"
                    className="dropdown-item hover:text-[#448C74] dark:hover:text-[#90EE90]"
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="account-settings.html"
                    className="dropdown-item hover:text-[#448C74] dark:hover:text-[#90EE90]"
                  >
                    Settings
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link
                    href="account-billing.html"
                    className="dropdown-item hover:text-[#448C74] dark:hover:text-[#90EE90]"
                  >
                    Billing
                  </Link>
                  <IoIosArrowForward className="cursor-pointer hover:text-[#448C74] dark:hover:text-[#90EE90] h-5 w-5 text-[#434A57] dark:text-white" />
                </li>
                <li>
                  <Link
                    href="account-orders.html"
                    className="dropdown-item hover:text-[#448C74] dark:hover:text-[#90EE90]"
                  >
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    href="account-earnings.html"
                    className="dropdown-item hover:text-[#448C74] dark:hover:text-[#90EE90]"
                  >
                    Earnings
                  </Link>
                </li>
                <li>
                  <Link
                    href="account-chat.html"
                    className="dropdown-item hover:text-[#448C74] dark:hover:text-[#90EE90]"
                  >
                    Chat (Messages)
                  </Link>
                </li>
                <li>
                  <Link
                    href="account-favorites.html"
                    className="dropdown-item hover:text-[#448C74] dark:hover:text-[#90EE90]"
                  >
                    Favorites (Wishlist)
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              href="#"
              className="hover:text-[#448C74] dark:hover:text-[#90EE90]"
            >
              UI Kit
            </Link>
            <Link
              href="#"
              className="hover:text-[#448C74] dark:hover:text-[#90EE90]"
            >
              Docs
            </Link>
          </div>
        </div>
        <ThemeSwitcher />
        <div>
          <button className="text-white bg-[#448C74] py-[9.2px] px-[20px] rounded-xl flex items-center gap-2 text-[14px] hover:bg-[#367762] dark:hover:bg-[#2F5D47]">
            <FiShoppingCart className="h-5 w-5" />
            Buy now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
