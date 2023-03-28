let age = Number(prompt('請輸入西元年份'));

// console.log(age)

if (Number.isNaN(age)){
  alert("請輸入正確年份");
}else{
  if ((age % 4 ===0 && age % 100 !== 0 )|| (age % 400 === 0)){
    alert("閏年");
  }else{
    alert("平年")
  }
}


// if (age >= 18) {
//   console.log("已成年");
// }else if (age < 18 && age > 10 ){
//   console.log("青少年");
// }else {
//   console.log("孩童")
// }

// if (age % 4 === 0){
//   if(age % 100 === 0){
//     if(age % 400 === 0){
//       console.log("閏年");
//     }else{
//       console.log("平年");
//     }
//   }else{
//     console.log("閏年");
//   }
// } else{
//   console.log("平年");
// }

