'use server'; 

import { articleCommentsTable } from "@/db/schema"
import { db } from "@/db"
import { eq } from 'drizzle-orm';
import { revalidatePath } from "next/cache";
const marineAnimals = [
  "Clownfish",
  "Tuna",
  "Salmon",
  "Swordfish",
  "Anglerfish",
  "Mackerel",
  "Lionfish",
  "Goby",
  "Parrotfish",
  "Eel",
  "Dolphin",
  "Blue_Whale",
  "Orca",
  "Humpback_Whale",
  "Manatee",
  "Sea_Otter",
  "Narwhal",
  "Turtle",
  "Iguana",
  "Snake",
  "Octopus",
  "Squid",
  "Jellyfish",
  "Starfish",
  "Coral",
  "Sea_Urchin",
  "Crab",
  "Lobster",
  "Shrimp",
  "Krill"
];

function getRandomInt(max:number) {
  return Math.floor(Math.random() * max);
}
function makeid() {
    const length=6
    const animal=marineAnimals[getRandomInt(marineAnimals.length)]
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return `anonymous-${animal}-${result}`
}


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
  let author = formData.get('author') as string;
  const articleSlug = formData.get('articleSlug') as string;
  const articleId = parseInt(formData.get('articleId') as string, 10);
  
  if (!author){
    author=makeid()
  }


  if (!content || !author || !articleId) return;
  await db.insert(articleCommentsTable).values({
    content:content,
    articleId:articleId,
    author:author,

  })
  revalidatePath(`/blog/${articleSlug}`);
}