import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { components } from "@/sanity/portableTextComponents";
import PostScrollBar from "@/components/PostScrollBar";


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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 p-10 mx-auto max-w-screen-2xl">
        <div className="my-5 sm:my-20 p-5 sm:p-10 order-2 sm:order-1">
          <h1 className="text-3xl sm:text-5xl font-bold text-balance text-slate-800 dark:text-slate-200 font-heading tracking-tighter text-slate-800 dark:text-slate-200">{post?.title?.toUpperCase()}</h1>
          {post?.author?.name && (
            <h2 className="py-4 text-2xl font-heading dark:text-orange-400 text-orange-400 text-balance tracking-tighter font-semibold"> by {post.author.name.toUpperCase()}</h2>
          )}
        </div>
        <div className="order-1 sm:order-2">
          {post?.mainImage && (
            <Image
              className="rounded"
              src={urlFor(post.mainImage).auto("format").url()}
              alt={post?.mainImage?.alt || " "}
              width={500}
              height={500}
              layout="responsive"
            />
          )}
        </div>
      </div>
      <div className="p-10 flex justify-center items-center">
        {post?.body ? (
          <div className="prose prose-slate dark:prose-invert max-w-screen-2xl">
            <PortableText value={post?.body} components={components} />
          </div>
        ) : null}
      </div>
    </div>
  );
}