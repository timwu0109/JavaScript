// for(起始值;滿足條件;每回合會做得事情){}

// 印出1-10
// for(let a = 1 ; a <= 10 ;++a){ 
//   console.log(a)
// };

//印出0-100單數
// for(let d = 0 ; d <= 100 ; d++){
//   if(d % 2 === 1){
//     console.log(d)
//   }
// };


// while
// let a = 1(起始值) 
// while (滿足條件){
//   console.log();
//   每回合要做的事情;
// }

// 用while loop寫出0-100基數
// let a = 1
// while(a <= 100){
//   console.log(a);
//   a = a+2
// };

// while (a <= 100){
//   if(a % 2 === 0){
//     console.log(a);
//     };
//   a++;
//  };


//用兩種迴圈寫出
// 您好5
// 您好3
// 您好1

// for(let a = 5 ; a > 0 ; a-=2 ){
//   console.log(`您好${a}`);
// }

// let a = 5
// while(a > 0){
//   console.log(`您好${a}`);
//   a-=2;
// }

// whileloop 未完成
// let a = 1
// let b = 1

// while(a <= 9){
//   while(b <= 9){
//     console.log(`${a}*${b}`)
//     b++;
//   }
//   a++;
// }

// ９９成法表
// for (let a = 1 ; a < 10 ; a++){
//   for (let b = 1; b < 10; b++) {
//     console.log(`${a}*${b}=`+(a*b))
//   }
// }
//

//基礎星星
// for(let a = 1 ; a <= 10 ; a+=1){
//   let b = '*'
//   console.log(b.repeat(a));
// }

// 進階星星
// for(let a = 10 , b = 1 ; a > 0 , b <= 21 ; a-- ,b+=2 ){
//   console.log('.'.repeat(a) + '*'.repeat(b));
// }

// for (let i = 10; i >= 0; i--) {
//   console.log(".".repeat(i) + "*".repeat(21 - i * 2));
// }


let age = 66
 
switch(age){
  case age > 18 :
    console.log('成年');
    break;
  
  case age < 18  && age >= 10:
    console.log('青年');
    break;
 
  default:
    console.log('幼童');
    break;
}





