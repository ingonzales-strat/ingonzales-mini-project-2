import {EditBlogForm} from "@/components/forms/blog_forms";
import { getBlogSlug } from "@/lib/s_actions/blog-actions";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Editing blog",
  description:"Need to change Something?"
};

export default async function EditBlogPage({
    params
}:{
    params:Promise<{blog_num:string}>;
}) {
  const { blog_num } = await params;
  const blog_data = await getBlogSlug(blog_num);
  if (!blog_data) notFound()
  
  return (
    <div className="grid grid-rows-[auto_1fr]  p-8 pb-20 gap-5 md:gap-15 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header >
        <h1 className="texl-5xl lg:text-6xl">Editing your Blog 𓂃🖊</h1>
        <h2 className="text-secondary-foreground text-xl lg:text-4xl">Feel free to make some changes here and there~</h2>
      </header>
      
      <div className="mx-auto items-justify overflow-x-auto">
        <EditBlogForm title={blog_data.title} id={blog_data.id} description={blog_data.description} readminutes={blog_data.readMinutes} contentLoad={blog_data.content} slug={blog_data.slug}/>
      </div>
      

    </div>
  );
}
