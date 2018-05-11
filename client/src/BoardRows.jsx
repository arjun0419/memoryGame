import React from 'react';

import BoardImage from './BoardImage';

const BoardRows = ({ handleImageClick, board }) => {
  const cards = board.map(image => (
    <BoardImage image={image} handleImageClick={handleImageClick} />
  ));

  return cards;
};

export default BoardRows;
