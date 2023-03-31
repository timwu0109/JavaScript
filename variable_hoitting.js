
// variable Hoisting  變數提升
// 兩階段執行

// var
// creation 建立期  先用宣告的變數在記憶體空間裡面要位子，因為位子需要有值但第一階段不會給給值，用var宣告會先給予設的undefined去留著記憶體空間
// execution 執行期  執行函數 跟 給值

// console.log(a); // undefined
// var a = 1;
// console.log(a); // 1




//----------

// let , const
// creation 建立期  先用宣告的變數在記憶體空間裡面要位子，但let會在變數上面蓋一個蓋子TDZ ， 當要是未宣告就使用會得到referenceError before initialization 宣告的變數沒有初始化
// execution 執行期  執行函數 跟 給值

// console.log(a);
// const a = 1; //referenceError before initialization...






//-------

// function
// creation 建立期 就會一次把第一階段跟 execution 執行期的付值一起做完，所以不管function在哪邊呼叫都不會錯誤

// a() //function hoisting
// function a(){
//  console.log("function hoisting"); 
// };
// a() //function hoisting




//--------

// scope 作用域
// var  = function scope  無法跳脫function的範圍
// let , const = block scope 只要倍block包住就無法取直

// function tim(){
//   var a = 1 
//   const b = 2
// };

// tim()

// console.log(a);  // is not defined
// console.log(b);  // is not defined





//----------

// 用var宣告 或 直接給值都會造成全域變數的污染 ，如果window裡面沒有變數就會塞給他，如果有變數就會把原本的值給覆蓋掉，如下:

// window 物件裡面有alert 屬性，但因為重新賦值把他原本的蓋掉了，所以當用遠本方法去call alert的時候就會出現error

// alert = 1 
// alert()   //TypeError: alert is not a function





//-------

// var 在宣告的後的小細節
// for(var i = 0 ; i < 10 ; i++){
//   console.log(i);
// }
//  console.log("用var 宣告i變數會等迴圈跑轉，回傳最後一次的結果=" + i); //10

// 同樣回圈在用let就會出現 ReferenceError is not defined
// for(let i = 0 ; i < 10 ; i++){
//   console.log(i);
// }
//  console.log(i); // ReferenceError: i is not defined







//----------

// let x = 5

// function a(x){
//   console.log(x); // 會變成 x = 123
//   x = 1 ;
//   console.log(x); // 把parameter x 變成 1
// }

// a(123)
// console.log(x); // 5 因為在對內部的parameter 做調整，所以不會造成全域變數污染  , 就算在外面宣告 x 也不會對function裡面造成影響
