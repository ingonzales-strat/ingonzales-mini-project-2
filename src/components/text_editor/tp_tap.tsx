'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from './tp_menu';

interface TextEditorProps{
  content:string
  onChange:(content:string)=>void;
}
export default function TextEditor({content,onChange}:TextEditorProps){
    const editor = useEditor({
    extensions: [
        StarterKit
    ],
    content: content,
    onUpdate:({editor})=>{
      console.log(editor.getHTML());
      onChange(editor.getHTML());
    }
  })

  return (
  <div>
    <MenuBar editor ={editor}/>
    <EditorContent editor={editor} className="[&_ul]:list-disc [&_ol]:list-decimal [&_li]:ml-6 border rounded-md p-4 "/>
  </div>
  );
}