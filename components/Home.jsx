import SearchBar from './SearchBar.jsx'
import SelectMenu from './SelectMenu.jsx'
import CountriesList from './CountriesList.jsx'

import React, { useState } from 'react'
import { useTheme } from '../hooks/useTheme.js';

export default function Home() {
    const [query, setQuery] = useState(" ");
    const [cregion, setCregion] = useState(" ");
    const [isDark]=useTheme();
   
    return (
        <>
         <main className={isDark?"dark":""}>
            <div className="search-filter-container">
                <SearchBar setQuery={setQuery}  />
                <SelectMenu setCregion={setCregion} />
            </div>
            <CountriesList query={query} cregion={cregion}/>
        </main>
        </>

    )
}
