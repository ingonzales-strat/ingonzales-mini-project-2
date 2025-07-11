"use client"

import { Share } from "lucide-react"
import { Button } from "./button"
import { toast,Toaster } from "sonner"
//
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