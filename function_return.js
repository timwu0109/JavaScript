//筆記區
//console.log() 本身是沒有回傳值的
//function 內部應該會有console.log 就算有也應該是測試看看印什麼東西出來，要關注在function 帶出來的回傳值才是重點
//用大括號寫發就一定要加上 return
// const a = (age) => age >=  18; 用箭頭函示就可以寫成一行，不用大括號跟return
//所有的function都有回傳值


//---------------------------------------------

// 回傳值
// function addValue(a,b) {
//   console.log(a+b); // 只是印出parameter相加結果，並沒有回傳
//   return a + b ;

// }

// console.log(addValue(1,2)); //回傳要是沒有給他log，就會顯示空白所以要把整個包在log裡面才能把回傳值印出來，本身接收回傳值的是在外面呼叫的addValue這部分




//------------布魯斯
//在function 外面呼叫並不會互相干擾，以下狀況就是運用在兩種頁面上，但此方式是沒有使用return的方式做

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



// ------- 布魯斯
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



// -------------
// 用if else實作一次會員系統 ，發現在if裡面回傳之後就回直接放到function 外面所以就不需要在function 裡面在百一次return

// function customerClass(price1 , price2 , discount){
//   let total = price1 + price2 - discount
//   let graded = '一般會員'

//   if (total > 50000){
//     return graded =  '黃金會員'+total ; 
//   }else if (total > 10000 ){
//     return graded = '銀牌會員'+total;
//   }else{
//     return graded + total
//   }
//   return graded  // 實際這邊沒有回傳因為在上面就已經回傳出去了
// }
// let result = customerClass(10000 ,5000 , 2000)
// console.log(result);

// let result1 = customerClass(50000 ,5000 , 2000)
// console.log(result1);


//---------

//BMI
function bmi(height , weight){
  let h = height / 100.0 ;
  let w = weight;

  return (w / (h * h)).toFixed(2)
};

let result  = bmi(181 ,77)
console.log('bmi result:', result);

// console.log('bmi result:', result.toFixed(2))
//bmi result: 23.50 ,最後在console 加上toFixed 變成之後每次都要加，如果要做重複的事情就直接在function return 裡面寫好就可以一直重複使用了

// let result2 = bmi(180 , 70)
// console.log(typeof result2.toFixed(2)); //string

//------ 以上以下兩種寫發都可以算到小數點一下第二位
// toFixed()可以直接抓到結果，引數可以帶要抓到小數點第幾位，但要注意回傳值會變成 string
// Math.round()會直接四捨五入取整數 ，回傳值是 number


function bmi2(height , weight){
  let h = height / 100.0 ;
  let w = weight;
  
  return   Math.round((w / ( h * h ))*100)/100;

}

let result3  = bmi2(181 ,77)
console.log('bmi result3:', result3);//bmi result3: 23.5

let result4 = bmi2(180 , 70)
console.log(typeof result4); //number
