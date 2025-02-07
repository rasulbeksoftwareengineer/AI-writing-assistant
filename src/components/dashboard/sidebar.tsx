import { Loader2, Pencil } from "lucide-react";
import PromptHistory from "./prompt-history";
import { useAppContext } from "@/contexts/app.context";
import clsx from "clsx";
import { useContentContext } from "@/contexts/content.context";
import { Link } from "react-router-dom";
export default function Sidebar() {
    const { sidebarOpen } = useAppContext();

    const { generatingContent, getPromptHistory } = useContentContext();

    const historyItems = getPromptHistory();

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
                        <Link to='/chat'>
                            <Pencil size={24} />
                        </Link>
                }

            </div>
            <PromptHistory items={historyItems} />
        </nav>
    );
}   