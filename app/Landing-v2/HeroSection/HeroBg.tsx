const HeroBg = () => {
  return (
    <div
      className="h-[100dvh] absolute top-0 left-0 w-full bg-[#090D10] bg-repeat"
      style={{
        backgroundImage: "url('/star-noise.png')",
        backgroundSize: "600px 600px",
        backgroundPosition: "center",
        opacity: 0.5,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/hero-2.svg')] bg-cover opacity-10 bg-no-repeat bg-center" />
      <div className="absolute top-0 left-0 w-full h-[80%] bg-[url('/hero-3.svg')] opacity-10 bg-cover bg-no-repeat bg-center" />

      <div className="absolute bottom-0 translate-y-[60%] opacity-80 left-0 w-full h-full bg-[url('/hero-1.svg')] bg-cover bg-no-repeat bg-center" />
    </div>
  );
};

export default HeroBg;
