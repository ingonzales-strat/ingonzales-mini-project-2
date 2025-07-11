import Link from "next/link";
import { LikeButton } from "./ui/blog_button";


export default function BlogBox({title,publish,description, readMins, slug, id, likes}:{id:number, likes:number|null,title:string,publish:Date,description:string|null, readMins:number|null, slug:string}){
    return <div className="grid grid-cols-[auto_1fr_auto] p-5 border border-blue-900 rounded-md min-h-75 items-end bg-linear-80 from-grey-500 to-blue-300">
        <div className="flex flex-col  text-wrap text-justify">
            <p >{publish.toDateString()}</p>
            <Link href={`/blog/${slug}`}><h1 className="text-5xl hover:text-blue-500">{title}</h1></Link>
            <p>{description}</p>
            
            {readMins && <p className="text-muted-foreground">{readMins} Minute Read</p>}

        </div>
        <div >
            
        </div>
        <div >
            <LikeButton likes={likes} blogId={id}/>
        </div>



    </div>

}