// 使用target.localName他是去抓到那個物件的屬性名字，不是抓到那個type,所以我在做delete的時候就會出錯，正確要用target就好了

// parentElement >不是一個function所以不用呼叫

// function programming 盡量不要讓function裡面去外面拿東西，盡量透過輸入值跟輸出值把同樣得東西拆到外面

// function programming 有所謂的副作用 side effect ，解釋白一點就是他們會影響function外面的變數，不管是呼叫或抓外面的值都是這樣

// pure function 是像這樣的 > function a(a,b){ return a+b} 全部都在function裡面做完，不實用但還是盡量把fn 都切成小區塊



const taskInput = document.querySelector('#taskInput')
resetInput(taskInput)
const addBtn = document.querySelector('#addBtn')
const list = document.querySelector('.todo-list')


function resetInput(reset){
  reset.value = ''
  reset.focus()
}


function createElement(task){
  const el  = `<li class="todo-item">
  <span class="item">${task}</span>
  <button class="closeBtn">X</button>
  </li>`
  list.insertAdjacentHTML('afterbegin' , el)
}

function addTask(task) {
  task = task.trim()
  
  if(task !== ''){
    createElement(task)
    resetInput(taskInput)
  }
}

addBtn.addEventListener('click' , ()=>{
  addTask(taskInput.value)
})



taskInput.addEventListener('keypress' , (e)=>{
  if(e.code === 'Enter'){
    addTask(taskInput.value)
  }
})



list.addEventListener('click' , (e)=>{
  if(e.target.localName === 'button'){
    const btn = e.target
    btn.parentElement.remove()
  };
})


