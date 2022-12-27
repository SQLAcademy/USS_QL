import React, { useState } from 'react'
import GameContainer from './GameContainer.jsx'
import TextContainer from './TextContainer.jsx'

const MainContainer = () => {
  // GameContainer
  const [EnemyShipLocations, setEnemyShipLocations] = useState(['A1', 'B1', 'C1']);
  const [PlayerMisses, setPlayerMisses] = useState([]);
  const [PlayerHits, setPlayerHits] = useState([]);
  // TextContainer
  const [PromptDisplay, setPromptDisplay] = useState('test PrompDisplay');
  const [UserInput, setUserInput] = useState('test UserInput');

  // Functionality
  // check syntax

  return (
    <div>
      <GameContainer
        EnemyShipLocations = {EnemyShipLocations} 
        setEnemyShipLocations = {setEnemyShipLocations}
      />
      <TextContainer />
    </div>
  )
}

export default MainContainer