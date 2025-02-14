import { describe } from "vitest";
import Hero from "./hero";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import * as authContext from '@/contexts/auth.context.tsx';
import { TRegisteredUser } from "@/shared/types/registered-user";

const renderHero = (user: TRegisteredUser | null) => {
    vi.spyOn(authContext, 'useAuthContext').mockReturnValue({
        user,
        logoutUser: vi.fn(),
        registerUser: vi.fn(),
        loginUser: vi.fn()
    })
    render(
        <MemoryRouter>
            <authContext.AuthProvider>
                <Hero />
            </authContext.AuthProvider>
        </MemoryRouter>
    );

}

describe('Homepage Hero', () => {
    it('should render the register', () => {

        renderHero(null)

        const registerButton = screen.getByTestId('@hero/register-link');
        expect(registerButton).toBeInTheDocument();
    })
    it('should render the dashboard link if user is authenticated', () => {

       renderHero({
        login: 'login',
        password: 'password',
        createdAt: new Date()
       });

        const chatButton = screen.getByTestId('@hero/chat-link');
        expect(chatButton).toBeInTheDocument();
    })
})