import React, { useState } from 'react'
import "./App.css"
import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx'
import SelectMenu from './components/SelectMenu.jsx'
import CountriesList from './components/CountriesList.jsx'

export default function App() {
  const [query, setQuery] = useState(" ");
  return (
    <>
      <Header/>
      <main>
        <div className="search-filter-container">
        <SearchBar setQuery={setQuery}/>
         <SelectMenu/>
      </div>
       <CountriesList query={query}/>
      </main>
    </>
  )
}
