import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { POSTS_QUERYResult } from "@/sanity/types";

const monthYear = (postedAt: string) =>
  new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' })
    .format(new Date(postedAt));

const postDate = (postedAt: string) =>
  new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    .format(new Date(postedAt));

export default function BlogTable({ posts }: { posts: POSTS_QUERYResult }) {
  if (!posts || posts.length === 0) {
    return <p className="mx-10 pt-12 pb-6 text-sm tracking-widest text-black/50 dark:text-white/60 font-sans">New posts coming soon!</p>;
  }
  return (
    <div className="pb-8">
      <div className="mx-10 pt-10 pb-6 sm:pb-0 flex items-center justify-between">
        <p className="font-sans text-xs tracking-widest uppercase text-black/50 dark:text-white/50">— All Posts</p>
        <p className="font-sans text-xs tracking-widest uppercase text-black/50 dark:text-white/50">{posts.length} Posts</p>
      </div>
      <div className="hidden sm:grid grid-cols-[64px_1fr_90px_110px] mx-10 pl-4 pt-8 gap-x-8 pb-3 border-b border-black/10 dark:border-white/10">
        <div />
        <span className="text-xs tracking-widest uppercase text-black/50 dark:text-white/50 font-sans">Title</span>
        <span className="text-xs tracking-widest uppercase text-black/50 dark:text-white/50 font-sans">Date</span>
        <span className="text-xs tracking-widest uppercase text-black/50 dark:text-white/50 font-sans">Read Time</span>
      </div>
      {posts.map((post) => (
        <Link
          key={post._id}
          href={`/blog/${post.slug?.current}`}
          className="block mx-10 py-5 border-b border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group"
        >
          {/* Mobile: card layout */}
          <div className="flex sm:hidden gap-5 items-start">
            <div className="relative w-24 h-20 flex-shrink-0">
              {post?.mainImage && (
                <Image
                  className="rounded object-cover"
                  src={urlFor(post.mainImage).auto("format").url()}
                  alt={post?.mainImage?.alt || " "}
                  fill
                  sizes="96px"
                />
              )}
            </div>
            <div className="flex flex-col gap-2 flex-1 min-w-0">
              <p className="text-xs tracking-widest uppercase text-black/40 dark:text-white/40 font-sans">
                {post.category?.title}
              </p>
              <p className="font-heading text-lg text-slate-800 dark:text-white group-hover:text-orange-400 transition-colors leading-tight">
                {post.title}
              </p>
              <div className="flex gap-6 text-sm text-black/50 dark:text-white/40 font-sans mt-1">
                <span>{post.publishedAt ? postDate(post.publishedAt) : ''}</span>
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>

          {/* Desktop: table row */}
          <div className="hidden sm:grid grid-cols-[64px_1fr_90px_110px] gap-x-8 pl-4 items-center">
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
                {post.category?.title}
              </p>
            </div>
            <span className="font-sans text-sm text-black/50 dark:text-white/40">
              {post.publishedAt ? monthYear(post.publishedAt) : ''}
            </span>
            <span className="font-sans text-sm text-black/50 dark:text-white/40">
              {post.readTime} min read
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
