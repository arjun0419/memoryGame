
const createMatrix = (imagesCount, imageOptions) => {
  console.log("imageOptions", imageOptions);
  const arr = [];
  for (let i = 0; i < imagesCount; i += 1) {
    const randomNumber = Math.floor(Math.random() * imageOptions.length);
    const randomImageSelection = imageOptions.splice(randomNumber, 1);
    arr.push({
      revealed: false,
      value: i,
      image: randomImageSelection[0],
    });
  }
  console.log(arr);
  return arr;
};

module.exports.createBoard = (imagesCount) => {
  const imageOptions = [];
  let count = imagesCount;

  while (count) {
    const randomImage = Math.floor(Math.random() * 10) + 1;
    imageOptions.push(randomImage);
    imageOptions.push(randomImage);
    count -= 2;
  }
  const matrix = createMatrix(imagesCount, imageOptions);
  return matrix;
};
  