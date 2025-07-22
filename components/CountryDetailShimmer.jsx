import "./CountryDetailShimmer.css"

export default function CountryDetailShimmer() {
  return (
    <div className='country-details  shimmerEffect-country-details '>
        <div className="country-img shimmerEffect"></div>
        <div className="country-text shimmerEffect">
            <div className="country-name shimmerEffect-country-name"> </div>
            <div className="country-text-mid shimmerEffect-country-text-mid">
            </div>
        </div>
    </div>
  )
}
