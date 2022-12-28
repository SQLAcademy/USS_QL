import React, { useState } from 'react'
import '../stylesheets/PromptDisplay.css'

const promptOptions = {
  newGame: `Greetings Admiral. We have an intelligence report that the fearead pirate vessel, Hard Learning, has been spotted in Ocean Grid Bravo Victor Charlie. Our full stack engineers assure us that a miss or successful hit will be visible on your sonar display. 
   
  Remember, the database has a table called 'intel' with three fields; 'latitude'(a letter), 'longitude'(a number), and 'contents'. 
  Issue firing solutions using SQL. Submit a query request to the database using a SELECT command to find out if the ship is at the location specified. The eyes of the world are upon you, godspeed!`,
  promptSelect: 'Submit a query request to the database using a SELECT command to find out if the ship is at the location specified.',
  selectSuccess: 'Your selection was a success - there is a ship at that location! You are now able to fire a missile by issuing the correct UPDATE command.',
  selectFail: `No joy - empty ocean. Please SELECT another location.`,
  updateSuccess: 'Your missile hit the target! You can now issue a new SELECT command',
  updateFail: 'No joy. Issue a new SELECT command.',
  syntaxFail: 'Your command was not deployed! The Birdge Officer says your syntax is not regulation. Issue a new SELECT command',
  gameOver: `Mission success! Hard Learning has been neutralized! History will remember your valient deeds.`
};

const PromptDisplay = ({ promptDisplayText }) => {
  return (
    <div className="promptDisplay">
      <div className="promptDisplayScreen">
        {promptDisplayText}
      </div>
    </div>
  )
}

export default PromptDisplay
export { promptOptions }