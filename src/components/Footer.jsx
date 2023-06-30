import { github, graphql, apolloLogo } from "../assets"
const Footer = () => {

    return(
    <footer className="footer">
        <div className="footer-section">  
          <p className=''>Powered by</p>
          <div>
            <img src={apolloLogo} alt="Apollo-logo" className='logo'/>
          <img src={graphql} alt="GraphQL-logo" className='logo'/> 
          </div>                
        </div>
    </footer>
    )

}

export default Footer