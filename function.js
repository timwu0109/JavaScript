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

//--------

// 匿名函示anonymous function 
// const myName = function(name){
//   console.log(name);
// }

// ()=>{} 箭頭函示Arrow function
// const myName = (name) =>{
//   console.log(name);
// }

// myName('tim')  // tim 




//-----------use strict嚴格模式
// 在嚴格模式執行下就不會隨意增加全域變數

function hi(){
  'use strict'
  a = 2 
  console.log(a); //印出a is not defined
}

hi()