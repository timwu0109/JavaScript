const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const counter = document.querySelector('#counter')
const message = document.querySelector('#message')
const max = 5
const min = 1

const textItem = (v) => {
  if(v === max){
    message.textContent = "購買數量已達上限"
  }else if (v === min){
    message.textContent = "購買數量不可低於1"
  }else{
    message.textContent = ''
  }
}

const renderItem = (v) =>{
  counter.value = v
  textItem(v)
}

plus.addEventListener('click',() =>{
  let result = +counter.value
  console.log(result);
  
  if (result < max){
    result = result + 1
    renderItem(result)
  }
})



minus.addEventListener('click',() =>{
  let result = +counter.value
  console.log(result);

  if (result > min){
    result = result - 1
    renderItem(result)
  }
})