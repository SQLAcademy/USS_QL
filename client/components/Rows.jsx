import React from 'react'
import Box from "./Box.jsx"

const Rows = props => {
  const { id, playerMisses, playerHits } = props;
  // display letter longitude on game board
  const boxArr = [<div className="letterLongitude">{id}</div>];
  for (let i = 1; i <= 5; i++) {
    boxArr.push(
      <Box
        key={`${id}${i}`}
        id={`${id}${i}`}
        playerMisses={playerMisses}
        playerHits={playerHits}
      />)
  }

  return (
    <div className="gameContainerRow">
      {boxArr}
    </div>
  )
}

Rows.propTypes = {}

export default Rows