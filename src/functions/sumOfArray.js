function sumOfArray(arr) {
  return arr.reduce((acc, number) => acc + number, 0);
}

module.exports = sumOfArray;