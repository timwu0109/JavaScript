// array 陣列

const list = [1,2,3,4,5,6,7,8]
console.log(list);

list.push(9)
console.log('push從最後面增加一顆',list);

list.unshift(0)
console.log('unshift從最前面增加一顆',list);

list.pop()
console.log('pop從最後面刪除一顆',list);

list.shift()
console.log('shift從最前面刪除一顆',list);

console.log('陣列index 數字0為陣列中第1值',list[0]);
console.log('陣列index 數字3為陣列中第4值',list[3]);

console.log('取陣列最後一個值 ', list[list.length-1]);

// 特別注意回傳值

const listPushReturn = [1,2,3,4,5]
const pushResult = listPushReturn.push('x' , 'z')

console.log(listPushReturn); // [1, 2, 3, 4, 5, 'x', 'z']
console.log(pushResult);  // push function 回傳值是length 也就是array的長度

