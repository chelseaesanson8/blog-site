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

export default async function Page() {
  const posts = await client.fetch(POSTS_QUERY, {}, options);
  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.publishedAt || 0).getTime();
    const dateB = new Date(b.publishedAt || 0).getTime();
    return dateB - dateA; // Newest first
  });

  const featuredPost = sortedPosts[0]; // Latest post
  const remainingPosts = sortedPosts.slice(1); // All posts except the latest
  console.log(posts);

  return (
    <div className="bg-white dark:bg-zinc-900 min-h-screen w-full pt-8 sm:pt-16">
      <div className="px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 mx-auto max-w-screen-2xl p-8 sm:p-12 rounded-xl transition-all duration-300 hover:bg-gray-100/80 dark:hover:bg-zinc-800/50 hover:backdrop-blur-sm hover:shadow-lg">
          <div className="my-5 sm:my-20 p-5 sm:p-10 order-2 sm:order-1">
            <h1 className="text-3xl sm:text-5xl font-bold text-balance text-slate-800 dark:text-slate-200 font-heading tracking-tighter text-slate-800 dark:text-slate-200">{featuredPost?.title}</h1>
            {featuredPost?.author?.name && (
              <div className="flex items-center gap-5">
                <h2 className="py-4 text-2xl font-heading dark:text-orange-400 text-orange-400 text-balance tracking-tighter font-semibold"> by {featuredPost.author.name}</h2>
                <p className="mt-2 text-slate-700 dark:text-slate-400 font-sans text-xl">{featuredPost.publishedAt ? formattedDate(featuredPost.publishedAt) : 'No date'}</p>
              </div>
            )}
          </div>
          <div className="order-1 sm:order-2 ">
            {featuredPost?.mainImage && (
              <Image
                className="rounded aspect-[5/3]"
                src={urlFor(featuredPost.mainImage).auto("format").url()}
                alt={featuredPost?.mainImage?.alt || " "}
                width={500}
                height={500}
                layout="responsive"
              />
            )}
          </div>
        </div>
      </div>
      <div className="my-12 sm:my-20 px-6 sm:px-8 lg:px-12">
        <div className="w-full max-w-screen-2xl mx-auto">
          <ul className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 gap-10">
            {remainingPosts.map((post) => (
              <li key={post._id}>
                <div className="h-full flex flex-col p-6 rounded-xl transition-all duration-300 hover:bg-gray-100/80 dark:hover:bg-zinc-800/50 hover:backdrop-blur-sm hover:shadow-lg">
                  <div className="relative aspect-[5/3]">
                    {post?.mainImage && (
                      <Image
                        className="rounded object-cover"
                        src={urlFor(post.mainImage).auto("format").url()}
                        alt={post?.mainImage?.alt || " "}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                  </div>
                  <div className="mt-5 flex-grow">
                    <Link
                      className="block hover:text-orange-400 dark:hover:text-orange-400 font-heading tracking-tighter text-2xl font-semibold text-slate-800 dark:text-slate-200"
                      href={`/blog/${post?.slug?.current}`}
                    >
                      {post?.title}
                    </Link>
                    <p className="mt-2 text-slate-700 dark:text-slate-400 font-sans text-lg">{post.publishedAt ? formattedDate(post.publishedAt) : 'No date'}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

