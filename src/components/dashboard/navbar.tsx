import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { useAppContext } from "@/contexts/app.context";
export default function Navbar() {

    const {toggleSidebar} = useAppContext();

    return <div className="border-b">
        <nav className="flex items-center justify-between p-4 h-16">
            <div className="flex items-center gap-2">
                <Button className="block md:hidden" variant="outline" onClick={toggleSidebar}>
                    <i className="fa-solid fa-bars"></i>
                </Button>
                <h4 className="font-semibold">ChatBot</h4>

            </div>
            <DropdownMenu>
                <DropdownMenuTrigger>Rasulbek</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </nav>
    </div>
}