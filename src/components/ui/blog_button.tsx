"use client"

import { Share } from "lucide-react"
import { Button } from "./button"
import { toast,Toaster } from "sonner"
import {  IconCirclePlus } from "@tabler/icons-react"
import Link from "next/link"

export default function ShareButton({urlSlug}:{urlSlug:string}){
    const base="http://localhost:3000/blog/"
    const url=base+urlSlug
    return <div>
        <Toaster position="bottom-center" />
        <Button variant="secondary" size="icon" className="cursor-pointer size-11 hover:bg-blue-300" 
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

    return <Link href='/my_blogs/new_blog'>
            <Button variant="outline" size="sm" className="relative   sm:p-5 overflow-hidden text-primary before:bg-blue-500 before:absolute before:inset-0 hover:text-white transition-colors before:translate-y-[100%] hover:before:translate-y-0 before:transition-transform">
              <span className="relative z-10  items-center gap-2 flex text-base sm:text-md md:text-lg">
                <IconCirclePlus className="scale-100 md:scale-125 md:mr-2"/>New Blog Post
            </span>
            </Button>
          </Link>
}