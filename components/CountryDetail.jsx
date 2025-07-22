import React, { useEffect, useState } from 'react'
import "./CountryDetail.css"
import { Link, useLocation, useOutletContext, useParams } from 'react-router';
import CountryDetailShimmer from './CountryDetailShimmer';

export default function CountryDetail() {
	const params = useParams();
	const {state}=useLocation();
	console.log(state);
	
	// console.log(params);


	// const countryName = new URLSearchParams(location.search).get('name');
	const [countryData, setCountryData] = useState(null);
	const [notFound, setNotFound] = useState(false);
	const [isDark]=useOutletContext();
	function updateCountryData(country){
         		setCountryData({
					name: country.name.common,
					img: country.flags.svg,
					population: country.population.toLocaleString('en-IN'),
					nativeName: Object.values(country.name.nativeName)[0].common,
					population: country.population.toLocaleString('en-IN'),
					region: country.region,
					subRegion: country.subregion,
					capital: country.capital,
					domain: (country.tld).join(', '),
					currencies: Object.values(country.currencies).map((currency) => currency.name).join(', '),
					languages: Object.values(country.languages).join(','),
					borders: [],

				});
				if (!country.borders) {
					country.borders = [];
				}
				Promise.all(country.borders.map((border) => {
					return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
						.then((res) => res.json())
						.then(([borderCountry]) => borderCountry.name.common)
				})).then((borders) => {
					setTimeout(()=>{
						setCountryData((previousState) => ({ ...previousState, borders }))
					})
				})
	}

	useEffect(() => {
		 if(state){
        updateCountryData(state);
		return;
	}

		fetch(`https://restcountries.com/v3.1/name/${params.country}?fullText=true`)
			.then((response) => response.json())
			.then(([country]) => {
				updateCountryData(country)
			})
			.catch(() => {
				setNotFound(true);

			})
	}, [params.country])

	if (notFound) {
		return <div>Country not found</div>;
	}

	return countryData === null ? <CountryDetailShimmer/> :(
		<>
			<main className={`main ${isDark?"dark":""}`}>
				<span onClick={() => {
					history.back();
				}} className="back-button"
				><i className="fa-solid fa-arrow-left"></i> &nbsp;&nbsp;Back</span>
				<div className="country-details">
					<div className="country-img">
						<img className="flag-image" src={countryData.img} alt={`${countryData.name} flag`} />
					</div>
					<div className="country-text">
						<h1 className="country-name">{countryData.name}</h1>
						<div className="country-text-mid">
							<p><b>Native Name:</b><span className="native-name">{countryData.nativeName}</span></p>
							<p><b>Population:</b><span className="population">{countryData.population}</span></p>
							<p><b>Region:</b><span className="region"></span>{countryData.region}</p>
							<p><b>Sub Region:</b><span className="sub-region">{countryData.subRegion}</span></p>
							<p><b>Capital:</b><span className="capital">{countryData.capital.join(",")}</span></p>
							<p><b>Top Level Domain:</b><span className="domain">{countryData.domain}</span></p>
							<p><b>Currencies:</b><span className="currencies">{countryData.currencies}</span></p>
							<p><b>Languages:</b><span className="language">{countryData.languages}</span></p>
						</div>
						{countryData.borders.length !== 0 && <div className="border-countries">
							<b>Border Countries:</b>
							{countryData.borders.map((border,i) => <Link className='button' key={i} to={`/${border}`}>{border}</Link>)}
						</div>}

					</div>
		</div>
	</main>
 	</>
)
}
 