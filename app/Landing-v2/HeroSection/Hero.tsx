import Image from "next/image";
import Navbar from "./Navbar";
import HeroBg from "./HeroBg";
import ArrowIcon from "@/app/components/ui/ArrowIcon";
import GradientText from "../../components/ui/GradientText";

const Hero = () => {
  return (
    <div className="h-[100dvh] relative w-full">
      <div className="relative  h-full z-10">
        <Navbar />
        <div className="flex flex-col  gap-4 mt-[clamp(100px,10dvh,150px)] 2xl:mt-[15vh]  max-w-[478px] mx-auto 2xl:max-w-[500px] 3xl:max-w-[650px]  4xl:max-w-[750px]">
          <h1 className="">
            Secure <GradientText>Cross-Chain</GradientText> Liquidity with
            Zero-Knowledge Proofs
          </h1>
          <p className="">
            Unlock liquidity on Starknet using ZK,{" "}
            <span className="text-[#6C6C6C]">no centralized bridges.</span>
          </p>
          <div className="flex gap-2 items-center ">
            <button className="bg-white text-base  rounded-full text-black px-4 py-2 flex items-center gap-2">
              Launch App
              <ArrowIcon direction="right" />
            </button>
            <button className="bg-[#1F1F1F] text-base rounded-[12px] text-white px-4 py-2 flex items-center gap-2">
              Read Docs
            </button>
          </div>
        </div>
      </div>
      <div className="h-[100%] z-[2] mx-auto absolute  left-1/2  top-[35%]  -translate-x-1/2 w-full bottom-0  mix-blend-lighten">
        <Image
          src="/1.png"
          alt="hero-bg"
          width={1720}
          height={938}
          // fill
          priority
          className="object-center object-contain 3xl:hidden"
        />
      </div>

      <HeroBg />
      {/* <div className="absolute w-full h-[80%] bottom-0 bg-[url('/bridge-xl.png')] bg-cover bg-top bg-no-repeat" /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10" /> */}
    </div>
  );
};

export default Hero;
