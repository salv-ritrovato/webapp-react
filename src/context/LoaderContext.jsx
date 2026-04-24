import { createContext, useState, useContext } from "react";

const LoaderContext = createContext();

export function LoaderProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoaderContext.Provider>
    );
}

export function useLoader() {
    const context = useContext(LoaderContext);
    return context;
}