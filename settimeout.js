// ---------------call stack呼叫堆疊
// 這就像放盤子的桶子，先放進去會最後出來這觀念又叫first in last out (FILO)
// 當然有也另外一種 堆疊方式叫做(FIFO)first in first out

// setTimeout 跟fetch 會經歷三階段 call stack > 如果需要load 或是等待 就會跑到WebAIP 等待時間 ，當時間到了之後再去 Queue 用(FIFO)的方式去排隊，等到stack 全部都沒東西之後由Queue 回到 Stack 去排隊，Queue還有分兩種fetch 擁有優先權會比setTimeout先做所以如果同時遇到fetch 會先到stack排隊

// console.log(1);
 
// setTimeout(()=>{
//   console.log(2);
// }, 0)

// console.log(3);


// -----------------setTimeout倒數計時
// setTimeout 跟 setInterval 差異在
// setTimeout << 他的意思是在說一秒之後全部做完
//setInterval << 他會每一秒每一秒做，就不用再跑迴圈，但是他不會停下來


// for(let a = 60 ; a > 0 ; a--){
//   setTimeout(()=>{
//     console.log(a);
//   }, 1000); // //這邊沒有家變數所以在一秒後會直接印出全部
// };
