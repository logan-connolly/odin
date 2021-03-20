const checkInput = (start, end) => {
  const checkRange = end > start;
  const checkNegative = start > 0 && end > 0;
  const checkType = Number.isInteger(start) && Number.isInteger(end);
  return checkRange && checkNegative && checkType;
};

const sumAll = (start, end) => {
  const validInput = checkInput(start, end);
  if (validInput) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx)
      .reduce((left, right) => left + right);
  }
  return -1;
};

module.exports = sumAll;
