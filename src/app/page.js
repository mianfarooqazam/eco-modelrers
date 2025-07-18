import Image from "next/image";
import HomeSection from "./pages/home";
import ServicesSection from "./pages/services";
import WhyUsSection from "./pages/whyus";
import PortfolioSection from "./pages/portfolio";
import TeamSection from "./pages/team";

export default function Home() {
  return (
    <div className="font-sans">
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#113A33]/50 backdrop-blur-lg py-6 px-8 flex justify-between items-center shadow-md rounded-b-2xl">
        <div className="flex gap-8">
          <a href="#home" className="text-white font-semibold hover:text-green-300 transition-colors">Home</a>
          <a href="#services" className="text-white font-semibold hover:text-green-300 transition-colors">Services</a>
        </div>
        <div className="flex-shrink-0 flex justify-center items-center">
          <Image src="/logo.png" alt="Logo" width={56} height={56} className="object-contain" />
        </div>
        <div className="flex gap-8">
          <a href="#why-us" className="text-white font-semibold hover:text-green-300 transition-colors">Why Us</a>
          <a href="#portfolio" className="text-white font-semibold hover:text-green-300 transition-colors">Portfolio</a>
          <a href="#team" className="text-white font-semibold hover:text-green-300 transition-colors">Team</a>
        </div>
      </nav>
      <div>
        <HomeSection />
        <ServicesSection />
        <WhyUsSection />
        <PortfolioSection />
        <TeamSection />
      </div>
    </div>
  );
}
