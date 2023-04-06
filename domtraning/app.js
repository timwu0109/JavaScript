//  document.createElement 這邊做出來的只是在記憶體裡面要了一個位子，但實際上是沒辦法選染出來在畫面上,所以要用appendChild()夾到想要的元素後面－


// const hi = document.querySelector('#hi')
// const btn = document.querySelector('#btn')

// btn.addEventListener('click' , ()=>{
//   const el = document.createElement('div')
//   el.textContent = 123
//   hi.appendChild(el)
//   console.log(el);
// })





// ---------------------------------
// 練習題第二題 刪除最後一個，然後再新增元素
// 用CSS 選取器抓到最後一個li li:last-child
// appendChild 是在子層的最下面增加element

// const removeBtn = document.querySelector('#removeBtn')
// const addBtn = document.querySelector('#addBtn')
// const container = document.querySelector('ul')


// removeBtn.addEventListener('click' , ()=>{
//   const lastChild = document.querySelector('ul> li:last-child')

//   // 在這邊lastChild 如果被刪除完，就會變成null 而null = false 所以就不會做
//   // if 裡面兩種方式去看掉el ，一種事直接把自己remove，另外一種是教父層用removeChild去砍子層
//   if(lastChild){
//     container.removeChild(lastChild)
//     // lastChild.remove()
//   }
// })

// addBtn.addEventListener('click' , ()=>{
//   const el = document.createElement('li')

//   el.textContent = 456
//   container.appendChild(el)
// })




//-------------------------

// element 跟 node(結點) 差異性在於 node 會把空白，comment都顯示出來element不會，所以在邊網頁選擇上element就可以了，抓子層的時候差異就會顯示出來！

// 如何抓上層元素 
// const li = document.querySelector('li:last-child')

// console.log(li.parentElement); //取得上層element 
// console.log(li.parentNode
//   ); // 取得上層 node 
 

// // 如何抓子層元素
// const ul = document.querySelector('ul')

// console.log(ul.children); // 取得子層 element
// //HTMLCollection(3) [li, li, li]
// console.log(ul.childNodes);// 取得子層 node
// //NodeList(7) [text, li, text, li, text, li, text]


// 如何抓到兄弟姐妹元素

const li = document.querySelector('li:nth-child(2)')

// 取得前一個
console.log(li.previousElementSibling); //取得前一個el
// 印出 <li>tim</li>
console.log(li.previousSibling); // 取得前一個node結點
// 印出#text (每個type 中間都有空白，這裡text就是空白，因為空白也是結點)

// 取得下一個
console.log(li.nextElementSibling); // 印出 <li>parker</li>
console.log(li.nextSibling); // 印出#text 


