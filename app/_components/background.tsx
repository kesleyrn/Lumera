import Image from "next/image";
import Link from "next/link";
import perfume from "@/public/perfume.webp";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-[#111111] overflow-hidden flex flex-col px-12">
      {/* ── NAVBAR ── */}

      {/* ── HERO ── */}
      <div className="flex flex-1 items-center justify-between py-10 mt-15">
        {/* LEFT — text */}
        <div className="relative z-10 max-w-sm">
          <span className="text-gray-500 text-xs uppercase tracking-[0.2em]">
            Our Version
          </span>
          <h1 className="text-white font-black lg:text-9xl text-8xl tracking-tight leading-none mt-2 mb-5">
            DESIGN
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Our hobby is a modern and convenient design, the
            <br />
            key to successful communication with the client.
          </p>
          <button className="flex items-center gap-4 text-white text-sm tracking-wide">
            <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-base">
              →
            </span>
            See More
          </button>
        </div>

        {/* RIGHT — circles + image */}
        <div className="relative w-[52%] h-130 shrink-0 mt-28">
          {/* Large red circle — behind image */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-105 h-105 rounded-full z-1
  bg-[radial-gradient(circle_at_40%_40%,#cc2222_0%,#7a0000_60%,transparent_100%)]
  shadow-[0_0_80px_20px_rgba(204,34,34,0.4),0_0_160px_60px_rgba(122,0,0,0.25)]
  backdrop-blur-sm
  before:content-[''] before:absolute before:inset-0 before:rounded-full
  before:bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.12)_0%,transparent_60%)]
  before:z-10
  ring-1 ring-red-500/20
"
          />

          {/* Small red circle — bottom left */}
          <div className="absolute -bottom-8 -left-5 w-40 h-40 rounded-full bg-[radial-gradient(circle,#cc2222_0%,#7a0000_70%)] z-1" />

          {/* 
            ── IMAGE SLOT ──
            Put your image in /public, e.g. /public/statue.png
            Change src to "/statue.png"
            Use PNG with transparent background for best result
          */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-170 h-127.5 z-2 -top-34 lg:block md:block hidden">
            <Image
              src={perfume}
              alt="Hero image"
              width={500}
              height={300}
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* ── SLIDER INDICATOR ── */}
      <div className="flex items-center gap-4 pb-8 relative z-10">
        <span className="text-gray-600 text-xs tracking-widest">01</span>
        <div className="w-28 h-px bg-white/10">
          <div className="w-1/3 h-full bg-white" />
        </div>
        <span className="text-gray-600 text-xs tracking-widest">03</span>
      </div>
    </div>
  );
}
