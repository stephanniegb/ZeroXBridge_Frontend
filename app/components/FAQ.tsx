"use client";
import { Manrope, Roboto_Serif } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const roboto = Roboto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const FaqItem = ({ item, onToggle, isOpen }: any) => {
  return (
    <div className="relative z-20 w-[90vw] lg:w-[667px] mb-5 pb-3 cursor-pointer before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-[#26183E00] before:via-[#A26DFF] before:to-[#26183E00]">
      <div
        className="flex justify-between items-center gap-5"
        onClick={onToggle}
      >
        <h4
          className={` transition-all duration-500 ease-in-out mt-3 ${
            manrope.className
          } ${isOpen ? "text-[#A26DFF]  font-medium text-lg" : "text-white"}`}
        >
          {item.question}
        </h4>

        <Image
          src="/arrowdownfaq.png"
          alt="arrowdown"
          height={18}
          width={19}
          className={`transition-transform duration-500 ease-in-out ${
            isOpen ? "rotate-180 " : ""
          }`}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 flex justify-center items-center ease-in-out ${
          isOpen ? "max-h-[200px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <p
          className={`lg:text-[16px] text-[13px]  font-400  text-white/85 max-w-[609px] ${roboto.className}`}
        >
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [isOpenIndex, setIsOpenIndex] = useState(null);
  const onToggle = (index: any) => {
    setIsOpenIndex(isOpenIndex === index ? null : index);
  };
  return (
    <div className="bg-black lg:py-20 py-10 px-10 relative overflow-hidden flex justify-center items-center ">
      <div className=" max-w-[1200px] px-10 flex flex-col justify-center items-center ">
        <p
          className={`lg:w-[700px] text-center font-bold text-3xl w-[95vw] lg:text-5xl bg-gradient-to-r from-[#26183E] via-[#A26DFF] to-[#26183E] text-transparent bg-clip-text ${manrope.className}`}
        >
          You have a Question You’re not clear about?
        </p>
        <p
          className={`lg:text-xl text-sm w-[95vw] lg:max-w-none text-center   text-[#D4D4D4] mt-2 mb-32 ${roboto.className} `}
        >
          ZeroXBridge is here to answer all your questions and keep you updated.
        </p>

        {Array(7)
          .fill(null)
          .map((_, index) => {
            return (
              <FaqItem
                item={{
                  question: `What is ZeroXBridge built on?`,
                  answer: `Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.`,
                }} // Sample data
                key={index}
                onToggle={() => onToggle(index)}
                isOpen={index === isOpenIndex}
              />
            );
          })}
      </div>

      <div className="gradient-01 z-0 " />
    </div>
  );
};

export default FAQ;
