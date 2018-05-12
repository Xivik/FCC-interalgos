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

// Pig Latin convert string to pig latin

function translatePigLatin(str) {
  // create a regex to look for vowels
 var vowelIndex = str.search(/[aeiou]/);
      // there's a vowel on the first character, just add way and return
      if (vowelIndex == 0) {
          str += "way";
          return str;
        // else start string at end of constenant cluster, add the constenant cluster to end and add ay
      } else {
         str = str.substr(vowelIndex) + str.substr(0, vowelIndex) + "ay";
         return str;
      }
}
translatePigLatin("eightway");

function fearNotLetter(str) {

  // DNA Pairing, The DNA strand is missing the pairing element. 
  // Take each character, get its pair, and return the results as a 2d array.


function pairElement(str) {
  // turn the string into an array
  str = str.split("");
  // create an empty array where we can push the DNA base pairs onto
  var basePairs = [];
  // loop through the str array
  for (var i = 0; i < str.length; i++) {
    // create empty array called arr, look for the value given and push it onto
    // arr combined with it's base pair. then push that array onto basePairs
    if (str[i] == "A") {
      var arr = [];
      arr.push(str[i], "T");
      basePairs.push(arr);
    } else if (str[i] == "C") {
      arr = [];
      arr.push(str[i], "G");
      basePairs.push(arr);
    } else if (str[i] == "T") {
      arr = [];
      arr.push(str[i], "A");
      basePairs.push(arr);
    } else if (str[i] == "G") {
      arr = [];
      arr.push(str[i], "C");
      basePairs.push(arr);
    } else if (str[i] == "T") {
      arr = [];
      arr.push(str[i], "A");
      basePairs.push(arr);
    } 
  }
  //return the combined pairs
  return basePairs;
}

pairElement("ATCGA");

// Missing Letters
// find the missing letter in the string and return the missing letter

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

// Boo Who, Check if a value is classified as a boolean primitive. Return true or false.
function booWho(bool) {
  // if bool is true, it's classified as a boolean primitive, return true.
  if (bool === true) {
    return true;
    // if bool is false, it's classified as a boolean primitive, return true.
  } else if (bool === false) {
    return true;
    // if the if and else if don't pass. It is not a boolean primitive, return false.
  } else {
    return false;
  }
}

booWho(null);

// Sorted Union, take a dynamic amount of arrays, and return a new array of unique values in the original provided order

function uniteUnique() {
  // create array to concat the arguments on so we get a flat array
  let arr = [];
  // create a counter for while loop to go through arguments
  let i = 0;
  while (arguments[i]) {
    // while there is still an argument, concat it onto the resultArr
    arr = arr.concat(arguments[i]);
    i++;
   }
  // now we need to filter out the dupes
  const filteredArr = arr.filter((item, position) => arr.indexOf(item) == position);
  return filteredArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Convert HTML entitites, Convert the characters &, <, >, " (double quote), 
// and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  // use regex to convert the characters to html entities with replace
  return str.replace(/&/ig, "&amp;").replace(/</ig, "&lt;").replace(/>/ig, "&gt;").replace(/"/ig, "&quot;").replace(/'/ig, "&apos;");
}

convertHTML('Stuff in "quotation marks"');

// Spinal Tap Case, Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


function spinalCase(str) {
   
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').trim().toLowerCase().replace(/ /ig, "-").replace(/_/ig, "-");
}

spinalCase('AllThe-small Things');

// Sum All Odd Fibonacci numbers
function sumFibs(num) {
  // create an array with the first two fibonacci numbers, initialize the first fibonacci num
  let newArr = [1, 1];
  let newFib = 1;
  // while loop, to add all fibonacci numbers onto an array aslong as they are less then or equal to num
  while (newFib <= num) {
    newFib = newArr[0] + newArr[1];
    if (newFib <= num) {
      newArr.unshift(newFib);
    } else {
      break;
    }
  }
  // filter out all even numbers
  newArr = newArr.filter(function(el) {
      return !(el % 2 == 0);
     });
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  // return the sum of all odd numbers in the array
  return newArr.reduce(reducer);
  
}

sumFibs(75025);

// Sum All Primes, sum all the prime numbers from 1 to num


function sumPrimes(num) {
  // function to check if a number is a prime
  function isPrime3(n) {
 if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
 if (n%2==0) return (n==2);
 if (n%3==0) return (n==3);
 let m=Math.sqrt(n);
 for (let i=5;i<=m;i+=6) {
  if (n%i==0)     return false;
  if (n%(i+2)==0) return false;
 }
 return true;
}
  // create empty array to push the numbers from 0 to num onto
  // then loop through and push them onto the array
 let arrOfAll = []; 
  for (let i = 0; i <= num; i++) {
    arrOfAll.push(i);
  }
  // filter the array so it has only prime numbers
  arrOfAll = arrOfAll.filter(isPrime3);
  // get the sum of all prime numbers and return them.
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return arrOfAll.reduce(reducer);
}

sumPrimes(977);

// Smallest Common Multiple, Find the smallest common multiple of the provided parameters that 
// can be evenly divided by both, as well as by all sequential numbers in the range between these parameters

function smallestCommons(arr) {
    // create empty array, push the range of arr onto range
    let range = [];
    for (let i = Math.max(...arr); i >= Math.min(...arr); i--) {
    range.push(i);
    } 
    // Implement the Euclidean Algorithm
    function gcd(x, y) {    
      if (y === 0) {
        return x;
      } else {
        return gcd(y, x % y);
      }
    } 
    // loop through the range array and find the lowest common multiplier
    let lowestCommon = range[0];
    for (i = 1; i < range.length; i++) {
      const GreatestCommonDivisor = gcd(lowestCommon, range[i]);
      lowestCommon = (lowestCommon * range[i]) / GreatestCommonDivisor;
    }
    return lowestCommon;
}
smallestCommons([1,5]);

// Finders Keepers, Create a function that looks through an array (first argument) 
// and returns the first element in the array that passes a truth test (second argument).


function findElement(arr, func) {
  // create a array with results that pass the truth test
  let result = arr.filter(func);
  // return first element in the array
  return result[0];
  
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

