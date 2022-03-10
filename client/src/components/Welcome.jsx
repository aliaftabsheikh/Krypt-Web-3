import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from "./";

const Welcome = () => {

  const connectWallet = ()=>{

  }

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 p-12 px-4 ">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br/> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the Crypto World. Buy and sell cryptocurrencies easily on krypto.
          </p>
          <button className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]" type="button" onClick={connectWallet}>
            <p className="text-white text-base font-semibold">Connect Wallet</p>
            </button>
          </div>
      </div>
    </div>
  );
};

export default Welcome;
