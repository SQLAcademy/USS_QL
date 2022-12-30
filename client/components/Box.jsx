import React, { useEffect, useState } from 'react'

const Box = props => {
  const { id, playerMisses, playerHits } = props;
  const [hitStatus, setHitStatus] = useState('');
  //id is each individual boxes id Row and Colums or A1
  //rendering the individual boxes, if hit or miss update hitStatus to the corresponding hit or miss
  useEffect(() => {
    for (let i = 0; i < playerMisses.length; i++) {
      if (playerMisses[i] === id) {
        setHitStatus(' miss')
        return;
      }
    };
    for (let i = 0; i < playerHits.length; i++) {
      if (playerHits[i] === id) {
        setHitStatus(' hit')
        return;
      }
    }
  }, [playerHits, playerMisses])

  return (
    <div className={`box${hitStatus}`}>
    </div>
  )
}

export default Box