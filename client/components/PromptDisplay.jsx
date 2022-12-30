import React, { useState } from 'react'
import '../stylesheets/PromptDisplay.css'

//BE MINDFUL OF FORMATTING CONVENTION BELOW, DEVIATION CAN BREAK PROMPT DISPLAY PARAGRAPH RETURNS
const promptOptions = {
  initialPrompt: `Click New Game to Begin.`,
  newGame: `Greetings Admiral. Intelligence reports the fearead pirate vessel, Hard Learning, has been spotted nearby. \nIssue firing solutions using SQL. Submit a query request to the database using a SELECT command to find out if the ship is at the location specified.\n The eyes of the world are upon you, godspeed! Our full stack engineers assure us that a miss or successful hit will be visible on your sonar display.\nRemember, the database has a table called 'intel' with three fields; 'latitude'(a letter), 'longitude'(a number), and 'contents'.`,
  promptSelect: 'Submit a query request to the database using a SELECT command to find out if the ship is at the location specified.',
  selectSuccess: 'Reconnaissance confirms there is a ship at that location! You are clear to fire a missile by issuing the correct UPDATE command.',
  selectFail: `No joy - empty ocean. Please SELECT another location.`,
  updateSuccess: `Your missile hit the target! You can now issue a new SELECT command`,
  updateFail: `No joy. Issue a new SELECT command.`,
  syntaxFail: 'Your command was not deployed! The Birdge Officer says your syntax is not regulation. Issue a new SELECT command.',
  gameOver: `Mission success! Hard Learning has been neutralized! History will remember your valiant deeds.\n This War is far from over. Select New Game and engage in more exilerating & educational combat.`,
  insertOption: `Washington is growing impatient. POTUS has approved use of the High Energy Linear Payload (HELP). This new ordinance will bring peace to an entire row of Ocean. \n Issue an INSERT command into the 'intel' table. Pass 'HELP' into the 'contents' field and pass the latitude you wish to strike into the 'latitude' field.`,
  insertSuccess: `The bright flash reflects off your Aviators. You notice your Bridge Officer had his back to the explosion... very cool.`
};

const PromptDisplay = ({ promptDisplayText }) => {
  // Split prompt text at new lines to create spans separated by <br>s to display line breaks correctly
  const paragraphsArr = []
  const promptElArr = promptDisplayText.split('\n');
  promptElArr.forEach(el => {
    paragraphsArr.push(<><span>{el}</span><br /></>)
  })

  return (
    <div className="promptDisplay">
      <div className="promptDisplayScreen">
        {paragraphsArr}
      </div>
    </div>
  )
}
export default PromptDisplay
export { promptOptions }