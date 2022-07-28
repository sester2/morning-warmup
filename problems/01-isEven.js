function isEven(num) {
  //Takes in a number and checks to see if that number is even
  // if is even then return true
  // if false then return false
  // else if not a num then return "This is not a number"

  if (num % 2 === 0) {
    return true;
  }
  if (num % 2 === 1) {
    return false;
  } else {
    return "This is not a number!";
  }
}

isEven();

module.exports = isEven;
