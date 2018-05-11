import React from 'react';

const BoardImage = ({ image, handleImageClick }) => {
  let cardToShow = <img src="cardCover.jpg" alt="moviePoster" onClick={() => handleImageClick(image.value)} />;

  if (image.revealed) {
    cardToShow = <img value={image.value} src={`https://s3-us-west-1.amazonaws.com/aws-cheerdango/posters/${image.image}.jpg`} alt="moviePoster" />;
  }

  return cardToShow;
};

export default BoardImage;
