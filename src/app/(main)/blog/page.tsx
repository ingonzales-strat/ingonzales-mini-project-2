

import BlogBox from "@/components/blog_box";
import {  getPublishedBlogs } from "@/lib/s_actions/blog-actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Stream",
  description:"So many thoughts and ideas."
};

export default async function BlogsPage() {
  const data = await getPublishedBlogs();
  
  return (
    <div className="grid grid-rows-[20px_1fr]  p-8  pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header >
        <h1 className="text-6xl">My Blog posts</h1>
        <h2 className="text-secondary-foreground">Care to look around? :3</h2>
      </header>
      <div className="flex flex-col gap-5 sm:px-80">
        
        {data.map((blog) => (
          <BlogBox key={blog.id} title={blog.title} description={blog.description} readMins={blog.readMinutes} publish={blog.publishedAt} slug={blog.slug}/>
          
        ))}
       
 
      </div>
      

    </div>
  );
}
