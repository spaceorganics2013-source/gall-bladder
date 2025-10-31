'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is the Lithonil GB Kit safe for long-term use?",
    answer:
      "Yes, it contains classical Ayurvedic herbs designed for digestive and gallbladder wellness. Still, follow dosage guidelines and consult a doctor for prolonged use."
  },
  {
    question: "How soon can I expect results?",
    answer:
      "Most users start noticing improvements within 4–6 weeks depending on diet, lifestyle & stone size."
  },
  {
    question: "Can I take these products with other medications?",
    answer:
      "Yes, but always keep a 1–2 hour gap between allopathic medicines and Ayurvedic supplements."
  },
  {
    question: "What is the recommended dosage?",
    answer:
      "2 tablets in morning & 2 tablets at night after meals, or as advised by your physician."
  },
  {
    question: "Are there any side effects?",
    answer:
      "No major side effects reported. Mild detox symptoms like increased urination may occur initially."
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently, we ship only within India. International shipping may be available soon."
  }
];

export default function FAQSection() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-10 bg-gradient-to-b from-[#F6FFF9] to-[#E9FFF2]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-7">
          <h2 className="text-4xl font-extrabold text-[#0A5C3A]">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 mt-3 font-semibold">
            Answers to our most common queries on gallbladder wellness & care
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-lg transition-all border border-gray-200 rounded-2xl p-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left font-semibold text-gray-800 text-lg"
              >
                {faq.question}
                <span className="text-[#0A5C3A] text-2xl font-bold">
                  {active === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 text-gray-600 text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 bg-white shadow-xl border border-gray-200 rounded-2xl p-8">
          <h3 className="font-bold text-xl text-[#0A5C3A] mb-3">Important Disclaimers</h3>
          <ul className="text-gray-600 space-y-1 text-sm mb-5 leading-relaxed font-semibold">
            <li>• Information is for wellness & educational purposes only.</li>
            <li>• Consult your physician if you have medical conditions.</li>
            <li>• Seek urgent care in case of severe symptoms.</li>
            <li>• Results vary based on individual health & lifestyle.</li>
          </ul>

          <button className="bg-[#0B8B5D] hover:bg-[#09754D] text-white px-8 py-3 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-transform hover:scale-105 mx-auto block">
            ✅ I Understand — Proceed
          </button>
        </div>
      </div>
    </section>
  );
}
