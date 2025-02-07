import ContentCreateForm from "@/components/dashboard/content-create-form";
import { useContentContext } from "@/contexts/content.context";
import { TContentCreateRequestParam } from "@/shared/types/content-create-request-params";
import { useNavigate } from "react-router-dom";

export default function DashboardHome() {

    const { generateContent, generatingContent } = useContentContext();

    const navigate = useNavigate();

    const handleSubmit = async (params: TContentCreateRequestParam) => {
        const result = await generateContent(params);
        if (result) {
            navigate(`/chat/content/${result.id}`)
        }
    }

    return (
        <div>
            <a href='/chat'><h1 className="text-3xl font-semibold">Article Writer</h1></a>
            {/* {content ? <ContentViewer content={content} /> : <ContentCreateForm isLoading={generatingContent} onSubmit={handleSubmit} />} */}
            <ContentCreateForm isLoading={generatingContent} onSubmit={handleSubmit} />
        </div>
    )
};