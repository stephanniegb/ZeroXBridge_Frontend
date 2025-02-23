import React, { useEffect, useState } from "react";
import Image from "next/image";
import wallet1 from "../../../public/success-state/wallet1.svg";
import wallet2 from "../../../public/success-state/wallet2.svg";
import burn1 from "../../../public/success-state/burn1.svg";
import burn2 from "../../../public/success-state/burn2.svg";
import swap1 from "../../../public/success-state/swap1.svg";
import swap2 from "../../../public/success-state/swap2.svg";
import lock1 from "../../../public/success-state/lock1.svg";
import lock2 from "../../../public/success-state/lock2.svg";



type IconType = "wallet" | "swap" | "burn" | "lock"; // Add more types as needed

interface AnimatedIconProps {
  iconType: IconType; // Type of icon set // Time between transitions (ms)
}

const iconSets: Record<IconType, string[]> = {
  wallet: [wallet1, wallet2],
  burn: [burn1, burn2],
  swap: [swap1, swap2],
  lock: [lock1, lock2],
};

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ iconType }) => {
  const icons = iconSets[iconType];
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    const iconInterval = setInterval(() => {
      setCurrentIconIndex(1);
    }, 1000);

    return () => clearInterval(iconInterval); // Cleanup on unmount
  }, [icons]);

  return (
    <div className="h-36 w-36">
        <Image
        src={icons[currentIconIndex]}
        alt={`${iconType} icon`}
        className="transition-all duration-500 ease-in-out !relative"
        fill
        />
    </div>
  );
};

export default AnimatedIcon;