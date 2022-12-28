import React from 'react'
import Box from "./Box.jsx"

const Rows = props => {
  const { id, playerMisses, playerHits } = props;
  const boxArr = [];
  for (let i = 1; i <= 5; i++) {
    boxArr.push(<Box
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