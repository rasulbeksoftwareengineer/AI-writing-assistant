import { Outlet } from "react-router-dom";

export default function AuthLayout(){
    return <div className="h-screen grid md:grid-cols-2">
        <div className="bg-black text-white px-4 py-10 hidden md:flex justify-between flex-col">
            <h2 className="text-3xl">AI Writer Assistant</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quod et quibusdam eius assumenda cumque.</p>
        </div>
        <div className="flex items-center px-4">
            <Outlet/>
        </div>
    </div>
}