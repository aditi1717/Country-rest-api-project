import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard.jsx'
import CountriesListShimmer from './CountriesListShimmer.jsx';
export default function CountriesContainer({ query,cregion }) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,subregion,tld,currencies,languages,borders"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountriesData(data);

      });
  }, []
  )
  console.log(cregion);
   

  // cregion == " " ? query == " " ?console.log("nothing fill"):console.log("only query fill") :console.log("cregion fill");

   





  return (
    <>
      {!countriesData.length?<CountriesListShimmer/>:
      <div className='countries-container'>
        { 
         
         countriesData.filter((country) => {
         
         const filteredCondition=cregion == " " ? query == " " ? true :country.name.common.toLowerCase().includes(query) : query == " " ? country.region.toLowerCase().includes(cregion.toLowerCase()):(country.name.common.toLowerCase().includes(query)&& country.region.toLowerCase().includes(cregion.toLowerCase()) )
           
          return filteredCondition;
          }).map((country) => {
            

            return <CountryCard key={country.name.common} name={country.name.common} flag={country.flags.svg} population={country.population.toLocaleString("en-IN")} region={country.region} capital={country.capital?.[0]} data={country}/>


          })

        }
      </div>}
    </>
  )
}

