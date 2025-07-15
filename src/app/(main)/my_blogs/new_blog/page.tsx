import BlogForm from "@/components/forms/blog_forms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing something new",
  description:"A new blog. A new idea. A new beginning"
};

export default async function NewBlogPage() {
  


  return (
    <div className="grid grid-rows-[auto_1fr]  p-8 pb-20 gap-5 md:gap-15 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header >
        <h1 className="texl-5xl lg:text-6xl">What&apos;s on your messy mind today?</h1>
        <h2 className="text-secondary-foreground text-xl lg:text-4xl">Write something for your blog?   (っ,-)</h2>
      </header>
      
      <div className=" mx-auto items-justify overflow-x-auto">
        <BlogForm/>
      </div>
      

    </div>
  );
}
