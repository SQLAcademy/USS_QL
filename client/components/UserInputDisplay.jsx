import React, { useState } from 'react'
import { promptOptions } from './PromptDisplay';
import '../stylesheets/UserInputDisplay.css'

const UserInputDisplay = ({ setPromptDisplayText, enemyShipLocations, playerMisses, setPlayerMisses, playerHits, setPlayerHits }) => {
  const [turnType, setTurnType] = useState('select');

  function processTurn() {

    console.log('Enemy Ship Locations Arr ', enemyShipLocations)

    const userInputText = document.querySelector('#userInputBox').value;
    document.querySelector('#userInputBox').value = '';

    // Check Syntax
    const responseObj = checkSyntax(userInputText);
    if (!responseObj.goodSyntax) {
      // Syntax failure
      setPromptDisplayText(promptOptions.syntaxFail);
      setTurnType('select');
      return;
    }

    // If user input passes the syntax check
    switch (turnType) {
      case 'select':
        // Check if the enemyShipLocations array includes the coordinates
        if (enemyShipLocations.includes(responseObj.coordinates) && !playerHits.includes(responseObj.coordinates)) {
          // Player found the enemy ship
          setPromptDisplayText(promptOptions.selectSuccess);
          setTurnType('update');
        } else {
          // Player selected empty ocean
          setPromptDisplayText(promptOptions.selectFail);
          setPlayerMisses([...playerMisses, responseObj.coordinates]);
        }
        break;

      case 'update':
        if (enemyShipLocations.includes(responseObj.coordinates) && !playerHits.includes(responseObj.coordinates)) {
          // Player hit the ship
          setPromptDisplayText(promptOptions.updateSuccess);
          const newPlayerHits = [...playerHits, responseObj.coordinates]
          setPlayerHits(newPlayerHits)
          if (newPlayerHits.length === enemyShipLocations.length) {
            // Game Over
            setPromptDisplayText(promptOptions.gameOver)
          }
        } else {
          // Player set coordinates on empty ocean
          setPromptDisplayText(promptOptions.updateFail);
        }
        setTurnType('select');
        break;
      default:
        break;
    }
  }

  function checkSyntax(query) {
    let queryString = '';
    let latitudeInput = '';
    let longitudeInput = '';

    // Pull the latitude and longitude from the query and set the queryString to compare the applicable syntax
    switch (turnType) {
      case 'select':
        latitudeInput = query.slice(45, 46);
        longitudeInput = query.slice(64, 65);
        queryString = `SELECT contents FROM intel WHERE latitude = '${latitudeInput}' AND longitude = ${longitudeInput};`
        break;
      case 'update':
        latitudeInput = query.slice(63, 64);
        longitudeInput = query.slice(82, 83);
        queryString = `UPDATE intel SET contents = 'cruise missile' WHERE latitude = '${latitudeInput}' AND longitude = ${longitudeInput};`
        break;
      default:
        break;
    }

    // Create a response object with the coordinates and the results of the syntax check
    const responseObj = {}
    responseObj.coordinates = latitudeInput.concat(longitudeInput)
    if (query === queryString) responseObj.goodSyntax = true
    else responseObj.goodSyntax = false;
    return responseObj;
  }

  return (
    <div className="userInput">
      <div className="userInputScreen">
        <textarea id="userInputBox" />
      </div>
      <div className="buttonsContainer">
        <div className="newGameButtonContainer">
          <button id='newGameButton'>New<br />Game</button>
        </div>
        <div className="issueCommandButtonContainer">
          <button id='issueCommandButton' onClick={processTurn}>Issue<br />Command</button>
        </div>
      </div>
    </div>
  )
}

export default UserInputDisplay