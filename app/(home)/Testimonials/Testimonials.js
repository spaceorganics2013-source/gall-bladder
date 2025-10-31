export default function Testimonials() {
  const reviews = [
    {
      text: `"After years of post-meal discomfort, I finally found relief with the Lithonil GB Kit. The natural formulation works wonders!"`,
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
    },
    {
      text: `"Pittashraya Syrup is a game changer. The cooling effect is immediate and it tastes pleasant unlike other medicines."`,
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
    },
    {
      text: `"I've been using this for 3 months now. My digestion has improved significantly and I feel lighter after meals."`,
      name: "Anita Desai",
      location: "Bangalore",
      rating: 5,
    },
    {
      text: `"GMP certified and 100% Ayurvedic – exactly what I was looking for. Highly recommend for anyone with gallbladder issues."`,
      name: "Vikram Patel",
      location: "Pune",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#E8FFF5] to-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#0C5D4A]">
          ❤️ Loved By Thousands
        </h2>
        <p className="text-gray-600 mt-3 text-lg font-medium max-w-2xl mx-auto">
          Real stories from those who reclaimed digestive comfort – naturally!
        </p>

        {/* Review Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-[#0D8A5A]/20 p-6 text-left 
              space-y-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Rating */}
              <div className="flex gap-1 text-[#FFC107] text-xl">
                {"★".repeat(review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {review.text}
              </p>

              {/* Name + Location */}
              <div className="pt-3 border-t border-gray-200">
                <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                <p className="text-gray-500 text-xs">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-14">
          <button className="bg-gradient-to-r from-[#0C8A74] to-[#0DAF91] hover:opacity-95 text-white px-10 py-3 rounded-full font-semibold shadow-lg transition">
            Start Your Relief Journey 🚀
          </button>
        </div>

      </div>
    </section>
  )
}
