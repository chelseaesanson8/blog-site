import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { CASE_STUDIES_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

export default async function CaseStudySection() {
    const projects = await client.fetch(CASE_STUDIES_QUERY, {}, options);

    if (!projects.length) return null;

    return (
        <section className="w-full bg-stone-950 text-white">
            <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-20 pt-24 pb-24">
                <div className="flex items-end justify-between mb-16 md:mb-20">
                    <div>
                        <p className="text-sm tracking-widest font-heading uppercase text-white/60">
                            &mdash; Selected Work
                        </p>
                        <h2 className="font-heading font-normal text-5xl md:text-6xl mt-5 tracking-tight text-white">
                            Case Studies
                        </h2>
                    </div>
                    <p className="hidden md:block font-sans text-xs tracking-widest uppercase text-white/50">
                        {String(projects.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                    </p>
                </div>

                <ul className="divide-y divide-white/15 border-t border-white/15">
                    {projects.map((project, index) => {
                        const num = String(index + 1).padStart(2, "0");
                        return (
                            <li key={project._id} className="group">
                                <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16 py-12 md:py-16">
                                    <div className="shrink-0 md:w-48 lg:w-56">
                                        <span
                                            aria-hidden
                                            className="font-display italic font-normal text-7xl md:text-8xl lg:text-9xl leading-none text-white/20 transition-colors duration-500 group-hover:text-orange-400"
                                        >
                                            {num}
                                        </span>
                                    </div>

                                    <div className="flex-1 flex flex-col gap-5">
                                        <div className="flex items-baseline justify-between gap-6">
                                            <h3 className="font-heading font-normal text-3xl md:text-4xl lg:text-5xl tracking-tight text-white transition-transform duration-300 group-hover:translate-x-2">
                                                {project.title}
                                            </h3>
                                            <span className="shrink-0 font-sans text-xs tracking-widest uppercase text-white/50">
                                                {project.year}
                                            </span>
                                        </div>
                                        <p className="font-sans text-base md:text-lg leading-relaxed text-white/75 max-w-2xl">
                                            {project.description}
                                        </p>
                                        {project.stack && project.stack.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mt-1">
                                                {project.stack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2.5 py-1 font-sans text-xs tracking-wider uppercase text-white/80 border border-white/25 rounded-sm"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        <div className="mt-4 flex flex-wrap gap-8 text-white">
                                            {project.liveUrl && (
                                                <Link
                                                    href={project.liveUrl}
                                                    className="group/link inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider"
                                                >
                                                    <span className="relative">
                                                        View Live
                                                        <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-current transition-all duration-300 group-hover/link:w-full" />
                                                    </span>
                                                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                                                </Link>
                                            )}
                                            {project.sourceUrl && (
                                                <Link
                                                    href={project.sourceUrl}
                                                    className="group/link inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider"
                                                >
                                                    <span className="relative">
                                                        Source
                                                        <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-current transition-all duration-300 group-hover/link:w-full" />
                                                    </span>
                                                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
