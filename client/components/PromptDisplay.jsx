import React, { useState } from 'react'
import '../stylesheets/PromptDisplay.css'

const promptOptions = {
  newGame: `You are the commander of a battleship and there is an enemy ship at an unknown location.
    You have access to a database with latitude and longitude coordinates for the entire ocean.
    The database has a table called 'intel' with three fields; 'latitude'(a letter), 'longitude'(a number), and 'contents'. The records in the table indicate whether there is open ocean at that location or a ship.
    Submit a query request to the database using a SELECT command to find out if the ship is at the location specified.`,
  promptSelect: 'Submit a query request to the database using a SELECT command to find out if the ship is at the location specified.',
  selectSuccess: 'Your selection was a success - there is a ship at that location! You are now able to fire a missile by issuing the correct UPDATE command.',
  selectFail: `Your selection did not find an enemy location or you have already tried this location. Please SELECT another location.`,
  updateSuccess: 'Your missile hit the target! You can now issue a new SELECT command',
  updateFail: 'You missed, dummy..  You must now issue a new SELECT command.',
  syntaxFail: 'Your command was not deployed! The lieutenant responded saying he was not able to understand the command due to poor syntax. You must now issue a new SELECT command'
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