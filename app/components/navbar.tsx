"use client";
import { Bell, Search, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Logo from "../../public/zerologo.png";

interface NavbarProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <header className={`${isDarkMode ? "bg-[#09050e]" : "bg-white"} border-b ${isDarkMode ? "border-gray-800" : "border-gray-300"} flex h-16`}>
            <div className={`w-64 h-16 flex items-center justify-start pl-6 border-r ${isDarkMode ? "border-gray-800" : "border-gray-300"}`}>
                <Image
                    src={Logo}
                    alt="ZeroxBridge Logo"
                    width={100}
                    height={30}
                    className="object-contain"
                />
            </div>
            <div className="flex-1 flex justify-between items-center px-6">
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className={`${isDarkMode ? "bg-black/30 text-white border-gray-800" : "bg-gray-100 text-black border-gray-300"} pl-4 pr-10 py-2 rounded-full w-64 border focus:outline-none`}
                        />
                        <Search className={`absolute right-3 top-2.5 h-5 w-5 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`} />
                    </div>

                    <button className={`p-2.5 ${isDarkMode ? "bg-black/30 border-gray-800 text-gray-200" : "bg-gray-100 border-gray-300 text-gray-700"} rounded-full border`}>
                        <Bell size={20} />
                    </button>
                </div>
                <div className="flex items-center space-x-4">
                    <div className={`flex items-center ${isDarkMode ? "bg-purple-900/30" : "bg-gray-200"} rounded-full p-1`}>
                        <button
                            onClick={toggleDarkMode}
                            className={`p-1.5 rounded-full transition-colors ${isDarkMode ? "bg-purple-700 text-white" : "bg-transparent text-gray-700"
                                }`}
                        >
                            <Moon size={16} />
                        </button>
                        <button
                            onClick={toggleDarkMode}
                            className={`p-1.5 rounded-full transition-colors ${!isDarkMode ? "bg-purple-700 text-white" : "bg-transparent text-gray-700"
                                }`}
                        >
                            <Sun size={16} />
                        </button>
                    </div>

                    <button className={`bg-transparent border ${isDarkMode ? "border-gray-800 text-white" : "border-gray-300 text-black"} py-2 px-6 rounded-full`}>
                        Connect Wallet
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;