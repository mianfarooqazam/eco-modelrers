import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">
      <section id="home" className="h-screen flex flex-col items-center justify-center bg-blue-600 px-[10px] mx-4 md:mx-16 my-8 rounded-2xl">
        <h1 className="text-4xl font-bold mb-4">Home</h1>
        <p className="text-lg">Welcome to our website! We provide innovative solutions to help your business grow.</p>
      </section>
      <section id="services" className="h-screen flex flex-col items-center justify-center bg-green-600 px-[10px] mx-4 md:mx-16 my-8 rounded-2xl">
        <h2 className="text-3xl font-semibold mb-4">Services</h2>
        <p className="text-lg">Our services include web development, digital marketing, and business consulting tailored to your needs.</p>
      </section>
      <section id="why-us" className="h-screen flex flex-col items-center justify-center bg-yellow-600 px-[10px] mx-4 md:mx-16 my-8 rounded-2xl">
        <h2 className="text-3xl font-semibold mb-4">Why Us</h2>
        <p className="text-lg">We stand out for our commitment to quality, customer satisfaction, and innovative approaches to solving problems.</p>
      </section>
      <section id="portfolio" className="h-screen flex flex-col items-center justify-center bg-purple-600 px-[10px] mx-4 md:mx-16 my-8 rounded-2xl">
        <h2 className="text-3xl font-semibold mb-4">Portfolio</h2>
        <p className="text-lg">Take a look at some of our recent projects that showcase our expertise and creativity.</p>
      </section>
      <section id="team" className="h-screen flex flex-col items-center justify-center bg-pink-600 px-[10px] mx-4 md:mx-16 my-8 rounded-2xl">
        <h2 className="text-3xl font-semibold mb-4">Team</h2>
        <p className="text-lg">Meet our talented and dedicated team members who make everything possible.</p>
      </section>
    </div>
  );
}
