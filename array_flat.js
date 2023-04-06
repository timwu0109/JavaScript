// about the flat 
// array 要把二維陣列變成一維陣列 ，關鍵字是輾平flat這個字去找 ， 其實有以下三種方法
// 1. concat 是把陣列內的值接續再另一個陣列裡變成一個新的陣列， 
// 2. flat是用陣列包裹原本的陣列這邊會變成二維陣列，在用.flat(要解開幾層) 去把陣列輾平
// 3. 用...的方式把陣列展開 ，但切記因為...展開需要東西接，所以要給他一個block or array不然就會出錯SyntaxError: Unexpected token '...'

const friend = ['Tim' , 'Elvis' , 'Una' , 'Paul']
const family = ['Parker' , 'Olivia' , 'Wu' , 'Lu']

const mixResult = friend.concat(family)
const mixUseFlat = [friend , family].flat()
const mixUseDot = [...friend ,...family]
// const mixUseDot1 = ...friend ,...family //SyntaxError: Unexpected token '...'

console.log(mixResult);
console.log(mixUseFlat);
console.log(mixUseDot);