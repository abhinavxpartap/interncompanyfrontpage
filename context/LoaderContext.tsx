import React, { createContext, useState } from "react";

interface LoaderContextProps {
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
}

export const LoaderContext = createContext<LoaderContextProps>({
    isLoading: false,
    setIsLoading: () => {
    },
});

export const LoaderProvider: React.FC<any> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoaderContext.Provider>
    );
};