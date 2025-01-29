import { TPromptHistory } from "@/shared/types/prompt-history.type";
import { Link } from "react-router-dom";
export type TPromptHistoryProps = {
    items: TPromptHistory[];
}
export default function PromptHistory({ items }: TPromptHistoryProps) {
    return (
        <nav className="mt-8">
            {items.map(item => (
                <div key={item.date} className="mb-4">
                    <h5 className="text-sm text-gray-400 font-semibold">{item.date}</h5>
                    <nav className="mt-2">
                        {item.links.map((link) => (
                            <Link key={link.url} to={link.url} className="flex items-center px-3 py-2 my-2 rounded-md font-medium text-sm hover:bg-gray-100">{link.title}</Link>
                        ))}
                    </nav>
                </div>
            ))}
        </nav>
    );
};
