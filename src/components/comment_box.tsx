


export default function CommentBox({author,content,time}:{author:string,content:string,time:Date}){
    return <div className="flex flex-col border px-5 py-2 w-120 border-blue-900 rounded-md text-wrap">
        <div className="flex flex-row gap-2 ">
            <h2 className="font-bold text-base text-blue-900">{author} </h2>
            <p>•</p>
            <p>{time.toLocaleDateString()}</p>
        </div>
        <div className="text-wrap text-justify">
            {content}
        </div >
    </div>

}