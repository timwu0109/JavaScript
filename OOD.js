// 物件導向OOD


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
// hero.attack() //我這樣寫是錯的，在外面沒辦法直接抓到function 裡面的fn，要向上面寫的一樣fn會return 整包物件回來heroCreate("tim" , 100)就是那整包物件，所以宣告一個變數去接他在用.attack()去呼叫他就可以成功抓到