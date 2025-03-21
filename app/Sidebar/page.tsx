"use client";
import { useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar";
import AnimatedIcon from "../components/success-state/animated-icon";
import SuccessState from "../components/success-state/success-state";

export default function Home() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [open, setOpen] = useState(true)

    return (
        <div className={`${isDarkMode ? "bg-[#09050e]" : "bg-white"} h-screen flex flex-col`}>
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
            <div className="flex flex-1">
                <Sidebar isDarkMode={isDarkMode} />
                <main className="flex-1">
                    {/* Main content goes here */}
                    <SuccessState 
                        isOpen={open} 
                        onClose={setOpen}
                        message={'You have successfully LOCKED $200 xZB Tokens.'}
                        isDarkMode={isDarkMode}
                        icon={<AnimatedIcon iconType='lock' />}
                    />
                    {/* this button is used to test the light and dark by opening the success modal since, the navbar is displayed in this component as in the figma file */}
                    <button onClick={() => setOpen(!open)} className="font-manrope w-[1/4] py-3 px-6 text-center bg-gradient-to-b text-base from-[#A26DFF] to-[#09050E] hover:bg-opacity-90 rounded-full font-bold text-[#D4D4D4] transition-all m-4">
                        Click to open success state
                    </button>
                </main>
            </div>
        </div>
    );
}