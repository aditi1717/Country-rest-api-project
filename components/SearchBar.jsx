
export default function SearchBar({setQuery}) {
  return (
    <>
            <div className="search-container">
                <span><i className="fa-solid fa-magnifying-glass"></i></span>
                <input onChange={(e)=>{
                 console.log( e.target.value);
                setQuery(e.target.value.toLowerCase());
                  
                }} type="text" className="search-input"  placeholder="Search for a country"/>
            </div>
    </>
  )
}
