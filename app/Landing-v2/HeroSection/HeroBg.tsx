const HeroBg = () => {
  return (
    <div
      className="h-[100dvh] fixed top-0 left-0 w-full bg-[#090D10] bg-repeat"
      style={{
        backgroundImage: "url('/star-noise.png')",
        backgroundSize: "600px 600px",
        backgroundPosition: "center",
        opacity: 0.8,
      }}
    />
  );
};

export default HeroBg;
