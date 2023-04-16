// addEventListener(type, listener, useCapture)
// 兩個事件相疊加在一起的時候，要把它想成是立體圖一個在上面一個在下面，當我們點擊的時候會有一條Ｕ型的事件流經過，點擊下的時候會往下面探下去，然後再往上回來 下去的時候是useCapture ，向上是Bubbling 
// 當我們點擊得時候會發現下層的會先做，在做上層的是因為addEventListener第三個選項Capture 預設是false設定在Bubbling得時候再會做，所以當我們把上層 div a 把預設的false 改成true的時候就變成上層先做完再換下層了

// e.stopPropagation(); 使用stopPropagation停止傳導就可以防止事件流往下繼續傳播

// e.target << 是去抓到U型底部上來的第一個事件
// e.currentTarget << 註冊事件是誰就是抓到誰
// 上面是在討論抓到誰 capture 是在說的是觸發時間的順序


const a = document.querySelector('.a')
const b = document.querySelector('.b')

a.addEventListener('click' , (e) =>{
  console.log("A");
} )

b.addEventListener('click' , (e) =>{
  e.stopPropagation()
  console.log("B");;
})