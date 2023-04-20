// --------recursive 遞迴
// 遞迴就是在fn裡面呼叫，fn不是無窮迴圈，因為loop是永無止盡，但fn 坐到最後會造成stack over flow就會停下來
// 以下是用遞迴的方式去寫fibonacci數列


function fib(n){
  if(n === 0){
    return 0 
  }

  if (n === 1) {
    return 1
  }
  return fib(n - 1) + fib(n - 2)
}

console.log(fib(5));