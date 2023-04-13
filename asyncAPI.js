// 更新世代的寫法，直覺上比fetch更直覺易懂，也更容易理解 ，但記得最後在call function 的時候 ，我們宣告的function 一定要事async function


const API = "https://jsonplaceholder.typicode.com/posts"


function renderPost(posts) {
  const list = document.querySelector('#list')
  const postResp = posts.reduce((acc , {title})=>{
    return acc + `<li>${title}</li>`
  } , "")
  list.insertAdjacentHTML('beforeend' ,  postResp)
}

async function getPost() {
  const resp = await fetch(API)
  const posts = await resp.json()
  renderPost(posts)
}

getPost()