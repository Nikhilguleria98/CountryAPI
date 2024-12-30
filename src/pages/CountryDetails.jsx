import React, { useEffect, useState, useTransition } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import countryApi from '../api/countryApi';
import Loader from './Loader';

const CountryDetails = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const params = useParams();
  console.log(params);

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await countryApi.getCountryIndData(params.id);
      console.log(res);
      setCountry(res.data[0]);
    });
  }, [params.id]);

  if (isPending) return <Loader />;

  return (
  <div className='m-10'>
    <div className="mb-10">
        <button
          onClick={handleGoBack}
          className="border text-white px-4 py-2 rounded-lg shadow hover:bg-zinc-600 transition"
        >
          Go Back
        </button>
      </div>
      <div className=" mx-auto p-10 bg-zinc-800 rounded-lg">
      <div className="flex flex-col items-center md:flex-row md:items-start gap-10 mt-10 ">
        {/* Country Flag */}
        <div className="w-full md:w-1/2 max-w-lg">
          <img
            src={country?.flags?.svg}
            alt={`Flag of ${country?.name?.common || 'the country'}`}
            className="w-full  max-h-[300px] object-contain rounded "
          />
        </div>

        {/* Country Details */}
        <div className="w-full md:w-1/2 flex flex-col gap-1">
          <h1 className="">
            <span className="">Name:</span> {country?.name?.common || 'N/A'}
          </h1>
          <h2 className="">
            <span className="">Official Name:</span> {country?.name?.official || 'N/A'}
          </h2>
          <h3 className="">
            <span className="">Capital:</span>{' '}
            {country?.capital ? country.capital.join(', ') : 'No capital'}
          </h3>
          <p>
            <span className="">Population:</span>{' '}
            {country?.population ? country.population.toLocaleString() : 'N/A'}
          </p>
          <p>
            <span className="">Region:</span> {country?.region || 'N/A'}
          </p>
          <p>
            <span className="">Subregion:</span> {country?.subregion || 'N/A'}
          </p>
          <p>
            <span className="">Languages:</span>{' '}
            {country?.languages
              ? Object.values(country.languages).join(', ')
              : 'N/A'}
          </p>
          <p>
            <span className="">Currencies:</span>{' '}
            {country?.currencies
              ? Object.values(country.currencies)
                  .map((currency) => currency.name)
                  .join(', ')
              : 'N/A'}
          </p>
        </div>
      </div>

      {/* Go Back Button */}
      
    </div>
  </div>
  );
};

export default CountryDetails;
