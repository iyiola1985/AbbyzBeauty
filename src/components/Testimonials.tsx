"use client";

const testimonials = [
  {
    text: "Absolutely love my lashes! They last long and look amazing. Abbyz Beautyy is my go-to for luxury lashes.",
    rating: 5,
  },
  {
    text: "The best lash experience I've ever had. The volume set is flawless and the atmosphere is so luxurious.",
    rating: 5,
  },
  {
    text: "Clean, elegant, and Instagram-worthy. The glam makeup is always on point. Highly recommend!",
    rating: 5,
  },
  {
    text: "Professional, talented, and makes you feel like a million bucks. My lashes look incredible every time.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-reveal py-20 sm:py-28 bg-[#F5E1E6]/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="unifrakturcook-bold text-[#E91E8C] tracking-[0.15em] uppercase text-base text-center mb-4">
          What Our Clients Say
        </p>
        <h2 className="unifrakturcook-bold text-3xl sm:text-4xl md:text-5xl text-[#1a1a1a] text-center mb-16">
          Testimonials
        </h2>

        <div className="testimonial-slider overflow-hidden">
          <div className="testimonial-track flex transition-transform duration-500 ease-out">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="testimonial-slide flex-shrink-0 w-full px-4"
              >
                <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(233,30,140,0.08)] h-full">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} className="text-[#E91E8C] text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="playfair-display-sc-regular-italic text-[#1a1a1a]/80 text-lg leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8 testimonial-dots" />
      </div>
    </section>
  );
}
