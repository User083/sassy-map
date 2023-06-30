// import { useState } from "react";

const InfoCard = (country) => {

  // const [position, setPosition] = useState({left: 0, top: 0});
  // const [display, setDisplay] = useState("none");

//  document.getElementById("world-map").onclick = function (e) {
//   let x = e.clientX;
//   let y = e.clientY;
//   let position = {left: x, top: y};
//   setPosition(position)
//   setDisplay("flex")
//   }

// style={{
//   display: display,
//   position: "absolute",
//   left: position.left,
//   top: position.top, 
//   }}
  return(

        <>
        <div data-testid="info-card" className='info-card' id="info-card" >

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