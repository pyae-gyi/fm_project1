import React from "react";
import iconListSrc from "../../../assets/images/icon-list.svg";
import { useNavigate } from "react-router-dom";

function SubscribePage() {
  const navigate = useNavigate();
  return (
    <div className="p-2 flex flex-col h-full  md:h-3/5 md:items-center overflow-hidden md:max-w-3xl md:flex-row-reverse md:gap-5 bg-white md:rounded-2xl">
      <div className="md:w-1/2 md:self-stretch max-md:flex-[40]">
        <img
          src="https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/jake-paul-mike-tyson-65e9f44a67446.png?crop=1.00xw:1.00xh;0,0&resize=900:*"
          className="h-full object-cover  rounded-2xl"
        />
      </div>
      <div className="px-4 py-6 space-y-5 md:w-1/2 max-md:flex-[60]">
        <h2 className="font-bold text-3xl text-[#424769]">Stay Updated!</h2>
        <p>Join 6000+ product managers receiving monthly updates on:</p>
        <div className="text-[15px] space-y-2">
          <div className="flex gap-2">
            <img src={iconListSrc} />
            <p>Product discovery and building what matters</p>
          </div>
          <div className="flex gap-2">
            <img src={iconListSrc} />
            <p>Measuring to ensure updates are a success</p>
          </div>
          <div className="flex gap-2">
            <img src={iconListSrc} />
            <p>And much more!</p>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold  text-[13px]" htmlFor="emailInput">
            Email Address *
          </label>
          <input
            type="email"
            id="emailInput"
            placeholder="Type your email"
            className="focus:outline-none border rounded md:p-3 max-md:p-4"
          />
        </div>
        <button
          className="p-2 bg-[#424769] text-white rounded w-full text-center"
          onClick={() => navigate("/success")}
        >
          Subscribe to monthly newsletter
        </button>
      </div>
    </div>
  );
}

export default SubscribePage;
