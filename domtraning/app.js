//  document.createElement 這邊做出來的只是在記憶體裡面要了一個位子，但實際上是沒辦法選染出來在畫面上,所以要用appendChild()夾到想要的元素後面－


// const hi = document.querySelector('#hi')
// const btn = document.querySelector('#btn')

// btn.addEventListener('click' , ()=>{
//   const el = document.createElement('div')
//   el.textContent = 123
//   hi.appendChild(el)
//   console.log(el);
// })


// 練習題第二題 刪除最後一個，然後再新增元素
// 用CSS 選取器抓到最後一個li li:last-child
// appendChild 是在子層的最下面增加element

const removeBtn = document.querySelector('#removeBtn')
const addBtn = document.querySelector('#addBtn')
const container = document.querySelector('ul')


removeBtn.addEventListener('click' , ()=>{
  const lastChild = document.querySelector('ul> li:last-child')

  // 在這邊lastChild 如果被刪除完，就會變成null 而null = false 所以就不會做
  // if 裡面兩種方式去看掉el ，一種事直接把自己remove，另外一種是教父層用removeChild去砍子層
  if(lastChild){
    container.removeChild(lastChild)
    // lastChild.remove()
  }
  
})

addBtn.addEventListener('click' , ()=>{
  const el = document.createElement('li')

  el.textContent = 456
  container.appendChild(el)
})