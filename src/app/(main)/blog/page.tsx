

import {  getPublishedBlogs } from "@/lib/s_actions/blog-actions";
import Link from "next/link";

export default async function Home() {
  const data = await getPublishedBlogs();
  

  console.log(data)

  return (
    <div className="grid grid-rows-[20px_1fr]  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header >
        <h1 className="text-6xl">My Blog posts</h1>
        <h2 className="text-secondary-foreground">Care to look around? :3</h2>
      </header>
      <main>
        <ul>
          {data.map((blog) => (
            <li key={blog.id}>
              ID: {blog.id}, Title: {blog.title}
              <Link href={`/blog/${blog.slug}`}>Link</Link>
            </li>
          ))}
        </ul>
 
      </main>
      

    </div>
  );
}
