import Link from "next/link";
import Image from "next/image";

export default async function HomeIntro() {
  return (
    <div className="relative text-slate-800 dark:text-slate-200 py-10 px-6 sm:px-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mx-auto">
        {/* Image Section */}
        <div className="relative w-50 md:w-50">
          <Image
            src="/intro-image.JPG"
            alt="intro-image"
            width={600}
            height={400}
            className="rounded-lg shadow-lg dark:shadow-zinc-800 transform hover:scale-105 transition duration-300 max-w-full h-auto"
          />
          {/* Floating Badge */}
          <span className="absolute top-4 left-4 bg-orange-400 text-xs text-white px-3 py-1 rounded-full shadow-md dark:shadow-zinc-800 font-bold font-heading">
            me literally in a cave
          </span>
        </div>

        {/* Text Section */}
        <div className="space-y-5 md:text-left">
          <h2 className="text-5xl sm:text-2xl md:text-5xl py-5 font-black font-heading text-slate-800 dark:text-slate-200 tracking-tighter w-full md:w-auto whitespace-nowrap">
            CHELSEA SANSON
          </h2>

          <h2 className="text-2xl dark:text-white text-slate-700 dark:text-slate-400 italic font-heading tracking-tighter">
            coffee enthusiast <span className="text-orange-400">(i own an AeroPress)</span>
          </h2>
          <h2 className="text-2xl dark:text-white text-slate-700 dark:text-slate-400 italic font-heading tracking-tighter">
            beep boop music enjoyer
          </h2>
          <h2 className="text-2xl dark:text-white text-slate-700 dark:text-slate-400 italic font-heading tracking-tighter">
            sometimes in a <span className="underline decoration-wavy decoration-orange-400">cave?</span>
          </h2>


          {/* CTA Button */}
          <Link
            href="/posts"
            className="inline-block bg-slate-700 dark:bg-zinc-800 text-white dark:text-slate-200 px-6 py-2 rounded-md text-lg font-medium shadow-md dark:shadow-zinc-900 hover:bg-zinc-400 dark:hover:bg-zinc-700 transition font-heading"
          >
            buy me a coffee ☕️
          </Link>
        </div>
      </div>
    </div>
  );
}
