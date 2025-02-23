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
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  icon: React.ReactNode;
}

const SuccessState: React.FC<SuccessStateProps> = ({
  isOpen,
  onClose,
  message,
  icon,
}) => {
  if (!isOpen) return null;

  return (
    <div className={`${manrope.className} fixed inset-0 flex items-center justify-center z-50`}>
      <div className="absolute inset-0 bg-black bg-opacity-70" />
      <div className="relative bg-[#1E1E2B] rounded-2xl p-8 max-w-md w-full mx-4 flex flex-col items-center">

        <button 
          onClick={() => onClose(false)}
          className="absolute left-5 top-5 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>
        <div className="mb-5">
          {icon}
        </div>
        <h2 className="text-[#3ECD96] text-2xl font-semibold mb-3">
          CONGRATULATIONS!
        </h2>

        <p className="text-[#D4D4D4] w-[70%] test-sm text-center mb-6">
          {message}
        </p>

        <Link
          href={"/dashboard"}
          className="w-full py-3 px-6 text-center bg-gradient-to-b text-base from-[#A26DFF] to-[#09050E] hover:bg-opacity-90 rounded-full text-[#D4D4D4] font-bold transition-all"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default SuccessState;