import React, { useContext, useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Shimmer from "./Shimmer";
import { usefilter, useFilter } from "./Hooks/useFilter";

export default function CountresList() {
  const [loading, setLoading] = useState(true); // Loading state
  const { query, setQuery } = usefilter();
  const [countriesData, setCountriesData] = useState(null);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,population,flags,subregion,tld,languages,borders",
    )
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Data fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Shimmer />;
  }

  const cardArr = countriesData
    .filter(
      (country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase()) ||
        country.region.toLowerCase().includes(query.toLowerCase()),
    )
    .map((country) => {
      const country_Name = country.name.common;
      const country_flag = country.flags;
      const countryPopulation = country.population.toLocaleString("en-IN");
      const region = country.region;
      const capital = country.capital;


      return (
        <CountryCard
          key={country_Name}
          countryName={country_Name}
          flag={country_flag}
          countryPopulation={countryPopulation}
          region={region}
          capital={capital}
          data={country}
        />
      );
    });

  return <div className="countries-container">{cardArr}</div>;
}
