import { Loader2, Pencil } from "lucide-react";
import PromptHistory from "./prompt-history";
import { TPromptHistory } from "@/shared/types/prompt-history.type";
import { useAppContext } from "@/contexts/app.context";
import clsx from "clsx";
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
    const { generatingContent, sidebarOpen } = useAppContext();
    return (
        <nav className={clsx(
            'h-screen overflow-x-hidden md:w-80 md:p-4 md:border-r lg:p-6 transition-all duration-500', sidebarOpen ? 'w-1/2 border-r p-2' : 'w-0'
        )}>
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