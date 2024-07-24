"use client";
import React, { useState, useEffect } from "react";
import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaBitcoin } from "react-icons/fa";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";
import logo from "/public/logo192.png";
import BSC from "/public/images/chainlogo/bsc.png";
import PLG from "/public/images/chainlogo/plg.png";
import ARB from "/public/images/chainlogo/arb.png";
import BASE from "/public/images/chainlogo/base.png";
import BLAST from "/public/images/chainlogo/blast.png";
import LINES from "/public/images/chainlogo/linea.png";
import OP from "/public/images/chainlogo/op.png";
import ZK from "/public/images/chainlogo/zk.png";
import USDC from "/public/images/chainlogo/USDC.webp";
import USDT from "/public/images/chainlogo/usdt.webp";
import UK from "/public/images/otherimages/uk_flag.png";
import EURO from "/public/images/otherimages/euro.jpg";
import US from "/public/images/otherimages/us_flag.png";
import Link from "next/link";
import Image from "next/image";
import { CustomConnect } from "./CustomConnect";
import { useAccount } from "wagmi";
import { config } from "../utils/config";
import { contractABI } from "../utils/abi.js";
import { readContract, simulateContract, writeContract } from "@wagmi/core";
import HowToBuy from "./HowToBuy";
import { motion } from "framer-motion";

