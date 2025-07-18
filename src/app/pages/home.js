import TypewriterTitle from "../components/TypewriterTitle";

export default function HomeSection() {
  return (
    <section id="home" className="h-screen flex flex-col md:flex-row items-center justify-center px-[10px] mx-4 md:mx-16 rounded-2xl bg-purple-600">
      {/* Left: Typewriter text, 50% width */}
      <div className="flex-1 md:basis-1\/2 flex items-end justify-center w-full h-full pb-12">
        <TypewriterTitle />
      </div>
      {/* Right: Image placeholder, 50% width */}
      <div className="flex-1 md:basis-1\/2 flex items-center justify-center w-full h-full">
        <div className="w-72 h-72 bg-white/30 rounded-xl flex items-center justify-center text-white text-lg font-semibold">
          Image Placeholder
        </div>
      </div>
    </section>
  );
} 