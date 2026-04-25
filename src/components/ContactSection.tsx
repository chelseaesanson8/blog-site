import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const BG_IMAGE = "https://images.unsplash.com/photo-1599940824219-e6aa9be5fba2?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function ContactSection() {
    return (
        <section className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-20 py-16 md:py-24">
            <div className="relative overflow-hidden rounded-3xl min-h-[520px] md:min-h-[600px] flex items-center justify-center">
                <Image
                    src={BG_IMAGE}
                    alt=""
                    fill
                    sizes="(max-width: 1536px) 100vw, 1536px"
                    className="object-cover"
                />
                <div aria-hidden className="absolute inset-0 bg-black/65" />
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[80%] bg-[radial-gradient(ellipse_70%_80%_at_50%_100%,_rgba(251,146,60,0.55),_transparent_70%)] blur-2xl"
                />

                <div className="relative z-10 w-full max-w-3xl text-center px-8 py-20 flex flex-col items-center gap-8">
                    <p className="text-sm tracking-widest font-heading uppercase text-white/80">
                        &mdash; Get In Touch
                    </p>
                    <h2 className="font-heading font-normal text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-white">
                        Let&apos;s build something{" "}
                        <span className="font-display italic font-medium">together</span>.
                    </h2>
                    <p className="font-sans text-base md:text-lg text-white/80 max-w-xl leading-relaxed">
                        Have a project in mind, a role to fill, or just want to say hi? My inbox is open.
                    </p>

                    <Link
                        href="mailto:chels@developedbychels.com"
                        className="group inline-flex items-center gap-3 font-heading text-base md:text-lg uppercase tracking-wider text-white"
                    >
                        <span className="relative">
                            chels@developedbychels.com
                            <span className="absolute left-0 -bottom-0.5 h-px w-full bg-white/60 transition-all duration-300 group-hover:bg-orange-400" />
                        </span>
                        <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-orange-400" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
