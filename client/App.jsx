import { useState } from 'react'
import './stylesheets/App.css'
import MainContainer from './containers/MainContainer.jsx'
import navyPic from './assets/navy.png'
import marinesPic from './assets/marines.png'

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="USheading">
          <img src={navyPic} alt="Navy" className="USbadges" />
          USS QL: An Interactive Learning Application
          <img src={marinesPic} alt="Marines" className="USbadges" />
        </h1>
        <MainContainer />
      </div>
    </div>
  )
}

export default App
