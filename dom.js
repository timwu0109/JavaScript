// DOM > document object model
// HTML > 瀏覽器 < JS 雙方透過中間瀏覽器進行溝通，及新增刪除

//以下方式抓單一DOM元素
// const htmlDom = document.getElementById('name')
// const htmlDom = document.querySelector('#name')
// console.log(htmlDom);


// 以下兩中方式都可以一一把抓一樣的 DOM元素

// const ulDoms1 = document.getElementsByClassName('list')
// console.log(ulDoms1);

// for(let i = 0 ; i < ulDoms1.length;i++ ){
//   console.log(ulDoms1[i]);
// }

// const ulDoms = document.querySelectorAll('.list')
// console.log(ulDoms);

//如何取出第二值，當抓到一樣東西的時漏瀏覽器會把他們變成陣列，所以就可以用陣列的index去抓出來 
// console.log(ulDoms1[1]);




// ---------------------------



// 抓到DOM元素後如何改變HTML的輸出
// --- 關鍵重點就是我們實質上都沒有更改到HTML的東西 ---
// 所以只要我們再重新整理之後就會再回來，這邊的重點就是請瀏覽器幫我們演戲讓，讓使用者感覺好像不一樣但實際上沒變

// const changeDoms = document.getElementById('name')
// console.log(changeDoms);

// changeDoms.classList.add('big-red') //幫HTML type 增加屬性

// changeDoms.textContent = "我抓到DOM Value 改變你了"
// changeDoms.innerHTML = '<h1>我用innerHTML變大了</h1>'
// changeDoms.style.color = 'red'

  

// -----------
// 事件


document.addEventListener('click' , ()=>{
  const changeDoms = document.getElementById('name');
  changeDoms.classList.add('big-red') 
})