import GradientWrapper from "@/app/components/ui/GradientWrapper";
import Image from "next/image";

const ZeroXPosition = () => {
  return (
    <div className="bg-[#0F0F0F]  p-16">
      <div className="container max-w-[1200px]  flex flex-col gap-8 mx-auto">
        <GradientWrapper className="mb-10 h-fit w-fit rounded-full">
          <h2 className="font-mono font-[500] py-1 px-2 rounded-full w-fit bg-[#19191A] text-[1rem] 2xl:text-[2rem] text-[#A6A6A7] uppercase">
            ZERO-X-POSITION
          </h2>
        </GradientWrapper>

        <p className="text-[#9E9E9E] tracking-tight text-[1em] font-[300]  font-inter">
          ZeroXBridge is a decentralized protocol that unlocks cross-chain
          liquidity without requiring users to bridge or move their original
          assets across chains. Instead of bridging assets, users lock ETH
          <Image
            src="/eth.png"
            alt="Ethereum"
            width={24}
            height={24}
            className="inline-block mx-1 cursor-pointer hover:animate-jiggle"
            aria-hidden="true"
          />
          or other supported tokens on Ethereum (L1) and instantly receive xZB
          tokens on Starknet
          <Image
            src="/strk.png"
            alt="Starknet"
            width={24}
            height={24}
            className="inline-block mx-1 cursor-pointer hover:animate-jiggle"
            aria-hidden="true"
          />
          . These tokens are native, and backed 1:1 by the user's collateral
          locked on Ethereum.
        </p>
        <p className="text-[#9E9E9E] tracking-tight text-[1em] font-[300]  font-inter">
          xZB can be used across DeFi applications on Starknet — including
          lending, trading, and staking (LSTs) — all without moving your
          original assets from L1 or depending on centralized bridges.
        </p>
        <p className="text-[#9E9E9E] tracking-tight text-[1em] font-[300]  font-inter">
          Zero-knowledge proofs (ZKPs) are used to verify that a deposit was
          made on Ethereum — without revealing user data or bridging L1 assets.
          This allows Starknet to trustlessly mint xZB, enabling secure and
          non-custodial liquidity transfer across chains.
        </p>
      </div>
    </div>
  );
};

export default ZeroXPosition;
