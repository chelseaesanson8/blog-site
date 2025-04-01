import HomeIntro from "@/components/HomeIntro";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };
export default async function Page() {
  const posts = await client.fetch(POSTS_QUERY, {}, options);
  
  return (
    <section className="">
      <HomeIntro />
      <div className="flex flex-col-1 md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto my-10">
        <h2 className="text-2xl text-slate-800 my-10 font-bold font-heading">Blog</h2>
        <div>
            <ul className="grid grid-cols-1 divide-y divide-blue-100">
                {posts.map((post) => (
                  <li key={post._id}>
                  <Link
                    className="block hover:text-orange-400 font-sans text-lg"
                    href={`/posts/${post?.slug?.current}`}
                  >
                    {post?.title}
                  </Link>
                  </li>
                ))}
              </ul>
        </div>
      </div>
    </section>
  );
}
