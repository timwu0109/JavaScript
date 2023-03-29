// function tim(x) {
//   for(let a = x ; a > 0 ; a--){
//     console.log('tim'.repeat(a));
//   }
// };

// tim(10)


// 參數parameter >
// argument 多於 parameter 會當沒看見， 
// argiment 少於 parameter 則會自動補 undefind

// function intergeText( a , b, c ){
//   console.log(a);
//   console.log(b);
//   console.log(c);
// };

// intergeText(1,2,3,4) < 引數argument


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

// variable Hoisting  變數提升
// 兩階段執行 

// 
// creattion 建立期  先用宣告的變數在記憶體空間裡面要位子，因為位子需要有值但第一階段不會給給值，所以會先給予設的undefind去留著記憶體空間
// execution 執行期  執行函數 跟 給值
