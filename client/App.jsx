import { useState } from 'react'
import './stylesheets/App.css'
import MainContainer from './containers/MainContainer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <MainContainer />
      </div>
    </div>
  )
}

export default App
