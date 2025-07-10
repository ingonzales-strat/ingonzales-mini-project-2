

import { DeleteButton, PublishButton, UnPublishButton } from "@/components/server_buttons";
import { Button } from "@/components/ui/button";
import { getBlogs  } from "@/lib/s_actions/blog-actions";
import Link from "next/link";

export default async function Home() {
  const data = await getBlogs();
  return (
    <div className="grid grid-rows-[20px_1fr]  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header >
        <h1 className="text-6xl">Are you Niko?</h1>
        <h2 className="text-secondary-foreground">Here&apos;s your stuff</h2>
      </header>
      <main>
        <Button variant={"outline"} size="sm" >
          <Link href='/my_blogs/new_blog'> New Blog</Link>
        </Button>
        <table className="table-auto border-separate  border-spacing-5 border  items-center">
          <thead>
            <tr className="border-b border-blue-500">      
              <th>Blog ID</th>      
              <th>Title</th>      
              <th>Published At - Updated At</th> 
              <th>Is Published?</th> 
              <th>Actions</th>    
            </tr>
          </thead>
          <tbody>
            {data.map((blog) => (
            <tr key={blog.id} className="border border-b border-blue-500">
              <td>{blog.id}</td>
              <td>{blog.title} </td>
              <td>{blog.publishedAt.toISOString()} - {blog.updatedAt.toISOString()}</td>
              <td>{blog.isPublished.toString()}</td>
              <td className="flex flex-row gap-3"> 
                <Button>
                  <Link href={`/blog/${blog.slug}`}>Open</Link>
                </Button>
                <Button>
                  Edit
                </Button>
                <DeleteButton articleId={blog.id}/>
                {blog.isPublished ? 
                  <UnPublishButton articleId={blog.id}/>
                  :
                  <PublishButton articleId={blog.id}/>
                }
                
              </td>
            </tr>
          ))}

          </tbody>

        </table>
     
 
      </main>
      

    </div>
  );
}
