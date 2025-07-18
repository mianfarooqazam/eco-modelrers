import CardSwap, { Card } from '../components/CardSwap';

export default function WhyUsSection() {
  return (
    <section id="why-us" style={{ background: '#113A33', position: 'relative' }} className="h-screen flex flex-col items-center justify-center px-[10px] mx-4 md:mx-16 my-8 rounded-2xl">
      <h2 className="text-3xl font-semibold mb-4">Why Us</h2>
      <p className="text-lg mb-8">We stand out for our commitment to quality, customer satisfaction, and innovative approaches to solving problems.</p>
      <div style={{ height: '400px', width: '500px', position: 'relative' }}>
        <CardSwap cardDistance={60} verticalDistance={70} delay={5000} pauseOnHover={false}>
          <Card customClass="bg-gradient-to-br from-green-400 to-blue-500">
            <h3 className="text-3xl font-bold mb-2 flex flex-col items-center justify-center" style={{ fontFamily: 'numans, sans-serif', textAlign: 'center' }}>
              Expert Team
            </h3>
            <p>Our professionals bring years of experience and expertise.</p>
          </Card>
          <Card customClass="bg-gradient-to-br from-yellow-400 to-pink-500">
            <h3 className="text-3xl font-bold mb-2 flex flex-col items-center justify-center" style={{ fontFamily: 'numans, sans-serif', textAlign: 'center' }}>
              Innovative Solutions
            </h3>
            <p>We use the latest technology to deliver creative results.</p>
          </Card>
          <Card customClass="bg-gradient-to-br from-purple-400 to-red-500">
            <h3 className="text-3xl font-bold mb-2 flex flex-col items-center justify-center" style={{ fontFamily: 'numans, sans-serif', textAlign: 'center' }}>
              Customer Focus
            </h3>
            <p>Your satisfaction is our top priority at every step.</p>
          </Card>
        </CardSwap>
      </div>
    </section>
  );
} 