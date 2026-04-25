import { client } from "@/sanity/lib/client";
import { EXPERIENCES_QUERY } from "@/sanity/lib/queries";
import ExperiencesMinimalAccordion from "./ExperiencesMinimalAccordion";

const options = { next: { revalidate: 60 } };

export default async function ExperiencesMinimal() {
    const experiences = await client.fetch(EXPERIENCES_QUERY, {}, options);

    return (
        <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-20 pt-16 pb-24">
            <p className="text-sm tracking-widest font-heading uppercase text-slate-700 dark:text-slate-200">
                &mdash; Experience
            </p>
            <h2 className="font-heading font-normal text-5xl md:text-6xl mt-5 mb-12 tracking-tight text-slate-800 dark:text-slate-100">
                Where I&apos;ve Been
            </h2>
            <ExperiencesMinimalAccordion experiences={experiences} />
        </div>
    );
}
