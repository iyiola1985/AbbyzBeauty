"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/classic_lashes-c5660e81-13ef-4308-bc40-144382080083.png"
          alt="Classic lash extensions"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5E1E6]/20 via-transparent to-black/50" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="hero-content opacity-0">
          <Image
            src="/abbys_logo-61c73344-3bb7-421f-b3e4-44a7e36a3d8f.png"
            alt="Abbyz Beautyy"
            width={180}
            height={180}
            className="mx-auto mb-6 drop-shadow-lg"
          />
          <h1 className="hero-brand-float unifrakturcook-bold text-3xl min-[380px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">
            Abbyz Beautyy
          </h1>
          <p className="oi-regular text-base min-[400px]:text-lg sm:text-xl md:text-2xl text-white mb-8 tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
            Luxury Lash Extensions & Glam Makeup
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#booking"
              className="hero-btn-primary oi-regular px-6 py-3.5 sm:px-8 sm:py-4 bg-[#E91E8C] text-white rounded-full text-base sm:text-lg hover:shadow-[0_0_30px_rgba(233,30,140,0.6)] transition-all duration-500"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="hero-btn-secondary oi-regular px-6 py-3.5 sm:px-8 sm:py-4 border-2 border-white text-white rounded-full text-base sm:text-lg hover:bg-white hover:text-[#1a1a1a] transition-all duration-500"
            >
              View Price List
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
