import React, { useState } from 'react'
import '../stylesheets/PromptDisplay.css'

// If it is stupid and it works, it ain't stupid
// Struggled to break apart
const promptOptions = {
  newGame: {
    part1: `Greetings Admiral. Intelligence reports the fearead pirate vessel, Hard Learning, has been spotted nearby.`,
    part2: `Issue firing solutions using SQL. Submit a query request to the database using a SELECT command to find out if the ship is at the location specified. The eyes of the world are upon you, godspeed! Our full stack engineers assure us that a miss or successful hit will be visible on your sonar display.`,
    part3: `Remember, the database has a table called 'intel' with three fields; 'latitude'(a letter), 'longitude'(a number), and 'contents'.`,
  },
  promptSelect: {
    part1: 'Submit a query request to the database using a SELECT command to find out if the ship is at the location specified.'
  },
  selectSuccess: {
    part1: 'Good effect! There is a ship at that location! You are now able to fire a missile by issuing the correct UPDATE command.'
  },
  selectFail: {
    part1: `No joy - empty ocean. Please SELECT another location.`
  },
  updateSuccess: {
    part1: `Your missile hit the target! You can now issue a new SELECT command`,
  },
  updateFail: {
    part1: `No joy. Issue a new SELECT command.`,
  },
  syntaxFail: {
    part1: 'Your command was not deployed! The Birdge Officer says your syntax is not regulation. Issue a new SELECT command'
  },
  gameOver: {
    part1: `Mission success! Hard Learning has been neutralized! History will remember your valient deeds.`
  }
};

const PromptDisplay = ({ promptDisplayText }) => {

  let displayText = []
  Object.keys(promptDisplayText).forEach(key => {
    displayText.push(<p>{promptDisplayText[key]}</p>);
  });

  return (
    <div className="promptDisplay">
      <div className="promptDisplayScreen">
        {displayText}
      </div>
    </div>
  )
}
export default PromptDisplay
export { promptOptions }