import { TRegisteredUser } from "@/shared/types/registered-user";
import { createContext, FC, ReactNode, useContext } from "react";
import { useLocalStorage } from "react-use";

interface IAuthContext {
    register: (login: string, password: string) => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);

const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext must be used within an AuthProvider');
    }
    return context;
}

interface IProps {
    children: ReactNode;
}

const AuthProvider: FC<IProps> = ({ children }) => {

    const [users, setUsers] = useLocalStorage<TRegisteredUser[]>('users', []);

    const register = (login: string, password: string) => {
        if (users) {
            setUsers([...users, { login, password, createdAt: new Date() }]);
        }
    };

    return (
        <AuthContext.Provider value={{ register }}>
            {children}
        </AuthContext.Provider>
    )
};

export { AuthProvider, useAuthContext };