"use client";
import { addBlog, updateBlog } from "@/lib/s_actions/blog-actions";
import TextEditor from "../text_editor/tp_tap";
import Form from 'next/form'
import { SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormState } from 'react-dom'


export default function BlogForm(){
    const router = useRouter()
    const[post,setPost]=useState("");
    const onChangeP=(content: SetStateAction<string>)=>{
      setPost(content);
      //console.log(content);
    }
    const [state, formAction] = useFormState(addBlog, { success: false })
    console.log(state.success)
    if (state.success) {
      router.push('/my_blogs')
    }

   
        
    return <Form action={formAction} className=' md:min-w-md xl:min-w-xl border flex flex-col gap-5 p-5 rounded-md'>
      <div >
        <label htmlFor="title" className="block text-md font-medium text-gray-900">
          Title
        </label>
        <div className="mt-2">
          <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">

            <input
              id="title"
              name="title"
              type="text"
              placeholder="Your New Blog"
              required
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
      </div>
      <div >
        <label htmlFor="articleSlug" className="block text-sm/6 font-medium text-gray-900">
          Slug
        </label>
        <div className="mt-2">
          <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">

            <input
              id="articleSlug"
              name="articleSlug"
              type="text"
              placeholder="A readable URL Slug"

              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
      </div>
      <div >
        <label htmlFor="readMinutes" className="block text-sm/6 font-medium text-gray-900">
          How many minutes to read?
        </label>
        <div className="mt-2">
          <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">

            <input
              id="readMinutes"
              name="readMinutes"
              type="number"
              placeholder="1"
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
      </div>
      <div className="col-span-full">
        <label htmlFor="description" className="block text-md font-medium text-gray-900">
          Description
        </label>
        <div className="mt-2">
          <textarea
            id="description"
            name="description"
            rows={2}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
        <p className="mt-3 text-sm/6 text-gray-600">Describe what you wanna tell the world ٩(^ᗜ^ )و´-</p>
      </div>
      <label htmlFor="content" className="block text-sm/5 font-medium text-gray-900">
          Blog Content
        </label>
      <TextEditor content={post} onChange={onChangeP}/>
      <input type="hidden" name="content" value={post} required />
      <button type="submit"  className=" hover:bg-blue-500 transition bg-blue-900 text-white px-4 py-2 mt-5 rounded">
        Post
      </button>   
    </Form> 
}


export  function EditBlogForm({title,id,description,slug,readminutes,contentLoad}:{title:string,id:number,description:string|null,slug:string,readminutes:number|null,contentLoad:string}){
  
    const router = useRouter()

    const[poster,setPost]=useState(contentLoad);
   
    const onChange=(content: SetStateAction<string>)=>{
      setPost(content);
      //console.log(content);
    }
    const [state, formAction] = useFormState(updateBlog, { success: false })
    console.log(state.success)
    if (state.success) {
      router.push('/my_blogs')
    }
        
    return <Form action={formAction} className=' md:min-w-md xl:min-w-xl border flex flex-col gap-5 p-5 rounded-md'>
      <div >
        <label htmlFor="title" className="block text-md font-medium text-gray-900">
          Title
        </label>
        <div className="mt-2">
          <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">

            <input
              id="title"
              name="title"
              type="text"
              placeholder="Your New Blog"
              defaultValue={title}
              required
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
      </div>
      <div >
        <label htmlFor="articleSlug" className="block text-sm/6 font-medium text-gray-900">
          Slug
        </label>
        <div className="mt-2">
          <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">

            <input
              id="articleSlug"
              name="articleSlug"
              type="text"
              placeholder="A readable URL Slug"
              defaultValue={slug}
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
      </div>
      <div >
        <label htmlFor="readMinutes" className="block text-sm/6 font-medium text-gray-900">
          How many minutes to read?
        </label>
        <div className="mt-2">
          <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">

            <input
              id="readMinutes"
              name="readMinutes"
              type="number"
              placeholder="1"
              defaultValue={readminutes? readminutes : 1}
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
      </div>
      <div className="col-span-full">
        <label htmlFor="description" className="block text-md font-medium text-gray-900">
          Description
        </label>
        <div className="mt-2">
          <textarea
            id="description"
            name="description"
            rows={2}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            defaultValue={description? description : ""}
          />
        </div>
        <p className="mt-3 text-sm/6 text-gray-600">Describe what you wanna tell the world ٩(^ᗜ^ )و´-</p>
      </div>
      <label htmlFor="content" className="block text-sm/5 font-medium text-gray-900">
          Blog Content
        </label>
      <TextEditor content={poster} onChange={onChange}/>
      <input type="hidden" name="content" value={poster} required />
      <input type="hidden" name="id" value={id} />
      <button type="submit" onClick={() => {router.push('/my_blogs');    }} className="cursor-pointer hover:bg-blue-500 transition bg-blue-900 text-white px-4 py-2 mt-5 rounded">
        Post
      </button>   
    </Form> 
}