// // array 陣列
// const list = [1,2,3,4,5,6,7,8]

// list.push(9)
// console.log('push從最後面增加一顆',list);

// list.unshift(0)
// console.log('unshift從最前面增加一顆',list);

// list.pop()
// console.log('pop從最後面刪除一顆',list);

// list.shift()
// console.log('shift從最前面刪除一顆',list);

// console.log('陣列index 數字0為陣列中第1值',list[0]);
// console.log('陣列index 數字3為陣列中第4值',list[3]);

// console.log('取陣列最後一個值 ', list[list.length-1]);

// const sp = list.splice(0 , 1 ,'tim')  //第一個值是起始值從自己開始砍，沒給第二值就會一路砍到最後 , 第二個刪除到哪個值，選到的值會留下來之得全部刪掉 , 在選到得第二值前面，添加新的值進去

// console.log(list); //印出我正常要的結果 > [1, 5, 6, 7, 8]
// console.log(sp); //用 splice 記得如果去log > list.splice(1 , 3) 會印出splice 回傳被刪除的數值陣列 > [2, 3, 4]

// // 特別注意回傳值
// const listPushReturn = [1,2,3,4,5]
// const pushResult = listPushReturn.push('x' , 'z')

// console.log(listPushReturn); // [1, 2, 3, 4, 5, 'x', 'z']
// console.log(pushResult);  // push function 回傳值是length，所以如果是log pushResult，也就會得到array的長度

// const listSlice = ['a' , 'b' , 'c' , 'd' , 'e']
// const a = listSlice.slice(0 ,  3) // 第一值包含自己本身 , 第二值不包含自己本身 回傳所選值的新陣列

// console.log(a);
// console.log(listSlice);





//---------------indexOf and includes function use find value

// const listIndexOf = ['a' , 'b' , 'c' , 'd' , 'e']

// console.log(listIndexOf.indexOf('a')); // 如果找到回傳索引值
// console.log(listIndexOf.indexOf('z')); // 沒找到回傳 -1，帶到if condition 用boolean 去做判斷

// if (listIndexOf.indexOf('z') >=  0 ){
//   console.log("存在");
// }else{
//   console.log("不存在");
// }

// console.log(listIndexOf.includes('a')); //找到回傳true
// console.log(listIndexOf.includes('z')); //沒找到回傳false

// if (listIndexOf.includes('a')){
//   console.log("存在");
// }else{
//   console.log("不存在");
// }





//---------------for loop is different form forEach 

// const listLength = ["a", "b", "c", "d", "e", "f"];

// 用跑回圈的方式跑陣列長度數量，東西全部印出來
// for (let i = 0; i < listLength.length; i++) {
//   console.log(listLength[i]); 
// }


// 直接抓陣列裡面的值一個一個丟到item裡面
// listLength.forEach((item) => {
//   console.log(item);
// })





// ------------ how to use find function in array 

// const listFind = [ 1,2,3,4,5,6,7,8,9,10 ] 

// const result = listFind.find((index) => {
//   return index > 3 ;
// })

// console.log(result); //  印出3  ，find 回傳找到符合的第一個值


// 找到 > 6的第一個偶數
// const result = listFind.find((index) => {
//   return index % 2 === 0 && index > 6  ;
// })

// console.log(result); //  印出8 






// --------- Array map function
// const listMap = [ 1,2,3,4,5 ] 
// 把listMap 變成[2,4,6,8,10]


// // for 的寫法
// let result = []
// for(let i = 0 ; i < listMap.length  ; i++){
//   result.push( listMap[i] * 2)
// }
// console.log(result); 


// forEach寫法
// let result = []
// listMap.forEach((item) => {
//   result.push(item *2)
// })
// console.log(result);


//map 寫法 回傳值是計算結果收集起來在變成新的陣列
// const result = listMap.map((item) => item * 2 )
// console.log(result);



// 印出1.3.5.7.9 ，當如果沒有回傳值得時候 map特性會回傳一個新的陣列等於原始陣列長度 所以會印[undefined *5]
// const result = listMap.map((item)=> item * 2 - 1)

// console.log(result); // 印出[1, 3, 5, 7, 9]



// 這邊問法很特殊，解釋成為item餘數是否於數為0，是的話會回傳 true 不是就會傳false
// const result = listMap.map((item)=> item % 2 === 0 )

// console.log(result); // 印出[false, true, false, true, false]


// map 跟filter 最不同的地方就是 map 轉的length 長度多少，就會回傳多少個值 ，filter 只會會傳符合條件得可參考以下 ，級以上對照


// ---------- about the filter function
// const listFilter = [ 1,2,3,4,5,6,7,8 ]
// const result = listFilter.filter((item)=> item > 6 ) //只要判斷回傳的事true 就回傳結果

// console.log(result);  // 印出[7, 8]


// // 選出字數 > 3 的選項
// const listFilter  = [ 'a' , 'aa' , 'bbbb' , 'cccc ' , 'ddddddd' , 'g'] 
// const result = listFilter.filter((item)=> item.length > 3)

// console.log(result); // 印出 ['bbbb', 'cccc ', 'ddddddd']





// --------- about the reduce function for array

// const result = listReduce.reduce(
// 1.(累加值(每輪加總結束的回傳值) , 目前值(array裡面的值) )=>{return 累加 + 目前}, 
// 2. 初始值(累加值預設為0 ,這邊可以調整初始值) )
//  以上是兩個reduce parameter , 第一個是function , 第二個是 初始值 
//  當然如果沒有給初始值，就會直接抓陣列的第一個值來當累加值，也就是1
// const result = listReduce.reduce((acc , cv )=> acc + cv , 10)

// const  listReduce = [ 1,2,3,4,5 ]
// const result = listReduce.reduce((acc , cv )=> { return acc + cv} , 10)

// console.log(result); // 印出25


// 用reduce 比較笨的方法找陣列最大值
const listReduce  =  [ 1 ,10 ,7 ,9 ,18 , 200  ,1550]

const result = listReduce.reduce((acc , cv ) => {
  if (acc > cv ){
    return acc
  }else{
    return cv
  }
})

console.log(result); //印出 1550

