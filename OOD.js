// 物件導向OOD
// 原型prototype 打造 < 原型就像是依照一個參考得樣式打造出不同的東西，例如車子都是四輪，依照同樣的標準做出不同的車子這就是原型


function heroCreate (name , power) {
  const hero = {
    name ,
    power ,
    attack : function(){
      console.log("attack");
    },
  }

  return hero
}

const h1 = heroCreate("tim" , 100)
h1.attack()
// hero.attack() //我這樣寫是錯的，在外面沒辦法直接抓到function 裡面的fn，要向上面寫的一樣fn會return 整包物件回來heroCreate("tim" , 100)就是那整包物件，所以宣告一個變數去接他在用.attack()去呼叫他就可以成功抓到r