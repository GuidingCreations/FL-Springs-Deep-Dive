import React from "react";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "./PrimaryButton";

const Logo = (type) => {
  return (
    <div className="flex gap-3 horizontal-container">
      <Image
        src="/icons/snorkel.svg"
        alt="Florida springs"
        width={35}
        height={35}
      />
      <h1>Florida Springs Deep Dive</h1>
     
    
    
    </div>
  );
};

export default Logo;
