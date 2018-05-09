import React from 'react';

const BoardImage = ({ row }) => {
  const cardArr = row.map((card) => {
    let cardToShow = <img src="cardCover.jpg" alt="moviePoster" />;
    if (card.revealed) {
      cardToShow = <img src={`https://s3-us-west-1.amazonaws.com/aws-cheerdango/posters/${card.image}.jpg`} alt="moviePoster" />;
    }
    return cardToShow;
  });

  return cardArr;
};

export default BoardImage;
