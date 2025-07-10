import { Editor } from "@tiptap/react"

import {  Bold, Heading1, Heading2, Heading3,  Italic, Strikethrough, List, ListOrdered } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"



export default function MenuBar({ editor }: { editor: Editor | null }) {
    if (!editor) {
        return null;
    }
   
    const OptionH = [
        {
            value:"h1",
            icon: <Heading1 className="size-4" />,
            onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
            pressed: editor.isActive("heading", { level: 1 }),
        },
        {
            value:"h2",
            icon: <Heading2 className="size-4" />,
            onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
            pressed: editor.isActive("heading", { level: 2 }),
        },
        {
            value:"h3",
            icon: <Heading3 className="size-4" />,
            onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
            pressed: editor.isActive("heading", { level: 3 }),
        },
    ];
    const OptionF=[{
            value:"bold",
            icon: <Bold className="size-4" />,
            onClick: () => editor.chain().focus().toggleBold().run(),
            pressed: editor.isActive("bold"),
        },
        {
            value:"italic",
            icon: <Italic className="size-4" />,
            onClick: () => editor.chain().focus().toggleItalic().run(),
            pressed: editor.isActive("italic"),
        },
        {
            value:"strikethrough",
            icon: <Strikethrough className="size-4" />,
            onClick: () => editor.chain().focus().toggleStrike().run(),
            pressed: editor.isActive("strike"),
        },
        ]
    const ListOptions=[
        {
            value:"ul",
            icon: <List className="size-4" />,
            onClick: () => editor.chain().focus().toggleBulletList().run(),
            pressed: editor.isActive("bulletList"),
            },
        {
            value:"ol",
            icon: <ListOrdered className="size-4" />,
            onClick: () => editor.chain().focus().toggleOrderedList().run(),
            pressed: editor.isActive("orderedList"),
        },
    ]
    return <div className="flex flex-row gap-2">
        <ToggleGroup type="single" className="border-2 mb-2">
            {OptionH.map((option,index)=>(

                <ToggleGroupItem key={index} value={option.value}  onClick={option.onClick}>{option.icon}</ToggleGroupItem>

            ))}
        </ToggleGroup>
    
        <ToggleGroup type="multiple" className="border-2 mb-2">
            {OptionF.map((option,index)=>(

                <ToggleGroupItem key={index} value={option.value}  onClick={option.onClick}>{option.icon}</ToggleGroupItem>

            ))}
        </ToggleGroup>
        <ToggleGroup type="single" className="border-2 mb-2">
            {ListOptions.map((option,index)=>(

                <ToggleGroupItem key={index} value={option.value}  onClick={option.onClick}>{option.icon}</ToggleGroupItem>

            ))}
        </ToggleGroup>
    </div>
}