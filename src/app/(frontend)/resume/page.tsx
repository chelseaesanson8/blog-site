import { client } from "@/sanity/lib/client";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resume — Chelsea Sanson",
};

const options = { next: { revalidate: 60 } };

export default async function ResumePage() {
    const siteSettings = await client.fetch(SITE_SETTINGS_QUERY, {}, options);

    if (!siteSettings?.resumeUrl) {
        notFound();
    }

    return (
        <div className="bg-white dark:bg-zinc-900 min-h-screen">
            <div className="mx-10 pt-12 pb-6 flex items-center justify-between">
                <div>
                    <p className="text-sm tracking-widest font-heading uppercase text-black/50 dark:text-white/50">
                        &mdash; Chelsea Sanson
                    </p>
                    <h1 className="font-heading font-normal text-5xl md:text-6xl mt-5 tracking-tight text-slate-800 dark:text-white">
                        Resume
                    </h1>
                </div>
                <a
                    href={`${siteSettings.resumeUrl}?dl=`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-black/20 dark:border-white/20 rounded-lg text-black/40 dark:text-white/40 text-xs tracking-widest uppercase px-6 py-3 hover:border-black/40 dark:hover:border-white/40 hover:text-black/60 dark:hover:text-white/60 transition-colors"
                >
                    Download
                </a>
            </div>
            <div className="mx-10 pb-16">
                <iframe
                    src={siteSettings.resumeUrl}
                    className="w-full rounded-sm border border-black/10 dark:border-white/10"
                    style={{ height: "85vh" }}
                    title="Chelsea Sanson Resume"
                />
            </div>
        </div>
    );
}
