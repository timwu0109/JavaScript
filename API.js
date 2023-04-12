// 要練習API > 可以去API placeholder 抓假資料

// API application programming interface
// API 就是一個網址，資料來源
// API 本質是個介面，去某個地方取得資料

// 取得資料的動詞 GET取資料/POST寫入資料/PUT修改資料/PATCH修改資料/DELETE刪除資料，我可以對那個介面做的動作，符合以上動作就是RESTful API 他是一種設計風格

// 資料傳輸格式 XML/JSON/CSV

// AJAX Asynchronous JavaScript amd XML , 非同步處理，他是一種概念，不是技術也不是語言。要如何理解非同步，就想像你在點購物商品得時候跑出動畫顯示轉圈的時候，後面其實在跟要資料！另外一個比較具代表的就是，google map 地圖不可能事先載入全部，會導致流量太大所以當拖移的時候，就會先去載入範圍外面的地圖並且拼接起來，不讓畫面曝光這就是AJAX

// 拿API 東西的時候網址要正確，相對得動詞也要正確才拿得到

// const API = "https://jsonplaceholder.typicode.com/posts"
// const req = new XMLHttpRequest

// req.addEventListener('load' , () => {
//   const post = JSON.parse(req.responseText)  
//   const list = document.querySelector('#list')

    
//   post.forEach((post)=>{
//     const result = `<li>${post.title}</li>`
//     list.insertAdjacentHTML('beforeend' , result)
//     // list.insertAdjacentHTML('beforeend' , result)

//     // 這邊用insertAdjacentHTML 會產生效能問題，因為只要抓每筆資料就會重新渲染畫面一次，比如有100筆資料就會渲染100次 ，這件事情叫做DOM Tree
//   })
// })

// req.open('GET' , API)
// req.send()



//-----------------------forEach 更好做法

// const API = "https://jsonplaceholder.typicode.com/posts"
// const req = new XMLHttpRequest

// req.addEventListener('load' , () => {
//   const post = JSON.parse(req.responseText)  
//   const list = document.querySelector('#list')

//   let result = ""
//   post.forEach((post)=>{
//     result = result +  `<li>${post.title}</li>`;
//     // 這邊先吧所有東西集結才一個物件在給insertAdjacentHTML去做渲染，就不會太消耗效能
//   })
//    list.insertAdjacentHTML('beforeend' , result)
//    // 移到外層
// })

// req.open('GET' , API)
// req.send()


// ---------------reduce 當loop要去外面拿東西一定都會有更好的寫法，像在這邊是做加總就可以用reduce把字串疊加起來

const API = "https://jsonplaceholder.typicode.com/posts"
const req = new XMLHttpRequest

req.addEventListener('load' , () => {
  const posts = JSON.parse(req.responseText)  
  const list = document.querySelector('#list')
  console.log(posts);
  const result =  posts.reduce((ac , {title , id , userId})=>{
    return ac + `<li>${id}+ ${userId} +${title}</li>`
  } , "")

  list.insertAdjacentHTML('beforeend' , result)
})

req.open('GET' , API) //這邊網址對動詞也要對才可以抓到東西＊＊重要
req.send()