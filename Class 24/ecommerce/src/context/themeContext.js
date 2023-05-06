import { createContext, useState } from "react";


export const ThemeContext =  createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode((oldValue) => !oldValue);
    }
    const value = {
        isDarkMode,
        toggleTheme
    }
    return (
        <ThemeContext.Provider value={value}>
            { children }
        </ThemeContext.Provider>
    )
}