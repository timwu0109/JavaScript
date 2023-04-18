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





// // ------------------ new method
// // 用另外一種方式來做prototype 
// // 當我們用new的時候會做幾件事情
// // heroCreate.prototype 他預設是 > {}
// //1. {}.__proto = heroCreate.prototype 把他指向他
// //2. fn裡面做出一個類似{}的空物件行為 heroCreate {}
// //3. this -> {} 會有生出一個this變數，透指向空物件，用以下方式就可以把屬性塞進去，並自動return

// function heroCreate (name , power) {
//   this.name = name;
//   this.power = power;
// }
// heroCreate.prototype = actions

// // 每個物件都有__proto__ 屬性
// // 每個fn都有 prototype屬性 , fn在js內也是物件的一種所以fn 也有 __proto__ ，所有fn 一開始都是{ }空物件
// // {}.__proto === heroCreate.prototype 
// // h1.attack -> h1 -> h1.__proto__ -> heroCreate.prototype -> attack
// const h1 = new heroCreate("tim" , 100);

// // heroCreate.prototype = actions 
// // JS執行序問題，我一開始擺在這地方用h1.__proto去找會找不到，因為上面已經new完了，我才加proto給他所以在他的prototype裡面就不會有，下面範例h2 建立在heroCreate.prototype之後，所以h2.__proto__就會有actions的屬性可以用！
// console.log(h1);

// // const h2 =new heroCreate("oli" , 100);

// // console.log(h2);





// -----------------MDN Array.prototype.map()
// 基本型別又分成 string、number、boolean、null、undefined 幾種，除了以上幾種之外，其他都可以歸類至物件型別 (Object)。
// 用上面就可以解釋下面[].__proto__ === Array.prototype

// const a = new Array()
// // 現在都直接簡化 const a = [] 跟 new是一樣的

// console.log(a); //印出[]
// console.log(a.__proto__.map === Array.prototype.map
// ); //印出true 




// --------------------------
// 只要抓到prototype就知道JS的運作也就知道如何幫現有的fn加方法及JS fn是怎麼運作的
// Array.prototype.hello = () => {
//   console.log('hi');
// }
// console.log([].hello()); // 印出hi , return undefined

// String.prototype.isValue = () => {
//   return true
// }
// console.log(''.isValue()); // 印出true






// ------------- class
// ES6加入 class只是語法糖衣，讓JS寫起來更像其他OOD語言的寫法
// class 用constructor做出變數物件 ，在class 裡面直接寫function, 直接可以拿做使用！！

// class heroCreator{
//   constructor(name , power){
//     this.name = name
//     this.power = power
//   }

//   attack(){
//     console.log('attack!!!');
//   }

//   sleep(){
//     console.log('Zzzzzz!!!');
//   }
// }

// const h1 = new heroCreator('tim' , 100)




// // -------------------- inherit 繼承概念
// // class 配上 extends去找到上層的物件去繼承他的屬性
// // 我們會把共通的物件拉出來放在上層，行為各自放，用生物繼承的概念來想就會比清楚
// // heroCreate.__proto__ === creator  //true
// // heroOne.__proto__ === heroCreate.prototype //true
// // creator.__proto__ === Function.prototype //true
// // class Creator{} 他看起來是物件但他是function 只是在new的時候會給他一個{}


// class Creator {
//   constructor(name , power){
//     this.name = name;
//     this.power = power;
//   }
// }

// class monsterCreate extends Creator{
//   attack(name){
//     console.log(`${name}，攻擊！！`);
//   }
//   sleep(name){
//     console.log(`${name}，使出催眠！`);
//   }
// }

// class heroCreate extends Creator{
//   attack (name) {
//     console.log(`${name}，認真系列真。亂打`);
//   }
//   sleep (name) {
//     console.log(`${name}，認真系列倒頭就睡`);
//   }
// }

// const heroOne = new heroCreate('chiYu' , 100)
// console.log(heroOne.sleep(heroOne.name));

// const monsterOne = new monsterCreate('大蛇' , 5000) 
// console.log(monsterOne.attack(monsterOne.name));




// ----------------ASI Auto Semicolon Insertion
// JavaScript 雖然是隱藏看不到，但會自動加分號，但如果下一個是() 或是 [] {} ，JS會認為沒有做完全就會報錯誤