
// // //    題目一
// // 只要抓到Friday May 2 

// // const shortenToDate = (longDate) => longDate.split(',')[0];

// function shortenToDate(longDate){
//   console.log(longDate.split(',')[0]);
// }


// console.log(shortenToDate("Friday May 2, 9am"));
// // "Friday May 2"
// console.log(shortenToDate("Tuesday January 29, 10pm"));
// // "Tuesday January 29"
// console.log(shortenToDate("Monday December 25, 10pm"));
// // "Monday December 25"


//----------------------------------------------



// //   題目二
// //找出字串裡面有沒有相同字母的字串，有一樣的回傳true ,都沒有一樣的回傳false


// function isIsogram(str){
  // const a = new Set(str.toUpperCase()).size === str.length
  // console.log(a);

  // //先用toLowerCase把大寫都轉換小寫， 才用回圈的方式讓第一個字母跟所有比對完之後換下一個，如果有符合重複字元條件的就回傳false ，如果比對完都沒有重複就回到回圈外，並回傳true
  // str = str.toLowerCase();
  // for(let i = 0; i < str.length; ++i)
  //   for(let j = i + 1; j < str.length; ++j)
  //     if(str[i] === str[j]){
  //       return false;
  //     }
  // return true
// }

// console.log(isIsogram("Dermatoglyphics"));
// // true 
// console.log(isIsogram("isogram")); 
// // true
// console.log(isIsogram("aba"));
// // false, "same chars may not be adjacent" 
// console.log(isIsogram("moOse")); 
// // false, "same chars may not be same case" 
// console.log(isIsogram("isIsogram"));
// // false 
// console.log(isIsogram(""));
// // true, "an empty string is a valid isogram" 



//----------------------------------------------



// 題目三
// 計算出母音在字串裡面的數量


// function getCount(str) {
//       //因為要計算母音的數量，先預設數量為0 ,在把對比值也宣告，在用迴圈去做兩個的對比，對比如果想等的就讓，預設數量去+1 最後再回傳
//       let vs = 0 
//       let cc = str.split("")
//       let v = ['a','e' ,'i','o','u']
//       for(let a = 0 ; a <str.length ; a++){
//         for(let b = 0 ; b < str.length ;b++){
//           if(str[a] === v[b]){
//             vs++
//           }
//         }
//       }
//       return vs


//   //另外一種解法
//   // let vowels = ['a','e','i','o','u'];
//   // const a = str.split('').filter(letter => {
//   //   return vowels.includes(letter)? true : false;
//   // }).length

//   // console.log(a);
// }

// console.log(getCount("abracadabra")); // 5


//----------------------------------------------


//  題目四
// 入會高爾夫球俱樂部需要填寫年齡跟讓竿數，年紀超過55歲且讓竿數超過7杆的都是Senior , 其都是open ,請分出每個會員的等級

// function openOrSenior(data) {
//   return data.map(([age , handicap])=> age >= 55 && handicap > 7 ? 'Senior' : 'Open' )
  
// }

// // 用map會去對每個物件做判斷，在會傳符合條件的到Senior ，不符合則回傳'open' , map回傳值會是回傳所有輸入值更改後同樣length的陣列
// // function openOrSenior(data){
// //   return data.map(([age , cap])=> age >= 55 && cap > 7? "Senior" : "open"
// //   )
// // }


// console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])) 
// //['Open', 'Senior', 'Open', 'Senior'])
// console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]))
// //['Open', 'Open', 'Open', 'Open'])
// console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]))
// //['Senior', 'Open', 'Open', 'Open']


// 題目五
// 把兩個引數的字串裡面相同字元刪除，在重新組成字串

// // 這邊可以用concat把兩個str 合再一起變成一個str ,用Set裡面的的每個值都會是唯一直，
// // Set會把字串轉換成類似陣列split fn的樣子，並把多餘的剔除，然後Set只是看起來是陣列但實質上他屬性是object
// // 所以用...的方式收集到陣列裡面，在用Array的方法 sort 去排序，在用join把陣列裡面的每個值合併並回傳" 字串 "

 
// function longest(s1, s2) {
//   console.log();
//   return [...new Set(s1.concat(s2))].sort().join('');
  
// }


// console.log(longest("aretheyhere", "yestheyarehere")) //"aehrsty"
// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")) //"abcdefghilnoprstu"
// console.log(longest("inmanylanguages", "theresapairoffunctions")) //"acefghilmnoprstuy"



// 題目六
// 引數1陣列裡面不能出現引數2陣列的值，回傳不含引數2值的新[]


// 用filter的特性會把true的值抓出來組成新的array ，用b去includes 去找他裡面的直，includes找到相同的值會回傳true
// 但我們要找到不同的所以要用! 去反轉true 跟 false ，這樣原本相同的true就不會被選出來
// 不同的值 false就會變成就會變成true ，filter在把true值回傳成新的陣列
function arrayDiff(a, b) {
  return a.filter((dif)=> !(b.includes(dif))) 
}

console.log(arrayDiff([1,2], [1])) // [2] "a was [1,2], b was [1]";
console.log(arrayDiff([1,2,2], [1])) // [2,2] "a was [1,2,2], b was [1]";
console.log(arrayDiff([1,2,2], [2])) // [1] "a was [1,2,2], b was [2]";
console.log(arrayDiff([1,2,2], [])) // [1,2,2] "a was [1,2,2], b was []";
console.log(arrayDiff([], [1,2])) // [] "a was [], b was [1,2]";
console.log(arrayDiff([1,2,3], [1,2])) // [3], "a was [1,2,3], b was [1,2])