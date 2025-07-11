

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
    <div className="grid grid-rows-[auto_1fr]  p-8  pb-20 gap-5  font-[family-name:var(--font-geist-sans)]">
      <div>
        <header >
        <h1 className="texl-5xl md:text-6xl">My Blog posts</h1>
        <h2 className="text-secondary-foreground">Care to look around? :3</h2>
        
        </header>
      </div>
      <div className="flex flex-col gap-5 p-3 px-4 sm:px-10 md:px-30 lg:px-70 xl:px-120">
        
        {data.map((blog) => (
          <BlogBox key={blog.id} id={blog.id} likes={blog.likes} title={blog.title} description={blog.description} readMins={blog.readMinutes} publish={blog.publishedAt} slug={blog.slug}/>
          
        ))}
       
 
      </div>
      

    </div>
  );
}
