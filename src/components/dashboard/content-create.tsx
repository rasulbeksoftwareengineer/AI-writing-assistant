import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Loader2 } from "lucide-react";
import { generateArticle } from "@/utils/openai";
import ContentViewer from "./content-viewer";

export default function ContentCreate() {
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        title: '',
        descrption: '',
    })
    const [content, setContent] = useState<string | null>(null);
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setIsLoading(true)
        const result = await generateArticle(form.title, form.descrption);
        setContent(result)
        setIsLoading(false);

    }
    const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.currentTarget;
        setForm({ ...form, [name]: value });
    }
    return <div>
        <h1 className="text-3xl font-semibold">Article Writer</h1>
        {
        content ?
            <ContentViewer content={content} />
            :
            <form className="mt-4" onSubmit={handleSubmit}>
                <div className="grid w-full items-center gap-1.5 mb-4">
                    <Label htmlFor="title">Mavzu</Label>
                    <Input type="text" value='Next JS' id="title" name="title" placeholder="Mavzu nomi" onChange={handleChange} disabled={isLoading} />
                </div>
                <div className="grid w-full gap-1.5 mb-4">
                    <Label htmlFor="descrption">Descrption</Label>
                    <Textarea id="descrption" value='Write me about Next JS routing' name="descrption" placeholder="Enter your descrption" onChange={handleChange} disabled={isLoading} />
                </div>
                <Button disabled={isLoading}>
                    {isLoading && <Loader2 className="animate-spin" />}
                    Generate
                </Button>
            </form>
        }
    </div>
}