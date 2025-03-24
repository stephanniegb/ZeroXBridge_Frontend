import React from 'react';
import { Manrope} from "next/font/google";
import { X } from 'lucide-react';
import Link from 'next/link';

const manrope = Manrope({
  weight: ["400", "700"],
  subsets: ['latin'],
  preload: true
});

interface SuccessStateProps {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  icon: React.ReactNode;
}

const SuccessState: React.FC<SuccessStateProps> = ({
  isOpen,
  isDarkMode,
  onClose,
  message,
  icon,
}) => {
  if (!isOpen) return null;

  return (
    <div className={`${manrope.className} fixed inset-0 flex items-center justify-center z-50`}>
      <div className="absolute inset-0 bg-transparent backdrop-blur-[1px] " />
      <div className={`relative ${isDarkMode ? "bg-[#1E1E2B]" : "bg-[#F8F4FF]"} rounded-2xl ${isDarkMode ? "text-[#D4D4D4]" : "text-[#09050E]"} p-8 max-w-md w-full mx-4 flex flex-col items-center shadow-md `}>

        <button 
          onClick={() => onClose(false)}
          className="absolute left-5 top-5 hover:opacity-70"
        >
          <X size={20} />
        </button>
        <div className="mb-5">
          {icon}
        </div>
        <h2 className="!text-[#3ECD96] text-2xl font-semibold mb-3">
          CONGRATULATIONS!
        </h2>

        <p className="w-[70%] test-sm text-center mb-6">
          {message}
        </p>

        <Link
          href={"/dashboard"}
          className="w-full py-3 px-6 text-center bg-gradient-to-b text-base from-[#A26DFF] to-[#09050E] hover:bg-opacity-90 rounded-full font-bold text-[#D4D4D4] transition-all"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default SuccessState;