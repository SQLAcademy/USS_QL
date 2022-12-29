import React, { useState } from 'react'
import TextContainer from './TextContainer.jsx'
import GameContainer from './GameContainer.jsx'
import { promptOptions } from '../components/PromptDisplay.jsx'
import '../stylesheets/MainContainer.css'

const MainContainer = () => {

  // Will return a random integer between min and max
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  // Establish enemy ship orientation
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let orientation = 'vertical';
  if ((randomInt(0, 1)) < 1) orientation = 'horizontal';
  const firstCoord = randomInt(1, 3);
  const lastCoord = firstCoord + 3 // 3 is ship size
  const altAxisCoord = randomInt(1, 3);
  const enemyShipCoords = [];
  if (orientation === 'vertical') {
    for (let i = 0; i < 3; i++) {
      enemyShipCoords.push(`${alphabet[firstCoord + i - 1]}${altAxisCoord}`);
    }
  } else {
    for (let i = 0; i < 3; i++) {
      enemyShipCoords.push(`${alphabet[altAxisCoord - 1]}${firstCoord + i}`);
    }
  }

  const [enemyShipLocations, setEnemyShipLocations] = useState(enemyShipCoords);
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
        playerHits={playerHits}
        playerMisses={playerMisses}
      />
    </div>
  )
}

export default MainContainer