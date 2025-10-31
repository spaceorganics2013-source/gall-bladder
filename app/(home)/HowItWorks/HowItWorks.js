export default function HowItWorks() {
  const steps = [
    {
      title: "Identify Symptoms",
      desc: "Bloating, acidity & pain after meals are signs of gallbladder stress.",
      icon: "⚠️",
    },
    {
      title: "Ayurvedic Relief",
      desc: "Herbal actives reduce discomfort & support liver health.",
      icon: "🌿",
    },
    {
      title: "Targeted Support",
      desc: "Improves bile flow & helps shrink gallbladder stones over time.",
      icon: "🩺",
    },
    {
      title: "Feel The Results",
      desc: "Feel lighter, healthier & more comfortable every day.",
      icon: "✨",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#E8F9F6] px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#0D9785]">
          How It Works
        </h2>
        <p className="text-gray-700 mt-3 text-lg max-w-2xl mx-auto font-medium">
          Your path to a healthier gallbladder — in simple healing steps
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-14 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center relative border border-gray-100 hover:-translate-y-1"
          >
            {/* Step Number */}
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0D9785] text-white w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold shadow-md">
              {index + 1}
            </span>

            {/* Emoji Icon */}
            <div className="w-16 h-16 bg-[#D6F5F0] rounded-xl flex items-center justify-center mx-auto text-3xl group-hover:scale-110 transition-transform">
              {step.icon}
            </div>

            {/* Title & Description */}
            <h3 className="font-bold text-lg text-gray-900 mt-4">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed font-semibold">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
