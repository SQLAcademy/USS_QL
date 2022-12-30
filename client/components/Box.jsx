import React, { useEffect, useState } from 'react'

const Box = props => {
  const { id, playerMisses, playerHits } = props;
  const [hitStatus, setHitStatus] = useState('');
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