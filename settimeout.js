// ---------------call stack呼叫堆疊
// 這就像放盤子的桶子，先放進去會最後出來這觀念又叫first in last out (FILO)
// 當然有也另外一種 堆疊方式叫做(FIFO)first in first out

// setTimeout 跟fetch 會經歷三階段 call stack > 如果需要load 或是等待 就會跑到WebAIP 等待時間 ，當時間到了之後再去 Queue 用(FIFO)的方式去排隊，等到stack 全部都沒東西之後由Queue 回到 Stack 去排隊，Queue還有分兩種fetch 擁有優先權會比setTimeout先做所以如果同時遇到fetch 會先到stack排隊


console.log(1);
 
setTimeout(()=>{
  console.log(2);
}, 0)

console.log(3);