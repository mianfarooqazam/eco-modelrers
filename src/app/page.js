import Image from "next/image";
import HomeSection from "./pages/home";
import ServicesSection from "./pages/services";
import WhyUsSection from "./pages/whyus";
import PortfolioSection from "./pages/portfolio";
import TeamSection from "./pages/team";
import ContactSection from "./pages/contact";
import GsapSmoothScroll from "./components/GsapSmoothScroll";

export default function Home() {
  return (
    <div className="font-sans">
      <GsapSmoothScroll />
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#113A33]/50 backdrop-blur-lg px-5 py-5 flex items-center shadow-md rounded-b-2xl">
        {/* Left group */} 
        <div className="flex gap-8 flex-1 justify-start">
          <a href="#home" className="text-white font-semibold hover:text-green-300 transition-colors">HOME</a>
          <a href="#services" className="text-white font-semibold hover:text-green-300 transition-colors">SERVICES</a>
          <a href="#why-us" className="text-white font-semibold hover:text-green-300 transition-colors">WHY US</a>
        </div>
        {/* Center logo and text */}
        <div className="flex items-center flex-shrink-0">
          <Image src="/logo.png" alt="Logo" width={60} height={60} className="object-contain" />
          <div className="flex flex-col items-start ml-2">
            <span className="text-white font-bold text-2xl leading-tight">ECO</span>
            <span className="text-white font-bold text-2xl leading-tight">MODELERS</span>
          </div>
        </div>
        {/* Right group */}
        <div className="flex gap-8 flex-1 justify-end">
          <a href="#contact" className="text-white font-semibold hover:text-green-300 transition-colors">CONTACT</a>
          <a href="#portfolio" className="text-white font-semibold hover:text-green-300 transition-colors">PORTFOLIO</a>
          <a href="#team" className="text-white font-semibold hover:text-green-300 transition-colors">TEAM</a>
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
