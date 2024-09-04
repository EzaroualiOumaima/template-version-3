import React from "react";
import Image from "next/image";
import google from "../../../public/assests/google.png"
import zoom from "../../../public/assests/Zoom-icon.png"
import trello from "../../../public/assests/trello1.png"
import gmail from "../../../public/assests/Gmail_Icon.png"
import dropbox from "../../../public/assests/Dropbox1.png"
import emailchip from "../../../public/assests/emailchip.png"
import slack from "../../../public/assests/Slack2.png"
import evernote from "../../../public/assests/evernote1png.png"
const Tools = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-7 w-full min-h-screen pt-28  pb-16 overflow-hidden dark:bg-[#121519] bg-[#F6F9FC]">
      <h1 className="font-bold text-3xl lg:text-4xl tracking-wide text-center leading-10 text-[#121519] dark:text-white">
        Integrate your favorite tools to complete <br /> your workflow
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full px-7 lg:px-32 lg:py-9">
        <div className="flex flex-col justify-start items-start gap-7 bg-white dark:bg-[#191C20] rounded-3xl px-6 py-7">
          <Image src={google} className="w-16 h-16" alt="google" />
          <p className="text-[16px] leading-7 text-[#576071] text-start">
          Lorem magnis pretium sed curabitur nunc facilisi nunc cursus sagittis volutpat.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-7 bg-white dark:bg-[#191C20] rounded-3xl px-6 py-7">
          <Image src={zoom} className="w-16 h-16" alt="google" />
          <p className="text-[16px] leading-7 text-[#576071] text-start">
            In eget a mauris quis. Tortor dui tempus quis integer est sit
            natoque placerat dolor.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-7 bg-white dark:bg-[#191C20] rounded-3xl px-6 py-7">
          <Image src={slack} className="w-16 h-16" alt="google" />
          <p className="text-[16px] leading-7 text-[#576071] text-start">
          Donec blandit nulla elementum eu. Est dui nibh eget amet curabitur nunc.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-7 bg-white dark:bg-[#191C20] rounded-3xl px-6 py-7">
          <Image src={gmail} className="w-16 h-16" alt="google" />
          <p className="text-[16px] leading-7 text-[#576071] text-start">
          Rutrum interdum tortor, sed at nulla. A cursus bibendum elit purus cras praesent.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-7 bg-white dark:bg-[#191C20] rounded-3xl px-6 py-7">
          <Image src={trello} className="w-16 h-16" alt="google" />
          <p className="text-[16px] leading-7 text-[#576071] text-start">
          Congue pellentesque amet, viverra curabitur quam diam scelerisque fermentum urna.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-7 bg-white dark:bg-[#191C20] rounded-3xl px-6 py-7">
          <Image src={emailchip} className="w-16 h-16" alt="google" />
          <p className="text-[16px] leading-7 text-[#576071] text-start">
          Turpis fermentum, volutpat ultrices sed ultrices proin risus bibendum elit purus.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-7 bg-white dark:bg-[#191C20] rounded-3xl px-6 py-7">
          <Image src={dropbox} className="w-16 h-16" alt="google" />
          <p className="text-[16px] leading-7 text-[#576071] text-start">
          Ut in turpis consequat odio diam lectus elementum. Est faucibus blandit platea.          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-7 bg-white dark:bg-[#191C20] rounded-3xl px-6 py-7">
          <Image src={evernote} className="w-16 h-16" alt="google" />
          <p className="text-[16px] leading-7 text-[#576071] text-start">
          Arcu, lorem facilisis nunc tellus, molestie urna nam mi, ullamcorper tempus quis.          </p>
        </div>

      
      </div>
    </section>
  );
};

export default Tools;
