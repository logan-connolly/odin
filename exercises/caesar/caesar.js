const convertChar = (char, shiftValue) => {
  if (!char.match(/^[a-zA-Z]+$/)) {
    return char;
  }
  const charCode = char.charCodeAt();
  const baseCode = charCode >= 97 ? 97 : 65;
  const diffCode = charCode - baseCode;
  const shiftCode =
    shiftValue >= 0
      ? diffCode + shiftValue
      : diffCode + Math.abs(26 - (Math.abs(shiftValue) % 26));
  return String.fromCharCode((shiftCode % 26) + baseCode);
};

const caesar = function (orginalMessage, shiftValue) {
  const encodedArray = [...orginalMessage].map((c) =>
    convertChar(c, shiftValue)
  );
  return encodedArray.join("");
};

console.log(caesar("Hello, World!", 75));
console.log(caesar("Hello, World!", -29));
module.exports = caesar;
