import Image from "next/image";
import StepsAccordion from "./StepsAccordion";

const Steps = () => {
  return (
    <div className="container max-w-[1200px] bg-[#0A0A0A] mx-auto py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="font-mono font-[500] mb-10 text-[1rem] 2xl:text-[2rem] text-[#A6A6A7] uppercase ">
            How it works
          </h2>

          <StepsAccordion />
        </div>
        <div className=" w-full h-[350px]  relative rounded-lg overflow-hidden">
          <Image
            src="/how-it-works.png"
            alt="how-it-works"
            width={500}
            height={500}
            className="object-contain mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Steps;
