import ContentCreateForm from "@/components/dashboard/content-create-form";
import ContentViewer from "@/components/dashboard/content-viewer";
import { useAppContext } from "@/contexts/app.context";
import { ContentCreateRequestParam } from "@/shared/types/content-create-request-params";
import { generateArticle } from "@/utils/openai";
import { useState } from "react";
import toast from "react-hot-toast";

export default function DashboardHome() {
    
    const { setGeneratingContent, generatingContent } = useAppContext();
    
    const [content, setContent] = useState<string | null>(null);
    
    const handleSubmit = async (params: ContentCreateRequestParam) => {
        setGeneratingContent(true);
        const { title, descrption } = params;
        
        try {
        
            const result = await generateArticle(title, descrption);
        
            setContent(result);
        }
        
        catch (error) {
        
            console.error('[Error] Failed to generate article', error);
            toast.error("Afsuski AI bilan bo'gliq muommolar mavjud.")
        }

        finally{
            setGeneratingContent(false);
        }
    }
    
    return (
        <div>
            <h1 className="text-3xl font-semibold">Article Writer</h1>
            {content ? <ContentViewer content={content} /> : <ContentCreateForm isLoading={generatingContent} onSubmit={handleSubmit} />}
        </div>
    )
};