import { createContext, useContext, useState } from "react"

interface ThemeContextType {
  theme: String;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({children}: {children: React.ReactNode}){

  const [theme, setTheme] = useState(()=>localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

  return <ThemeContext.Provider value={}>
    {children}
  </ThemeContext.Provider>
}

export function useTheme(){
  const context = useContext(ThemeContext)
  if(context == undefined){
    throw new Error('UseTheme must be used within a ThemeProvider')
  }
  return context;
}