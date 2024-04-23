import React from "react";
import iconListSrc from "../../../assets/images/icon-list.svg";

export default function SuccessPage() {
  return (
    <div className="md:w-[500px] md:space-y-10 flex flex-col max-md:justify-between  bg-white md:rounded-2xl md:p-6 p-6  max-md:h-full pt-32 ">
      <div className="space-y-5">
        <img src={iconListSrc} className="w-12" />
        <h2 className="font-bold text-3xl text-[#424769]">
          Thanks for Subscribing!
        </h2>
        <p className="">
          A confirmation email has been sent to{" "}
          <span className="font-bold text-[#424769]">prrfecttzy@gmail.com</span>
          . Please open it and click the button inside to confirm your
          subscription.
        </p>
      </div>

      <button className="p-2 bg-[#424769] md:bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded w-full text-center">
        Dimiss Message
      </button>
    </div>
  );
}
