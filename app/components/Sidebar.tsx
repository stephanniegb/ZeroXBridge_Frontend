import { useState } from "react";
import Image from "next/image";
import cog from "../../public/Cog.png";
import Chart from "../../public/Chart.png";
import Swap from "../../public/Swap.png";
import Claim from "../../public/Claim.png";
import Coins from "../../public/Coins.png";
import { cn } from "@/utils/cn"; // Utility function for conditional classes

interface SidebarProps {
    isDarkMode: boolean;
}

const Sidebar = ({ isDarkMode }: SidebarProps) => {
    const [activeTab, setActiveTab] = useState("Dashboard");

    return (
        <aside className={`w-80 ${isDarkMode ? "bg-[#09050e]" : "bg-white"} border-r border-[#1F1333] h-full flex flex-col`}>
            <div className="flex-1 mt-6 flex flex-col items-start gap-2 pl-6">
                {[
                    { name: "Dashboard", icon: Chart },
                    { name: "Swap", icon: Swap },
                    { name: "Claim/Burn xZB Tokens", icon: Claim },
                    { name: "Lock Tokens", icon: Coins },
                    { name: "Analytics", icon: Chart },
                ].map((tab) => (
                    <div
                        key={tab.name}
                        className={cn(
                            "relative flex items-center gap-3 cursor-pointer px-4 py-3 rounded-xl w-[90%] transition-all duration-200",
                            activeTab === tab.name ? "bg-[#21192F] text-white" : "text-gray-400"
                        )}
                        onClick={() => setActiveTab(tab.name)}
                    >
                        <Image src={tab.icon} alt={tab.name} height={24} width={24} />
                        <p className="text-base font-light">{tab.name}</p>

                        {/* White accent design at the bottom right */}
                        {activeTab === tab.name && (
                            <span className="absolute right-0 top-0 h-full w-2 bg-[#8f8d94] rounded-r-xl"></span>
                        )}

                    </div>
                ))}
            </div>
            <div className="pl-6 pb-8 flex items-center gap-3">
                <p className="text-gray-400 text-base font-light">Settings</p>
                <Image src={cog} alt="settings" height={24} width={24} />
            </div>
        </aside>
    );
};

export default Sidebar;
