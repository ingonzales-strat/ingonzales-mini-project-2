'use server';
import { blogArticleTable } from "@/db/schema"
import { db } from "@/db"
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const getBlogs=async ()=>{
 
    return  db.select().from(blogArticleTable);
}

export const getPublishedBlogs=async ()=>{
 
    return  db.select().from(blogArticleTable).where(eq(blogArticleTable.isPublished,true));
}

export const publishBlog=async (id:number)=>{
    await db.update(blogArticleTable).set({isPublished:true}).where(eq(blogArticleTable.id,id));
    revalidatePath(`/my_blogs`);
}
export const unPublishBlog=async (id:number)=>{

    await  db.update(blogArticleTable).set({isPublished:false}).where(eq(blogArticleTable.id,id));
    revalidatePath(`/my_blogs`);
}

export const getBlogSlug=async (slug:string)=>{
    const res=await db.select().from(blogArticleTable).where(eq(blogArticleTable.slug,slug)).limit(1);
    return res[0]
}


export const addBlog=async (
  formData:FormData,

)=>{
  const title = formData.get('title') as string;
  const articleSlug = formData.get('articleSlug') as string;
  const content = formData.get('content') as string;
  const description = formData.get('content') as string;
  const readMinutes = parseInt(formData.get('readMinutes') as string, 10);



  if (!content || !articleSlug || !content) return;
  await db.insert(blogArticleTable).values({
    title:title,
    slug:articleSlug,
    content:content,
    description:description,
    readMinutes:readMinutes
  })

}