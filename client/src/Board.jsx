import React, { Fragment } from 'react';

import BoardRows from './BoardRows';

import { createBoard } from './gameLogic';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 20,
      board: [],
      firstClickImage: false,
      secondClickImage: false,
      firstClickIndex: false,
      secondClickIndex: false,
    };

    this.handleImageClick = this.handleImageClick.bind(this);
    this.imageMatchCheck = this.imageMatchCheck.bind(this);
    this.changeImageState = this.changeImageState.bind(this);
    this.clicksReset = this.clicksReset.bind(this);
  }

  componentWillMount() {
    const newBoard1 = createBoard(this.state.count);
    this.setState({ board: newBoard1 });
  }

  clicksReset() {
    this.setState({
      firstClickIndex: false,
      secondClickIndex: false,
    });
  }

  imageMatchCheck() {
    const match = this.state.firstClickImage === this.state.secondClickImage;
    if (match === true) {
      this.clicksReset();
    } else if (match === false) {
      setTimeout(() => {
        const { board } = this.state;
        board[this.state.firstClickIndex].revealed = false;
        board[this.state.secondClickIndex].revealed = false;
        this.setState({ board });
        this.clicksReset();
      }, 2000);
    }
  }

  changeImageState(clickIndex, clickIndexState, clickImageState) {
    const newBoard = this.state.board.slice();
    newBoard[clickIndex].revealed = true;
    this.setState({
      board: newBoard,
      [clickIndexState]: clickIndex,
    });
    this.state[clickImageState] = this.state.board[clickIndex].image;
  }

  handleImageClick(index) {
    if (this.state.firstClickIndex === false) {
      this.changeImageState(index, 'firstClickIndex', 'firstClickImage');
    } else if (this.state.secondClickIndex === false) {
      this.changeImageState(index, 'secondClickIndex', 'secondClickImage');
      this.imageMatchCheck();
    }
  }

  render() {
    return (
      <div className="Board">
        <BoardRows
          board={this.state.board}
          handleImageClick={this.handleImageClick}
        />
      </div>
    );
  }
}

export default Board;
