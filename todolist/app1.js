// 使用target.localName他是去抓到那個物件的屬性名字，不是抓到那個type,所以我在做delete的時候就會出錯，正確要用target就好了

// parentElement >不是一個function所以不用呼叫

// function program



const taskInput = document.querySelector('#taskInput')
resetInput()
const addBtn = document.querySelector('#addBtn')
const list = document.querySelector('.todo-list')


function resetInput(){
  taskInput.value = ''
  taskInput.focus()
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
    resetInput()
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
    console.log(btn);
    btn.parentElement.remove()
    
  };
})


