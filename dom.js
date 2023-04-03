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


// 抓到DOM元素後如何改變HTML的文組書出
const changeDoms = document.getElementById('name')
console.log(changeDoms);

// changeDoms.textContent = "我抓到DOM Value 改變你了"
changeDoms.innerHTML = '<h1>我用innerHTML變大了</h1>'
changeDoms.style.color = 'red'