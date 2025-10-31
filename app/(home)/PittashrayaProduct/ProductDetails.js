import Image from "next/image";

export default function ProductDetail() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F2FFFB] to-[#E8F7F3]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">

        {/* Product Image */}
        <div className="relative group">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/kit/syrup.png"
              alt="Pittashraya Syrup"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Floating Badge */}
          <span className="absolute top-4 left-4 bg-white shadow-lg text-[#0D8A5A] text-xs font-semibold px-3 py-1 rounded-full z-10">
            🍃 Cool & Soothing
          </span>
        </div>

        {/* Product Info */}
        <div className="space-y-6">

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#094E46] leading-tight">
            Pittashraya Syrup
          </h2>

          {/* Short Description */}
          <p className="text-lg text-gray-700 leading-relaxed">
            Cooling, Pitta-pacifying syrup formulated for acidity relief, digestive ease & biliary comfort.
          </p>

          {/* Key Benefits */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <p className="font-semibold text-[#0D8A5A] mb-3">✨ Key Benefits</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-2">✅ <span>Balances excess Pitta dosha</span></li>
              <li className="flex gap-2">✅ <span>Relieves acidity & burning sensation</span></li>
              <li className="flex gap-2">✅ <span>Supports digestion & gallbladder health</span></li>
              <li className="flex gap-2">✅ <span>Refreshing taste, easy to consume</span></li>
            </ul>
          </div>

          {/* Dosage Box */}
          <div className="bg-[#F1FFFA] border border-[#0D8A5A]/20 rounded-xl p-4">
            <p className="text-sm font-semibold text-[#0D8A5A]">Dosage</p>
            <p className="text-sm text-gray-700 mt-1">
              15–30 ml twice a day, after meals or as directed by the physician
            </p>
          </div>

          {/* Pairing Suggestion */}
          <div className="bg-[#E9FFF8] border border-[#0D9785]/30 rounded-xl p-4 text-sm text-gray-700">
            <strong>Best Results:</strong> Pair with <span className="text-[#0D8A5A] font-semibold">Lithonil GB Kit</span> for complete gallbladder & digestive care.
          </div>

        </div>
      </div>
    </section>
  );
}
