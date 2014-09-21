// 2. Write a function that finds the missing numbers in the following sequence of numbers "9899100101103104105".

// var str = "12345";
// var cur = null;

// while( str.length > 0){
//   if(cur == null){
//     cur = str.slice(0, 1);
//   }else{
//     var next = str.slice(0,1);
//     if(next == cur+1){
//       console.log("next is the next num");
//     }else{
//       console.log("missing ", next);
//     }

//     cur = next;
//   }
// }

var currentNumber = "9899100101103104105".split("");
var newarray = [];

function findMissing () {

//1 digit
//Take first digit from the string
  var removeFirst = currentNumber.splice(0,1);

  // console.log(removeFirst);

//Take next digit from the string 
//testOneDigit = 8

  var removeSecond = currentNumber.splice(0,1);

  // console.log(removeSecond);

//Are first digit and second digit successive numbers (98)
//Does 8 come after 9?  --> NO
  var combine = removeFirst[0] + removeSecond[0];

  // console.log(combine);
  
  // if(removeSecond > removeSecond){

  // }

//Go to 2 digits
//Shift two digits from the string
//= 98

//Shift the next two 
//= 99

//Are they successive?
//Yes, 99 comes after 98

//Now I know where to start

}

findMissing();


//loop through 98 to 105, adding each into newarray
//   for (var i = 98; i <= 105; i++){
//     newarray.push(i);
//   }
//   console.log(newarray);

// //split current array into
//   var splitCurrent = current.split("");
// }



//compare newarray to current
//find difference

// 3. Write a function that takes a string of two words as input such as a name and swaps the order of the words with a comma separating the two words. Ex. "Jay Won" => "Won, Jay" Bonus: Use RegEx to solve this problem

// 4. Write a function that takes 2 strings as input and tests if the first string can be found in a circular variation of the second string.

// 5. Write a function that takes a single word as input and tests if it is a palindrome (ex. racecar), the same forwards as backwards. Bonus: Test for the existence of any palindromes in a word