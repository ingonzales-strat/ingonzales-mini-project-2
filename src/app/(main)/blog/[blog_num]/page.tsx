import { notFound } from 'next/navigation'
import "dotenv/config"
import { getBlogSlug } from "@/lib/s_actions/blog-actions";
import { getBlogComments } from "@/lib/s_actions/comment-actions";
import CommentForm from "@/components/forms/comment_form";
import { remark } from 'remark';
import html from 'remark-html';
import CommentBox from "@/components/comment_box";
import ShareButton, { CommentButton, LikeButton } from "@/components/ui/blog_button";
import { Separator } from "@/components/ui/separator"

export async function generateMetadata({
    params
}:{
    params:Promise<{blog_num:string}>;
}) {
  const { blog_num } = await params;
  const blog_data = await getBlogSlug(blog_num);
  if (!blog_data) return { title: 'Not Found' }

  return {
    title: blog_data.title,
    description: blog_data.description,
    openGraph: {
        title: blog_data.title,
        description: blog_data.description,
        locale: "en_US",
        type: "article",
    },
  }
}


export default async function BlogPage({
    params
}:{
    params:Promise<{blog_num:string}>;
}){
    const { blog_num } = await params;
    const blog_data = await getBlogSlug(blog_num);
    if (!blog_data) notFound()
    const wasUpdated = blog_data.updatedAt > blog_data.publishedAt;
    const comment_data=await getBlogComments(blog_data.id);
    const processedContent = await remark()
        .use(html)
        .process(blog_data.content);
    const contentHtml = processedContent.toString();
    console.log(contentHtml)
 


     return <div className="flex flex-col items-center px-4 sm:px-8 md:px-20 lg:px-30 min-h-screen gap-8 font-[family-name:var(--font-geist-sans)]">
                <header className="flex flex-col my-2 gap-3 text-center max-w-3xl justify-center">
                    <p className="text-muted-foreground text-sm">
                    Published on {blog_data.publishedAt.toLocaleDateString()} {wasUpdated && (<span> (Updated on {blog_data.updatedAt.toLocaleDateString()})</span>)} | Niko Gonzales
                    </p>
                    <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold  text-foreground">
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
                    <div className="flex justify-center items-center gap-5 h-5 mt-3">
                        <ShareButton urlSlug={blog_data.slug}/>
                        <Separator orientation="vertical"  decorative />
                        <CommentButton/>
                        <Separator orientation="vertical"  decorative />
                        <LikeButton blogId={blog_data.id} likes={blog_data.likes}/>

                    </div>
                    
                </header>
              
                <div dangerouslySetInnerHTML={{ __html: blog_data.content }} className="[&_ul]:list-disc [&_ol]:list-decimal [&_li]:ml-6 px-8 sm:px-20 md:px-20 lg:px-30 xl:px-50 text-justify"/>
               
                <div className='flex flex-col gap-4 w-auto'>
                    <h2 className="text-2xl text-secondary-foreground font-semibold">Comments</h2>
                    <div className="flex flex-col gap-2">
                        
                        {comment_data.map((comment) => (
                            <CommentBox key={comment.id} author={comment.author} content={comment.content} time={comment.publishedAt}/>
                        ))}
                    
                    </div>
                    <div className="w-auto my-2 sm:w-sm xl:w-lg" id="comments">
                        
                        <h3 className="pb-3">Join in the Conversation</h3>
                        <CommentForm articleId={blog_data.id} articleSlug={blog_data.slug}/>
                    </div>
                </div>
                
                    

               
                <footer className='text-center'>
                    © Isaiah Nikolo Gonzales. All Rights Reserved 2025
                </footer>
            </div>
}