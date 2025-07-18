import Image from "next/image";
import HomeSection from "./pages/home";
import ServicesSection from "./pages/services";
import WhyUsSection from "./pages/whyus";
import PortfolioSection from "./pages/portfolio";
import TeamSection from "./pages/team";
import ContactSection from "./pages/contact";

export default function Home() {
  return (
    <div className="font-sans">
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#113A33]/50 backdrop-blur-lg py-6 px-8 flex items-center shadow-md rounded-b-2xl">
        {/* Left group */}
        <div className="flex gap-8 flex-1 justify-start">
          <a href="#home" className="text-white font-semibold hover:text-green-300 transition-colors">Home</a>
          <a href="#services" className="text-white font-semibold hover:text-green-300 transition-colors">Services</a>
          <a href="#why-us" className="text-white font-semibold hover:text-green-300 transition-colors">Why Us</a>
        </div>
        {/* Center logo and text */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={56} height={56} className="object-contain" />
            <span className="text-white font-bold text-2xl">eco modelers</span>
          </div>
        </div>
        {/* Right group */}
        <div className="flex gap-8 flex-1 justify-end">
          <a href="#contact" className="text-white font-semibold hover:text-green-300 transition-colors">Contact</a>
          <a href="#portfolio" className="text-white font-semibold hover:text-green-300 transition-colors">Portfolio</a>
          <a href="#team" className="text-white font-semibold hover:text-green-300 transition-colors">Team</a>
        </div>
      </nav>
      <div>
        <HomeSection />
        <ServicesSection />
        <WhyUsSection />
        <ContactSection/>
        <PortfolioSection />
        <TeamSection />
      </div>
    </div>
  );
}
