import { createContext, useContext } from "react";

export const ThemeConetxt = createContext({
    themeMode: "light",
    darkTheme: () =>{},
    lighhtTheme: () => {}
})

export const ThemeProvider = ThemeConetxt.Provider

export default function useTheme(){
    return useContext(ThemeConetxt)
}