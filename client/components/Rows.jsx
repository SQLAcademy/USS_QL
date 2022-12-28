import React from 'react'
import Box from "./Box.jsx"

const Rows = props => {
  const {id, enemyShipLocations, setEnemyShipLocations, playerMisses, setPlayerMisses, playerHits, setPlayerHits} = props;
  const boxArr = [];
  for (let i = 1; i <= 5; i++) {
  boxArr.push(<Box
    
    id = {`${id}${i}`}
    enemyShipLocations = {enemyShipLocations} 
    setEnemyShipLocations = {setEnemyShipLocations}
    playerMisses = {playerMisses}
    setPlayerMisses = {setPlayerMisses}
    playerHits = {playerHits}
    setPlayerHits = {setPlayerHits}
  />)
  }

  return (
    <div>
      {boxArr}
    </div>
  )
}

Rows.propTypes = {}

export default Rows