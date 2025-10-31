import Image from "next/image";

export default function Certifications() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#0D9785] mb-10">
          Certified Natural Goodness For You
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-10 place-items-center">

          {/* GMP Certified */}
          <div className="text-center">
            <Image
              src="/certifications/gmp.avif"
              alt="GMP Certified"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
            <p className="text-sm mt-2 text-[#0D9785] font-medium">
              GMP Certified Product
            </p>
          </div>

          {/* ISO Certified */}
          <div className="text-center">
            <Image
              src="/certifications/iso.png"
              alt="ISO Certified"
              width={100}
              height={100}
              className="object-contain"
            />
            <p className="text-sm mt-2 text-[#0D9785] font-medium">
              ISO Certified
            </p>
          </div>

          {/* AYUSH Approved */}
          <div className="text-center">
            <Image
              src="/certifications/ayush.avif"
              alt="AYUSH Approved"
              width={100}
              height={100}
              className="object-contain"
            />
            <p className="text-sm mt-2 text-[#0D9785] font-medium">
              AYUSH Approved
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
