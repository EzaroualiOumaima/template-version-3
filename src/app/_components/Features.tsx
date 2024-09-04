import React from "react";

const Features = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 w-full min-h-screen pt-10 lg:pt-48 pb-36  bg-white dark:bg-gray-950 overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-5 px-2 lg:px-0">
        <h1 className="text-[28px] md:text-[34px] dark:text-white lg:text-[40px] tracking-wide font-semibold lg:font-bold text-center">
          What do you get with our tool?
        </h1>
        <p className=" text-lg md:text-xl dark:text-slate-400 leading-9 text-[#576071] text-center">
          Make sure all your tasks are organized so you can set <br />
          the priorities and focus on important.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  lg:gap-14 md:px-6 lg:px-36    ">
        <div className="flex flex-col justify-center items-center gap-2 lg:px-0 lg:gap-3    ">
          <svg
            className="inline-block mb-3 md:mb-4"
            width="76"
            height="75"
            viewBox="0 0 76 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="text-yellow-300"
              d="M38.0625 6.25C19.9063 6.25 6.75 21.0625 6.75 37.5C6.75 42.75 8.28125 48.1562 10.9688 53.0938C11.4688 53.9062 11.5312 54.9375 11.1875 55.9062L9.09375 62.9062C8.625 64.5937 10.0625 65.8438 11.6562 65.3438L17.9688 63.4688C19.6875 62.9062 21.0312 63.625 22.6281 64.5938C27.1906 67.2812 32.875 68.6562 38 68.6562C53.5 68.6562 69.25 56.6875 69.25 37.4062C69.25 20.7812 55.8125 6.25 38.0625 6.25Z"
              fill="currentColor"
            ></path>
            <path
              className="text-[#448C74]"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M37.9411 41.5306C35.7224 41.4993 33.9411 39.7181 33.9411 37.4993C33.9411 35.3118 35.7536 33.4993 37.9411 33.5305C40.1599 33.5305 41.9411 35.3118 41.9411 37.5306C41.9411 39.7181 40.1599 41.5306 37.9411 41.5306ZM23.5312 41.5303C21.3438 41.5303 19.5312 39.7178 19.5312 37.5303C19.5312 35.3115 21.3125 33.5303 23.5312 33.5303C25.75 33.5303 27.5312 35.3115 27.5312 37.5303C27.5312 39.7178 25.75 41.499 23.5312 41.5303ZM48.3458 37.5303C48.3458 39.7178 50.1271 41.5303 52.3458 41.5303C54.5646 41.5303 56.3458 39.7178 56.3458 37.5303C56.3458 35.3115 54.5646 33.5303 52.3458 33.5303C50.1271 33.5303 48.3458 35.3115 48.3458 37.5303Z"
              fill="currentColor"
            ></path>
          </svg>
          <h3 className=" text-[20px] lg:text-2xl dark:text-white font-semibold text-[#121519]">
            Comments on tasks
          </h3>
          <p className="leading-7 text-[16px] text-[#576071] dark:text-slate-300 text-center">
            Id mollis consectetur congue egestas egestas suspendisse blandit in
            the justo eget maximus accumsan lorem ligula malesuada.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 lg:gap-3">
          <svg
            className="inline-block mb-3 md:mb-4"
            width="76"
            height="75"
            viewBox="0 0 76 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="text-[#448C74]"
              d="M32.2274 17.3606C32.3865 17.6845 32.4916 18.0315 32.5387 18.3881L33.4088 31.3253L33.8407 37.8279C33.8452 38.4966 33.9501 39.161 34.1521 39.7997C34.6737 41.0388 35.9286 41.8263 37.2939 41.7714L58.0979 40.4106C58.9988 40.3958 59.8688 40.7327 60.5164 41.3473C61.0561 41.8594 61.4045 42.5294 61.5143 43.25L61.5511 43.6876C60.6902 55.6086 51.9349 65.5516 40.0386 68.1183C28.1424 70.685 15.9433 65.263 10.0647 54.7961C8.36996 51.7552 7.31141 48.4128 6.95119 44.9651C6.80071 43.9445 6.73445 42.9136 6.75306 41.8825C6.73448 29.1018 15.8358 18.0525 28.576 15.3888C30.1094 15.1501 31.6126 15.9618 32.2274 17.3606Z"
              fill="currentColor"
            ></path>
            <path
              className="text-yellow-300"
              d="M40.7178 6.25268C54.9674 6.6152 66.9438 16.862 69.249 30.6635L69.227 30.7654L69.1641 30.9135L69.1729 31.32C69.1402 31.8586 68.9323 32.3768 68.5739 32.7954C68.2006 33.2314 67.6906 33.5283 67.129 33.6436L66.7865 33.6906L42.7841 35.2458C41.9857 35.3245 41.1907 35.0671 40.597 34.5375C40.1022 34.0962 39.7859 33.5004 39.6965 32.8585L38.0855 8.89094C38.0574 8.8099 38.0574 8.72204 38.0855 8.641C38.1075 7.98035 38.3983 7.35587 38.8929 6.90709C39.3876 6.45831 40.0448 6.22262 40.7178 6.25268Z"
              fill="currentColor"
            ></path>
          </svg>
          <h2 className="  dark:text-white text-2xl font-semibold text-[#121519]">
            Tasks analytics
          </h2>
          <p className="leading-7 text-[16px] text-[#576071] dark:text-slate-300 text-center">
            Non imperdiet facilisis nulla tellus morbi scelerisque eget
            adipiscing out vulputate convallis justo sed tellus vehicula.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 lg:gap-3">
          <svg
            className="inline-block mb-3 md:mb-4"
            width="76"
            height="75"
            viewBox="0 0 76 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="text-yellow-300"
              d="M41.0509 9.73004L48.0087 23.7122C48.5213 24.7252 49.4996 25.4287 50.628 25.585L66.2564 27.8611C67.1691 27.9893 67.9974 28.4708 68.5569 29.2056C69.1101 29.9309 69.3476 30.8502 69.2132 31.7537C69.1038 32.5041 68.7506 33.1982 68.2099 33.7297L56.8856 44.7072C56.0573 45.4732 55.6822 46.6082 55.8823 47.7181L58.6704 63.151C58.9673 65.0144 57.7327 66.7716 55.8823 67.1249C55.1196 67.2468 54.3382 67.1186 53.6505 66.7684L39.71 59.5054C38.6754 58.9832 37.4533 58.9832 36.4187 59.5054L22.4782 66.7684C20.7653 67.6783 18.643 67.0592 17.6897 65.3708C17.3365 64.6986 17.2115 63.9326 17.3271 63.1854L20.1152 47.7494C20.3152 46.6426 19.937 45.5014 19.1119 44.7353L7.78755 33.7641C6.44039 32.4635 6.39975 30.3218 7.69691 28.9742C7.72504 28.9461 7.7563 28.9148 7.78755 28.8835C8.32517 28.3364 9.03157 27.9893 9.79423 27.8987L25.4226 25.6194C26.5478 25.4599 27.5262 24.7627 28.0419 23.7434L34.7496 9.73004C35.3466 8.52943 36.5844 7.78218 37.9284 7.81344H38.3472C39.5131 7.95414 40.529 8.67638 41.0509 9.73004Z"
              fill="currentColor"
            ></path>
            <path
              className="text-[#448C74]"
              d="M37.975 59.116C37.3697 59.1348 36.78 59.2974 36.2496 59.5883L22.3772 66.8348C20.6799 67.6449 18.6486 67.0162 17.697 65.393C17.3444 64.73 17.2165 63.97 17.335 63.2256L20.1058 47.8224C20.293 46.7027 19.9185 45.5643 19.1042 44.7761L7.7748 33.8077C6.43001 32.491 6.40504 30.3299 7.72176 28.9819C7.74048 28.9631 7.75608 28.9475 7.7748 28.9319C8.31147 28.4002 9.00415 28.0499 9.74988 27.9404L25.3913 25.6385C26.524 25.4947 27.5068 24.7878 28.0061 23.762L34.8049 9.57224C35.4508 8.42756 36.6895 7.74575 38 7.81768C37.975 8.74657 37.975 58.4842 37.975 59.116Z"
              fill="currentColor"
            ></path>
          </svg>
          <h3 className=" dark:text-white text-2xl font-semibold text-[#121519]">
            Light / dark mode
          </h3>
          <p className="leading-7 text-[16px] text-[#576071] dark:text-slate-300 text-center">
            A elementum, imperdiet enim, pretium etiam facilisi in aenean quam
            inrean mauris ultrices interdum congue ut, dictum et tortor.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 lg:gap-3">
          <svg
            className="inline-block mb-3 md:mb-4"
            width="76"
            height="75"
            viewBox="0 0 76 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="text-[#448C74]"
              d="M62.2797 36.3917C59.9969 33.7259 58.9596 31.4158 58.9596 27.4911V26.1567C58.9596 21.0423 57.7825 17.7471 55.2233 14.4519C51.2789 9.33435 44.6387 6.25 38.1382 6.25H37.8618C31.498 6.25 25.0658 9.19272 21.0531 14.1025C18.3542 17.4638 17.0404 20.9007 17.0404 26.1567V27.4911C17.0404 31.4158 16.0714 33.7259 13.7203 36.3917C11.9903 38.3556 11.4375 40.8797 11.4375 43.6116C11.4375 46.3466 12.3351 48.9368 14.1365 51.0423C16.4876 53.5665 19.8077 55.1779 23.1992 55.458C28.1095 56.0182 33.0198 56.2291 38.0016 56.2291C42.9802 56.2291 47.8905 55.8766 52.8039 55.458C56.1923 55.1779 59.5124 53.5665 61.8635 51.0423C63.6618 48.9368 64.5625 46.3466 64.5625 43.6116C64.5625 40.8797 64.0097 38.3556 62.2797 36.3917Z"
              fill="currentColor"
            ></path>
            <path
              className="text-yellow-300"
              d="M44.277 60.0886C42.7148 59.755 33.1954 59.755 31.6332 60.0886C30.2977 60.397 28.8535 61.1146 28.8535 62.6883C28.9312 64.1895 29.8101 65.5145 31.0276 66.3549L31.0245 66.358C32.5991 67.5855 34.4471 68.366 36.382 68.6461C37.4131 68.7877 38.4629 68.7814 39.5313 68.6461C41.4631 68.366 43.3111 67.5855 44.8857 66.358L44.8826 66.3549C46.1001 65.5145 46.9791 64.1895 47.0567 62.6883C47.0567 61.1146 45.6125 60.397 44.277 60.0886Z"
              fill="currentColor"
            ></path>
          </svg>
          <h3 className=" dark:text-white text-2xl  font-semibold text-[#121519]">
            Notifications
          </h3>
          <p className="leading-7 text-[16px] text-[#576071] dark:text-slate-300 text-center">
            Diam, suspendisse velit cras ac. Lobortis diam volutpat, eget
            pellentesque viverra inter vivamus id porta fermentum turpis.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 lg:gap-3">
          <svg
            className="inline-block mb-3 md:mb-4"
            width="76"
            height="75"
            viewBox="0 0 76 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="text-yellow-300"
              d="M59.2775 28.1906C57.8666 28.1906 55.9976 28.1594 53.6708 28.1594C47.9959 28.1594 43.3298 23.4625 43.3298 17.7344V7.68437C43.3298 6.89375 42.6986 6.25 41.9158 6.25H25.3863C17.6724 6.25 11.4375 12.5812 11.4375 20.3406V54.0125C11.4375 62.1531 17.9694 68.75 26.0299 68.75H50.6446C58.3307 68.75 64.5625 62.4594 64.5625 54.6937V29.5969C64.5625 28.8031 63.9344 28.1625 63.1484 28.1656C61.8272 28.175 60.2429 28.1906 59.2775 28.1906Z"
              fill="currentColor"
            ></path>
            <path
              className="text-[#448C74]"
              d="M50.7639 8.02291C49.8295 7.05103 48.1982 7.71978 48.1982 9.06666V17.3073C48.1982 20.7635 51.0451 23.6073 54.5014 23.6073C56.6795 23.6323 59.7045 23.6385 62.2732 23.6323C63.5889 23.6292 64.2576 22.0573 63.3451 21.1073C60.0482 17.6792 54.1451 11.5354 50.7639 8.02291Z"
              fill="currentColor"
            ></path>
            <path
              className="text-[#448C74]"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.5447 35.5859H39.1229C40.4072 35.5859 41.451 34.5452 41.451 33.2609C41.451 31.9765 40.4072 30.9327 39.1229 30.9327H28.5447C27.2604 30.9327 26.2197 31.9765 26.2197 33.2609C26.2197 34.5452 27.2604 35.5859 28.5447 35.5859ZM28.5448 51.1926H45.5573C46.8417 51.1926 47.8854 50.152 47.8854 48.8676C47.8854 47.5833 46.8417 46.5395 45.5573 46.5395H28.5448C27.2605 46.5395 26.2198 47.5833 26.2198 48.8676C26.2198 50.152 27.2605 51.1926 28.5448 51.1926Z"
              fill="currentColor"
            ></path>
          </svg>
          <h3 className=" dark:text-white text-2xl font-semibold text-[#121519]">
            Sections &amp; subtasks
          </h3>
          <p className="leading-7 text-[16px] dark:text-slate-300 text-[#576071] text-center">
            Mi feugiat hac id in. Sit elit placerat lacus nibh lorem ridiculus
            lectus porttitor tincidunt sapien luctus tristique quam aenean
            accumsan.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 lg:gap-3">
          <svg
            className="inline-block mb-3 md:mb-4"
            width="76"
            height="75"
            viewBox="0 0 76 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="text-yellow-300"
              d="M38.2703 68.75C37.8833 68.75 37.4964 68.6611 37.1471 68.4803L25.8937 62.655C22.7005 61.0003 20.2025 59.1433 18.252 56.9799C13.9828 52.2485 11.6075 46.175 11.5698 39.8747L11.4376 19.1383C11.4219 16.7451 12.9666 14.597 15.2758 13.788L35.9391 6.58371C37.166 6.14551 38.5346 6.13938 39.7835 6.56226L60.5255 13.5214C62.8472 14.2967 64.4171 16.4294 64.4297 18.8196L64.5618 39.5713C64.6027 45.8624 62.3093 51.9605 58.1061 56.7439C56.1776 58.938 53.7017 60.8226 50.5399 62.5079L39.3871 68.465C39.0411 68.6519 38.6573 68.7469 38.2703 68.75Z"
              fill="currentColor"
            ></path>
            <path
              className="text-[#448C74]"
              d="M35.8712 44.753C35.2672 44.756 34.6632 44.5385 34.1975 44.0911L28.2075 38.3301C27.2825 37.4353 27.2731 35.9828 28.1886 35.0819C29.1041 34.1779 30.5985 34.1687 31.5265 35.0605L35.8366 39.2035L46.3602 28.8276C47.2788 27.9236 48.7732 27.9144 49.6981 28.8061C50.6262 29.7009 50.6357 31.1565 49.7202 32.0543L37.5355 44.0696C37.0762 44.5231 36.4753 44.7499 35.8712 44.753Z"
              fill="currentColor"
            ></path>
          </svg>
          <h3 className=" dark:text-white text-2xl font-semibold text-[#121519]">
            Data security
          </h3>
          <p className="leading-7 text-[16px] dark:text-slate-300 text-[#576071] text-center">
            Aliquam malesuada neque eget elit nulla vestibulum nunc cras. Neque,
            morbi non arcu sapien luctus ullamcorper lectus efficitur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
