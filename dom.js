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

  

// ------------------------------
// 事件event
// document.addEventListener("發生的事件" ,()=>{
//   寫入要做的事情
// })


// 最原始可以讓script type 放到最上面可以配合這個事件DomContentLoaded 用這事件會等到 document被解析完之後才會觸發
// 後來出了一個更簡便的就是defer 直接加在script後面就可以了

// document.addEventListener('click' , ()=>{
//   const changeDoms = document.getElementById('name');
//   changeDoms.classList.add('big-red') 
// })








// ------------------------------
// callback function 回呼函數
// 前面不見得一定要加document 也直接用抓到的DOM元素再加上event事件
// callback function 就是監聽事件的第二個function parameter 但是callback 是什麼？
// 事實上callback 就只是個function 不代表任何行為，意義就像字面上得，簡單解釋來說的話，click event 沒點擊的時候沒事發生，當一點擊之後就會回傳function內的事情down ，就只有這樣，我之前想太多了XD

// const changeDoms = document.getElementById('name');

// changeDoms.addEventListener('click' , (x)=>{
//   console.log(123);
//   console.log(x);
// })








// ------------------------------
// 也可以在外面先宣告fn 在把fn帶進去event裡面去這樣也可以喔，但是為什麼要把fn拆出來就是為了什麼呢？想想fn是為了可以重複使用，所以當其他DOM元素要用的時後，就可以一起使用這個fn
// function 裡面的參數，當我們log出來之後是一包物件，所以當我們用e.textContent=123就變成把原本的textContent function改掉，因為上面變成是在加屬性

// const changeDoms = document.getElementById('name');

// const clickHandle = (e) => {
//   e.target.textContent = '123'
//   console.log('我把宣告的fn當成引數');  
//   console.log(e);
// }
// changeDoms.addEventListener('click' , clickHandle)



// ------------- onclick 跟 event的差異性onclick 是屬性所以重複使用，後面會蓋掉前面的，但是event 不會蓋掉所以彈性更大，以下兩種測試就知道用event會比較有彈性 ，然而onclick只是一個屬性

const onclickTest = document.querySelector('#name')

onclickTest.onclick = () => {
  console.log("onclick:"+123);
}
onclickTest.onclick = () => {
  console.log("onclick重複被改掉:"+999);
}

onclickTest.addEventListener('click' , () => {
  console.log('event:' + 546);
})
onclickTest.addEventListener('click' , () => {
  console.log('event:' + 789);
})


