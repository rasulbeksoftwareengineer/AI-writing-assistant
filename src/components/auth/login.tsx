import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useAuthContext } from "@/contexts/auth.context";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
    login: z.string().min(5).max(20),
    password: z.string().min(4).max(10),
})

export default function Login() {
    const navigate = useNavigate();
    const { loginUser } = useAuthContext()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            login: '',
            password: '',
        }
    });

    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        const { login, password } = values;
        try {
            loginUser(login, password);
            toast.success('Login successful!');
            navigate('/chat')
        } catch (error){
            if (error instanceof Error) {
                toast.error(error.message)
            }
        }
    }

    return <Form {...form}>
        <form action="" onSubmit={form.handleSubmit(handleSubmit)} className="w-full">
            <Card className="max-w-md mx-auto">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Login to your account</CardTitle>
                    <CardDescription>Enter your login and password to login to your account</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <FormField
                        name="login"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Login</FormLabel>
                                <FormControl>
                                    <Input placeholder="myLogin" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="password"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" {...field} />
                                </FormControl>
                                <FormMessage />

                            </FormItem>
                        )}
                    />
                </CardContent>
                <CardFooter>
                    <Button className="w-full">Login</Button>
                </CardFooter>
            </Card>
        </form>
    </Form>
}