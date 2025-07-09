import Form from 'next/form'
import { addCommentS } from '@/lib/s_actions/comment-actions'


export default function CommentForm({ articleId, articleSlug }: { articleId: number, articleSlug:string }){
        
    return <Form action={addCommentS}>
        <input type="hidden" name="articleId" value={articleId} />
         <input type="hidden" name="articleSlug" value={articleSlug} />
        <input name="author" type="text" placeholder="What would you like to be called?" required className="border p-2"/>
        <textarea
        name="content"
        placeholder="Your comment"
        required
        className="border p-2"
      />

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit Comment
      </button>

    </Form>
    
}