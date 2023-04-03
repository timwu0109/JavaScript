// DOM > document object model
// HTML > 瀏覽器 < JS 雙方透過中間瀏覽器進行溝通，及新增刪除

//以下方式抓單一DOM元素
// const htmlDom = document.getElementById('name')
// const htmlDom = document.querySelector('#name')
// console.log(htmlDom);


// 以下兩中方式都可以一一把抓一樣的 DOM元素
const ulDoms1 = document.getElementsByClassName('list')
console.log(ulDoms1);

const ulDoms = document.querySelectorAll('.list')
console.log(ulDoms);
