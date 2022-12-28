import React from 'react'

const Box = props => {
  const {id, enemyShipLocations, setEnemyShipLocations, playerMisses, setPlayerMisses, playerHits, setPlayerHits} = props;
  let hitStatus = 'default';
  if(playerMisses.includes(id)) hitStatus += ' miss'
  if(playerHits.includes(id)) hitStatus += ' hit'
  return (
    <button className = {hitStatus}>
      {`${id}`}
    </button>
  )
}

export default Box


// default

// player miss
// if (playerMisses.includes(id)) {
  
// }

// // player hit
// if (playerHits.includes(id)) {
//   style = {{

//     background-color : 'Red',

//   }}
// }