"use client";

import Image from "next/image";

const galleryImages = [
  {
    src: "/Volume_lashes_2-3903c64a-2561-4fc5-a790-2a1d76676079.png",
    alt: "Volume lash extensions",
    category: "Lash Extensions",
  },
  {
    src: "/Volume_lashes-87f7a147-055d-469e-a318-527b8a89a818.png",
    alt: "Volume lashes",
    category: "Lash Extensions",
  },
  {
    src: "/hybrid_lashes-dac85d4b-f5fa-4b09-af4a-04f610cb1ee3.png",
    alt: "Hybrid lashes",
    category: "Lash Extensions",
  },
  {
    src: "/classic_lashes-c5660e81-13ef-4308-bc40-144382080083.png",
    alt: "Classic lashes",
    category: "Lash Extensions",
  },
  {
    src: "/Mega_volume_lashes-0a44a87e-5a98-411a-a14a-193fdaa374aa.png",
    alt: "Mega volume lashes",
    category: "Lash Extensions",
  },
  {
    src: "/Bottom_lashes-5d77980a-915f-488f-add6-baa805226622.png",
    alt: "Bottom lashes",
    category: "Lash Extensions",
  },
  {
    src: "/Combo__Mega_Bottoms___65-70095344-95ef-4985-b888-c94a2b091988.png",
    alt: "Combo mega and bottom lashes",
    category: "Client Transformations",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-reveal py-20 sm:py-28 bg-[#FDFBFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="unifrakturcook-bold text-[#E91E8C] tracking-[0.15em] uppercase text-base text-center mb-4">
          Portfolio
        </p>
        <h2 className="unifrakturcook-bold text-3xl sm:text-4xl md:text-5xl text-[#1a1a1a] text-center mb-4">
          Gallery
        </h2>
        <p className="playfair-display-sc-regular text-[#2d2d2d] text-base sm:text-lg text-center max-w-2xl mx-auto mb-16">
          Explore our latest work—from classic lashes to mega volume and glam transformations.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="gallery-item group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(233,30,140,0.2)] transition-all duration-500"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="text-white text-sm font-medium">{img.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
