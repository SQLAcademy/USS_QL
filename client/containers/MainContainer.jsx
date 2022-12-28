import React, { useState } from 'react'
import TextContainer from './TextContainer.jsx'
import GameContainer from './GameContainer.jsx'
import { promptOptions } from '../components/PromptDisplay.jsx'
import '../stylesheets/MainContainer.css'

const MainContainer = () => {
  const [enemyShipLocations, setEnemyShipLocations] = useState(['A1', 'B1', 'C1']);
  const [playerMisses, setPlayerMisses] = useState([]);
  const [playerHits, setPlayerHits] = useState([]);
  const [promptDisplayText, setPromptDisplayText] = useState(promptOptions.newGame);

  return (
    <div className="mainContainer">
      <TextContainer
        promptDisplayText={promptDisplayText}
        setPromptDisplayText={setPromptDisplayText}
        enemyShipLocations={enemyShipLocations}
        playerMisses={playerMisses}
        setPlayerMisses={setPlayerMisses}
        playerHits={playerHits}
        setPlayerHits={setPlayerHits}
      />
      <GameContainer
        enemyShipLocations={enemyShipLocations}
        setEnemyShipLocations={setEnemyShipLocations}
      />
    </div>
  )
}

export default MainContainer