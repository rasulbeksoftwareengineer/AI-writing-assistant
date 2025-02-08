import ContentViewer from "@/components/dashboard/content-viewer";
import { useContentContext } from "@/contexts/content.context";
import { TGeneratedContent } from "@/shared/types/generated-content";
import clsx from "clsx";
import { StarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function DashboardContent() {

    const [generatedContent, setGeneratedContent] = useState<TGeneratedContent>();

    const { getContentById, updateById } = useContentContext();

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) {
            const result = getContentById(id);
            setGeneratedContent(result);
        }
    }, [id, getContentById])

    const handleSave = (generatedContent: TGeneratedContent) => {

        updateById(generatedContent.id, generatedContent)
    }

    if (!generatedContent) {
        return <h1>Topilmadi</h1>
    }

    const handleRateChange = (rate: number) => {
        if (generatedContent) {
            handleSave({
                ...generatedContent,
                rate,
            })
        }
    }

    return (
        <div>
            <div className="flex items-center gap-2">
                <h1 className="text-3xl font-semibold">{generatedContent.title}</h1>
                <div className="flex gap-1">
                    {Array(5).fill(0).map((_, index) => (
                        <StarIcon key={index} onClick={() => handleRateChange(index + 1)} className={clsx('w-8 h-8 cursor-pointer', (generatedContent.rate || 0) > index && 'fill-black')} />
                    ))}
                </div>
            </div>

            <ContentViewer generetedContent={generatedContent} key={generatedContent.id} onSave={handleSave} />
        </div>
    )
}
