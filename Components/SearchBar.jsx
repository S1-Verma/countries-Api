import React, { useContext } from 'react';
import { usefilter } from './Hooks/useFilter';
import { FilterContext } from '../contexts/FilterContext';

const SearchBar = () => {
  const {query, setQuery} = usefilter()

    return (
        <div className="search-container">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input onChange={(e)=>{setQuery(e.target.value.toLowerCase())}}  className='searchInput' type="text" placeholder='Search for a country...' />
        </div>
    );
}
 
export default SearchBar;
