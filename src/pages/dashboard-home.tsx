import ContentCreateForm from "@/components/dashboard/content-create-form";
import ContentViewer from "@/components/dashboard/content-viewer";
import { useAppContext } from "@/contexts/app.context";
import { ContentCreateRequestParam } from "@/shared/types/content-create-request-params";
import { generateArticle } from "@/utils/openai";
import { useState } from "react";

export default function DashboardHome() {
    const {setGeneratingContent, generatingContent} = useAppContext();
    const [content, setContent] = useState<string | null>(null);
    const handleSubmit = async (params: ContentCreateRequestParam) => {
        setGeneratingContent(true);
        const {title, descrption} = params;
        const result = await generateArticle(title, descrption);
        setContent(result)
        setGeneratingContent(false);
    }
    return (
        <div>
            <h1 className="text-3xl font-semibold">Article Writer</h1>
            {content ? <ContentViewer content={content}/> : <ContentCreateForm isLoading={generatingContent} onSubmit={handleSubmit}/>}
        </div>
    )
};