import BlogForm from "@/components/forms/new_blog_form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing something new",
  description:"A new blog. A new idea. A new beginning"
};

export default async function NewBlogPage() {
  


  return (
    <div className="grid grid-rows-[20px_1fr]  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header >
        <h1 className="text-6xl">What&apos;s on your messy mind today?</h1>
        <h2 className="text-secondary-foreground">Write something for your blog?   (っ,-)</h2>
      </header>
      
      <div className="mt-10 items-justify">
        <BlogForm/>
      </div>
      

    </div>
  );
}
