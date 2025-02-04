import { Loader2, Pencil } from "lucide-react";
import PromptHistory from "./prompt-history";
import { TPromptHistory } from "@/shared/types/prompt-history.type";
import { useAppContext } from "@/contexts/app.context";
const mockItems: TPromptHistory[] = [
    {
        date: "Today",
        links: [
            {
                title: "How to write a blog post",
                url: "/blog-post"
            },
            {
                title: "How to write a book",
                url: "/write-book"
            }
        ]
    },
    {
        date: "Yesterday",
        links: [
            {
                title: "How to write a blog post",
                url: "/blog-posts"
            },
            {
                title: "How to write a book",
                url: "/write-books"
            }
        ]
    }
]
export default function Sidebar() {
    const { generatingContent } = useAppContext();
    return (
        <nav className="h-screen w-80 p-4 border-r">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">AI Writer Assissent</h1>
                {
                    generatingContent ?
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        :
                        <button>
                            <Pencil size={24} />
                        </button>
                }

            </div>
            <PromptHistory items={mockItems} />
        </nav>
    );
}   