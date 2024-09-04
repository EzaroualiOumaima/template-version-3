"use client";
import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import avatar1 from "../../../public/assests/avatarwebp.webp";
import Image from "next/image";

const reviewsData = [
  {
    id: 1,
    name: "Nadia Miles",
    review:
      "Netus vel, amet placerat eget sit eleifend. Urna laoreet ultricies orci feugiat amet egestas semper praesent. Risus ut porttitor metus tortor quis eleifend.",
    avatar: avatar1,
  },
  {
    id: 2,
    name: "Eleanor Pena",
    review:
      "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat aucibus cursus.",
    avatar: avatar1,
  },
  {
    id: 3,
    name: "John Doe",
    review:
      "Morbi ut aliquam etiam luctus feugiat ultrices. Amet pellentesque sagittis, consequat id egestas tristique turpis. Arcu sed id ultricies hendrerit.",
    avatar: avatar1,
  },
  {
    id: 4,
    name: "Jane Smith",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    avatar: avatar1,
  },
  {
    id: 5,
    name: "Alice Johnson",
    review:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    avatar: avatar1,
  },
  {
    id: 6,
    name: "Bob Brown",
    review:
      "Eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    avatar: avatar1,
  },
];

export default function Reviews() {
  const [currentPage, setCurrentPage] = useState(1);
  const [transitioning, setTransitioning] = useState(false);

  const handleNext = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentPage((prevPage) => (prevPage === 2 ? 1 : prevPage + 1));
      setTransitioning(false);
    }, 150); // Duration should match the CSS transition duration
  };

  const handlePrevious = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentPage((prevPage) => (prevPage === 1 ? 2 : prevPage - 1));
      setTransitioning(false);
    }, 150); // Duration should match the CSS transition duration
  };

  const reviewsToDisplay =
    currentPage === 1 ? reviewsData.slice(0, 3) : reviewsData.slice(3, 6);

  return (
    <>
      <div className="min-h-screen grid items-center justify-center grid-cols-1  pt-24 lg:grid-cols-2 overflow-hidden w-full px-3 md:px-0 dark:bg-[#121519]">
        <div className="flex relative flex-col gap-10 items-center">
          <div className="flex flex-col gap-10 ">
            <h1 className="text-[32px] md:text-[38px]  lg:text-[40px] max-w-[500px] font-semibold text-center lg:text-start dark:text-white">
              What our clients say about their{" "}
              <span className="relative dark:text-white">experience </span>
              <svg
                className="absolute top-14 left-16 md:top-20 md:left-[340px] end-0  "
                width="249"
                height="40"
                viewBox="0 0 249 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="text-yellow-300"
                  opacity=".4"
                  d="M15.699 33.4057C16.7344 33.345 17.7851 33.1974 18.8132 33.2243C19.7728 33.2481 20.7319 33.268 21.6897 33.2916C26.943 33.4188 32.2063 33.4297 37.4368 33.8046C42.9067 34.1965 48.3898 34.4781 53.8463 35.009C59.4147 35.5532 64.9836 36.0764 70.5423 36.7063C81.3772 37.9368 92.2116 39.1539 103.051 40.3253C113.817 41.4911 124.588 42.6112 135.372 43.6077C140.723 44.1008 146.1 44.3792 151.467 44.7105C156.738 45.0395 162.018 45.2176 167.307 45.3389C168.47 45.3662 169.64 45.304 170.806 45.2817C171.958 45.258 173.11 45.2631 174.266 45.1974C177.233 45.0278 180.199 44.8253 183.17 44.5677C188.346 44.1119 193.537 43.3309 198.702 43.0394C204.113 42.7348 209.498 42.8005 214.898 42.6544C217.335 42.5898 219.794 42.4487 222.253 42.0056C225.064 41.5045 227.867 40.8373 230.689 39.9354C233.415 39.0621 236.143 38.1583 238.87 37.3062C240.178 36.8967 241.489 36.5354 242.793 36.2812C244.27 35.9928 245.735 35.6916 247.215 35.192C247.927 34.95 248.258 33.0513 248.384 31.822C248.459 31.122 248.476 30.4372 248.437 29.7677C248.395 29.2037 248.276 28.2973 247.926 28.2863C245.357 28.2045 242.789 28.1248 240.213 28.1155C237.614 28.1038 235.021 27.9946 232.438 27.8057C227.423 27.4337 222.45 26.5545 217.499 25.6027C218.376 25.4486 219.252 25.2946 220.128 25.1386C223.276 24.578 226.439 23.792 229.574 23.5185C231.242 23.3709 232.91 23.2772 234.583 23.0398C235.431 22.9213 236.275 22.7698 237.129 22.5076C238.046 22.2251 238.964 21.8042 239.88 21.3831C240.164 21.3488 240.403 21.0773 240.6 20.5763C240.93 19.8641 241.148 18.8866 241.29 17.9435C242.222 17.4682 242.678 14.7651 242.846 13.1305C242.955 12.1187 242.981 11.1271 242.922 10.1576C242.857 9.30277 242.691 8.08179 242.183 8.01801C239.535 7.68196 236.923 7.03048 234.276 6.68871C233.967 6.65123 233.657 6.61539 233.345 6.58334C231.061 6.34822 228.759 6.32479 226.451 6.34875C221.309 6.40219 216.154 6.56972 210.997 6.82352C208.599 6.93831 206.199 7.12007 203.805 7.17949C200.878 7.24939 197.966 7.23241 195.05 7.17264C190.172 7.07051 185.31 6.72588 180.45 6.41415C174.875 6.06154 169.299 5.79721 163.697 5.77636C158.508 5.75765 153.305 5.90877 148.106 6.02936C142.884 6.14582 137.665 6.25857 132.442 6.38454C127.09 6.51254 121.753 6.46699 116.415 6.42145C113.713 6.40107 111.026 6.19953 108.333 6.08581C105.785 5.97734 103.244 5.75624 100.701 5.57337C95.6958 5.21397 90.6974 4.79566 85.6968 4.39058C75.6104 3.56975 65.5132 2.8805 55.4136 2.19677C49.8649 1.82182 44.3158 1.46799 38.7646 1.11778C35.933 0.939802 33.088 0.883522 30.252 0.766625C27.827 0.665105 25.3825 0.761584 22.9466 0.774333C20.3537 0.788233 17.7579 0.830679 15.1614 0.87883C13.6179 0.908419 12.0719 0.943533 10.5265 0.972939C9.85573 0.988515 9.18355 1.0001 8.51098 1.01549C7.89951 1.02756 7.28498 1.06046 6.67205 1.09545C6.23523 1.11973 5.79912 1.20753 5.35906 1.31609C4.87097 1.43316 4.35679 1.83024 3.87128 2.1072C3.55421 2.53611 3.30625 3.09521 3.12951 3.79049C2.8823 4.70352 2.7095 5.65113 2.61363 6.63551C2.50679 7.62068 2.48293 8.58362 2.53899 9.52787C2.58549 9.8865 2.632 10.2451 2.6787 10.6019C2.77583 11.1734 2.96872 11.5106 3.25776 11.6096C3.75012 11.9795 4.23481 12.3448 4.75376 12.5886C5.0551 12.5503 5.31223 12.2633 5.52265 11.7254C5.5984 11.562 5.66815 11.3865 5.7326 11.2008C6.0159 11.2146 6.29833 11.2456 6.58096 11.2747C6.85102 11.3025 7.12238 11.3266 7.39471 11.3411C8.00777 11.3754 8.61942 11.4056 9.23178 11.4379C10.8091 11.5214 12.3865 11.603 13.9638 11.6865C15.6729 11.7758 17.3798 11.8861 19.0856 11.9983C18.9064 12.0125 18.7282 12.0268 18.5494 12.0373C14.4652 12.2862 10.3833 12.5391 6.29315 12.8816C5.6268 12.9688 5.06371 13.6032 4.5985 14.7841C3.94731 16.1864 3.48073 18.0326 3.15154 19.9007C2.44769 19.8148 1.74333 19.725 1.03928 19.641C0.547487 19.5826 0.263147 21.3938 0.19107 22.0941C0.117818 22.8058 0.0310014 24.6007 0.525098 24.6631C1.19934 24.746 1.87331 24.8403 2.54696 24.9289C2.44252 26.5162 2.43402 28.0788 2.52575 29.6191C2.62787 30.4065 2.72998 31.194 2.83229 31.9795C3.04629 33.2304 3.46925 33.9662 4.10388 34.1873C7.97351 33.8645 11.8357 33.6312 15.699 33.4057Z"
                  fill="currentColor"
                ></path>
              </svg>
              with the tool
            </h1>
            <div className="flex items-center justify-center lg:justify-start  gap-5">
              <div
                className={`arrow-container p-3 border rounded-full border-[#448C74] hover:bg-[#448C74] cursor-pointer hover:text-white duration-300`}
                onClick={handlePrevious}
              >
                <FaArrowLeft className="arrow text-[#448C74]" />
              </div>
              <p className="dark:text-slate-300"> {currentPage}/2</p>
              <div
                className={`arrow-container p-3 border rounded-full border-[#448C74] hover:bg-[#448C74] cursor-pointer hover:text-white duration-300`}
                onClick={handleNext}
              >
                <FaArrowRight className="arrow text-[#448C74]" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-20 items-center lg:items-start lg:justify-center mt-20 md:mt-0">
          {reviewsToDisplay.map((review, index) => (
            <div
              key={review.id}
              className={`flex items-center gap-5 review-item ${
                transitioning ? "fade-out" : "fade-in"
              } ${
                currentPage === 1
                  ? index === 0 || index === 2
                    ? " ml-0 md:ml-20"
                    : ""
                  : index === 1
                  ? "ml-0 md:ml-20"
                  : ""
              }`}
            >
              <Image
                src={review.avatar}
                className="rounded-full w-20 h-20"
                alt={review.name}
              />
              <div className="flex flex-col gap-5 bg-slate-100 dark:bg-[#191C20] rounded-2xl px-5 py-5">
                <p className="max-w-[415px] text-[#576071] dark:text-slate-400 text-xl">
                  &quot;{review.review}&quot;
                </p>
                <p>
                  <strong className="dark:text-white text-xl">
                    {review.name}
                  </strong>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
