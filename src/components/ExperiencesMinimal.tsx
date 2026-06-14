import { client } from "@/sanity/lib/client";
import { EXPERIENCES_QUERY } from "@/sanity/lib/queries";
import ExperiencesMinimalAccordion from "./ExperiencesMinimalAccordion";

const options = { next: { revalidate: 60 } };

export default async function ExperiencesMinimal() {
    const experiences = await client.fetch(EXPERIENCES_QUERY, {}, options);

    return (
        <div className="mx-10 pt-6 pb-24">
            <p className="text-sm tracking-widest font-heading uppercase text-black/50 dark:text-white/50">
                &mdash; Experiences
            </p>
            <h2 className="font-heading font-normal text-5xl md:text-6xl mt-5 mb-12 tracking-tight text-slate-800 dark:text-white">
                Where I&apos;ve Been
            </h2>
            <ExperiencesMinimalAccordion experiences={experiences} />
        </div>
    );
}
