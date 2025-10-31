import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-[#F8FAF9] py-28 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content - image an */}
        <div>
          <Image
            src="/image/kit.png"
            alt="Product Display"
            width={650}
            height={420}
            className="rounded-2xl shadow-md w-full"
          />
        </div>



        {/* Right Product Image */}

        <div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-10">
            Lithonil GB Kit & Pittashraya Syrup
          </h1>

          <h1 className="text-4xl md:text-3xl font-semibold leading-tight text-gray-900">
            Support Bile Flow & <br /> Digestive Ease — Naturally.
          </h1>

          <p className="mt-4 text-gray-600 text-lg max-w-md font-semibold">
            Don&apos;t let gallbladder discomfort slow you down.
          </p>



          {/* ✅ Single Buy Button */}
          <div className="mt-8">
            <button className="bg-gradient-to-r from-[#0C8A74] to-[#0DAF91] hover:opacity-90 text-white px-8 py-3 rounded-full font-semibold shadow-md transition">
              Buy Now
            </button>

          </div>


          {/* Trust Badges */}
          <div className="flex gap-3 mt-6 flex-wrap">

            <span className="px-4 py-2 text-sm font-semibold bg-white border border-[#0D9785] rounded-full text-[#0D9785] flex items-center gap-2 shadow-sm hover:shadow-md transition">
              ✅ No Side Effects
            </span>

            <span className="px-4 py-2 text-sm font-semibold bg-white border border-[#0D9785] rounded-full text-[#0D9785] flex items-center gap-2 shadow-sm hover:shadow-md transition">
              🌿 100% Ayurvedic
            </span>

            <span className="px-4 py-2 text-sm font-semibold bg-white border border-[#0D9785] rounded-full text-[#0D9785] flex items-center gap-2 shadow-sm hover:shadow-md transition">
              🌱 Natural Herbs
            </span>


          </div>



        </div>


      </div>
    </section>
  );
}
