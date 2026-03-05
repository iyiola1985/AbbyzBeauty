"use client";

import { useState } from "react";

const services = [
  "Classic Set",
  "Hybrid Set",
  "Russian / Volume Set",
  "Mega Volume Set",
  "Wispy Set",
  "Bottom Lashes",
  "Spikes Add-on",
  "Full Glam Makeup (Strip Lashes)",
  "Full Glam Makeup (No Strip Lashes)",
];

export default function Booking() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", service: "", date: "", time: "", notes: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="booking" className="scroll-reveal py-20 sm:py-28 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#E91E8C] font-medium tracking-[0.2em] uppercase text-sm text-center mb-4">
          Book Your Appointment
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1a1a1a] text-center mb-12">
          Ready for Your Glam Experience?
        </h2>

        {status === "success" && (
          <div className="booking-success mb-8 p-6 bg-[#F5E1E6]/50 rounded-2xl text-center text-[#1a1a1a]">
            <span className="text-4xl mb-2 block">✨</span>
            <p className="font-semibold">Thank you! Your booking request has been received.</p>
            <p className="text-sm mt-1 opacity-80">We&apos;ll contact you shortly to confirm.</p>
          </div>
        )}

        {status === "error" && (
          <div className="mb-8 p-4 bg-red-50 rounded-2xl text-red-700 text-center text-sm">
            Something went wrong. Please try again or contact us directly via WhatsApp.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#1a1a1a] mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-[#E8DED5] focus:border-[#E91E8C] focus:ring-1 focus:ring-[#E91E8C] outline-none transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#1a1a1a] mb-1">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-[#E8DED5] focus:border-[#E91E8C] focus:ring-1 focus:ring-[#E91E8C] outline-none transition-all"
              placeholder="Your phone number"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#1a1a1a] mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-[#E8DED5] focus:border-[#E91E8C] focus:ring-1 focus:ring-[#E91E8C] outline-none transition-all"
              placeholder="Your email"
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-[#1a1a1a] mb-1">
              Service
            </label>
            <select
              id="service"
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-[#E8DED5] focus:border-[#E91E8C] focus:ring-1 focus:ring-[#E91E8C] outline-none transition-all"
            >
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-[#1a1a1a] mb-1">
                Preferred Date
              </label>
              <input
                id="date"
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#E8DED5] focus:border-[#E91E8C] focus:ring-1 focus:ring-[#E91E8C] outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-[#1a1a1a] mb-1">
                Preferred Time
              </label>
              <input
                id="time"
                type="time"
                required
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#E8DED5] focus:border-[#E91E8C] focus:ring-1 focus:ring-[#E91E8C] outline-none transition-all"
              />
            </div>
          </div>
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-[#1a1a1a] mb-1">
              Notes
            </label>
            <textarea
              id="notes"
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-[#E8DED5] focus:border-[#E91E8C] focus:ring-1 focus:ring-[#E91E8C] outline-none transition-all resize-none"
              placeholder="Any special requests?"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 bg-[#E91E8C] text-white font-medium rounded-xl hover:bg-[#d0187a] hover:shadow-[0_0_30px_rgba(233,30,140,0.4)] transition-all duration-500 disabled:opacity-70"
          >
            {status === "loading" ? "Sending..." : "Book Appointment"}
          </button>
        </form>
      </div>
    </section>
  );
}
