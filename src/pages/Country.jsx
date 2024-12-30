import React, { useEffect, useState, useTransition } from "react";
import countryApi from "../api/countryApi";
import CountryCard from "./CountryCard";
import Loader from "./Loader";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await countryApi.getCountryData();
        setCountries(res.data);
        setFilteredCountries(res.data); // Initialize with all countries
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    });
  }, []);

  useEffect(() => {
    // Filter based on `name.common`
    const filtered = countries.filter(
      (country) =>
        country.name?.common
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [searchTerm, countries]);

  if (isPending) return <Loader />;

  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <input
          type="text"
          placeholder="Search countries..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-5 p-2 px-2 border-0 outline-none rounded-full w-3/12 bg-zinc-800 text-slate-400"
        />
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-8/12 gap-5">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((countryData, index) => (
              <CountryCard countryData={countryData} key={index} />
            ))
          ) : (
            <p className="col-span-full text-gray-500 text-center">No countries found</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default Country;
