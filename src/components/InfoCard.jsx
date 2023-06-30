
const InfoCard = (country) => {

    return(

        <>
        <div data-testid="info-card" className='info-card'>

    <h3 className='country-title'>{country.name}</h3>
    <p className='text-default'><span className="labels">Native Referral:</span> {country.native}</p>
    <p className='text-default'><span className="labels">Capital City:</span> {country.capital}</p>
    <p className='text-default'><span className="labels">Currency:</span> {country.currency}</p>
    <div className=''
        ><p className=''><span className="labels">Official Languages:</span> </p>
          {country.languages.map((language) => (
            <li key={language.name} className="language">{language.name}</li>
          ))}
        </div>
    </div>
    
        </>
    )
}

export default InfoCard