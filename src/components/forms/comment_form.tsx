import Form from 'next/form'
import { addCommentS } from '@/lib/s_actions/comment-actions'


export default function CommentForm({ articleId, articleSlug }: { articleId: number, articleSlug:string }){
        
    return <Form action={addCommentS} className='max-w-md mx-auto'>
        <input type="hidden" name="articleId" value={articleId} />
        <input type="hidden" name="articleSlug" value={articleSlug} />
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="author" id="author" 
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
          placeholder=" "  />
          <label htmlFor="author" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
        </div>
        <div className="col-span-full">
              <label htmlFor="about" className="block text-sm/6 font-medium text-blue-500">
                Comment
              </label>
              <div className="mt-2">
                <textarea
                  id="content"
                  name="content"
                  placeholder='A anonymous otter is swimming along here'
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  defaultValue={''}
                />
          </div>
          <p className="mt-3 text-sm/6 text-gray-600">Have something to say?</p>
        </div>

      <button type="submit" className="cursor-pointer hover:bg-blue-500 transition bg-blue-900 text-white px-4 py-2 mt-5 rounded">
        Post
      </button>

    </Form>
    
}