import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { useAppContext } from "@/contexts/app.context";
import { useAuthContext } from "@/contexts/auth.context";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export default function Navbar() {

    const navigate = useNavigate();

    const {toggleSidebar} = useAppContext();

    const { user, logoutUser} = useAuthContext();

    const handleLogout = () =>{
        logoutUser();
        navigate('/auth/login');
        toast.success('Successfuly logout')
    }

    return <div className="border-b">
        <nav className="flex items-center justify-between p-4 h-16">
            <div className="flex items-center gap-2">
                <Button className="block md:hidden" variant="outline" onClick={toggleSidebar}>
                    <i className="fa-solid fa-bars"></i>
                </Button>
                <h4 className="font-semibold">ChatBot</h4>

            </div>
            <DropdownMenu>
                <DropdownMenuTrigger>{user?.login}</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </nav>
    </div>
}