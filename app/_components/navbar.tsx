import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="relative">
        <div
          className="flex absolute z-10 w-4xl justify-around text-white text-lg mx-10 mt-8 rounded-4xl p-4 bg-white/5 backdrop-blur-md 
        border border-white/10
        shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,80,80,0.08),0_0_20px_2px_rgba(204,34,34,0.15)]
        "
        >
          <div className="">Lumera Logo</div>
          <div className="flex  space-x-4 ">
            <Link href={""}>Home</Link>
            <Link href={""}>Product</Link>
            <Link href={""}>About Us</Link>
            <Link href={""}>Contact Us</Link>
          </div>
        </div>
        <div
          className="flex absolute z-10 right-0 text-white text-lg mx-10 mt-8 rounded-4xl p-4 bg-white/5 backdrop-blur-md 
        border border-white/10
        shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,80,80,0.08),0_0_20px_2px_rgba(204,34,34,0.15)]
        "
        >
          <div className="flex  space-x-6 ">
            <Link href={""}>
              <Mail />
            </Link>
            <Link href={""}>
              <Phone />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
