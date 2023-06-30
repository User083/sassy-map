import './App.scss'
import Home from './components/Home'

function App() {


  return (
    <>
     <h1 className='title'><span className='sass'>Sassy</span> Map</h1>
    <div data-testid="app" className='app'>
    <Home/>
    </div>
    </>

  )
}

export default App
