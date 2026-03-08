"use client";

import Image from "next/image";

const lashServices = [
  { name: "Classic Set", price: 40, image: "/classic_lashes-c5660e81-13ef-4308-bc40-144382080083.png" },
  { name: "Hybrid Set", price: 45, image: "/hybrid_lashes-dac85d4b-f5fa-4b09-af4a-04f610cb1ee3.png" },
  { name: "Russian / Volume Set", price: 50, image: "/Volume_lashes-87f7a147-055d-469e-a318-527b8a89a818.png" },
  { name: "Mega Volume Set", price: 55, image: "/Mega_volume_lashes-0a44a87e-5a98-411a-a14a-193fdaa374aa.png" },
  { name: "Wispy Set", price: 55, image: "/Volume_lashes_2-3903c64a-2561-4fc5-a790-2a1d76676079.png" },
  { name: "Bottom Lashes", price: 15, image: "/Bottom_lashes-5d77980a-915f-488f-add6-baa805226622.png" },
];

const addons = [
  { name: "Spikes Add-on", price: 10, image: "/Volume_lashes-87f7a147-055d-469e-a318-527b8a89a818.png" },
];

const makeupServices = [
  { name: "Full Glam Makeup (Includes strip lashes)", price: 35, image: "/Volume_lashes_2-3903c64a-2561-4fc5-a790-2a1d76676079.png" },
  { name: "Full Glam Makeup (No Strip Lashes)", price: 30, image: "/Combo__Mega_Bottoms___65-70095344-95ef-4985-b888-c94a2b091988.png" },
];

function ServiceCard({
  name,
  price,
  category,
  image,
}: {
  name: string;
  price: number;
  category: string;
  image: string;
}) {
  return (
    <a
      href="#booking"
      className="service-card group relative block rounded-2xl overflow-hidden aspect-[4/3] min-h-[180px] sm:min-h-[220px] shadow-[0_4px_20px_rgba(233,30,140,0.12)] hover:shadow-[0_12px_40px_rgba(233,30,140,0.25)] transition-all duration-500 hover:-translate-y-1"
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
        <span className="text-xs sm:text-sm font-medium text-[#E91E8C] tracking-wider uppercase mb-1">
          {category}
        </span>
        <h3 className="playfair-display-sc-bold text-base sm:text-lg md:text-xl text-white leading-tight [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
          {name}
        </h3>
        <p className="oi-regular text-xl sm:text-2xl text-white mt-1 [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
          £{price}
        </p>
        <span className="mt-2 inline-block text-sm sm:text-base font-medium text-white/95 group-hover:text-[#E91E8C] transition-colors">
          Book Now →
        </span>
      </div>
    </a>
  );
}

export default function Services() {
  return (
    <section id="services" className="scroll-reveal py-16 sm:py-24 md:py-28 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="unifrakturcook-bold text-[#E91E8C] tracking-[0.15em] uppercase text-base sm:text-lg text-center mb-3 sm:mb-4">
          Our Pricing
        </p>
        <h2 className="unifrakturcook-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center mb-3 sm:mb-4 [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]">
          Price List
        </h2>
        <p className="playfair-display-sc-regular text-white/90 text-base sm:text-lg text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          From classic lashes to full glam—transparent pricing for every style.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {lashServices.map((s) => (
            <ServiceCard key={s.name} {...s} category="Lash Extensions" />
          ))}
          {addons.map((s) => (
            <ServiceCard key={s.name} {...s} category="Add-ons" />
          ))}
          {makeupServices.map((s) => (
            <ServiceCard key={s.name} {...s} category="Makeup" />
          ))}
        </div>
      </div>
    </section>
  );
}
