"use client";
import AboutUs from "../components/about";
import AboutHeader from "../components/about-header";
import HomeNav from "../components/HomeNav";

const AboutPage = () => {

  return (
    <main className="min-h-screen bg-black flex flex-col items-center w-full max-w-[1800px] mx-auto">
      <HomeNav />
      <AboutHeader />
      <AboutUs />
    </main>
  );
};

export default AboutPage;
