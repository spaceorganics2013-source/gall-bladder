import HeroSection from "@/app/(home)/HeroSection/HeroSection";
import Certifications from "./(home)/Certification/Certification";
import HowItWorks from "./(home)/HowItWorks/HowItWorks";
import KitDetails from "./(home)/KitDetails/KitDetails";
import ProductDetail from "./(home)/PittashrayaProduct/ProductDetails";
import Testimonials from "./(home)/Testimonials/Testimonials";
import LaunchOfferSection from "./(home)/LaunchOfferSection/LaunchOfferSection";
import ExpertGuidanceForm from "./(home)/ExpertGuidance/ExpertGuidanceForm";
import Faqs from './(home)/Faqs/Faqs'
import Footer from "./(home)/Footer/Footer";


export default function Home() {

  return (
    <div>

      <HeroSection />
      <Certifications />
      <HowItWorks />
      <KitDetails />
      <ProductDetail />
      <Testimonials />
      <LaunchOfferSection />
      <ExpertGuidanceForm />
      <Faqs/>
      <Footer />
    

    </div>
  )

}