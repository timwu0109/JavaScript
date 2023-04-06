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

const removeBtn = document.querySelector('#removeBtn')
const addBtn = document.querySelector('#addBtn')


removeBtn.addEventListener('click' , ()=>{
  const lastChild = document.querySelector('ul> li:last-child')
  
  if(lastChild){
    lastChild.remove()
  }
  
})

addBtn.addEventListener('click' , ()=>{
  const container = document.querySelector('ul')
  const el = document.createElement('li')
  el.textContent = 456
  container.appendChild(el)
})