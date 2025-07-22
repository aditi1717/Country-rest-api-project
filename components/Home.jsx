import SearchBar from './SearchBar.jsx'
import SelectMenu from './SelectMenu.jsx'
import CountriesList from './CountriesList.jsx'

import React, { useState } from 'react'

export default function Home() {
    const [query, setQuery] = useState(" ");
    return (
        <main>
            <div className="search-filter-container">
                <SearchBar setQuery={setQuery} />
                <SelectMenu />
            </div>
            <CountriesList query={query} />
        </main>
    )
}
