// CORS (Cross-Origin Resource Sharing 跨來源資源供享

// const api = "https://jsonplaceholder.typicode.com/posts"


// CORS policy 跨站授權
// 當對方網站沒有開權限，就無法抓回來
// CORS 這部分是針對瀏覽器去做阻擋，而不是擋JS 或是其他language，那為什麼backend 寫爬蟲可以爬回來，也是因為，他不是透過瀏覽器去下載而是抓了一包東西之後再回來解析
 const api = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"

fetch(api)
.then((resp)=>{
  return resp.json()
}).then((posts)=>{
  const list = document.querySelector('#list')
  const result = posts.reduce((acc ,post)=>{
    return acc + `<li>${post.sna}</li>`
  }, "")
  list.insertAdjacentHTML('beforeend' , result)
})
.catch((err)=>{
  console.log(err);
})