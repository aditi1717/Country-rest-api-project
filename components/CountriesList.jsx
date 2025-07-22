import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard.jsx'
export default function CountriesContainer({ query,cregion }) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountriesData(data);

      });
  }, []
  )
  console.log(cregion);
   

  // cregion == " " ? query == " " ?console.log("nothing fill"):console.log("only query fill") :console.log("cregion fill");

   


  //  const filteredByRegion = countriesData.filter((country) => {
         
  //        const filteredCondition=cregion == " " ? query == " " ? true :country.name.common.toLowerCase().includes(query) : query == " " ? country.region.toLowerCase().includes(cregion.toLowerCase()):(country.name.common.toLowerCase().includes(query)&& country.name.common.toLowerCase().includes(query) )
           
  //         return filteredCondition;
  //         })
  //      console.log(filteredByRegion);



  return (
    <>
      <div className='countries-container'>
        { 
         
         countriesData.filter((country) => {
         
         const filteredCondition=cregion == " " ? query == " " ? true :country.name.common.toLowerCase().includes(query) : query == " " ? country.region.toLowerCase().includes(cregion.toLowerCase()):(country.name.common.toLowerCase().includes(query)&& country.region.toLowerCase().includes(cregion.toLowerCase()) )
           
          return filteredCondition;
          }).map((country) => {
            console.log("hii");
            

            return <CountryCard key={country.name.common} name={country.name.common} flag={country.flags.svg} population={country.population.toLocaleString("en-IN")} region={country.region} capital={country.capital?.[0]} />


          })

        }
      </div>
    </>
  )
}

