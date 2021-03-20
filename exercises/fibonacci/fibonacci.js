const fibonacci = function (inputValue) {
  const inputNumber = parseInt(inputValue);
  if (inputNumber < 0) return -1;
  if (inputNumber <= 1) return inputNumber;
  return fibonacci(inputNumber - 1) + fibonacci(inputNumber - 2);
};

module.exports = fibonacci;
