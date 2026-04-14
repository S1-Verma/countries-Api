const { createContext, useState } = require("react");

export const ThemeContext = createContext("ThemeContext");

export function ThemeProvider({ children }) { 
  // ab is theme provider me jo bhi value pass hogi hum use yaha children me access kar sakte he 
    const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode")),
  ); 
   //  yaha se hume children se dono components mill jayenge header and Outlet jo humne App.jsx me theme provider me wrap kiye he 
  
  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      {children}
    </ThemeContext.Provider>
  );
}
