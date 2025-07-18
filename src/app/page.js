import HomeSection from "./pages/home";
import ServicesSection from "./pages/services";
import WhyUsSection from "./pages/whyus";
import PortfolioSection from "./pages/portfolio";
import TeamSection from "./pages/team";

export default function Home() {
  return (
    <div className="font-sans">
      <HomeSection />
      <ServicesSection />
      <WhyUsSection />
      <PortfolioSection />
      <TeamSection />
    </div>
  );
}
