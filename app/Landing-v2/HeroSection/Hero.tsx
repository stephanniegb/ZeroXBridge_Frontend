import Image from "next/image";
import Navbar from "./Navbar";
import HeroBg from "./HeroBg";
import ArrowIcon from "@/app/components/ui/ArrowIcon";
import GradientText from "../../components/ui/GradientText";

const Hero = () => {
  return (
    <div className="h-[100dvh] w-full">
      <div className="relative  h-full z-10">
        <Navbar />
        <div className="flex flex-col gap-4 mt-[clamp(100px,10dvh,150px)] max-w-[478px] mx-auto ">
          <h1 className="text-4xl ">
            Secure <GradientText>Cross-Chain</GradientText> Liquidity with
            Zero-Knowledge Proofs
          </h1>
          <p className="">
            Unlock liquidity on Starknet using ZK,{" "}
            <span className="text-[#6C6C6C]">no centralized bridges.</span>
          </p>
          <div className="flex gap-2 items-center ">
            <button className="bg-white  rounded-full text-black px-4 py-2 flex items-center gap-2">
              Launch App
              <ArrowIcon direction="right" />
            </button>
            <button className="bg-[#1F1F1F] rounded-[12px] text-white px-4 py-2 flex items-center gap-2">
              Read Docs
            </button>
          </div>
        </div>
      </div>
      <HeroBg />
      background: linear-gradient(90deg, #FF779A 50%, #99485D 86.57%);
    </div>
  );
};

export default Hero;
