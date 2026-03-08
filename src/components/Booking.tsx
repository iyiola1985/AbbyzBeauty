"use client";

import { useState } from "react";
import { services, getDepositForService, WHATSAPP_NUMBER } from "@/lib/services";

export default function Booking() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const deposit = formData.service ? getDepositForService(formData.service) : 0;

  const [lastDeposit, setLastDeposit] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dep = getDepositForService(formData.service);
    setLastDeposit(dep);

    const message = [
      `Hi! I'd like to book an appointment at Abbyz Beautyy`,
      ``,
      `*My Details:*`,
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      ``,
      `*Booking:*`,
      `Service: ${formData.service}`,
      `Date: ${formData.date}`,
      `Time: ${formData.time}`,
      formData.notes ? `Notes: ${formData.notes}` : "",
      ``,
      `*Deposit:* £${dep} (I'm ready to pay to confirm my booking)`,
    ]
      .filter(Boolean)
      .join("\n");

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setStatus("success");
    setFormData({ name: "", phone: "", email: "", service: "", date: "", time: "", notes: "" });
  };

  return (
    <section id="booking" className="scroll-reveal py-16 sm:py-24 md:py-28 bg-[#FDFBFB]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="unifrakturcook-bold text-[#E91E8C] tracking-[0.15em] uppercase text-base sm:text-lg text-center mb-3 sm:mb-4">
          Book Your Appointment
        </p>
        <h2 className="unifrakturcook-bold text-2xl sm:text-3xl md:text-4xl text-[#1a1a1a] text-center mb-8 sm:mb-12">
          Ready for Your Glam Experience?
        </h2>

        <div className="mb-6 sm:mb-8 p-5 sm:p-6 bg-[#F5E1E6]/40 rounded-2xl border-2 border-[#F5E1E6]">
          <p className="playfair-display-sc-regular text-[#1a1a1a] text-base sm:text-lg text-center font-medium">
            <span className="font-semibold text-[#E91E8C]">Deposit required</span> to confirm your
            booking. You&apos;ll pay via WhatsApp after submitting.
          </p>
        </div>

        {status === "success" && (
          <div className="booking-success mb-6 sm:mb-8 p-5 sm:p-6 bg-[#F5E1E6]/60 rounded-2xl text-center text-[#1a1a1a]">
            <span className="text-4xl mb-2 block">✨</span>
            <p className="playfair-display-sc-bold text-lg sm:text-xl">WhatsApp has opened!</p>
            <p className="text-base sm:text-lg mt-1 text-[#2d2d2d]">
              Send the message and pay your £{lastDeposit} deposit to confirm your booking.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-red-50 rounded-2xl text-red-700 text-center text-base">
            Please try again or contact us directly via WhatsApp.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block playfair-display-sc-bold text-base sm:text-lg text-[#1a1a1a] mb-1.5">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 text-base rounded-xl border border-[#E8DED5] focus:border-[#E91E8C] focus:ring-1 focus:ring-[#E91E8C] outline-none transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block playfair-display-sc-bold text-base sm:text-lg text-[#1a1a1a] mb-1.5">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 text-base rounded-xl border border-[#E8DED5] focus:border-[#E91E8C] focus:ring-1 focus:ring-[#E91E8C] outline-none transition-all"
              placeholder="Your phone number"
            />
          </div>
          <div>
            <label htmlFor="email" className="block playfair-display-sc-bold text-base sm:text-lg text-[#1a1a1a] mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 text-base rounded-xl border border-[#E8DED5] focus:border-[#E91E8C] focus:ring-1 focus:ring-[#E91E8C] outline-none transition-all"
              placeholder="Your email"
            />
          </div>
          <div>
            <label htmlFor="service" className="block playfair-display-sc-bold text-base sm:text-lg text-[#1a1a1a] mb-1.5">
              Service
            </label>
            <select
              id="service"
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 text-base rounded-xl border border-[#E8DED5] focus:border-[#E91E8C] focus:ring-1 focus:ring-[#E91E8C] outline-none transition-all"
            >
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s.name} value={s.name}>
                  {s.name} — £{s.price} (deposit £{s.deposit})
                </option>
              ))}
            </select>
          </div>

          {deposit > 0 && (
            <div className="p-4 sm:p-5 rounded-xl bg-[#E91E8C]/15 border-2 border-[#E91E8C]/30">
              <p className="text-base sm:text-lg font-medium text-[#1a1a1a]">
                Deposit to pay via WhatsApp: <span className="oi-regular text-[#E91E8C] text-lg sm:text-xl">£{deposit}</span>
              </p>
              <p className="text-sm sm:text-base text-[#2d2d2d] mt-1">
                You&apos;ll be redirected to WhatsApp to send your booking and pay the deposit.
              </p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block playfair-display-sc-bold text-base sm:text-lg text-[#1a1a1a] mb-1.5">
                Preferred Date
              </label>
              <input
                id="date"
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 text-base rounded-xl border border-[#E8DED5] focus:border-[#E91E8C] focus:ring-1 focus:ring-[#E91E8C] outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="time" className="block playfair-display-sc-bold text-base sm:text-lg text-[#1a1a1a] mb-1.5">
                Preferred Time
              </label>
              <input
                id="time"
                type="time"
                required
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-3 text-base rounded-xl border border-[#E8DED5] focus:border-[#E91E8C] focus:ring-1 focus:ring-[#E91E8C] outline-none transition-all"
              />
            </div>
          </div>
          <div>
            <label htmlFor="notes" className="block playfair-display-sc-bold text-base sm:text-lg text-[#1a1a1a] mb-1.5">
              Notes
            </label>
            <textarea
              id="notes"
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-3 text-base rounded-xl border border-[#E8DED5] focus:border-[#E91E8C] focus:ring-1 focus:ring-[#E91E8C] outline-none transition-all resize-none"
              placeholder="Any special requests?"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-[#E91E8C] text-white oi-regular rounded-xl hover:bg-[#d0187a] hover:shadow-[0_0_30px_rgba(233,30,140,0.4)] transition-all duration-500 flex items-center justify-center gap-2 text-base sm:text-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
            Book & Pay Deposit via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
