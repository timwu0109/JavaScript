// 回傳值

function addValue(a,b) {
  console.log(a+b); // 只是印出parameter相加結果，並沒有回傳
  return a + b ;

}

console.log(addValue(1,2)); //回傳要是沒有給他log，就會顯示空白所以要把整個包在log裡面才能把回傳值印出來