export default function Presale() {
  const [tab, setTab] = useState("crypto");
  const { address, isConnected } = useAccount();

  const [time, setTime] = useState({
    days: 30,
    hours: 24,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime((prevTime) => {
        const totalSeconds =
          prevTime.days * 86400 +
          prevTime.hours * 3600 +
          prevTime.minutes * 60 +
          prevTime.seconds -
          1;
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        if (totalSeconds <= 0) {
          clearInterval(countdown);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const formatTime = (value) => value.toString().padStart(2, "0");

  const chain = [
    { value: "BSC", imgSrc: BSC },
    { value: "PLG", imgSrc: PLG },
    { value: "ARB", imgSrc: ARB },
    { value: "BASE", imgSrc: BASE },
    { value: "BLAST", imgSrc: BLAST },
    { value: "LINES", imgSrc: LINES },
    { value: "OP", imgSrc: OP },
    { value: "ZK", imgSrc: ZK },
  ];
  const [selectedChain, setSelectedChain] = useState(chain[0]);
  const [chainOpen, setChainOpen] = useState(false);

  const Currency = [
    { value: "BNB", imgSrc: BSC },
    { value: "USDC", imgSrc: USDC },
    { value: "USDT", imgSrc: USDT },
  ];
  const [CurrencyOpen, setCurrencyOpen] = useState(false);
  const [selectedCurrency, SetSelectedCurrency] = useState(Currency[0]);
  const [numberOfChain, setNumberOfChain] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Selected Currency value: ${selectedCurrency.value}`);
    console.log(`Number of Chains: ${numberOfChain}`);
    console.log(`Selected Chain value: ${selectedChain.value}`);
  };

  const country = [
    { value: "UK", imgSrc: UK },
    { value: "EURO", imgSrc: EURO },
    { value: "US", imgSrc: US },
  ];
  const [selectedCountry, SetSelectedCountry] = useState(country[0]);
  const [countryOpen, setCountryOpen] = useState(false);
  const [currencyAmount, setCurrencyAmount] = useState(0);

  const currencySCFn = {
    BNB: "nativeToToken",
    USDT: "usdtToToken",
    USDC: "usdtToToken",
  };

  const buySCFn = {
    BNB: "buyToken",
    USDT: "buyTokenUSDT",
    USDC: "buyTokenUSDC",
  };

  const BuyNow = async () => {
    const args = selectedCurrency !== "BNB" ? [] : [numberOfChain];
    const { request } = await simulateContract(config, {
      address: "0x54BC69D76B91c8E192832BAED212866938a73e26",
      abi: contractABI,
      functionName: buySCFn[selectedCurrency],
      account: address,
      args,
    });
    await writeContract(config, request);
  };

  const currencyAmountSC = async () => {
    const result = await readContract(config, {
      abi: contractABI,
      address: "0x54BC69D76B91c8E192832BAED212866938a73e26",
      functionName: currencySCFn[selectedCurrency],
      args: [numberOfChain],
    });
    setCurrencyAmount(result);
  };

  useEffect(() => {
    if (isConnected) {
      currencyAmountSC();
      console.log(currencyAmount);
    }
  }, [selectedCurrency, numberOfChain]);

  const [popover, setPopover] = useState(false);
  const togglehandler = () => {
    setPopover(!popover);
  };

  const [width, setWidth] = useState(0);
  const value = 89
  useEffect(() => {
    setWidth(value);
  }, [value]);

  return (
    <>
      <div className="relative grid grid-cols-12 gap-y-8 lg:gap-8">
        <div className="col-span-12 xl:col-span-6 w-full ">
          <h1 className="text-3xl md:text-5xl  xl:text-6xl text-center xl:text-start  text-white font-semibold mb-12 lg:mb-16 lg:mt-7">
            Real-World Asset Tokenized ecosystem
          </h1>
          <div className="flex justify-center w-full  mb-5 md:mb-7 lg:mb-10">
            <div className="flex flex-col px-3 md:px-6 py-4 border-2 rounded-lg border-[#FFFFFF1A] relative">
              <h1 className="text-center mb-4 text-lg text-white">
                Before Price Increase
              </h1>
              <div className="flex items-center">
                <TimeBlock label="Days" value={formatTime(time.days)} />
                <h3 className="font-semibold  text-2xl px-2 lg:px-3">:</h3>
                <TimeBlock label="Hours" value={formatTime(time.hours)} />
                <h3 className=" font-semibold text-2xl px-2 md:px-3">:</h3>
                <TimeBlock label="Minutes" value={formatTime(time.minutes)} />
                <h3 className=" font-semibold text-2xl px-2 md:px-3">:</h3>
                <TimeBlock label="Seconds" value={formatTime(time.seconds)} />
              </div>

              <div className="absolute text-center -top-7 -right-2 md:-top-7 md:-right-7 bg-[#0f0f11] px-3 py-1 rounded-lg">
                <p className="text-xs md:text-sm">Next Price </p>
                <h1 className="text-[#cc3cd9] text-base md:text-lg font-semibold">
                  $0.0321
                </h1>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center xl:justify-start space-x-3 md:space-x-5 ">
            <Link
              href="https://t.me/rebelprotocol"
              className="hover:text-[#cc3cd9] text-2xl md:text-3xl"
              target="_blank"
            >
              <FaTelegram />
            </Link>
            <Link
              href="https://x.com/rebelprotocol"
              className="hover:text-[#cc3cd9] text-2xl md:text-3xl"
              target="_blank"
            >
              <FaSquareXTwitter />
            </Link>
          </div>
        </div>

        <div className="col-span-12  xl:col-span-6  shadow-lg w-full px-0 sm:px-20 md:px-32 lg:px-20 xl:px-20 ">
          <div className="bg-[#0f0f11] rounded-lg  py-4 px-4 md:px-5">
            <h1 className="text-center text-xl md:text-2xl font-normal mb-8">
              Buy <span className="font-bold text-[#cc3cd9]">Rebel</span> Now!
            </h1>
            <p className="text-center text-sm md:text-base font-medium">
              USD Raise:{" "}
              <span className="font-extrabold"> $2,079,416 / $2,086,196 </span>
            </p>

            <div className=" my-1 flex flex-col items-center justify-center">
      <div className="relative w-full bg-[#acacac] h-5 rounded-lg overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-full bg-[#cc3cd9]"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 2 }}
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="text-white text-lg font-bold">{`${width}%`}</span>
        </div>
      </div>
    </div>

            {/* <div className=" h-1 w-full bg-[#cc3cd9] rounded-full" /> */}
            <h1 className="text-center text-sm md:text-base font-medium">
              1 REBEL = <span className="font-extrabold"> $0.03117 </span>{" "}
            </h1>

            <div className="flex justify-end mt-4">
              <div className="text-base  font-medium flex items-center gap-x-2 cursor-pointer">
                <span
                  className="hover:underline underline-offset-2 hover:text-[#cc3cd9] "
                  onClick={togglehandler}
                >
                  How To Buy{" "}
                </span>{" "}
                <span className="bg-[#cc3cd9] p-1 text-sm rounded text-white">
                  <FaQuestion />
                </span>
              </div>
            </div>
            {popover && <HowToBuy togglehandler={togglehandler} />}

            <div className="grid grid-cols-2 text-base md:text-lg font-medium mt-4">
              <button
                className={`flex items-center gap-2 justify-center py-2  border-b-2 ${
                  tab === "crypto"
                    ? "text-[#cc3cd9] border-[#cc3cd9]"
                    : "border-[#FFFFFF1A]"
                } `}
                onClick={() => setTab("crypto")}
              >
                <span className="text-xl">
                  <FaBitcoin />{" "}
                </span>{" "}
                Crypto
              </button>
              <button
                className={`flex items-center gap-2 justify-center py-2 border-b-2 ${
                  tab === "credit"
                    ? "text-[#cc3cd9]  border-[#cc3cd9]"
                    : "border-[#FFFFFF1A]"
                } `}
                onClick={() => setTab("credit")}
              >
                <span className="text-xl">
                  <BsFillCreditCard2FrontFill />{" "}
                </span>{" "}
                Credit Card
              </button>
            </div>

            <div className="mt-6">
              {tab === "crypto" && (
                <form onSubmit={handleSubmit}>
                  <div className="relative inline-block w-full">
                    <div
                      className={`block w-full p-3 md:p-4 text-base flex items-center justify-between border-2 rounded-lg bg-black  ${
                        chainOpen === false
                          ? "border-[#FFFFFF1A]"
                          : "border-[#cc3cd9]"
                      }`}
                      onClick={() => setChainOpen(!chainOpen)}
                    >
                      <div className="flex items-center">
                        {selectedChain.imgSrc && (
                          <Image
                            src={selectedChain.imgSrc}
                            alt={selectedChain.value}
                            className="w-8 h-8 mr-2 rounded-full"
                            width={100}
                            height={100}
                            priority
                          />
                        )}
                        {selectedChain.value && (
                          <span>{selectedChain.value}</span>
                        )}
                      </div>
                      <span
                        className={`tezt-2xl ${
                          chainOpen === false ? "rotate-0" : "rotate-180"
                        }`}
                      >
                        <FaAngleDown />
                      </span>
                    </div>
                    <ul
                      className={`absolute z-10 w-full bg-black border-2 border-[#FFFFFF1A] rounded-lg mt-1 h-72 overflow-y-scroll ${
                        chainOpen === false ? "hidden" : "block"
                      }`}
                    >
                      {chain.map((item) => (
                        <li
                          key={item.value}
                          className="flex items-center py-2 px-3 border-b-2 border-b-[#FFFFFF1A]  hover:bg-gray-900 cursor-pointer "
                          onClick={() => {
                            setSelectedChain({
                              value: item.value,
                              imgSrc: item.imgSrc,
                            });
                            setChainOpen(false);
                          }}
                        >
                          <Image
                            src={item.imgSrc}
                            alt={item.value}
                            className="w-8 h-8 mr-4 rounded-full"
                            width={100}
                            height={100}
                            priority
                          />
                          {item.value}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative inline-block w-full mt-3 md:mt-4">
                    <div className="flex item-center text-base bg-black rounded-lg border-2 border-[#FFFFFF1A]">
                      <div
                        className={`w-fit p-3 md:p-4 flex items-center justify-between`}
                        onClick={() => setCurrencyOpen(!CurrencyOpen)}
                      >
                        {selectedCurrency.imgSrc && (
                          <Image
                            src={selectedCurrency.imgSrc}
                            alt={selectedCurrency.value}
                            className="w-8 h-8 mr-2 rounded-full"
                            width={100}
                            height={100}
                            priority
                          />
                        )}
                        <span
                          className={`text-2xl ${
                            CurrencyOpen === false ? "rotate-0" : "rotate-180"
                          }`}
                        >
                          <FaAngleDown />
                        </span>
                      </div>
                      <input
                        type="number"
                        name="numberOfChain"
                        className="p-3 md:p-4 w-full bg-black border-0 focus:outline-none focus:border-0"
                        value={numberOfChain}
                        onChange={(e) => setNumberOfChain(e.target.value)}
                      />
                    </div>
                    <ul
                      className={`absolute z-10 w-full bg-black border-2 border-[#FFFFFF1A] rounded-lg mt-1 overflow-y-scroll ${
                        CurrencyOpen === false ? "hidden" : "block"
                      }`}
                    >
                      {Currency.map((country) => (
                        <li
                          key={country.value}
                          className="flex items-center py-2 px-3 border-b-2 border-b-[#FFFFFF1A] hover:bg-gray-900 cursor-pointer"
                          onClick={() => {
                            SetSelectedCurrency({
                              value: country.value,
                              imgSrc: country.imgSrc,
                            });
                            setCurrencyOpen(false);
                          }}
                        >
                          <Image
                            src={country.imgSrc}
                            alt={country.value}
                            className="w-8 h-8 mr-4 rounded-full"
                            width={100}
                            height={100}
                            priority
                          />
                          {country.value}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center text-base mt-3 md:mt-4 p-3 md:p-4 bg-black rounded-lg border-2 border-[#FFFFFF1A]">
                    <Image
                      src={logo}
                      alt="logo"
                      className="w-8 h-8 rounded-full"
                      width={100}
                      height={100}
                      priority
                    />
                    <input
                      value={currencyAmount}
                      type="number"
                      name="pirce"
                      className=" bg-black  w-full ml-5  focus:outline-none focus:border-0"
                    />
                  </div>
                  <CustomConnect />

                  {isConnected && address && (
                    <button
                      onClick={BuyNow}
                      type="button"
                      className="mt-6 text-center w-full rounded-full bg-[#cc3cd9] py-3 text-white text-base md:text-lg  font-medium"
                    >
                      Buy Now
                    </button>
                  )}
                </form>
              )}

              {tab === "credit" && (
                <form onSubmit={BuyNow}>
                  <div className="relative inline-block w-full mt-3 md:mt-4">
                    <div className="flex item-center text-base bg-black rounded-lg border-2 border-[#FFFFFF1A]">
                      <div
                        className={`w-fit p-3 md:p-4 flex items-center justify-between`}
                        onClick={() => setCountryOpen(!countryOpen)}
                      >
                        {selectedCountry.imgSrc && (
                          <Image
                            src={selectedCountry.imgSrc}
                            alt={selectedCountry.value}
                            className="w-8 h-8 mr-2 rounded-full"
                            width={100}
                            height={100}
                            priority
                          />
                        )}
                        <span
                          className={`text-2xl ${
                            countryOpen === false ? "rotate-0" : "rotate-180"
                          }`}
                        >
                          <FaAngleDown />
                        </span>
                      </div>
                      <input
                        type="number"
                        name="numberOfChain"
                        className="p-3 md:p-4 w-full bg-black border-0 focus:outline-none focus:border-0"
                        value={numberOfChain}
                        onChange={(e) => setNumberOfChain(e.target.value)}
                      />
                    </div>
                    <ul
                      className={`absolute z-10 w-full bg-black border-2 border-[#FFFFFF1A] rounded-lg mt-1 overflow-y-scroll ${
                        CurrencyOpen === false ? "hidden" : "block"
                      }`}
                    >
                      {country.map((country) => (
                        <li
                          key={country.value}
                          className="flex items-center py-2 px-3 border-b-2 border-b-[#FFFFFF1A] hover:bg-gray-900 cursor-pointer"
                          onClick={() => {
                            SetSelectedCountry({
                              value: country.value,
                              imgSrc: country.imgSrc,
                            });
                            setCountryOpen(false);
                          }}
                        >
                          <Image
                            src={country.imgSrc}
                            alt={country.value}
                            className="w-8 h-8 mr-4 rounded-full"
                            width={100}
                            height={100}
                            priority
                          />
                          {country.value}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center text-base mt-3 md:mt-4 p-3 md:p-4 bg-black rounded-lg border-2 border-[#FFFFFF1A]">
                    <Image
                      src={logo}
                      alt="logo"
                      className="w-8 h-8 rounded-full"
                      width={100}
                      height={100}
                      priority
                    />
                    <input
                      type="number"
                      className=" bg-black  w-full ml-5  focus:outline-none focus:border-0"
                    />
                  </div>
                  <button className="mt-6 text-center w-full rounded-full bg-[#cc3cd9] py-3 text-white text-base md:text-lg  font-medium">
                    Buy Now
                  </button>
                </form>
              )}
            </div>

            <div className="mt-6 text-center w-full flex justify-center cursor-pointer  border-t-2 border-t-[#FFFFFF1A] py-3 text-sm md:text-base  font-normal">
            
              History of your transactions
            </div>
          </div>
          {/* <div className="bg-[#0f0f11] rounded-lg flex items-center  text-sm md:text-base gap-2 justify-center  py-4 mt-4">
            <span className="text-xl">
              <LuBarChart />
            </span>{" "}
            Round Details
          </div> */}
        </div>
      </div>
    </>
  );
}

const TimeBlock = ({ label, value }) => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center space-x-0.5 md:space-x-1">
        {value.split("").map((digit, index) => (
          <div key={index} className="p-2 lg:p-3 bg-[#cc3cd9] rounded-md">
            <div className="inset-0 flex items-center justify-center text-2xl md:text-3xl lg:text-5xl font-bold text-white">
              {digit}
            </div>
          </div>
        ))}
      </div>
      <span className="block mt-2 text-xs lg:text-sm font-medium">{label}</span>
    </div>
  );
};
