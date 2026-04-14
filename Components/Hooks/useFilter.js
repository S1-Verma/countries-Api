import { useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";

export const usefilter = () => useContext(FilterContext) ;

