import "./CountriesListShimmer.css"

export default function CountriesListShimmer() {

// Array.from({length:10}) this gives array of 10 undefinend values   

  return (
    <div className='countries-container'>

    { Array.from({length:10}).map((value,i)=>{
      console.log(i);
      
            return (<div key={i} className="country-card shimmer-card"></div>)
    })}
       
    </div>
  )
}
