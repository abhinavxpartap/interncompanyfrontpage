import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LoaderContext } from "./LoaderContext";

const BEARER_TOKEN = process.env.DATA_API_KEY;

interface User {
    username: string;
    password: string;
}

interface AuthContextProps {
    user: User | null;
    login: (params: User) => Promise<boolean>;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextProps>({
    user: null,
    login: async () => false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    logout: () => {},
    isLoading: false,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true); // Initial state is loading
    const router = useRouter();
    const { setIsLoading: setLoaderIsLoading } = useContext(LoaderContext);

    const login = async (params: User) => {
        try {
            setLoaderIsLoading(true);

            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${BEARER_TOKEN}`,
                },
                body: JSON.stringify(params),
            });

            if (response.status === 200) {
                const user = params;
                setUser(user);
                localStorage.setItem("user", JSON.stringify(user));
                router.push("/admin");
                return true; // Successful login
            } else {
                // Handle authentication error, show message to the user
                return false;
            }
        } catch (error) {
            console.error("Error during login:", error);
            return false;
        } finally {
            setLoaderIsLoading(false);
        }
    };


    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("lastAdminRoute");
        router.push("/login");
    };

    useEffect(() => {
        // Check for stored user data
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            const lastAdminRoute = localStorage.getItem("lastAdminRoute");
            router.push(lastAdminRoute || "/admin");
        } else {
            router.push("/login");
        }
        setIsLoading(false); // Done loading
    }, [router]);

    useEffect(() => {
        // Store the last admin route
        if (router.pathname.startsWith("/admin")) {
            localStorage.setItem("lastAdminRoute", router.pathname);
        }
    }, [router.pathname]);

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
