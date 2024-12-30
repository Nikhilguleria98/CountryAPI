import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const CountryCard = ({ countryData }) => {
  return (
    <li className="border w-full flex flex-col items-center p-4 rounded-xl hover:scale-105 duration-300 cursor-pointer">
      <div className="h-24 w-32 flex justify-center items-center">
        <img
          src={countryData.flags.png}
          alt={`Flag of ${countryData.name.common}`}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Country details */}
      <div className="flex flex-col w-36 mt-4 text-center">
        <h1 className="font-bold text-lg">
          {countryData.name.common.length > 10
            ? countryData.name.common.slice(0, 10) + "..."
            : countryData.name.common}
        </h1>
        <div className="text-sm mt-2">
          <p>
            <span className="font-bold">Population:</span>
            {countryData.population}
          </p>
          <p>
            <span className="font-bold">Region:</span> {countryData.region}
          </p>
          <p>
            <span className="font-bold">Capital:</span>
            {countryData.capital?.[0]?.length > 10
              ? countryData.capital[0].slice(0, 10) + "..."
              : countryData.capital?.[0]}
          </p>
        </div>
      </div>

      {/* Button */}
      <NavLink to={`/country/${countryData.name.common}`} className="flex items-center mt-3">
  <button className="flex items-center justify-center space-x-2 border p-2 rounded-full w-36 group ">
    <span>Read more</span>
    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700">
      <FaArrowRight />
    </div>
  </button>
</NavLink>

    </li>
  );
};

export default CountryCard;
