import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();


export default function ThemeContextProvider({childern}) {

 const [theme, setTheme] = useState("light");
  
 const onClickHandle = () => {
  if(theme == 'light') {
    setTheme('dark');
  }else {
    setTheme('light');
  }
 }

  return (
    <ThemeContext.Provider value={{theme: theme, toggleTheme: onClickHandle}}>
        {childern}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

