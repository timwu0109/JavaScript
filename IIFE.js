// IIFE = Immediately(立即) Invoked(調用) Function Expression(表達)
// 也就是立即函式 ，立即函式的好處就任何變數都不會污染到外面來，適合拿來做套件

// (function (n) {
//   console.log(n);
// })(123);

import {add , min} from './app'
import x from './app'



console.log(add);
min("tim" , "GGG")
console.log(x);

