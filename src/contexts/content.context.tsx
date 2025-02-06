import { TContentCreateRequestParam } from "@/shared/types/content-create-request-params";
import { TGeneratedContent } from "@/shared/types/generated-content";
import { generateArticle } from "@/utils/openai";
import { createContext, FC, ReactNode, useContext, useState } from "react";
import toast from "react-hot-toast";

interface IContentContext {
    generatingContent: boolean;
    setGeneratingContent: (value: boolean) => void;
    generateContent: (
        params: TContentCreateRequestParam
    ) => Promise<string | null>;
}

export const ContentContext = createContext<IContentContext | null>(null);

const useContentContext = () => {

    const context = useContext(ContentContext);

    if (!context) {

        throw new Error('Connet context must be used within a ContentProvider')

    }

    return context;

}

interface IProps {
    children: ReactNode;
}

const ContentContextProvider: FC<IProps> = ({ children }) => {
    const [generatingContent, setGeneratingContent] = useState(false);
    const generateContent = async (params: TContentCreateRequestParam) => {
        let content = null;
        setGeneratingContent(true);
        const { title, description } = params;

        try {

            content = await generateArticle(title, description);
            
            if (content) {
                const generatedContentItem: TGeneratedContent = {
                    id: '12345',
                    title,
                    description,
                    content,
                    createdAt: new Date()
                }

                localStorage.setItem('contentItems', JSON.stringify([generatedContentItem]));

            }
        }

        catch (error) {

            console.error('[Error] Failed to generate article', error);
            toast.error("Afsuski AI bilan bo'gliq muommolar mavjud.")
        }

        finally {
            setGeneratingContent(false);
        }

        return content;
    }

    return (
        <ContentContext.Provider value={{
            generatingContent,
            setGeneratingContent,
            generateContent,
        }}
        >
            {children}
        </ContentContext.Provider>
    );
}

export { ContentContextProvider, useContentContext }