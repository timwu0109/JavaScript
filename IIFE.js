// IIFE = Immediately(立即) Invoked(調用) Function Expression(表達)
// 也就是立即函式 ，立即函式的好處就任何變數都不會污染到外面來，適合拿來做套件

// (function (n) {
//   console.log(n);
// })(123);




// ---------------------import export 
import {add , min} from './app'
// import {add as ad ,  min as mi} from './app.js'
// export default 可以用變數去呼叫，但是純export不行，所以要用as的方式去改名
import x from './app'
import flatpickr from 'flatpickr';


console.log(min());
// min("tim" , "GGG")
// console.log(x);




// -----------TDD Test(測試)-Driven(驅動)-Development(開發)
// Ruby on Rails  > rspec
// JavaScript > jest
// 測試要先訂好規格也就是測試 ，在開始時做 
