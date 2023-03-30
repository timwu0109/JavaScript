// 回傳值

// function addValue(a,b) {
//   console.log(a+b); // 只是印出parameter相加結果，並沒有回傳
//   return a + b ;

// }

// console.log(addValue(1,2)); //回傳要是沒有給他log，就會顯示空白所以要把整個包在log裡面才能把回傳值印出來，本身接收回傳值的是在外面呼叫的addValue這部分




//------------
//在function 外面呼叫並不會香干擾，以下狀況就是運用在兩種頁面上，但此方式是沒有使用return的方式做

// function addMoney(price1 , price2 , discount){
//   console.log('price1',price1);
//   console.log('price2',price2);
//   console.log('discount',discount);
//   console.log('ttl',price1 + price2 - discount);
// }

// // 結帳頁面
// addMoney(100 , 200 , 50)


// // 付款頁面
// addMoney(500 , 1000 , 100)



//----------
// 以下是用return做法把結果帶到function外面
// 再把外面的部分印出來，一樣可以用上面得方式使用在兩種狀況

// function addMoney(price1 , price2 , discount){
//   const total = price1 + price2 - discount;
//   return total
// }

// const result  = addMoney(5000 , 1000 , 1000)
// console.log('result' , result);



// const result1  = addMoney(11000 , 1000 , 1000)
// console.log('result1' , result1);



// ------- 
// function return variable 實際運用
// 在這裡可以加入if的判斷式去判斷客人的會員等級
// 在判斷句裡面要加return 如果沒加，有可能會遇到符合條件不是按順序去做填寫，所以當第一個符合之後，就會往下繼續走去看第二個判斷，如果符合就會蓋掉上一個結果，總結 return 就是當累是中止繼續往下的意思


// function addMoney(price1 , price2 , discount){
//   let total = price1 + price2 - discount;
//   let grade = '普通會員' ; 

//   if(total >= 50000){
//     grade = 'VIP客戶' ; 
//     return grade + ':' + '消費金額=' + total ;
//   }

//   if (total >= 10000){
//     grade = '白金會員' ;
//     return grade + ':' + '消費金額=' + total ; 
//   }

//   return grade + ':' + '消費金額=' + total
// }

// const result  = addMoney(50000 , 10000 , 1000)
// console.log('result' , result); 
// //result VIP客戶:消費金額=59000

// const result1  = addMoney(11000 , 1000 , 1000)
// console.log('result1' , result1);
// //result1 白金會員:消費金額=11000

// const result2 = addMoney(100 , 500 , 50)
// console.log('result2' , result2);
// //result2 普通會員:消費金額=550