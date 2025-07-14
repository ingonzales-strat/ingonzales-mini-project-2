'use client';

import { publishBlog, unPublishBlog,deleteBlog } from "@/lib/s_actions/blog-actions";
import { Button } from "./ui/button";

export function PublishButton({ articleId }: { articleId: number}){
     const publish = async () => {
 
    await publishBlog(articleId);
    };
    return <Button aria-label="Publish Blog" onClick={publish}>
                        Publish
                      </Button>
}

export function UnPublishButton({ articleId }: { articleId: number}){
    const unPublish = async () => {

        await unPublishBlog(articleId);
        };

    return <Button aria-label="Unpublish Blog" onClick={unPublish}>
                    UnPublish
                  </Button>
    
}


export function EditButton({ articleId }: { articleId: number}){
     const publish = async () => {
 
    await publishBlog(articleId);
    };
    return <Button onClick={publish}>
                        Publish
                      </Button>
}


export function DeleteButton({ articleId }: { articleId: number}){
    const del = async () => {
 
    await deleteBlog(articleId);
    };
    return <Button aria-label="Delete Blog" onClick={del} className="bg-red-500">
                        Delete
                      </Button>
}