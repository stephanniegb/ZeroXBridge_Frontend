"use client";
import React from "react";
import LiquidityLockTable from "@/app/components/lock-liquidity";
import { useTheme } from "@/app/ThemeContext";

const LockTokens = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`flex flex-col w-full min-h-screen h-fit pb-4 pt-[4rem] ${
        isDarkMode ? "bg-[#09050E]" : "bg-white"
      }`}
    >
      <div className="flex flex-col ">
        <div className="flex flex-col w-full px-6 py-4">
          <h1
            className={`text-2xl font-semibold mb-2 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Lock your Ethereum Assets to receive xZB Tokens on Starknet L2
          </h1>
          <p
            className={`text-sm mb-8 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            All you have to do is to take the following steps
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              {
                title: "1. Select & Lock",
                desc: "Choose your assets and lock amount on Ethereum L1.",
              },
              {
                title: "2. ZK Proof Generation",
                desc: "System generates and verifies ZK proof of your deposit",
              },
              {
                title: "3. Receive xZB",
                desc: "Get xZB tokens on Starknet based on your locked amount.",
              },
              {
                title: "4. Use your xZB Tokens",
                desc: "Use Tokens for DeFi activities on Starknet (trade, lend & stake).",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? "bg-[#2f1f42] hover:bg-gradient-to-b hover:from-[#21192F] hover:to-[#694F95] text-white"
                    : "bg-[#f0e6fd] hover:bg-[#e5d7f6] text-gray-800" // Light mode hover: violet to white
                }`}
              >
                <div className="font-medium mb-2">{step.title}</div>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* LiquidityLockTable - Ensure it takes full width */}
          <div className="w-full overflow-x-auto">
            <LiquidityLockTable isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockTokens;
