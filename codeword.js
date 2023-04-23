
// //    題目一
// const shortenToDate = (longDate) => longDate.split(',')[0];


// console.log(shortenToDate("Friday May 2, 9am"));
// // "Friday May 2"
// console.log(shortenToDate("Tuesday January 29, 10pm"));
// // "Tuesday January 29"
// console.log(shortenToDate("Monday December 25, 10pm"));
// // "Monday December 25"




//   題目二
function isIsogram(str){
  // const a = new Set(str.toUpperCase()).size === str.length
  // console.log(a);
  let i, j;
  str = str.toLowerCase();
  for(i = 0; i < str.length; ++i)
    for(j = i + 1; j < str.length; ++j)
      if(str[i] === str[j]){
        return false;
      }
  return true
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram(""));

isIsogram("Dermatoglyphics") // true 
isIsogram("isogram") // true
isIsogram("aba")  //false, "same chars may not be adjacent" 
isIsogram("moOse")  // false, "same chars may not be same case" 
isIsogram("isIsogram") // false 
isIsogram("") // true, "an empty string is a valid isogram" 