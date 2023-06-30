import './App.scss'
import Home from './components/Home'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {


  return (
    <div id='app' className='app'>
      <Header/>
    <div data-testid="app" className='content'>
    <Home/>
    
    </div>
   <Footer/>
    </div>

  )
}

export default App
