import PostScrollBar from "@/components/PostScrollBar";
import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { components } from "@/sanity/portableTextComponents";
import ShareButtons from "@/components/ShareButtons";
import AuthorBox from "@/components/AuthorBox";

const monthYear = (postedAt: string) =>
  new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' })
    .format(new Date(postedAt));


export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { data: post } = await sanityFetch({
        query: POST_QUERY,
        params: await params,
    });

    if (!post) {
        notFound();
    }

    return (
        
        <div className="bg-white dark:bg-zinc-900 min-h-screen w-full">
        <PostScrollBar />
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="flex gap-2 font-sans text-xs tracking-widest uppercase text-orange-400">
            <span>{post.category?.title}</span>
            <span>|</span>
            <span>{post?.readTime} MIN READ</span>
          </div>
          <h2 className="pt-4 pb-4 font-display font-light text-4xl md:text-5xl text-slate-800 dark:text-white">{post?.title}</h2>
          <div className="pb-10 flex gap-2 font-sans font-xs">
            <span className="text-orange-400">{post?.author?.name}</span>
            <span className="text-black/20 dark:text-white/20">|</span>
            <span className="text-black/50 dark:text-white/50">{post?.publishedAt ? monthYear(post.publishedAt) : ''}</span>
          </div>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            {post?.mainImage && (
              <Image
                className="object-cover"
                src={urlFor(post.mainImage).auto("format").url()}
                alt={post?.mainImage?.alt || " "}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
              />
            )}
          </div>
          <div className="pt-6">
            {post?.body ? (
              <div className="prose prose-invert prose-headings:font-display prose-headings:font-light prose-headings:mt-8 prose-headings:mb-3 prose-p:font-sans prose-p:text-black/70 prose-p:dark:text-white/70 prose-p:leading-relaxed prose-p:my-3 prose-a:text-orange-400 max-w-none">
                <PortableText value={post?.body} components={components} />
              </div>
            ) : null}
          </div>
          <div className="flex items-center gap-4 my-12">
            <div className="flex-1 h-px bg-black/10 dark:bg-white/10" />
            <span className="text-black/20 dark:text-white/20 text-xs">◆</span>
            <div className="flex-1 h-px bg-black/10 dark:bg-white/10" />
          </div>
          <ShareButtons title={post.title} slug={post.slug?.current ?? ''} />
          <AuthorBox author={post.author} />
        </div>
        </div>
      
  );
}