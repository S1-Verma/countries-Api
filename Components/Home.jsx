import SearchBar from "./SearchBar";
import CountresList from "./CountresList";
import SelectMenu from "./SelectMenu";
import { useState } from "react";
import { useTheme } from "./Hooks/useTheme";
import { FilterProvider } from "../contexts/FilterContext";

const Home = () => {
  
  const [isDark] = useTheme();
  return (
    <FilterProvider>
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar  />
        <SelectMenu />
      </div>
      <CountresList />
    </main>
    </FilterProvider>
  );
};

export default Home;
