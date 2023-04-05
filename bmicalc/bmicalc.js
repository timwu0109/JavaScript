const bodyHeight = document.querySelector('#bodyHeight')
const bodyWeight = document.querySelector('#bodyWeight')
const calculate = document.querySelector('#calculate')
const resultText = document.querySelector('#resultText')
const clearFix = document.querySelector('.clearfix')
const min = 18.5
const max = 27


calculate.addEventListener('click' , ()=>{
  let w = +bodyWeight.value
  let h = +bodyHeight.value/100
  const result =+((w / (h **2)).toFixed(2))

  if( w > 0 && h > 0){
    resultText.textContent = result
  }else{
    resultText.textContent = '請輸入正確身高體重'
  }

  if(result < min){
    clearFix.textContent = '體重過輕'
  }else if (result > max){
    clearFix.textContent = '體重過重'
  }else{
    clearFix.textContent = '體重標準'
  }


})

