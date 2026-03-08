"use client";

const lashServices = [
  { name: "Classic Set", price: 40 },
  { name: "Hybrid Set", price: 45 },
  { name: "Russian / Volume Set", price: 50 },
  { name: "Mega Volume Set", price: 55 },
  { name: "Wispy Set", price: 55 },
  { name: "Bottom Lashes", price: 15 },
];

const addons = [{ name: "Spikes Add-on", price: 10 }];

const makeupServices = [
  { name: "Full Glam Makeup (Includes strip lashes)", price: 35 },
  { name: "Full Glam Makeup (No Strip Lashes)", price: 30 },
];

function ServiceCard({
  name,
  price,
  category,
}: {
  name: string;
  price: number;
  category: string;
}) {
  return (
    <div className="service-card group bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(233,30,140,0.08)] hover:shadow-[0_12px_40px_rgba(233,30,140,0.15)] transition-all duration-500 hover:-translate-y-2 border border-[#F5E1E6]/50">
      <span className="text-sm font-medium text-[#E91E8C] tracking-wider uppercase">
        {category}
      </span>
      <h3 className="playfair-display-sc-bold text-lg sm:text-xl text-[#1a1a1a] mt-2 mb-1 tracking-tight">{name}</h3>
      <p className="oi-regular text-2xl text-[#E91E8C]">£{price}</p>
      <a
        href="#booking"
        className="mt-4 inline-block text-base font-medium text-[#E91E8C] hover:underline"
      >
        Book Now →
      </a>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="scroll-reveal py-20 sm:py-28 bg-[#F5E1E6]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="unifrakturcook-bold text-[#E91E8C] tracking-[0.15em] uppercase text-base text-center mb-4">
          Our Pricing
        </p>
        <h2 className="unifrakturcook-bold text-3xl sm:text-4xl md:text-5xl text-[#1a1a1a] text-center mb-4">
          Price List
        </h2>
        <p className="playfair-display-sc-regular text-[#2d2d2d] text-base sm:text-lg text-center max-w-2xl mx-auto mb-16">
          From classic lashes to full glam—transparent pricing for every style.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
