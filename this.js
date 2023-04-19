// this 代名詞
// this 是動態執行誰呼叫就會發動 跟 scope沒關係
// --------------1 .誰呼叫誰就是this

// const hero = {
//   hi : function(){
//     console.log(this);
//   }
// }
// hero.hi() 
// //hero 呼叫了hi() ,所以在裡面this就是hero

// // -------------2. 沒人呼叫，this -> 全域物件

// function hi(){
//   console.log(this);
// }
// hi() // 印出 Window 
// 當沒有人呼叫fn ,this就會變成全域物件 <這句話是錯的不是變成 this就是全域物件 var a = 1 , this.a === window.a // /印出 true



// ----------------3.()=>{} 箭頭韓式沒有自己的this ，所以箭頭函式裡面的this就會指向window
// 如果要看怎麼運作就是F12 找到source 設定中斷點就可以看到

// function hi() {} 
// const hey = () =>{}


// hi(); //this: Window
// hey() //this: undefined

// 另外一個比喻

// function hi(){
//   function hey() {
//     console.log(this);//window

//     const ccc = {
//       name : 'tim' ,
//       hi : function(){
//         console.log(this);// ccc{}
//       },
//       hey : ()=>{
//         console.log(this);// 全域
//       }
//     }

//     ccc.hi()
//     ccc.hey()
//   }
//   hey()
// }
// hi()



// -------------4. 是否有使用new
// 如果有用new就會指向用new的那個物件


function hi(name){
  // this  -> {}
  // 這裡還有一個重點，沒人呼叫this就是window，沒有new就會變成在全域物件上面幫他加了一個name的屬性
  // this === Window //true
  this.name = name
}

const h1 =  hi('tim')
console.log(h1);




// --------------5. 是否有用call , apply , bind

