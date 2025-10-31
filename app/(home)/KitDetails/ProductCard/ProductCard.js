export default function ProductCard({ id, name, image, description, features, dosage }) {
  return (
    <div className="rounded-xl bg-white text-gray-900 shadow-md overflow-hidden hover:shadow-lg transition">
      
      {/* Image Section */}
      <div className="relative">
        <div className="aspect-square bg-gray-100 flex items-center justify-center p-6 font-semibold">
          <img src={image} alt={name} className="w-full h-full object-contain" />
        </div>

        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <span className="bg-[#0D9785] text-white text-xs font-semibold px-2 py-1 rounded-md shadow">
            GMP
          </span>
          <span className="bg-[#0D9785] text-white text-xs font-semibold px-2 py-1 rounded-md shadow">
            ISO
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4 font-semibold">
        <div>
          <h3 className="font-bold text-[#0D9785] text-xl">{name}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>

        {/* Features List */}
        <ul className="space-y-2">
          {features?.map((item, index) => (
            <li key={index} className="flex gap-2 text-sm text-gray-700">
              ✅ <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Dosage Box */}
        <div className="bg-[#0D9785] rounded-md p-3 text-sm font-medium text-white">
          <span className="text-white font-semibold">Dosage:</span> {dosage}
        </div>
      </div>
    </div>
  );
}
