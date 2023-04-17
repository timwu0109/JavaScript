// // odject = 屬性 + 行為
// // JavaScript 物件就是const a =  { a:1 , b:2 , c:3}
// // 用中文說就是 Key 跟 value 的組和

// //如何拿到物件
// const objectKey = {
//   name : 'tim',
//   age : 18,
//   date : 19910109,
//   "aa cc" : "ggg" 
// };

// const result = 'na' +'me'


// console.log(objectKey.name); //印出tim
// console.log(objectKey["name"]); //印出tim
// console.log(objectKey[result]); //印出tim 
// console.log(objectKey["aa cc"]); //印出ggg

// //以上兩種方法都可以拿到我們要的value ，但是中括號其實使用上比較不直覺之外，使用的情境也不太依樣以上log第三行跟第四行有特別說到，會使用到中括號可能在用字串做運算才會用到



// 
const objectKey = {
  name : 'tim',
  age : 18,
  date : 19910109,
  bmi : function( w , h){
    h = h / 100
    return (w / ( h ** 2 )).toFixed(2)
  } 
};

console.log(objectKey.name+' bmi = '+objectKey.bmi( 80 , 180) );

// 為物件增加屬性

console.log(objectKey); //印出 {name: 'tim', age: 18, date: 19910109, bmi: ƒ}

objectKey.address = 'Taipei City'
objectKey["Phone"] = 0982690815


console.log(objectKey); //用以上兩種方式就都可以增加屬性