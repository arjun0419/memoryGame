
const createMatrix = (columns, rows, imageOptions) => {
  const arr = [];
  for (let i = 0; i < rows; i += 1) {
    const row = [];
    for (let j = 0; j < columns; j += 1) {
      const randomNumber = Math.floor(Math.random() * imageOptions.length);
      const randomImageSelection = imageOptions.splice(randomNumber, 1);
      console.log(randomImageSelection);
      row.push({
        revealed: false,
        column: j,
        row: i,
        image: randomImageSelection,
      });
    }
    arr.push(row);
  }
  return arr;
};

module.exports.createBoard = (columns, rows) => {
  let totalCards = columns * rows;
  const imageOptions = [];

  while (totalCards) {
    const randomImage = Math.floor(Math.random() * 10) + 1;
    imageOptions.push(randomImage);
    imageOptions.push(randomImage);
    totalCards -= 2;
  }
  const matrix = createMatrix(columns, rows, imageOptions);
  return matrix;
};
