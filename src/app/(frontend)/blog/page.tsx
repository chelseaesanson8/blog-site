import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import BlogTable from "@/components/BlogTable";
import type { Metadata } from "next"

const options = { next: { revalidate: 60 } };

const monthYear = (postedAt: string) =>
  new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' })
    .format(new Date(postedAt));

export const metadata: Metadata = {
  title: "Blog | developed by chels",
  description: "Thoughts and notes on frontend development, dev tooling, and the occasional opinionated take on my setup.",
  openGraph: {
    title: "Blog | developed by chels",
    description: "Thoughts and notes on frontend development, dev tooling, and the occasional opinionated take on my setup.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Developed by Chels",
    description: "Thoughts and notes on frontend development, dev tooling, and the occasional opinionated take on my setup.",
  },
}

export default async function Page() {
  const posts = await client.fetch(POSTS_QUERY, {}, options);
  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.publishedAt || 0).getTime();
    const dateB = new Date(b.publishedAt || 0).getTime();
    return dateB - dateA; // Newest first
  });

  const featuredPost = sortedPosts[0]; // Latest post
  const remainingPosts = sortedPosts.slice(1); // All posts except the latest

  return (
    <div className="bg-white dark:bg-zinc-900 min-h-screen w-full pt-8 sm:pt-16">
      <div className="mx-10">
        <div className="flex items-end justify-between mb-16 md:mb-20">
              <div>
                <p className="text-sm tracking-widest font-heading uppercase text-black/50 dark:text-white/60">
                    &mdash; Writing
                </p>
                <h2 className="font-heading text-5xl md:text-6xl mt-5 tracking-tight text-slate-800 dark:text-white">
                    Thoughts & <span className="font-display italic font-medium text-orange-400">notes.</span>
                </h2>
          </div>
          <div>
            <p className="hidden md:block font-sans text-xs tracking-widest uppercase text-black/50 dark:text-white/50">
              {String(posts.length).padStart(2, "0")} / {String(posts.length).padStart(2, "0")}
            </p>
            <p className="hidden md:block font-sans text-xs tracking-widest uppercase text-black/50 dark:text-white/50">
              Latest: {featuredPost.publishedAt ? monthYear(featuredPost.publishedAt) : 'No date'}</p>
          </div>
        </div>
        <hr className="border-t border-black/10 dark:border-white/10" />
        <div className="flex flex-col lg:flex-row mt-10 rounded-xl overflow-hidden bg-neutral-100 dark:bg-zinc-800 border border-black/10 dark:border-white/10">
          <div className="lg:w-2/5 w-full shrink-0">
              {featuredPost?.mainImage && (
              <Image
                className="w-full h-full object-cover"
                src={urlFor(featuredPost.mainImage).auto("format").url()}
                alt={featuredPost?.mainImage?.alt || " "}
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
          </div>
          <div className="flex flex-col justify-center px-8 py-8 gap-6">
            <div>
              <p className="text-xs tracking-widest uppercase text-orange-400 font-sans mb-3">
                  Featured &middot; {featuredPost.category?.title}
              </p>
              <h3 className="font-heading text-3xl text-slate-700 dark:text-white">{featuredPost.title}</h3>
              <p className="py-4 font-sans text-sm text-slate-600 dark:text-white/60 leading-relaxed max-w-xl">
                {featuredPost.excerpt}
              </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6 gap-2 text-xs font-sans text-black/40 dark:text-white/40 tracking-wide">
              <span className="text-orange-400">{featuredPost?.author?.name}</span>
              <span>{featuredPost.publishedAt ? monthYear(featuredPost.publishedAt) : ''}</span>
              <span>{featuredPost.readTime} min read</span>
            </div>
            <div>
              <Link href={`/blog/${featuredPost?.slug?.current}`}>
                <button className="inline-flex items-center gap-2 border border-black/20 dark:border-white/20 rounded-lg text-black/40 dark:text-white/40 text-xs tracking-widest uppercase px-6 py-3 hover:border-black/40 dark:hover:border-white/40 hover:text-black/60 dark:hover:text-white/60 transition-colors">Read Post →</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BlogTable posts={remainingPosts} />
    </div>
  );
}
