import { github } from "../assets"
const Header = () => {

    return(
    <div className="header">
        <h1 className='title'><span className='sass'>Sassy</span> Map</h1>        
          <div className="sub-header"> 
        <p className='subtitle'>Available on</p> 
        <img className="github" src={github} onClick={()=>{open("https://github.com/User083/sassy-map", "_blank")}} />
        </div>        
    </div>
    )

}

export default Header