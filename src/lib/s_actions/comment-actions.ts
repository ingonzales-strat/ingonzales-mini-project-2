'use server'; 

import { articleCommentsTable } from "@/db/schema"
import { db } from "@/db"
import { eq } from 'drizzle-orm';
import { revalidatePath } from "next/cache";




export const getAllComments=async ()=>{
 
    return  db.select().from(articleCommentsTable);
}


export const getBlogComments=async (id:number)=>{

    const res=await db.query.articleCommentsTable.findMany({
      where:eq(articleCommentsTable.articleId,id)
    })
    return res
}


export const addCommentS=async (
  formData:FormData,

)=>{
  const content = formData.get('content') as string;
  const author = formData.get('author') as string;
  const articleSlug = formData.get('articleSlug') as string;
  const articleId = parseInt(formData.get('articleId') as string, 10);
 


  if (!content || !author || !articleId) return;
  await db.insert(articleCommentsTable).values({
    content:content,
    articleId:articleId,
    author:author,

  })
  revalidatePath(`/blog/${articleSlug}`);
}