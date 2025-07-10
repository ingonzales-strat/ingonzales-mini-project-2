'use client';

import { publishBlog, unPublishBlog } from "@/lib/s_actions/blog-actions";
import { Button } from "./ui/button";

export function PublishButton({ articleId }: { articleId: number}){
     const publish = async () => {
 
    await publishBlog(articleId);
    };
    return <Button onClick={publish}>
                        Publish
                      </Button>
}

export function UnPublishButton({ articleId }: { articleId: number}){
    const unPublish = async () => {

        await unPublishBlog(articleId);
        };

    return <Button onClick={unPublish}>
                    UnPublish
                  </Button>
    
}