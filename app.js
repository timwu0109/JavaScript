const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const counter = document.querySelector('#counter')
const message = document.querySelector('#message')
const max = 5

minus.addEventListener('click' , (e)=>{
  const value = Number(counter.value)
  message.textContent = ''

  if (value > 1 ){
    counter.value = value -1
  }
})

plus.addEventListener('click' , ()=>{
  const value = Number(counter.value)

  if( value < 5){
    counter.value = value + 1
  }

  if (value === max){
    message.textContent = "已達購買上限"
  }
})

