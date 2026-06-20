import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import ExperiencesMinimal from "@/components/ExperiencesMinimal";
import ContactSection from "@/components/ContactSection";
import CaseStudySection from "@/components/CaseStudySection";
import BlogTable from "@/components/BlogTable";
import { Metadata } from "next";

const options = { next: { revalidate: 60 } };

export const metadata: Metadata = {
  title: "Chelsea Sanson | Frontend Developer",
  description: "Frontend developer based in Northeast Ohio. I build things for the web, write about it, and share my work through case studies and a blog.",
  openGraph: {
    title: "Chelsea Sanson | Frontend Developer",
    description: "Frontend developer based in Northeast Ohio. I build things for the web, write about it, and share my work through case studies and a blog.",
    type: "website",
    images: ["/opengraph-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chelsea Sanson | Frontend Developer",
    description: "Frontend developer based in Northeast Ohio. I build things for the web, write about it, and share my work through case studies and a blog.",
    images: ["/opengraph-image.jpg"],
  },
}

export default async function Page() {
    const posts = await client.fetch(POSTS_QUERY, {}, options);

    return (
        <section className="bg-white dark:bg-zinc-900">
            <div className="max-w-8xl mx-auto px-10 md:px-16 lg:px-24 pt-6 lg:pt-24 pb-12 lg:pb-24">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 md:gap-24 md:items-center">
                    <div>
                        <div className="relative aspect-video lg:aspect-[3/4] overflow-hidden rounded-sm">
                            <Image
                                src="/intro-image.JPG"
                                alt="Chelsea Sanson"
                                fill
                                quality={95}
                                sizes="(max-width: 768px) 90vw, 280px"
                                className="object-cover grayscale hover:grayscale-0 transition duration-700"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <p className="text-sm tracking-widest font-heading uppercase text-black/50 dark:text-white/50">
                            &mdash; Chelsea Sanson
                        </p>
                        <h1 className="font-heading font-normal text-5xl md:text-7xl lg:text-7xl leading-[1.05] tracking-tight text-slate-800 dark:text-white">
                            Building things for the{" "}
                            <span className="relative inline-block font-display italic font-medium">
                                web
                                <span
                                    aria-hidden
                                    className="absolute left-0 right-0 -bottom-1 h-[6px] bg-orange-400/80"
                                />
                            </span>
                        </h1>
                        <p className="font-sans text-md md:text-xl text-black/80 dark:text-white/75 max-w-2xl leading-relaxed">
                            I&apos;m Chels, a frontend developer based in Northeast Ohio. When I&apos;m not working with code you&apos;ll probably find me hanging out watching competitive Call of Duty, outdoors somewhere, or listening to edm music.
                        </p>

                        <div className="mt-4 flex flex-wrap gap-8 text-slate-700 dark:text-white/70">
                            <Link
                                href="https://github.com/chelseaesanson8"
                                target="_blank" rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/></svg>
                                <span className="relative">
                                    Github
                                    <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
                                </span>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/chelseaesanson"
                                target="_blank" rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"/></svg>
                                <span className="relative">
                                    LinkedIn
                                    <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
                                </span>
                            </Link>
                            <Link
                                href="mailto:chels@developedbychels.com"
                                className="group inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider"
                            >
                                <Mail className="w-4 h-4" />
                                <span className="relative">
                                    Message Me
                                    <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-10 pt-16">
                <p className="text-sm tracking-widest font-heading uppercase text-black/50 dark:text-white/50">
                    &mdash; What&apos;s On My Mind
                </p>
                <div className="flex items-end justify-between mt-5">
                    <h2 className="font-heading font-normal text-5xl md:text-6xl tracking-tight text-slate-800 dark:text-white">
                        Thoughts
                    </h2>
                    <Link href="/blog" className="hidden sm:block">
                        <span className="inline-flex items-center gap-2 border border-black/20 dark:border-white/20 rounded-lg text-black/40 dark:text-white/40 text-xs tracking-widest uppercase px-6 py-3 hover:border-black/40 dark:hover:border-white/40 hover:text-black/60 dark:hover:text-white/60 transition-colors">View All →</span>
                    </Link>
                </div>
            </div>
            <BlogTable posts={posts} />

            <div className="sm:hidden mx-10 pb-10">
                <Link href="/blog">
                    <span className="inline-flex items-center gap-2 border border-black/20 dark:border-white/20 rounded-lg text-black/40 dark:text-white/40 text-xs tracking-widest uppercase px-6 py-3 hover:border-black/40 dark:hover:border-white/40 hover:text-black/60 dark:hover:text-white/60 transition-colors">View All →</span>
                </Link>
            </div>

            <ExperiencesMinimal />
            <CaseStudySection />
            <ContactSection />
        </section>
    );
}

