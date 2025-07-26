import { client } from "@/sanity/lib/client";
import { EXPERIENCES_QUERY } from "@/sanity/lib/queries";
import Accordion from "./Accordion";
import Link from "next/link";

const options = { next: { revalidate: 60 } };

export default async function ExperiencesSection() {
    const experiences = await client.fetch(EXPERIENCES_QUERY, {}, options);
    return (
        <section className="pb-12 px-6 w-full max-w-screen-2xl mx-auto">
            <div className="flex justify-between items-center">
                <h2 className="text-5xl my-10 tracking-tighter font-heading text-slate-800 dark:text-slate-200">EXPERIENCES</h2>
                <Link
                    href="/posts"
                    className="inline-block bg-slate-700 dark:bg-zinc-800 text-white dark:text-slate-200 px-6 py-2 rounded-md text-lg font-medium shadow-md dark:shadow-zinc-900 hover:bg-zinc-400 dark:hover:bg-zinc-700 transition font-heading"
                >
                    resume
                </Link>
            </div>
            <Accordion experiences={experiences} />
        </section>
    )
}

