import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import ExperiencesMinimal from "@/components/ExperiencesMinimal";
import ContactSection from "@/components/ContactSection";
import CaseStudySection from "@/components/CaseStudySection";

const options = { next: { revalidate: 60 } };

const formattedDate = (postedAt: string) => {
    const date = new Date(postedAt);
    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    })
        .format(date)
        .replace(/\//g, "-");
};

export default async function TestPage() {
    const posts = await client.fetch(POSTS_QUERY, {}, options);

    return (
        <section className="bg-white dark:bg-zinc-900">
            {/* Hero */}
            <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-20 pt-32 pb-32">
                <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16">
                    <div className="flex-1 flex flex-col gap-8">
                        <p className="text-sm tracking-widest font-heading uppercase text-slate-700 dark:text-slate-200">
                            &mdash; Web Developer
                        </p>
                        <h1 className="font-heading font-normal text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-slate-800 dark:text-slate-100">
                            Hi, I&apos;m Chelsea{" "}
                            <span className="relative inline-block font-display italic font-medium">
                                Sanson
                                <span
                                    aria-hidden
                                    className="absolute left-0 right-0 -bottom-1 h-[6px] bg-orange-400/80"
                                />
                            </span>
                        </h1>
                        <p className="font-sans text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
                            I craft digital experiences with clean code and thoughtful design. Currently focused on building products that matter.
                        </p>

                        <div className="mt-4 flex flex-wrap gap-8 text-slate-700 dark:text-slate-300">
                            <Link
                                href="https://github.com/"
                                className="group inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider"
                            >
                                <Github className="w-4 h-4" />
                                <span className="relative">
                                    Github
                                    <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
                                </span>
                            </Link>
                            <Link
                                href="https://linkedin.com/"
                                className="group inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider"
                            >
                                <Linkedin className="w-4 h-4" />
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

                    {/* Visual anchor */}
                    <div className="w-48 md:w-60 lg:w-72 shrink-0 mx-auto md:mx-0">
                        <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                            <Image
                                src="/intro-image.JPG"
                                alt="Chelsea Sanson"
                                fill
                                quality={95}
                                sizes="(max-width: 768px) 192px, (max-width: 1024px) 240px, 288px"
                                className="object-cover grayscale hover:grayscale-0 transition duration-700"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog */}
            <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-20 pt-16 pb-24">
                <p className="text-sm tracking-widest font-heading uppercase text-slate-700 dark:text-slate-200">
                    &mdash; What&apos;s On My Mind
                </p>
                <h2 className="font-heading font-normal text-5xl md:text-6xl mt-5 mb-12 tracking-tight text-slate-800 dark:text-slate-100">
                    Blog
                </h2>

                <ul className="divide-y divide-zinc-200 dark:divide-zinc-700">
                    {posts.map((post) => (
                        <li key={post._id}>
                            <Link
                                href={`/blog/${post?.slug?.current}`}
                                className="group flex items-start justify-between gap-6 py-8"
                            >
                                <div className="flex-1">
                                    <h3 className="font-heading font-normal text-xl md:text-2xl tracking-tight text-slate-800 dark:text-slate-100 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-orange-400">
                                        {post?.title}
                                    </h3>
                                    <p className="mt-3 font-sans text-sm tracking-wider uppercase text-slate-600 dark:text-slate-400">
                                        {post.publishedAt ? formattedDate(post.publishedAt) : "No date"}
                                    </p>
                                </div>
                                <ArrowRight className="mt-3 w-6 h-6 text-slate-400 dark:text-slate-500 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-orange-400" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <ExperiencesMinimal />
            <CaseStudySection />
            <ContactSection />
        </section>
    );
}
