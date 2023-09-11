import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LoaderContext } from "./LoaderContext";

interface User {
    username: string;
    password: string;
}

interface AuthContextProps {
    user: User | null;
    login: (params: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
    user: null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    login: () => {
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    logout: () => {
    },
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();
    const { setIsLoading } = useContext(LoaderContext);

    const login = async (params: User) => {
        setIsLoading(true);
        const response = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
        });   
        if (response.status === 200) {
            setUser(params);
            localStorage.setItem("user", JSON.stringify(params));
            router.push("/admin");
        }
        setIsLoading(false);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("lastAdminRoute");
        router.push("/login");
    };

    useEffect(() => {
        setIsLoading(true);
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            const lastAdminRoute = localStorage.getItem("lastAdminRoute");
            router.push(lastAdminRoute || "/admin");
        } else {
            router.push("/login");
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (router.pathname.startsWith("/admin")) {
            localStorage.setItem("lastAdminRoute", router.pathname);
        }
    }, [router.pathname]);
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
