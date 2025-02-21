import Image from "next/image";
import cog from "../../public/Cog.png";
import Chart from "../../public/Chart.png";
import Swap from "../../public/Swap.png";
import Claim from "../../public/Claim.png";
import Coins from "../../public/Coins.png";

interface SidebarProps {
    isDarkMode: boolean;
}

const Sidebar = ({ isDarkMode }: SidebarProps) => {
    return (
        <aside className={`w-64 ${isDarkMode ? "bg-[#09050e]" : "bg-white"} border-r ${isDarkMode ? "border-gray-800" : "border-gray-300"} flex flex-col justify-between h-full`}>
            <div className="mt-6 flex flex-col items-start gap-6 pl-8">
                <div className="flex items-center gap-2">
                    <Image src={Chart} alt="dashboard" height={30} width={30} />
                    <p className={`${isDarkMode ? "text-white" : "text-black"} font-thin`}>Dashboard</p>
                </div>

                <div className="flex items-center gap-2">
                    <Image src={Swap} alt="swap" height={30} width={30} />
                    <p className={`${isDarkMode ? "text-white" : "text-black"} font-thin`}>Swap</p>
                </div>

                <div className="flex items-center gap-2">
                    <Image src={Claim} alt="claim" height={30} width={30} />
                    <p className={`${isDarkMode ? "text-white" : "text-black"} font-thin`}>Claim/Burn xZB Tokens</p>
                </div>

                <div className="flex items-center gap-2">
                    <Image src={Coins} alt="lock tokens" height={30} width={30} />
                    <p className={`${isDarkMode ? "text-white" : "text-black"} font-thin`}>Lock Tokens</p>
                </div>

                <div className="flex items-center gap-2">
                    <Image src={Chart} alt="analytics" height={30} width={30} />
                    <p className={`${isDarkMode ? "text-white" : "text-black"} font-thin`}>Analytics</p>
                </div>
            </div>
            <div className="pl-8 pb-8 flex items-center gap-2">
                <p className={`${isDarkMode ? "text-white" : "text-black"} font-thin`}>Settings</p>
                <Image src={cog} alt="settings" height={30} width={30} />
            </div>
        </aside>
    );
}

export default Sidebar;