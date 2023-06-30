import './App.scss'
import Home from './components/Home'

function App() {


  return (
    <div id='app'>
     <h1 className='title'><span className='sass'>Sassy</span> Map</h1>
     <p className='subtitle'>powered by GraphQL</p>
    <div data-testid="app" className='app'>
    <Home/>
    </div>
    </div>

  )
}

export default App
