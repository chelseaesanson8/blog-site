import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const options = { next: { revalidate: 60 } };

const formattedDate = (postedAt: string) => {
  const date = new Date(postedAt);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  }).format(date).replace(/\//g, '-')
}

const monthYear = (postedAt: string) =>
  new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' })
    .format(new Date(postedAt));

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
        <div className="flex flex-col lg:flex-row mt-10 rounded-xl overflow-hidden bg-gray-100/80 dark:bg-zinc-800 border border-black/10 dark:border-white/10">
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
                  Featured &middot; {featuredPost.category}
              </p>
              <h3 className="font-display text-3xl text-slate-700 dark:text-white">{featuredPost.title}</h3>
              <p className="font-sans text-sm text-slate-600 dark:text-white/60 leading-relaxed max-w-xl">
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
      <div className="pb-20">
        <div className="mx-10 pt-10 flex">
            <p className="hidden md:block font-sans text-xs tracking-widest uppercase text-black/50 dark:text-white/50"> — All Posts</p>
        </div>
        <div className="grid grid-cols-[64px_1fr_90px_110px] mx-10 pl-4 pt-8 gap-x-8 pb-3 border-b border-black/10 dark:border-white/10">
          <div />
          <span className="text-xs tracking-widest uppercase text-black/50 dark:text-white/50 font-sans">Title</span>
          <span className="text-xs tracking-widest uppercase text-black/50 dark:text-white/50 font-sans">Date</span>
          <span className="text-xs tracking-widest uppercase text-black/50 dark:text-white/50 font-sans">Read Time</span>
        </div>
        {remainingPosts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug?.current}`}
            className="grid grid-cols-[64px_1fr_90px_110px] gap-x-8 mx-10 pl-4 items-center py-5 border-b border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group"
          >
            <div className="relative w-16 h-12">
              {post?.mainImage && (
                <Image
                  className="rounded object-cover"
                  src={urlFor(post.mainImage).auto("format").url()}
                  alt={post?.mainImage?.alt || " "}
                  fill
                  sizes="64px"
                />
              )}
            </div>

            <div>
              <p className="font-heading text-lg text-slate-800 dark:text-white/90 group-hover:text-orange-400 transition-colors">
                {post.title}
              </p>
              <p className="text-xs tracking-widest uppercase text-black/40 dark:text-white/30 font-sans mt-1">
                {post.category}
              </p>
            </div>

            <span className="font-sans text-sm text-black/50 dark:text-white/40">
              {post.publishedAt ? monthYear(post.publishedAt) : ''}
            </span>

            <span className="font-sans text-sm text-black/50 dark:text-white/40">
              {post.readTime} min read
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
