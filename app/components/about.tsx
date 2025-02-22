
'use client';

import React from 'react';
import Image from 'next/image';
import { Manrope, Roboto_Serif } from "next/font/google";

const manrope = Manrope({
  weight: ["700"],
});

const robotoSerif = Roboto_Serif({
  weight: ["300"],
});

const AboutUs = () => {
  return (
    <section className="bg-dark-bg text-white rounded-3xl p-10 m-5 shadow-lg max-w-7xl mx-auto">
      {/* Gradient Heading */}
      <h1 className="text-4xl font-bold mb-6 text-center bg-gradient-purple bg-clip-text text-transparent">
        ZeroXBridge is here to <br />
        Redefine Cross-Chain liquidity
      </h1>

      {/* Subtext */}
      <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto font-serif mb-10">
        With ZeroXBridge eliminating the vulnerabilities of traditional cross-chain solutions:
      </p>

      {/* Flexbox Section for Cards */}
      <div className="flex flex-row md:flex-row gap-6 py-10 px-10">
        {/* Left Column - Two Stacked Cards */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Card 1 - No Asset Transfers */}
          <div className="relative bg-grid-pattern bg-cover bg-center rounded-2xl pb-5 px-10 shadow-custom-purple border border-transparent flex flex-col justify-between h-[300px] w-[520px]">
            {/* Icon */}
            <div className="flex justify-end mb-0">
              <Image
                src="/images/assets-transfer.png"
                alt="No Asset Transfers"
                width={124}
                height={124}
              />
            </div>

            {/* Card Content */}
            <div className='pb-5'>
              <h3 className={`${manrope.className} text-sm text-white-style font-semibold mb-3`}>No Asset Transfers</h3>
              <p className={`${robotoSerif.className} text-white-style`}>
                Traditional bridges require moving assets between chains, exposing them to security risks like hacks and exploits. ZeroXBridge eliminates this by keeping your collateral securely locked on Ethereum while unlocking liquidity on Starknet.
              </p>
            </div>
          </div>

          {/* Card 2 - No Centralized Intermediaries */}
          <div className="relative bg-grid-pattern bg-cover bg-center rounded-2xl px-10 py-5 shadow-custom-purple border border-transparent hover:border-gradient-purple transition-all duration-300 flex flex-col justify-between h-[300px] w-[520px]">
            {/* Icon */}
            <div className="flex justify-end mb-0 top-5 right-4">
              <Image
                src="/images/centralized-icon.png"
                alt="No Centralized Intermediaries"
                width={124}
                height={124}
              />
            </div>

            {/* Card Content */}
            <h3 className={`${manrope.className} text-white-style text-sm font-semibold mb-3`}>No Centralized Intermediaries</h3>
            <p className={`${robotoSerif.className} text-white-style font-serif`}>
              Centralized bridges introduce single points of failure and custodial risks. ZeroXBridge uses decentralized, trustless zk-STARK proofs to ensure security and transparency.
            </p>
          </div>
        </div>

        {/* Right Side - Full Height Card */}
        <div className="relative bg-grid-pattern-2 bg-cover rounded-2xl p-10 shadow-custom-purple border border-transparent hover:border-gradient-purple transition-all duration-300 flex flex-col justify-center flex-1 h-[620px] w-[395px]">
          {/* Icons at the top */}
          <div className="flex justify-center gap-4 mb-6">
            <Image
              src="/images/liquidity-chain.png"
              alt="Liquidity Chain"
              width={124}
              height={124}
            />
            <Image
              src="/images/liquidity-chart.png"
              alt="Liquidity Chart"
              width={124}
              height={124}
            />
          </div>

          {/* Card Content */}
          <h3 className={`${manrope.className} text-white-style text-sm font-semibold text-center mb-3`}>No Liquidity Fragmentation</h3>
          <p className={`${robotoSerif.className} text-white-style font-serif text-center`}>
            Traditional bridges fragment liquidity across multiple chains, reducing efficiency.  
            ZeroXBridge maintains liquidity cohesion by enabling cross-chain transactions without moving assets.  
            You can make numerous transactions daily without worrying about efficiency problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
