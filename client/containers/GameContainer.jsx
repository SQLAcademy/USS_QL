import React from 'react'
import Rows from '../components/Rows.jsx'

//Board Container holds the 5x5 grid of boxes
const GameContainer = props => {
  const { enemyShipLocations, setEnemyShipLocations, playerMisses, setPlayerMisses, playerHits, setPlayerHits } = props
  const rowsArr = []
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  //iterate through the array and prop drill the states
  for (let i = 0; i < 5; i++) {
    rowsArr.push(<Rows
      id = {alphabet[i]}
      enemyShipLocations = {enemyShipLocations} 
      setEnemyShipLocations = {setEnemyShipLocations}
      playerMisses = {playerMisses}
      setPlayerMisses = {setPlayerMisses}
      playerHits = {playerHits}
      setPlayerHits = {setPlayerHits}
    />);
  }
  return (
    <div>
      {rowsArr}
    </div>
  )
}

GameContainer.propTypes = {}

export default GameContainer