import Link from "next/link";
import Image from "next/image";

export default async function HomeIntro() {
  return (
    <div className="relative text-slate-800 py-10 px-6 sm:px-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-5xl mx-auto">
        {/* Image Section */}
        <div className="relative w-full md:w-auto">
          <Image
            src="/intro-image.JPG"
            alt="intro-image"
            width={600}
            height={400}
            className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300 max-w-full h-auto"
          />
          {/* Floating Badge */}
          <span className="absolute top-4 left-4 bg-orange-400 text-xs text-white px-3 py-1 rounded-full shadow-md font-bold font-heading">
            me literally in a cave
          </span>
        </div>

        {/* Text Section */}
        <div className="space-y-5 md:text-left">
          <h2 className="text-3xl sm:text-2xl md:text-3xl font-bold font-heading text-slate-800 tracking-wide w-full md:w-auto whitespace-nowrap">
            web developer building cool stuff
          </h2>
          <h2 className="text-lg sm:text-xl text-slate-800 italic font-sans">
            coffee enthusiast <span className="text-orange-400">(i own an AeroPress)</span>
          </h2>
          <h2 className="text-lg sm:text-xl text-slate-800 italic font-sans">
            beep boop music enjoyer
          </h2>
          <h2 className="text-lg sm:text-xl text-slate-800 italic font-sans">
            sometimes in a <span className="underline decoration-wavy decoration-orange-400">cave?</span>
          </h2>
          

          {/* CTA Button */}
          <Link 
            href="/posts"
            className="inline-block bg-slate-500 text-white px-6 py-2 rounded-md text-lg font-medium shadow-md hover:bg-slate-600 transition font-heading"
          >
            buy me a coffee ☕️
          </Link>
        </div>
      </div>
    </div>
  );
}
