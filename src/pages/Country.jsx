import React, { useEffect, useState, useTransition } from "react";
import countryApi from "../api/countryApi";
import CountryCard from "./CountryCard";
import Loader from "./Loader";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]); // Stores all countries
  const [filteredCountries, setFilteredCountries] = useState([]); // Stores filtered countries
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(8); // Limit to 10 countries per page

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await countryApi.getCountryData();
        setCountries(res.data);  // Save all countries data
        setFilteredCountries(res.data);  // Initialize filtered data with all countries
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    });
  }, []);

  useEffect(() => {
    // Filter countries based on the search term
    const filtered = countries.filter((country) =>
      country.name?.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered); 
    setCurrentPage(1); 
  }, [searchTerm, countries]);

  // Pagination logic
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(indexOfFirstCountry, indexOfLastCountry);

  // Total number of pages
  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <h1 className="mt-20 text-center">
          <Loader />
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <input
          type="text"
          placeholder="Search countries..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-5 p-2 px-2 border-0 outline-none rounded-full  bg-zinc-800 text-slate-400"
        />
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-8/12 gap-5">
          {currentCountries.length > 0 ? (
            currentCountries.map((countryData, index) => (
              <CountryCard countryData={countryData} key={index} />
            ))
          ) : (
            <p className="col-span-full text-gray-500 text-center">
              No countries found
            </p>
          )}
        </ul>

        {/* Pagination controls */}
        <div className="flex items-center justify-center mt-10 mb-10">
          <button
            onClick={prevPage}
            className="px-4 py-2 mx-2 border-2  text-white rounded-lg disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="text-lg">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            className="px-4 py-2 mx-2 border-2 text-white rounded-lg disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Country;
