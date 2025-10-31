'use client'

export default function ExpertGuidanceForm() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#E8FFF2]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            ❤️ Expert Ayurveda Guidance
          </h2>
          <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto font-semibold">
            Get personalized support from our certified Ayurvedic specialists
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mt-16 items-start">

          {/* Form Card */}
          <div className="lg:col-span-2 bg-white p-10 rounded-3xl shadow-xl border border-green-100 
          backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <form className="space-y-6 text-left">

              {/* Input */}
              {[
                { label: "Full Name *", type: "text", placeholder: "Enter your full name" },
                { label: "Email *", type: "email", placeholder: "Enter your email" },
                { label: "Mobile Number *", type: "tel", placeholder: "Enter your phone number" }
              ].map((field, index) => (
                <div key={index}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 border rounded-xl shadow-sm bg-gray-50
                    focus:ring-2 focus:ring-[#0A9A6A] focus:border-[#0A9A6A] transition"
                    maxLength={field.type === "tel" ? 10 : undefined}
                  />
                  {field.type === "tel" && (
                    <p className="text-xs text-gray-500 mt-1 font-semibold">Without +91</p>
                  )}
                </div>
              ))}

              {/* Consent */}
              <label className="flex items-start gap-3 cursor-pointer text-sm">
                <input type="checkbox" required className="mt-1" />
                <span className="text-gray-700 leading-relaxed font-semibold">
                  I agree to be contacted for medical guidance. My details will be kept confidential.
                </span>
              </label>

              {/* Submit Button */}
              <button className="w-full bg-[#0B8B5D] hover:bg-[#0A764E] 
              shadow-lg text-white py-4 rounded-xl font-bold text-lg 
              transition-transform hover:scale-105">
                ✅ Request Expert Help
              </button>
            </form>
          </div>

          {/* Contact Cards */}
          <div className="space-y-6">

            {/* WhatsApp */}
            <div className="bg-white p-7 rounded-2xl shadow-lg border border-green-100
            hover:shadow-xl transition">
              <div className="text-4xl">💬</div>
              <h3 className="font-semibold text-xl mt-2">WhatsApp Support</h3>
              <p className="text-gray-600 text-sm mt-1 font-semibold">
                Quick replies to all your questions!
              </p>
              <button className="text-[#0B8B5D] font-semibold mt-3 hover:underline">
                Chat Now →
              </button>
            </div>

            {/* Call */}
            <div className="bg-white p-7 rounded-2xl shadow-lg border border-green-100 
            hover:shadow-xl transition">
              <div className="text-4xl">📞</div>
              <h3 className="font-semibold text-xl mt-2">Call Us</h3>
              <p className="text-gray-600 text-sm font-semibold">Mon – Sat: 9 AM – 6 PM</p>
              <p className="text-[#0B8B5D] font-bold mt-2 text-lg">
                +91 93126 56002
              </p>
            </div>

            {/* Response Info */}
            <div className="bg-[#ECFFF6] p-7 rounded-2xl border border-green-200 shadow 
            hover:shadow-md transition">
              <h3 className="font-semibold text-xl text-gray-900">
                🕒 Quick Response
              </h3>
              <p className="text-gray-700 mt-1 text-sm font-semibold">
                We respond within <strong>2–4 hours</strong>.
                For urgent queries, please call us directly.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
