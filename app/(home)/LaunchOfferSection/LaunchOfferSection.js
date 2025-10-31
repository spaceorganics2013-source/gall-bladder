'use client'

import { useState, useEffect } from "react";

export default function LaunchOfferSection() {
  const targetTime = new Date().getTime() + (48 * 60 * 60 * 1000);

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetTime - now;

    if (difference <= 0) {
      return { hours: 0, mins: 0, secs: 0 };
    }

    return {
      hours: Math.floor(difference / (1000 * 60 * 60)),
      mins: Math.floor((difference / (1000 * 60)) % 60),
      secs: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 bg-gradient-to-br from-[#E8FDF3] via-[#F7FFFB] to-[#FFFFFF] text-center relative overflow-hidden">

      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[200px] bg-green-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-5xl mx-auto px-6 relative">

        <span className="inline-block bg-[#0BA36E]/10 text-[#0D9785] text-m font-bold px-5 py-2 rounded-full tracking-wide mb-5 animate-pulse">
          🎉 Launch Special Offer
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0D9785] leading-snug drop-shadow-sm">
          First 10 Customers Get <span className="text-[#D10000]">20% Discount</span> 🥳
        </h2>

        <p className="text-gray-700 mt-3 text-lg">
          ✅ Plus, <strong>FREE WhatsApp Consultation</strong> with our certified Ayurveda Expert
        </p>

        {/* Countdown Box */}
        <div className="mt-10 border border-[#0AA26B]/20 rounded-3xl py-10 px-4 shadow-xl bg-white">
          <p className="text-gray-600 text-sm mb-3 font-bold">
            ⏱ Hurry! Offer ends in:
          </p>

          <div className="flex items-center justify-center gap-6 md:gap-10">
            {["hours", "mins", "secs"].map((unit, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-black text-[#0D9785] bg-[#E9FFF4] rounded-xl px-6 py-4 border-2 border-[#0BA36E]/20 shadow-sm">
                  {String(timeLeft[unit]).padStart(2, "0")}
                </div>
                <span className="text-xs font-semibold text-[#0D9785] uppercase mt-2 block tracking-wider">
                  {unit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-5 flex justify-center gap-4 flex-wrap">
          <div className="mt-5 flex justify-center">
            <button className="bg-[#0D9785] hover:bg-[#0A764E] shadow-lg text-white px-12 py-4 rounded-full font-bold tracking-wide text-lg transition-transform transform hover:scale-105">
              🛍️ Buy Now
            </button>
          </div>

        </div>

        <p className="text-gray-500 text-m mt-5 font-bold">
          *Limited stock available. Offer auto-applied at checkout.
        </p>

      </div>
    </section>
  );
}
