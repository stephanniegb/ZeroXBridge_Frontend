"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar";
import { useTheme } from "../context/ThemeContext";
import LiquidityLockTable from "../components/lock-liquidity"; // Import the LiquidityLockTable component

const LockTokensPage = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isConnected, setIsConnected] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleConnect = () => {
    setIsConnected(true);
  };

  if (!mounted) return null;

  return (
    <div className={`flex flex-col w-full h-screen ${isDarkMode ? "bg-[#09050E]" : "bg-white"}`}>
      {/* Fixed Navbar at the top */}
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        handleConnect={handleConnect}
        isConnected={isConnected}
        className="fixed top-0 left-0 right-0 z-50 h-24" // Fixed positioning for Navbar
      />

      {/* Fixed Sidebar */}
      <Sidebar className="fixed top-24 left-0 h-[calc(100vh-6rem)] w-80 z-40" /> {/* Fixed positioning for Sidebar */}

      {/* Main content area */}
      <div className="flex flex-col flex-1 pt-24 pl-80"> {/* Add padding to account for Navbar and Sidebar */}
        <div className="flex flex-col w-full px-6 py-4">
          <h1 className={`text-2xl font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            Lock your Ethereum Assets to receive xZB Tokens on Starknet L2
          </h1>
          <p className={`text-sm mb-8 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            All you have to do is to take the following steps
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
  {[
    { title: "1. Select & Lock", desc: "Choose your assets and lock amount on Ethereum L1." },
    { title: "2. ZK Proof Generation", desc: "System generates and verifies ZK proof of your deposit" },
    { title: "3. Receive xZB", desc: "Get xZB tokens on Starknet based on your locked amount." },
    { title: "4. Use your xZB Tokens", desc: "Use Tokens for DeFi activities on Starknet (trade, lend & stake)." },
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
      <p className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
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

export default LockTokensPage;