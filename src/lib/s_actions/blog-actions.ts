'use server';
import { blogArticleTable } from "@/db/schema"
import { db } from "@/db"
import { eq,sql } from "drizzle-orm";
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


function makeid(length:number) {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


export const addBlog=async (
  formData:FormData,

)=>{

  const title = formData.get('title') as string;
  let articleSlug = formData.get('articleSlug') as string;
  const content = formData.get('content') as string;
  const description = formData.get('description') as string;
  let readMinutes = parseInt(formData.get('readMinutes') as string, 10);

  console.log(title)
  if (!articleSlug){
    articleSlug=`blog-${readMinutes}-${title[2]}-${makeid(5)}`
  }
  if (!readMinutes){
    readMinutes=1
  }
 
  if (!content || !articleSlug || !content) return;
  { await db.insert(blogArticleTable).values({
    title:title,
    slug:articleSlug,
    content:content,
    description:description,
    readMinutes:readMinutes
  })}

  

}

export const deleteBlog=async (id:number)=>{
    await  db.delete(blogArticleTable).where(eq(blogArticleTable.id,id));
    revalidatePath(`/my_blogs`);
}

export const likeBlog=async (id:number,url:string)=>{
    await  db.update(blogArticleTable).set({likes: sql`${blogArticleTable.likes} + 1`}).where(eq(blogArticleTable.id,id));
    revalidatePath(url);
}

export const unLikeBlog=async (id:number,url:string)=>{
    await  db.update(blogArticleTable).set({likes: sql`${blogArticleTable.likes} - 1`}).where(eq(blogArticleTable.id,id));
    revalidatePath(url);
}
