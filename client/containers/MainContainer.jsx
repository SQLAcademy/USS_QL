import React, { useState } from 'react'
import TextContainer from './TextContainer.jsx'
import GameContainer from './GameContainer.jsx'
import { promptOptions } from '../components/PromptDisplay.jsx'
import morseSound from '../assets/morse.mp3'
import '../stylesheets/MainContainer.css'

const MainContainer = () => {

  // Will return a random integer between min and max
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  // Generate enemy ship at random coordinates
  function generateRandomShip() {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    // Establish enemy ship orientation
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
    return enemyShipCoords;
  }

  //Typewriter effect function for displaying the promptDisplayText
  function typewriterEffect(prompt, currentDigit = 0) {
    if (currentDigit === 0 && prompt.slice(0, 9) === 'Greetings') {
      const newAudio = document.createElement('AUDIO');
      newAudio.src = morseSound;
      newAudio.id = 'morseSound';
      newAudio.style.visible = 'hidden';
      document.querySelector('#root').appendChild(newAudio)
      document.querySelector('#morseSound').currentTime = 3;
      document.querySelector('#morseSound').volume = 0.2;
      document.querySelector('#morseSound').play();
    }
    setPromptDisplayText(prompt.slice(0, currentDigit))
    if (currentDigit < prompt.length) {
      setTimeout(() => {
        typewriterEffect(prompt, currentDigit + 1)
      }, 25);
    } else {
      const audio = document.querySelector('#morseSound')
      audio.remove();
    }
  }

  // Begins new game, resets state
  function startNewGame() {
    setEnemyShipLocations(generateRandomShip());
    setPlayerHits([]);
    setPlayerMisses([]);
    typewriterEffect(promptOptions.newGame);

    //grabs all boxes with class of 'miss' and 'hit' and removes the classes so that it doesn't render the background img
    const misses = document.querySelectorAll('.miss')
    misses.forEach(box => {
      box.classList.remove('miss');
    });
    const hits = document.querySelectorAll('.hit')
    hits.forEach(box => {
      box.classList.remove('hit');
    });

  }

  const [enemyShipLocations, setEnemyShipLocations] = useState(generateRandomShip());
  const [playerMisses, setPlayerMisses] = useState([]);
  const [playerHits, setPlayerHits] = useState([]);
  const [promptDisplayText, setPromptDisplayText] = useState(promptOptions.initialPrompt);

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
        startNewGame={startNewGame}
        typewriterEffect={typewriterEffect}
      />
      <GameContainer
        playerHits={playerHits}
        playerMisses={playerMisses}
      />
    </div>
  )
}

export default MainContainer