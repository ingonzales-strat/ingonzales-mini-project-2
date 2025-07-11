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
  prevState: unknown,
  formData:FormData,

)=>{

  const title = formData.get('title') as string;
  let articleSlug = formData.get('articleSlug') as string;
  const content = formData.get('content') as string;
  const description = formData.get('description') as string;
  let readMinutes = parseInt(formData.get('readMinutes') as string, 10);

  if (!articleSlug){
    articleSlug=`blog-${readMinutes}-${title[2]}-${makeid(5)}`
  }
  if (!readMinutes){
    readMinutes=1
  }
  console.log(title)
  if (!title||!content || !articleSlug ) return { success: false, message: 'Missing fields' };
  
  await db.insert(blogArticleTable).values({
    title:title,
    slug:articleSlug,
    content:content,
    description:description,
    readMinutes:readMinutes
  })

  return { success: true }

}

export const updateBlog=async (
   prevState: unknown,
  formData:FormData,

)=>{

  const utitle = formData.get('title') as string;
  let uarticleSlug = formData.get('articleSlug') as string;
  const ucontent = formData.get('content') as string;
  const id = parseInt(formData.get('id') as string, 10);
  const udescription = formData.get('description') as string;
  let ureadMinutes = parseInt(formData.get('readMinutes') as string, 10);


  if (!uarticleSlug){
    uarticleSlug=`blog-${ureadMinutes}-${utitle[2]}-${makeid(5)}`
  }
  if (ureadMinutes <= 0) ureadMinutes = 1
 
  if (!utitle || !uarticleSlug || !ucontent) return { success: false, message: 'Missing fields' };
  await db.update(blogArticleTable)
  .set({
    title:utitle,
    slug:uarticleSlug,
    description:udescription,
    content:ucontent,
    readMinutes:ureadMinutes,
    updatedAt:sql`now()`
  }).where(eq(blogArticleTable.id,id));
  
  return { success: true }

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
