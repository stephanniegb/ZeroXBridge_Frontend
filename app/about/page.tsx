'use client'
import blur3 from "@/public/outerBlur.svg";
import Image from 'next/image';
import AboutUs from "../components/about";
import AboutHeader from "../components/about-header";
import AboutTeam from '../components/about-team';
import HomeNav from "../components/HomeNav";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-dark-bg relative items-center overflow-hidden justify-center">
       <HomeNav />
      <AboutHeader />
      <AboutUs />
      <AboutTeam />
      <div className="absolute -bottom-[400px] left-0 z-0">
        <Image
          src={blur3}
          alt="Glow Effect"
          width={500}
          height={500}
        />
      </div>
    </main>
  );
};

export default AboutPage;
