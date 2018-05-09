import React from 'react';

import BoardImage from './BoardImage';

const BoardRows = ({ rows, columns, board }) => {

  const cards = board.map( row => (
    <BoardImage row={row} />
  ));

  return cards;
};

export default BoardRows;
