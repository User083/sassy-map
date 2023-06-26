import './App.scss'
import { worldmap } from './assets'

function App() {


  return (
    <div data-testid="app" className='app'>
    <h1>Sassy Maps</h1>
    <img src={worldmap}/>
    </div>
  )
}

export default App
