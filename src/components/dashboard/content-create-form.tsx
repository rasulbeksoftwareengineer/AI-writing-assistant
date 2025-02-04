import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Loader2 } from "lucide-react";
import { ContentCreateRequestParam } from "@/shared/types/content-create-request-params";

type ContentCreateFormProps = {
    isLoading: boolean;
    onSubmit: (params: ContentCreateRequestParam) => void;
}

export default function ContentCreateForm({
        isLoading, onSubmit
    }: ContentCreateFormProps) {

    const [form, setForm] = useState<ContentCreateRequestParam>({
        title: '',
        descrption: '',
    })

    const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.currentTarget;
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        onSubmit(form);
    }

    return (
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
    )
}