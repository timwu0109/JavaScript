const taskInput = document.querySelector('#taskInput')
const addBtn = document.querySelector('#addBtn')
const list = document.querySelector('.todo-list')

function addTask(task){
  task = task.trim()

  if (task !== ''){
    createTaskElement(task)
    resetInput()
  }
}

function createTaskElement(task){
  const el  = ` <li class="todo-item">
  <span class="item">${task}</span>
  <button class="closeBtn">X</button>
  </li>`

  list.insertAdjacentHTML
  ('afterbegin' , el)
}

function resetInput(){
  taskInput.value = ''
  taskInput.focus()
}


addBtn.addEventListener('click' , () => {
  addTask(taskInput.value)
})

taskInput.addEventListener('keydown' , (e)=>{
  if(e.key === 'Enter'){
    addTask(taskInput.value)
  }
})

list.addEventListener('click' , (e)=>{
  if(e.target.localName === 'button'){
    const btn = e.target
    btn.parentElement.remove()
  }
  
})