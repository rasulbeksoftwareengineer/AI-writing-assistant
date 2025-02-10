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
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
enum LanguageCode {
    English = 'en',
    Uzbek = 'uz',
}

type TLanguage = {
    label: string;
    flag: string;
};

const LANGUAGES: { [code in LanguageCode]: TLanguage } = {
    [LanguageCode.English]: {
        label: 'English 🇬🇧',
        flag: '🇬🇧',
    },
    [LanguageCode.Uzbek]: {
        label: "O'zbekcha 🇺🇿",
        flag: '🇺🇿',
    },
};


export default function Navbar() {
    const { i18n, t } = useTranslation('chat');
    const navigate = useNavigate();

    const { toggleSidebar } = useAppContext();

    const { user, logoutUser } = useAuthContext();

    const [activeLanguage, setActiveLanguage] = useState<TLanguage>(LANGUAGES.en);

    useEffect(() => {
        setActiveLanguage(LANGUAGES[i18n.language as LanguageCode]);
    }, [i18n.language]);

    const changeLanguage = (lang: string) => {
        if (lang !== i18n.language) {
            i18n.changeLanguage(lang);
        }
    };

    const handleLogout = () => {
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
            <div className="flex gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger>{user?.login}</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>{t('profile')}</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout}>
                            {t('logout')}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">{activeLanguage.flag}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {Object.entries(LANGUAGES).map(([code, { label }]) => (
                            <DropdownMenuItem
                                key={code}
                                className="cursor-pointer"
                                onClick={() => changeLanguage(code)}
                            >
                                {label}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

        </nav>
    </div>
}