// 物件導向OOD
// 原型prototype 打造 < 原型就像是依照一個參考得樣式打造出不同的東西，例如車子都是四輪，依照同樣的標準做出不同的車子這就是原型


// function heroCreate (name , power) {
//   const hero = {
//     name ,
//     power ,
//     attack : function(){
//       console.log("attack");
//     },
//   }
//   return hero
// }

// const h1 = heroCreate("tim" , 100)
// h1.attack()
// hero.attack() //我這樣寫是錯的，在外面沒辦法直接抓到function 裡面的fn，要向上面寫的一樣fn會return 整包物件回來heroCreate("tim" , 100)就是那整包物件，所以宣告一個變數去接他在用.attack()去呼叫他就可以成功抓到



// // ---------------- Object.create() 
// // 每一個物件都有 __proto__ ，當我們要使用某個物件的屬性的時候，首先會先找自己的物件本身有沒有，當沒有的時候就會沿著 _ _proto_ _ 往下去找另外一個物件並問他有沒有這屬性，如果沒有就在繼續找下去直到沒有

const actions = {
  attack: function(){
    console.log("attack")
  },
  sleep: function(){
    console.log("Zzzzzz");
  },
}
// //一路往下找的行為叫做 prototype chain 原型鏈
// //  Object.create(actions) < 用這方法可以做出原型鏈的效果
// function heroCreate(name , power) {
//   const hero = Object.create(actions); //後面如果是用null就是沒有要用原型直接打造，帶入參數就是要用設定好的物件來做原型
//   hero.name = name;
//   hero.power = power ;
//   // hero.attack = function(){
//   //   console.log("attack!!!!!!");
//   // }
//   return hero
// }
// const h1 = heroCreate("tim" ,100)
// console.log(h1);

// const h2 = heroCreate("oli" , 90)
// console.log(h2);


// ------------------ new method
// 用另外一種方式來做prototype 
function heroCreate (name , power) {
  // this -> {} 當我們用new的時候會做幾件事情
  //1. {}.__proto = heroCreate.prototype 把他指向他
  //2. fn裡面做出一個類似{}的空物件行為 heroCreate {}
  //3. this -> {} 會有生出一個this變數，透指向空物件，用以下方式就可以把屬性塞進去，並自動return
  this.name = name;
  this.power = power;
}
heroCreate.prototype = actions

// 每個物件都有__proto__ 屬性
// 每個fn都有 prototype屬性 , fn在js內也是物件的一種所以fn 也有 __proto__ ，所有fn 一開始都是{ }空物件
// {}.__proto === heroCreate.prototype 

const h1 = new heroCreate("tim" , 100);

// heroCreate.prototype = actions 
// JS執行序問題，我一開始擺在這地方用h1.__proto去找會找不到，因為上面已經new完了，我才加proto給他所以在他的prototype裡面就不會有，下面範例h2 建立在heroCreate.prototype之後，所以h2.__proto__就會有actions的屬性可以用！

console.log(h1);

// const h2 =new heroCreate("oli" , 100);

// console.log(h2);


