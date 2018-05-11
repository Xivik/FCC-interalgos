// Sum all numbers in a range

//We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them
// The lowest number will not always come first.

function sumAll(arr) {
	// find min and max number in the array
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  	// set sum to the min number to start adding in the loop
  let sum = min;
  	// loop over the arr adding 1 to min after every loop and add it to sum
  for(let i = min; i < max; i++) {
    min++;
    sum += min; 
  }
  return sum;
  
}

sumAll([1, 4]);

// Diff two arrays
// only returns items that are not duplicates in the array

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2) // concat arr 1 and 2
    .filter( // filter if arr1 includes OR arr2 includes, keep the item. If both include it returns false
        item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Roman Numeral Converter

// create 2 arrs, 1 with the roman character and a corresponding one with the decimal values
function convertToRoman(num) {
var romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; 
  
var romanResult = "";
  // for loop that iterates over the decimal numbers array
  for (var i = 0; i < numbers.length; i++) {
  	// while the current value is less then or equal to input(num)
    while (numbers[i] <= num) {
    	// look add the corresponding value from the array to romanResult
      romanResult += romans[i];
      // substract the value that's been converted and placed into romanResult from input(num)
      num -= numbers[i];
    }
  }
  return romanResult;
}

convertToRoman(36);

// Wherefor art thou
//looks through an array of objects (first argument) 
// and returns an array of all objects that have matching property and value pairs (second argument). 


function whatIsInAName(collection, source) {
	//set keys in a var
   var sourceKeys = Object.keys(source);
  // filter through collection
  return collection.filter(function (objOfCollec) {
    return sourceKeys.every(function (keyOfCollec) {
    	// check if object has the key and return objects that match
      return objOfCollec.hasOwnProperty(keyOfCollec) && objOfCollec[keyOfCollec] === source[keyOfCollec];
    });
  }); 
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// Search and Replace

 
function myReplace(str, before, after) {

  // check to see before has an uppercase, if so:
if ( /^[A-Z]/.test( before) ) {
	// change the first letter of after to uppercase, and add the rest of the string back
    after = after[0].toUpperCase() + after.substring(1);
}
// replace before word with after word
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// Missing Letters
// find the missing letter in the string and return the missing letter


function fearNotLetter(str) {

 // get the unicode for the first character
  var index = str.charCodeAt(0);
  // loop over the string  
  for (var i = 0; i < str.length; i++) {
    // if the unicode matches index, increment 1 and continue with the loop
    if (str.charCodeAt(i) == index) {
      index++;
      continue;
      // if the unicode doesnt match up with expected index, return the expected index
    } else if (str.charCodeAt(i) != index) {
      return String.fromCharCode(index);
    } 
  } // if it goes to the loop without a hitch, there's no missing letter, so undefined.
    return undefined; 
} 

fearNotLetter("abce");
