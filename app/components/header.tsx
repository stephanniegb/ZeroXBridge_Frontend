'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";

import HeroImg from "@/public/new-hero.svg";
import Mesh from "@/public/mesh.svg";
import RightArrow from "@/public/right-arrow.svg";
import Blur2 from "@/public/blur-2.svg";

interface StatItem {
  value: string;
  label: string;
  endValue: number;
}

const STATS_DATA: StatItem[] = [
  { value: "70M+", label: "Total Transactions", endValue: 70 },
  { value: "7K+", label: "Active Users", endValue: 7 },
  { value: "20M+", label: "Total earned", endValue: 20 },
  { value: "10M+", label: "Total Investments", endValue: 10 },
];

const Header = () => {
  const [counts, setCounts] = useState<number[]>(STATS_DATA.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animationDuration = 2000;
    const steps = 60;
    const interval = animationDuration / steps;

    const animations = STATS_DATA.map((stat, index) => {
      let currentStep = 0;

      return setInterval(() => {
        if (currentStep === steps) {
          clearInterval(animations[index]);
          return;
        }

        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = Math.min(
            Math.ceil((stat.endValue * currentStep) / steps),
            stat.endValue
          );
          return newCounts;
        });

        currentStep++;
      }, interval);
    });

    return () => animations.forEach((interval) => clearInterval(interval));
  }, [isVisible]);

  const renderStatItem = (stat: StatItem, index: number) => (
    <div key={index} className="flex gap-2 z-20">
      <Image
        src={RightArrow}
        alt="Right Arrow"
        className="w-4 h-4 mt-2"
        priority={false}
      />
      <div className="flex flex-col space-y-2">
        <div className="text-2xl font-[500] text-gray-400 font-manrope">
          {counts[index]}{stat.value.slice(-2)}
        </div>
        <div className="text-sm text-gray-400 font-roboto-serif">{stat.label}</div>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-black relative pb-[2em]">
      {/* Mesh Background */}
      <Image
        src={Mesh}
        alt="Background Mesh"
        className="absolute inset-0 w-full h-[47.63em] object-cover opacity-50"
        priority={true}
      />
      <div className="relative max-w-7xl 2xl:w-full overflow-hidden mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-8 pl-[1em]">
            <h1 className="lg:text-[48px] font-manrope xl:text-5xl text-2xl text-wrap w-[449px] lg:w-[679px] font-bold bg-gradient-to-r from-[#5D3EA8] via-[#9B6DFF] to-[#5D3EA8] bg-clip-text text-transparent pb-[7px]">
              Secure Cross-Chain Liquidity with Zero-Knowledge Proofs
            </h1>
            <div className='font-roboto-serif text-[17px] font-[400] relative'>
              <p className="text-gray-400 z-20 ">
                Unlock liquidity on Starknet using Ethereum collateral—no asset transfers,
              </p>
              <p className="text-gray-400 ">
                no wrapping, no centralized bridges.
              </p>
            </div>
            <button className="bg-[#4C327A] text-white lg:w-[12.5em] text-[16px] font-[700] py-3 px-8 rounded-full transition-all hover:bg-opacity-90 shadow-[0_4px_8px_rgba(194,151,255,0.25),0_-4px_4px_rgba(162,109,255,0.5)]">
              Launch App
            </button>
          </div>
          {/* Right Content - Hero Image */}
          <div className="absolute  right-0 top-0 w-[50%] h-full">
            <div className="flex-1 flex justify-center items-center relative">
              <Image
                src={HeroImg}
                alt="Hero Image"
                className="z-10"
                priority={true}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-8 pt-12 w-[80%] ml-[8em] mt-[3.5em]">
          {STATS_DATA.map(renderStatItem)}
        </div>
        <Image
          src={Blur2}
          alt="Hero Image"
          className="absolute right-0 bottom-[-6em] z-10 w-[80%]"
          priority={false}
        />
      </div>
    </div>
  );
};

export default Header;