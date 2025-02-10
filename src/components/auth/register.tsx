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
    passwordRepeat: z.string().min(4).max(10),
}).refine((data) => data.password === data.passwordRepeat, {
    message: 'Passwords are not equal',
    path: ['passwordRepeat']
});

export default function Register() {
    const navigate = useNavigate();
    const { registerUser } = useAuthContext()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            login: '',
            password: '',
            passwordRepeat: ''
        }
    });

    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        const { login, password } = values;
        registerUser(login, password);
        toast.success('Accaout created');
        navigate('/auth/login')
    }

    return <Form {...form}>
        <form action="" onSubmit={form.handleSubmit(handleSubmit)} className="w-full">
            <Card className="max-w-md mx-auto">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Create an Account</CardTitle>
                    <CardDescription>Enter your login and password to create an account</CardDescription>
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
                    <FormField
                        name="passwordRepeat"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password Repeat</FormLabel>
                                <FormControl>
                                    <Input type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </CardContent>
                <CardFooter>
                    <Button className="w-full">Create account</Button>
                </CardFooter>
            </Card>
        </form>
    </Form>
}