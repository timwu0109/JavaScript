
//  原始版本，但是要注意形態問題，任何從HTML上面抓回來的值都是string(因為HTML是存文字黨) 如果要做運算就要轉型成number 才不會出錯

// const minusItem = document.querySelector('#minus')
// const plusItem = document.querySelector('#plus')
// const counter = document.querySelector('#counter')
// const message = document.querySelector('#message')
// const maxItem = 5
// const minItem = 1


//  minusItem.addEventListener('click' , ()=>{
//     let value = +counter.value
//     console.log(value);
    
//     if(value > 1){
//       value = value - 1
//       counter.value = value
//     }

  
//     if(value < maxItem && value > minItem){
//       message.textContent = " "
//     }else if (value === 1){
//       message.textContent = "最小不能少於1"
//     } 
  
//  })

//  plusItem.addEventListener('click' , ()=>{
//   let value = +counter.value
//   console.log(value);
//   if(value < maxItem){
//     value = value + 1
//     counter.value = value
//   }

//   if(value === maxItem){
//     message.textContent = "已達購買上限"
//   }else{
//     message.textContent = " "
//   }


// })




// 精簡濃縮版本

const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const counter = document.querySelector('#counter')
const message = document.querySelector('#message')
const max = 5
let value = +counter.value

const testMaxItem = (v) => {
  if (v === max){
    message.textContent = "已達購買上限"
  }else{
    message.textContent = ""
  }
}

const renderItem = (v) => {
  counter.value = v
  testMaxItem(v)
}

minus.addEventListener('click' , ()=>{
  if (value > 1 ){
    value = value -1
  }

  renderItem(value)
})

plus.addEventListener('click' , ()=>{
  if(value < max){
    value = value + 1
  }

  renderItem(value)
})

