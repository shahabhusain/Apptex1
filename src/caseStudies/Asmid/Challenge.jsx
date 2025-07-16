import React from "react";
const Challenge = () => {
  return (
    <div className=" md:mx-24 mt-32 mx-4">
      <h1 className=" text-[#1D67D5] md:text-[42px] text-[22px] font-bold">
        Challenges <span className=" text-black font-[500]">We Face</span>
      </h1>
      <p className=" text-[#606060] font-[500] md:text-[17px] text-[14px] pt-5">
      The evolving terrain of app challenges demands our expertise in handling security, performance, and user experience intricacies, crafting adaptive solutions that redefine digital excellence.
      </p>

      <div className=" md:flex block justify-between">
        <div className=" flex flex-col gap-5 pt-4 ">
          <div className=" flex gap-4">
            <h1 className=" text-[#1D67D5] text-[30px] font-medium">1</h1>
            <div>
              <h2 className=" text-[#1D67D5] text-[30px] font-medium">
              Integration of Flutter and React.js
              </h2>
              <p className=" text-[#606060] text-[17px] font-[500]">
              · Combining Flutter for the mobile app and React.js for the web admin posed integration challenges.
              </p>
            </div>
          </div>

          <div className=" flex gap-4">
            <h1 className=" text-[#1D67D5] text-[30px] font-medium">2</h1>
            <div>
              <h2 className=" text-[#1D67D5] text-[30px] font-medium">
              Firebase Cloud Function Integration
              </h2>
              <p className=" text-[#606060] text-[17px] font-[500]">
              · Implementing Firebase Cloud Functions for reminder notifications required careful configuration.
              </p>
            </div>
          </div>

          <div className=" flex gap-4">
            <h1 className=" text-[#1D67D5] text-[30px] font-medium">3</h1>
            <div>
              <h2 className=" text-[#1D67D5] text-[30px] font-medium">
              Subscription-based Chat System
              </h2>
              <p className=" text-[#606060] text-[17px] font-[500]">
              · Developing a secure and seamless subscription-based chat system between users and admins.
              </p>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Challenge;
