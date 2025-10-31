import ProductCard from "./ProductCard/ProductCard";

export default function KitDetails() {
  return (
    <section id="kit-details" className="py-20 bg-[#F4FFFD]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0D9785]">
            Lithonil GB Kit
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-3 font-medium">
            Complete Ayurvedic care for gallbladder health, bile flow & digestive wellness
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ProductCard
            id="gallveda"
            name="GallVeda"
            image="/kit/gallveda.png"
            description="Reduces stone formation & supports healthy bile flow."
            features={[
              "Helps dissolve gallstones",
              "Reduces gallbladder inflammation",
              "Improves digestion",
              "Balances Pitta Dosha",
            ]}
            dosage="2 capsules twice a day"
          />

          <ProductCard
            id="acd"
            name="ACD Capsules"
            image="/kit/acd.png"
            description="Provides relief from acidity & post-meal discomfort."
            features={[
              "Controls acidity & reflux",
              "Reduces gas & bloating",
              "Improves food breakdown",
              "Contains Ajwain & Fennel",
            ]}
            dosage="1–2 capsules after meals"
          />

          <ProductCard
            id="nuliv"
            name="NuLiv-DS"
            image="/kit/liv.png"
            description="Liver support for optimal digestion & fat metabolism."
            features={[
              "Enhances liver function",
              "Improves bile quality",
              "Supports detoxification",
              "Strengthens metabolism",
            ]}
            dosage="2 capsules twice a day"
          />
        </div>
      </div>
    </section>
  );
}
