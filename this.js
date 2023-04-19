// this 代名詞
// this 是動態執行誰呼叫就會發動 跟 scope沒關係
// 每個fn 都有this 




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

const h1 = new hi('tim')
console.log(h1);




// --------------5. 是否有用call , apply , bind


// const hero =  {
//   name : 'tim',
//   hi : function(){
//     console.log(this.name);
//        // 這裡驗證誰呼叫this就是誰，這邊this是hero物件本身 印出 {name: 'tim', hi: ƒ}
//   }
// }
// const c  = {name : 'oli'}
// hero.hi(c) 




// ---------- call and apply

// const hero =  {
//   name : 'tim',
//   hi : function(){
//     console.log(this);
//     //印出 c > {name: 'oli'}
//   }
// }
// const c  = {name : 'oli'}
// hero.hi.call(c)
// hero.hi.apply(c)
// // 這邊呼叫call 跟 apply都可以讓thi指向帶進去參數


// ---------- call and apply is different
// diversity 多樣性

// const hero =  {
//   name : 'tim',
//   hi : function( a , b){
//     console.log(this , a ,b);
//   }
//  //call可以帶參數進來，call >(this指向 , 參數 , 參數)
//  //apply 也可以但是要加中括號apply >(this指向 , [參數 , 參數]),如果沒用就會噴錯誤
// }
// const c  = {name : 'oli'}
// hero.hi.call(c , 1 , 2)
// hero.hi.apply(c ,[1 ,2])

//--------------用遊戲角度來實做看看
// 用this call指向，當攻擊建立在hero上面this指向自己，當用call(monster)會把this 指向monster 就會被扣血 ，用這種方式就可以達到類似遊戲補血攻擊的感覺，this好處就是是代名詞，可以寫一個fn 然後改變this 指向就好 ，不用特別在為了要幫hero補血再做一個fn

const hero = {
  hp: 100,
  mp: 70 ,
  attack : function(){
    console.log(`英雄：普通攻擊 -10hp`);
    this.hp -= 10;
  },
  skill : function(){
    console.log('英雄：瘋狂亂砍 -30hp -10mp');
    this.hp -= 30 
    hero.mp -= 10 ;
  }
}


const mage = {
  hp : 50 ,
  mp : 100 , 

  attack : function(){
    console.log('法師：普通攻擊 -5hp');
    this.hp -=5
  },

  skill : function(){
    console.log('法師：終極補血 +30hp -10mp');
    this.hp += 30
    mage.mp -= 10
  },

  // skillHero : function(){
  //   console.log('法師：終極補血 +30hp -10mp');
  //   hero.hp += 30
  //   mage.mp -= 10
  // },
  // // 這邊是用寫死的方法，如果不善用this 就可能要寫很多fn 如果今天角色更多，要幫弓箭手補血，就又要再寫一個fn，如果有10種，那不就要寫10個fn
}

const monster = {
  hp : 150 , 
  mp : 10 ,

  attack : function(){
    console.log('怪獸：普通攻擊 -50hp');
    this.hp -= 50
  },
}

console.log('hero',hero);
console.log('mage',mage);
console.log('monster',monster);
hero.skill.call(monster);
console.log('hero',hero);
console.log('mage',mage);
console.log('monster',monster);
monster.attack.call(hero);
console.log('hero',hero);
console.log('mage',mage);
console.log('monster',monster);
mage.skill.call(hero);
console.log('hero',hero);
console.log('mage',mage);
console.log('monster',monster);
monster.attack.call(mage);
console.log('hero',hero);
console.log('mage',mage);
console.log('monster',monster);
hero.attack.call(monster);
console.log('hero',hero);
console.log('mage',mage);
console.log('monster',monster);
mage.skill();
console.log('hero',hero);
console.log('mage',mage);
console.log('monster',monster);
monster.attack.call(mage);
console.log('hero',hero);
console.log('mage',mage);
console.log('monster',monster);
mage.skillHero(); //這邊是用寫死的方法
console.log('hero',hero);
console.log('mage',mage);
console.log('monster',monster);