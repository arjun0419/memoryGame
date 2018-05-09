import React from 'react';

import BoardRows from './BoardRows';
import { createBoard } from './gameLogic';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: 7,
      rows: 4,
      board: [],
    };
  }

  componentWillMount() {
    const newBoard = createBoard(this.state.columns, this.state.rows);
    this.setState({ board: newBoard });
  }

  render() {
    return (
      <div className="Board">
        <BoardRows columns={this.state.columns} rows={this.state.rows} board={this.state.board} />
      </div>
    );
  }
}

export default Board;
