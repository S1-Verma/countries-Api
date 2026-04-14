import { createContext, useState } from "react";

// 1. Create the context
export const FilterContext = createContext();

// 2. Capitalize the Provider component name
export function FilterProvider({ children }) {
  const [query, setQuery] = useState("");

  return (
    // 3. Pass the state and setter as the value
    <FilterContext.Provider value={{ query, setQuery }}>
      {children}
    </FilterContext.Provider>
  );
}