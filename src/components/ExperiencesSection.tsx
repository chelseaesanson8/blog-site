import { client } from "@/sanity/lib/client";
import { EXPERIENCES_QUERY } from "@/sanity/lib/queries";
import Accordion from "./Accordion";

const options = { next: { revalidate: 60 } };

export default async function ExperiencesSection() {
    const experiences = await client.fetch(EXPERIENCES_QUERY, {}, options);
    return (
        <section className="pb-12 px-6 w-full max-w-screen-2xl mx-auto">
            <h2 className="text-5xl my-10 tracking-tighter font-heading text-slate-800 dark:text-slate-200">EXPERIENCES</h2>
            <Accordion experiences={experiences} />
        </section>
    )
}

