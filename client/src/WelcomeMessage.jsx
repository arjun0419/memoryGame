import React from 'react';

const WelcomeMessage = ({ handleClick }) => (
  <div className="welcome">
    <h1>Memory Game w/ Movie Posters</h1>
    <div>
      <ul>
        <li> Click on a card to reveal the movie poster</li>
        <li> If the next card you click matches the first, you got a pair!</li>
        <li> If they do not match, cards are turned back over</li>
        <li> That is it! Enjoy!</li>
      </ul>
    </div>
    <button className="greenButton" onClick={handleClick}>Start Game</button>
  </div>
);

export default WelcomeMessage;
