// -> how many digits is the first digit in the ordinal set of numbers
var currentNumber = "456789101112".split("");
// var newarray = [];

function findDigit () {
  //if index 0 + 1 = index 1, splice index 0

  // console.log(1 + currentNumber[0]);

  if(parseInt(currentNumber[0]) + 1 == currentNumber[1]){

    // console.log(currentNumber[0]);
    // return currentNumber[0];
    if (currentNumber[0].length < 10){

      return "One Digit";
    }
  }


  // "456457458"      -> 3

}

findDigit();

  // "9899100101102"  -> 2