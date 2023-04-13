  //  fetch 是去撿回來的意思
  //  當我們去印出.then 丟出來的東西我們會先抓到Response 一包物件 ，再從這物件中去延伸prototype會找到json的方法，當我們印出json()發現他是一個Promise ，反之我們去印出fetch(API)的時候同樣也是Promise，知道Promise這東西可以用兩個東西接 如果成功抓回來就走then()，失敗就走catch()
  // fetch()整段會快速跑完，fetch告訴瀏覽器去抓東西，就先去做其他事情，當東西載完了之後就會觸發.then()
  // JS是單一執行序的語言，什麼是單一執行序用白話來說是，一個廚師煮很多樣菜，會有先後順序做完 

const API = "https://jsonplaceholder.typicode.com/posts"

fetch(API)
.then((tim)=>{
  return tim.json()
  // console.log(tim.json())
  //這邊tim.json是個premise 的東西 ，只要是這物件就可以用then and catch 去接
}).then((post)=>{
  console.log(post);
  //用json去解析完之後就話把原本抓回來的文字檔自動轉換成一包物件
})
.catch((err)=>{
  console.log(err);
})