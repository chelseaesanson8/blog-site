import HomeIntro from "@/components/HomeIntro";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";


const options = { next: { revalidate: 60 } };
export default async function Page() {
  const posts = await client.fetch(POSTS_QUERY, {}, options);

  return (
    <section className="bg-white dark:bg-zinc-900">
      <HomeIntro />
      {/* About Section
      <div className="items-center gap-8 md:gap-12 max-w-6xl mx-auto my-10">
        <h2 className="text-4xl text-slate-800 my-6">about</h2>
        <p className="font-sans text-slate-600 text-lg">Ever since I was young, I've always had an interest in technology, and learning how things work. Fast forward to 2024, I've graduated from Youngstown State University, and I'm still building new things. I've also fallen in love with marketing and learning how to grow my products.</p>
      </div>
      */}
      <div className="flex items-center gap-8 md:gap-12 px-6 mx-auto my-10 max-w-screen-2xl">
        <h2 className="text-5xl my-10 tracking-tighter font-heading text-slate-800 dark:text-slate-200">BLOG</h2>
        <ul className="flex items-center space-x-10">
          <li className="bg-zinc-200 dark:bg-zinc-800 pt-1 pb-1 pr-3 pl-3 rounded text-zinc-900 dark:text-zinc-100">web</li>
          <li className="bg-zinc-200 dark:bg-zinc-800 pt-1 pb-1 pr-3 pl-3 rounded text-zinc-900 dark:text-zinc-100">lifestyle</li>
          <li className="bg-zinc-200 dark:bg-zinc-800 pt-1 pb-1 pr-3 pl-3 rounded text-zinc-900 dark:text-zinc-100">travel</li>
          <li className="bg-zinc-200 dark:bg-zinc-800 pt-1 pb-1 pr-3 pl-3 rounded text-zinc-900 dark:text-zinc-100">gaming</li>
        </ul>
      </div>

      <div className="pb-12 px-6 w-full max-w-screen-2xl mx-auto">
        <ul className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 gap-10">
          {posts.map((post) => (
            <li key={post._id}>
              <div className="">
                <div>
                  {post?.mainImage && (
                    <Image
                      className="rounded"
                      src={urlFor(post.mainImage).auto("format").url()}
                      alt={post?.mainImage?.alt || " "}
                      width={500} // Adjust width as needed
                      height={500} // Adjust height as needed
                      layout="responsive"
                    />
                  )}
                </div>
                <div className="mt-5">
                  <Link
                    className="block hover:text-orange-400 dark:hover:text-orange-400 font-heading tracking-tighter text-2xl font-semibold text-slate-800 dark:text-slate-200"
                    href={`/posts/${post?.slug?.current}`}
                  >
                    {post?.title?.toUpperCase()}
                  </Link>
                  <p className="text-slate-700 dark:text-slate-400 font-sans text-lg">{post.publishedAt}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
