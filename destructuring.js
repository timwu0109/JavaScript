// 解構賦值 destructuring assignment

// const hero  = {
//   name : 'Tim',
//   age : 32 , 
//   location : 'Taipei' , 
// }

// // 解構是下面這一行這樣寫法就可以抵兩行
// const {name , age} = hero  //下面印出 'Tim' , 32
// // const name = hero.name // // 印出 'Tim'
// // const age = hero.age  // // 印出 32

// console.log(name);
// console.log(age);



// --------------------解構的其他做法 

//當然還可以做成以下這樣，如果今天想要新建一個物件想要有上一份，物件的一些屬性，之外有一些可能要改Key name 就可以用以下這種解構方式做出來
//當解構內的屬性，在原hero物件內找不到，就會給他一個undefined

// const hero  = {
//   name : 'Tim',
//   age : 32 , 
//   location: 'Taipei' ,
// }

// const {name , age , location:place , address} = hero;

// const newHero = {
//   name ,
//   age ,  
//   place,
// };



// ---------------解構好用之處2
// 當我們抓了別人API回來之後，裡面會有一大包物件跟屬性，別人的命名不好，可以透過destructuring 去把屬性重新命名，別人寫不好的千萬不要跟著一起寫

// const hero  = {
//   snen : 'Tim',
//   iage : 32 , 
//   slten: 'Taipei' ,
// }

// const {snen: name , iage : age , slten: place} = hero

// const newHero ={
//   name,
//   age,
//   place,
// }


// ------------------ destructuring in function
// 在以下狀況中我們把hero物件，當成引數傳入function 當中，然後再function 裡面去抓出我們要的值，在這時候也是可以使用解構的方式去處理喔

// function destructuring(heroDate) {
//   const name =heroDate.name
//   const age =heroDate.age

//   console.log(name);
//   console.log(age);
// }

// const hero  = {
//   name : 'Tim',
//   age : 32 , 
// }

// destructuring(hero)


// 以下解構版本，這時候會看到我們用前面的方式去解構出來我們要的屬性，然而如果heroDate 這個參數在function 裡面沒有在用到的時候，就也可以有另外一種做法 直接把解構的屬性放在function的 parameter 裡面function destructuring({name , age}){} 這樣就也是可以的喔！

function destructuring(heroDate) {
  const {name , age} = heroDate

  console.log(name);
  console.log(age);
}

const hero  = {
  name : 'Tim',
  age : 32 , 
}

destructuring(hero)