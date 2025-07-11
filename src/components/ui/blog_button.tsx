"use client"

import { Share } from "lucide-react"
import { Button } from "./button"
import { likeBlog,unLikeBlog } from "@/lib/s_actions/blog-actions"
import { toast,Toaster } from "sonner"
import {  IconCirclePlus, IconHeart, IconHeartFilled, IconMessageCircle } from "@tabler/icons-react"
import { usePathname } from 'next/navigation'

import Link from "next/link"
import { useState } from "react"

export default function ShareButton({urlSlug}:{urlSlug:string}){
    const base="http://localhost:3000/blog/"
    const url=base+urlSlug
    return <div>
        <Toaster position="bottom-center" />
        <Button variant="ghost" size="sm" className="cursor-pointer  hover:text-blue-600" 
    onClick={() => {
        toast.info("URL Copied to Clipboard" );
        navigator.clipboard.writeText(url);
        console.log("Copying to clipboard") 
        }}>
        <Share className="size-5"/>
    </Button>
    </div>
}

export  function NewBlogButton(){

    return <Button asChild variant="outline" size="sm" className="relative   sm:p-5 overflow-hidden text-primary before:bg-blue-500 before:absolute before:inset-0 hover:text-white transition-colors before:translate-y-[100%] hover:before:translate-y-0 before:transition-transform">
              <Link href='/my_blogs/new_blog'><span className="relative z-10  items-center gap-2 flex text-base sm:text-md md:text-lg">
                <IconCirclePlus className="scale-100 md:scale-125 md:mr-2"/>New Blog Post
            </span></Link>
            </Button>
          
}

export  function CommentButton(){

    return <Button variant="ghost" size="sm"className="cursor-pointer  hover:text-blue-600" >
           <Link href='#comments'>
                <IconMessageCircle className="scale-100 md:scale-125"/></Link>
        </Button>
          
}


export  function LikeButton({blogId,likes}:{blogId:number,likes:number|null}){
    const pathname = usePathname()
    let local_like=1
    if (likes!=null){
        local_like=likes
    }
    const [like,setLikes] = useState(false);
    const [numlike,setnumLikes] = useState(local_like);
    const likeButtonFunc=()=>{
        
        setLikes(!like);
        if(!like){
            console.log("like")
            setnumLikes(numlike+1)
            likeBlog(blogId,pathname)
        }else{
            console.log("unlike")
            setnumLikes(numlike-1)
            unLikeBlog(blogId,pathname)
        }
        
    }

    return <div className="flex flex-row items-center gap-2">
   
        <Button variant="ghost" size="sm" className={` cursor-pointer relative bg-none  sm:p-5 overflow-hidden text-primary transition ${like? 'text-blue-700 hover:text-blue-400':'hover:text-blue-300'} `}
        onClick={likeButtonFunc} >
            {like? <IconHeartFilled className="size-5"/>:<IconHeart className="size-5"/>} 
          
        </Button>
        <div>
            {numlike}
        </div>
        
    </div>
}