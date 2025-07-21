import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard.jsx'

export default function CountriesContainer({ query }) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountriesData(data);
      });

  },[]
  )

  return (
    <>
      <div className='countries-container'>
        {
          countriesData.filter((country) => country.name.common.toLowerCase().includes(query)).map((country) => {

            return <CountryCard key={country.name.common} name={country.name.common} flag={country.flags.svg} population={country.population.toLocaleString("en-IN")} region={country.region} capital={country.capital?.[0]} />


          })

        }
      </div>
    </>
  )
}
