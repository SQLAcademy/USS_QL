import React from 'react'
import PromptDisplay from '../components/PromptDisplay.jsx'
import UserInputDisplay from '../components/UserInputDisplay.jsx'
import '../stylesheets/TextContainer.css'

const TextContainer = ({ enemyShipLocations, promptDisplayText, setPromptDisplayText, playerMisses, setPlayerMisses, playerHits, setPlayerHits, startNewGame, typewriterEffect }) => {
  return (
    <div className="textContainer">
      <PromptDisplay
        promptDisplayText={promptDisplayText}
      />
      <UserInputDisplay
        setPromptDisplayText={setPromptDisplayText}
        enemyShipLocations={enemyShipLocations}
        playerMisses={playerMisses}
        setPlayerMisses={setPlayerMisses}
        playerHits={playerHits}
        setPlayerHits={setPlayerHits}
        startNewGame={startNewGame}
        typewriterEffect={typewriterEffect}
      />
    </div>

  )
}

export default TextContainer