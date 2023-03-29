// function tim(x) {
//   for(let a = x ; a > 0 ; a--){
//     console.log('tim'.repeat(a));
//   }
// };

// tim(10)

// 參數parameter >
// argument 多於 parameter 會當沒看見，
// argument 少於 parameter 則會自動補 undefined

// function integerText( a , b, c ){
//   console.log(a);
//   console.log(b);
//   console.log(c);
// };

// integerText(1,2,3,4) < 引數argument

// function parameter 裡面用指定是給預設值
// 這算是函式陳述式

// function myName(name , age = 18){
//   console.log(name);
//   console.log(age);
// };

// myName('tim' , 30) // tim ,30
// myName('tim') // tim , 18 (沒給預設值會是undefind)

// 也可以用 var,let,const 去宣告把function帶進去
// 在此函式不一定要具名，所以稱為匿名函數，透過宣告得變數就可以call裡面的函示
// anonymous function 匿名函數

// const myName = function (name) {
//   console.log(name);
// }
// myName('tim')

// -------------------------

// variable Hoisting  變數提升
// 兩階段執行

// var
// creation 建立期  先用宣告的變數在記憶體空間裡面要位子，因為位子需要有值但第一階段不會給給值，用var宣告會先給予設的undefined去留著記憶體空間
// execution 執行期  執行函數 跟 給值

// console.log(a); // undefined
// var a = 1;
// console.log(a); // 1

// let , const
// creation 建立期  先用宣告的變數在記憶體空間裡面要位子，但let會在變數上面蓋一個蓋子TDZ ， 當要是未宣告就使用會得到referenceError before initialization 宣告的變數沒有初始化
// execution 執行期  執行函數 跟 給值

// console.log(a);
// const a = 1; //referenceError before initialization...

// function
// creation 建立期 就會一次把第一階段跟 execution 執行期的付值一起做完，所以不管function在哪邊呼叫都不會錯誤

// a() //function hoisting
// function a(){
//  console.log("function hoisting"); 
// };
// a() //function hoisting


// --------

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

for(var i = 1  ; i < 10  ; a++){
  console.log(i);
};

console.log(i);