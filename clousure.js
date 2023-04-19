// ---------------------------closure 閉包

// for回圈用var做settimeout的時候他會先去webAPI等待 ， 但在等待的同時for回圈就已經跑完了
// 那為什麼用 let 宣告，就可以正常使用，Closure閉包這是一個JS的概念，用var宣告會在window上面安插一個全域物件屬性，所以當setTimeout在執行的時候裡面的log(a)，可以抓到全域物件上面的屬性，也就是已經做完for loop的結果，
// 當宣告改用let的時候因為block scope關係，沒辦法在scope外面取得，這時候" function "(是由fn去檢查)就會看裡層的有沒有會用到a變數，因為會用到不能讓他壞掉，就會把a 1-9 塞道setTimeout裡面，等setTimeout 在webAPI 結束後，就會順勢把剛剛先行做好的a 塞回給log(a)

// // var
// for(var a = 0 ; a < 10 ; a++){
//   setTimeout(()=>{
//     console.log(a); // 印出 10 * 10次 
//   },1000 * a)
// }


// // let
// for(let a = 0 ; a < 10 ; a++){
//   // a 存在於這block中 ，但for loop會先結束，才會做setTimeout ，所以let a就回隨之消失
//  // 這邊對丟去webAPI也有點誤解，他是會讓setTimeout的第一個parameter fn 去web ,第二個正常執行秒數
// // 強調在強調closure 是JS的概念 fn的行爲
// // 這邊for loop的概念我有點搞錯，for回圈會做三次所以會傳三次fn 到web排隊

//   setTimeout(()=>{
//     console.log(a); // 印出 1-9  
//   },1000 * a)
// }  


// function hi(){
//   let a = 1 
//   function hey(){
//     console.log(a);}
//   return hey
// }

// const cc = hi()
// cc()