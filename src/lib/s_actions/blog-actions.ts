import { blogArticleTable } from "@/db/schema"
import { db } from "@/db"
import { eq } from "drizzle-orm";

export const getBlogs=async ()=>{
 
    return  db.select().from(blogArticleTable);
}

export const getBlogSlug=async (slug:string)=>{
    const res=await db.select().from(blogArticleTable).where(eq(blogArticleTable.slug,slug)).limit(1);
    return res[0]
}