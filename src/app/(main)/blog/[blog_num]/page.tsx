

//import { notFound } from 'next/navigation';
import "dotenv/config"
import { getBlogSlug } from "@/lib/s_actions/blog-actions";
import { getBlogComments } from "@/lib/s_actions/comment-actions";
import CommentForm from "@/components/forms/comment_form";
import { remark } from 'remark';
import html from 'remark-html';
import CommentBox from "@/components/comment_box";

export default async function BlogPage({
    params
}:{
    params:Promise<{blog_num:string}>;
}){
    const { blog_num } = await params;
    const blog_data = await getBlogSlug(blog_num);
    const wasUpdated = blog_data.updatedAt > blog_data.publishedAt;
    const comment_data=await getBlogComments(blog_data.id);
    const processedContent = await remark()
        .use(html)
        .process(blog_data.content);
     const contentHtml = processedContent.toString();
    console.log(contentHtml)


    return <div className="flex flex-col items-center px-4 sm:px-8 md:px-20 lg:px-40 min-h-screen gap-8 font-[family-name:var(--font-geist-sans)]">
                <header className="text-center max-w-3xl">
                    <p className="text-muted-foreground text-sm">
                    Published on {blog_data.publishedAt.toLocaleDateString()} {wasUpdated && (<span> (Updated on {blog_data.updatedAt.toLocaleDateString()})</span>)} | Niko Gonzales
                    </p>
                    <h1 className="text-6xl font-bold mt-4 text-foreground">
                    {blog_data.title}
                    </h1>
                    <div className="inline-flex  flex-wrap gap-4 py-2 ">
                        <p>tag0</p>
                        <p>tag1</p>
                        <p>tag2</p>
                        <p>tag3</p>
                        <p>tag4</p>
                        <p>tag5</p>

                    </div>
                </header>
                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <h2 className="text-2xl text-secondary-foreground font-semibold">Comments</h2>
                <div className="flex flex-col gap-2">
                    
                    {comment_data.map((comment) => (
                        <CommentBox key={comment.id} author={comment.author} content={comment.content} time={comment.publishedAt}/>
                    ))}
                
                </div>
                <div className="w-md">
                    <h3 className="pb-3">Join in the Conversation</h3>
                    <CommentForm articleId={blog_data.id} articleSlug={blog_data.slug}/>
                </div>
                    

               
                <footer>
                    © Isaiah Nikolo Gonzales. All Rights Reserved 2025
                </footer>
            </div>
}