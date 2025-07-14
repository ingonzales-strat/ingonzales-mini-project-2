

import { DeleteButton, PublishButton, UnPublishButton } from "@/components/server_buttons";
import { Button } from "@/components/ui/button";
import { getBlogs  } from "@/lib/s_actions/blog-actions";
import Link from "next/link";
import { NewBlogButton } from "@/components/ui/blog_button";



export default async function MyBlogsPage() {
  const data = await getBlogs();
  return (
    <div className="flex flex-col  p-8  gap-3 font-[family-name:var(--font-geist-sans)] ">
      <header >
        <h1 className="texl-5xl md:text-6xl">Are you Niko?</h1>
        <h2 className="text-secondary-foreground">Here are your posts</h2>
      </header>
      <div className="mx-auto">
        <div className=" flex flex-col items-center py-3 gap-3">
          <h2>Thought of Something to write?</h2>
          <NewBlogButton/>
        </div>
      </div>
      <div className=" overflow-x-auto  ">
        <table className="table-auto border-separate mx-auto border-spacing-5 border  ">
        <thead>
            <tr className="border-b border-blue-500">      
              <th>Blog ID</th>      
              <th>Title</th>      
              <th>Published At </th><th> Updated At</th> 
              <th >Likes</th> 
              <th>Slug</th> 
              <th>Is Published?</th> 
              <th>Actions</th>    
            </tr>
          </thead>
          <tbody>
            {data.map((blog) => (
            <tr key={blog.id} className="min-w-[800px] w-full table-auto border-separate border-spacing-5 border">
              <td>{blog.id}</td>
              <td>{blog.title} </td>
              <td>{blog.publishedAt.toDateString()}</td>
              <td>{blog.updatedAt.toDateString()}</td>
              <td>{blog.likes}</td>
              <td>{blog.slug}</td>
              <td>{blog.isPublished.toString()}</td>
              <td> 
                <div className="flex flex-row gap-3">
                  <Button aria-label="Open Blog">
                  <Link href={`/blog/${blog.slug}`}>Open</Link>
                  </Button>
                  <Button aria-label="Edit Blog">
                    <Link href={`/my_blogs/edit/${blog.slug}`}>Edit</Link>
                  </Button>
                  <DeleteButton articleId={blog.id}/>
                  {blog.isPublished ? 
                    <UnPublishButton articleId={blog.id}/>
                    :
                    <PublishButton articleId={blog.id}/>
                  }
                  </div>
                
              </td>
            </tr>
          ))}

          </tbody>

        </table>
      </div>
      

    </div>
  );
}
