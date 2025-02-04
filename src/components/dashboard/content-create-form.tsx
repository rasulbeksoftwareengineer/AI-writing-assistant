import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { z } from 'zod';
import { ContentCreateRequestParam } from "@/shared/types/content-create-request-params";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Loader2 } from "lucide-react";

type ContentCreateFormProps = {
    isLoading: boolean;
    onSubmit: (params: ContentCreateRequestParam) => void;
}

const formSchema = z.object({
    title: z.string().min(1, "Sizda eng kamida 1 symboldan iborat Mavzu bo'lishi kerak").max(500),
    descrpition: z.string().min(1, "Sizda eng kamida 1 symboldan iborat Mavzu bo'lishi kerak").max(1000),
})

export default function ContentCreateForm({
    isLoading, onSubmit
}: ContentCreateFormProps) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            descrpition: ''
        }
    })

    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        onSubmit(values);
    };



    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 mt-4">
                <FormField
                    control={form.control} name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Example: React js about in BrowserRouter" disabled={isLoading} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control} name="descrpition"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Descrpition</FormLabel>
                            <FormControl>
                                <Input placeholder="Example: Write about react js in react-router-dom" disabled={isLoading} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Generate
                </Button>
            </form>
        </Form>
    )
}