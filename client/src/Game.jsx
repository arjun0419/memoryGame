import React from 'react';

import Board from './Board';
import WelcomeMessage from './WelcomeMessage';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicked: true });
  }

  render() {
    const view = this.state.clicked ? <Board /> : <WelcomeMessage handleClick={this.handleClick} />;
    return (
      <div className="welcome">
        { view }
      </div>
    );
  }
}

export default Game;
